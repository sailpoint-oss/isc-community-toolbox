import type { SourceEvents } from '$lib/Types.js';
import type { Source } from 'sailpoint-api-client';

export const load = async ({ fetch }) => {
	const aggData: { sources: Source[]; events: SourceEvents[] } = (
		await fetch('/api/sailpoint/sourceAggEvents')
	).json();

	return { aggData };
};
