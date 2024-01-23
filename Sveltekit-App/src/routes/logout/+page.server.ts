export const load = async ({ cookies }) => {
	/* @migration task: add path argument */ cookies.delete('session');
	/* @migration task: add path argument */ cookies.delete('idnSession');

	return { sessionLoggedOut: true };
};
