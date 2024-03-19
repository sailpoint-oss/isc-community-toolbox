export const load = async ({ locals }) => {
	if (locals.session) {
		return {session: locals.session}
	} else {
		return {session: {tenantUrl: 'https://example.com', baseUrl: 'https://example.com', tenant: 'example'}}
	}
	
};
