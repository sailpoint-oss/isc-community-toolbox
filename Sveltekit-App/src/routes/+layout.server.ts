export const load = async ({ url, locals }) => {
	if (!locals.session || !locals.idnSession || url.pathname === '/logout') {
		return { tokenDetails: undefined };
	}

	return { tokenDetails: locals.tokenDetails };
};
