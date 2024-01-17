export const load = async ({ cookies }) => {
	cookies.delete('session');

	return { sessionLoggedOut: true };
};
