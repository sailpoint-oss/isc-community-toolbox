import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { generateAuthLink } from '$lib/utils/oauth';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const baseUrl = data.get('baseUrl');
		const tenant = data.get('tenant');
		const tenantUrl = data.get('tenantUrl');

		if (!baseUrl || !tenantUrl) {
			redirect(302, '/login');
		}

		const sessionString = cookies.get('idnSession');

		if (sessionString) {
			// console.log('sessionString', sessionString);

			const session = JSON.parse(sessionString);
			if (session.org == tenant) {
				// console.debug('Credential Cache Hit');
				redirect(302, '/home');
			} else {
				// console.debug('Credential Cache Miss');
			}
		}

		/* @migration task: add path argument */ cookies.set('session', JSON.stringify({ baseUrl, tenantUrl }));
		redirect(302, generateAuthLink(tenantUrl.toString()));
	}
} satisfies Actions;
