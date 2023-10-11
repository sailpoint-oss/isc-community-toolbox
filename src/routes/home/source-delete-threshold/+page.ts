export const load = async ({ fetch }) => {
	const response = fetch('/api/sailpoint/sources', {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
		},
	});

	return { response };
};
