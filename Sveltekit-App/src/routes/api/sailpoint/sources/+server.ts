import { HandleError } from '$lib/Errors.js';
import { createConfiguration } from '$lib/sailpoint/sdk';
import { getToken } from '$lib/utils/oauth';
import { json } from '@sveltejs/kit';
import { Paginator, SourcesApi } from 'sailpoint-api-client';

/** @type {import('./$types').RequestHandler} */
export async function GET({ cookies }) {
	try {
		const session = JSON.parse(cookies.get('session')!);
		const idnSession = await getToken(cookies);

		const config = createConfiguration(session.baseUrl, idnSession.access_token);
		let api = new SourcesApi(config);
		const val = (await Paginator.paginate(api, api.listSources, { limit: 100 }, 10)).data;
		//console.log(val)
		return json(val);
	} catch (err) {
		HandleError('issue arose during SDK source query', err);
	}
}
