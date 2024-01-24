import { checkSession, checkToken, getSession, getToken } from '$lib/utils/oauth';

export const load = async ({ cookies, url }) => {
	if (!checkSession(cookies)) {
		return { userDetails: undefined };
	}

	const session = await getSession(cookies);

	if (url.pathname === '/logout' || url.pathname === '/callback') return { userDetails: undefined };

	const idnSession = await getToken(cookies);

	const userDetails = await checkToken(session.baseUrl, idnSession.access_token);

	return { userDetails };
};
