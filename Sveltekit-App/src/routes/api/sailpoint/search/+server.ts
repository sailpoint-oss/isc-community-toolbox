import { HandleError } from '$lib/Errors.js';
import { createConfiguration } from '$lib/sailpoint/sdk';
import { getToken } from '$lib/utils/oauth';
import { json } from '@sveltejs/kit';
import { Paginator, SearchApi, type Search } from 'sailpoint-api-client';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, cookies }) {
	try {
		const session = JSON.parse(cookies.get('session')!);
		const idnSession = await getToken(cookies);
		const searchJson = await request.json();

		const config = createConfiguration(session.baseUrl, idnSession.access_token);
		const api = new SearchApi(config);
		const search: Search = searchJson;
		const val = (await Paginator.paginateSearchApi(api, search, 100, 20000)).data;
		//console.log(val)
		return json(val);
	} catch (err) {
		HandleError('issue arose during SDK search query', err);
	}
}
