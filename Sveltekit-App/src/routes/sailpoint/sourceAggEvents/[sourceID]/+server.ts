import type { Data, FetchResponse, SourceEvents } from '$lib/Types.js';
import { json } from '@sveltejs/kit';
import type { EventDocument, Search, SearchDocument } from 'sailpoint-api-client';

export const GET = async ({ fetch, params }) => {
	const source = await (await fetch(`/api/sailpoint/source/${params.sourceID}`)).json();

	const eventNames: string[] = [
		'Aggregate Source Account Passed',
		'Aggregate Source Account Started',
		'Aggregate Source Entitlement Passed',
		'Aggregate Source Entitlement Started',
	];

	const promises = [];
	const allEvents: EventDocument[] = [];

	for (const event of eventNames) {
		const search: Search = {
			indices: ['events'],
			query: {
				query: `target.name: "${source.name}" AND name:"${event}"`,
			},
			sort: ['created'],
		};

		promises.push(
			fetch('/api/sailpoint/search/1', {
				method: 'POST',
				body: JSON.stringify(search),
			})
				.then((response: FetchResponse<SearchDocument>) => response.json())
				.then((data: Data<SearchDocument>) => {
					return data;
				}),
		);
	}

	await Promise.allSettled(promises).then((results) => {
		for (const event of results) {
			if (event.status == 'fulfilled' && event.value.length > 0) {
				allEvents.push(event.value[0]);
			}
		}
	});

	const sourceEvents: SourceEvents = {
		name: source.name,
		accounts: { started: undefined, passed: undefined },
		entitlements: { started: undefined, passed: undefined },
	};

	for (const event of allEvents) {
		if (event.attributes!.sourceName === source.name) {
			switch (event.technicalName) {
				case 'SOURCE_ACCOUNT_AGGREGATE_STARTED':
					if (!sourceEvents.accounts.started) {
						sourceEvents.accounts.started = event || undefined;
					}
					break;
				case 'SOURCE_ACCOUNT_AGGREGATE_PASSED':
					if (!sourceEvents.accounts.passed) {
						sourceEvents.accounts.passed = event || undefined;
					}
					break;
				case 'SOURCE_ENTITLEMENT_AGGREGATE_STARTED':
					if (!sourceEvents.entitlements.started) {
						sourceEvents.entitlements.started = event || undefined;
					}
					break;
				case 'SOURCE_ENTITLEMENT_AGGREGATE_PASSED':
					if (!sourceEvents.entitlements.passed) {
						sourceEvents.entitlements.passed = event || undefined;
					}
					break;

				default:
					break;
			}
		}
	}

	return json({ source, sourceEvents });
};
