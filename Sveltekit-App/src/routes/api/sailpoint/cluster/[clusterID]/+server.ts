import { createConfiguration } from '$lib/sailpoint/sdk';
import { getToken } from '$lib/utils/oauth';
import { json } from '@sveltejs/kit';
import { ManagedClustersBetaApi } from 'sailpoint-api-client';

/** @type {import('./$types').RequestHandler} */
export async function GET({ locals, params }) {
	
	const config = createConfiguration(locals.session.baseUrl, locals.idnSession.access_token);
	
	const api = new ManagedClustersBetaApi(config);

	const val = await api.getManagedCluster({ id: params.clusterID });
	
	return json(val.data);
}
