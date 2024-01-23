import { checkToken, getToken } from '$lib/utils/oauth';

export const load = async ({ cookies }) => {
	const session: { baseUrl: string; tenantUrl: string } = JSON.parse(cookies.get('session')!);
	const idnSession = await getToken(cookies);

	const userDetails = await checkToken(session.baseUrl, idnSession.access_token);

	return { userDetails };
};
