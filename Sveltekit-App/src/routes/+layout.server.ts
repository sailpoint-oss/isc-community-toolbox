import { checkToken, getToken, type Session } from '$lib/utils/oauth';

export const load = async ({ cookies, url }) => {
	const sessionString = cookies.get('session');
	if (!sessionString) {
		return { userDetails: undefined };
	}

	if (url.pathname === '/logout' || url.pathname === '/callback') return { userDetails: undefined };

	const session: Session = JSON.parse(sessionString);
	const idnSession = await getToken(cookies);

	const userDetails = await checkToken(session.baseUrl, idnSession.access_token);

	return { userDetails };
};
