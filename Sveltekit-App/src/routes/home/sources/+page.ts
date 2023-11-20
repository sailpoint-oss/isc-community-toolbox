import type { Source } from 'sailpoint-api-client';

export const load = async ({ fetch }) => {
	const sources: Promise<Source[]> = (await fetch('/api/sailpoint/sources')).json();
	return { sources };
};
