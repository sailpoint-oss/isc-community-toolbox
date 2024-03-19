import { createConfiguration } from '$lib/sailpoint/sdk';
import { getSession, getToken } from '$lib/utils/oauth';
import { Paginator, SearchApi, type Search, type EventDocument } from 'sailpoint-api-client';

export const load = async ({ locals }) => {

	const config = createConfiguration(locals.session!.baseUrl, locals.idnSession!.access_token);
	const api = new SearchApi(config);
	const search: Search = {
		indices: ['events'],
		query: {
			query: `name: "Create Account Failed" AND created: [now-90d TO now]`
		},
		sort: ['created']
	};

	const searchResp = Paginator.paginateSearchApi(api, search, 100, 20000);

	const errorEvents = new Promise<EventDocument[]>((resolve) => {
		searchResp.then((response) => {
			resolve(response.data);
		});
	});

	return { errorEvents };
};
