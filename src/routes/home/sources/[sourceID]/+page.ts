import type { SourceEvents } from '$lib/Types.js';
import type { Source } from 'sailpoint-api-client';

export const load = async ({ fetch, params }) => {
	const sourceData: { source: Source; sourceEvents: SourceEvents } = (
		await fetch(`/api/sailpoint/sourceAggEvents/${params.sourceID}`)
	).json();

	return { sourceData };
};
