import type { Search } from 'sailpoint-api-client';

export const load = async ({ fetch }) => {
	const search: Search = {
		indices: ['identities'],
		query: {
			query: `NOT _exists_:attributes.cloudLifecycleState`,
		},
		sort: ['name'],
	};

	const response = fetch('/api/sailpoint/search', {
		method: 'POST',
		body: JSON.stringify(search),
		headers: {
			'content-type': 'application/json',
		},
	});

	return { response };
};
