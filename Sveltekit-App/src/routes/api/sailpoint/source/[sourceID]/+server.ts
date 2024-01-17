import { HandleError } from '$lib/Errors.js';
import { createConfiguration } from '$lib/sailpoint/sdk';
import { getToken } from '$lib/utils/oauth';
import { json } from '@sveltejs/kit';
import { SourcesApi } from 'sailpoint-api-client';

/** @type {import('./$types').RequestHandler} */
export async function GET({ cookies, params }) {
	try {
		const session = JSON.parse(cookies.get('session')!);
		const idnSession = await getToken(cookies);

		const config = createConfiguration(session.baseUrl, idnSession.access_token);
		const api = new SourcesApi(config);

		const val = await api.getSource({ id: params.sourceID });
		// console.log(val);
		return json(val.data);
	} catch (err) {
		HandleError('issue arose during SDK source query', err);
	}
}
