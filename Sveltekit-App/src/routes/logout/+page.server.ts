export const load = async ({ cookies }) => {
	cookies.delete('session');
	cookies.delete('idnSession');

	return { sessionLoggedOut: true };
};
