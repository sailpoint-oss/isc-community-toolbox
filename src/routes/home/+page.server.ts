import { getSession, checkSession } from '$lib/utils/oauth';
export const load = async ({ cookies }) => {
	if (!checkSession(cookies)) return { baseUrl: '', tenantUrl: '' };
	const session = getSession(cookies);
	return { session };
};
