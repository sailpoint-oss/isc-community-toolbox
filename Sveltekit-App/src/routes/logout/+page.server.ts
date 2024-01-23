export const load = async ({ cookies }) => {
	cookies.delete('session', {
		path: '/'
	});

	cookies.delete('idnSession', {
		path: '/'
	});

	return { sessionLoggedOut: true };
};
