import { HandleError } from '$lib/Errors.js';
import { createConfiguration } from '$lib/sailpoint/sdk';
import { getToken } from '$lib/utils/oauth';
import { json } from '@sveltejs/kit';
import { IdentitiesBetaApi } from 'sailpoint-api-client';

/** @type {import('./$types').RequestHandler} */
export async function GET({ cookies, params }) {
	try {
		const session = JSON.parse(cookies.get('session')!);
		const idnSession = await getToken(cookies);

		const config = createConfiguration(session.baseUrl, idnSession.access_token);
		const api = new IdentitiesBetaApi(config);

		const val = await api.getIdentity({ id: params.identityID });
		// console.log(val);
		return json(val.data);
	} catch (err) {
		HandleError('issue arose during SDK source query', err);
	}
}
