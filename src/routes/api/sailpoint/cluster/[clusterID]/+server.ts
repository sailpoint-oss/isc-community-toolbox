import { createConfiguration } from '$lib/sailpoint/sdk';
import { getToken } from '$lib/utils/oauth';
import { json } from '@sveltejs/kit';
import { ManagedClustersBetaApi } from 'sailpoint-api-client';

/** @type {import('./$types').RequestHandler} */
export async function GET({ locals, params }) {
	// Generic SDK setup

	const config = createConfiguration(locals.session!.baseUrl, locals.idnSession!.access_token);

	// Route specific SDK call
	const api = new ManagedClustersBetaApi(config);

	const val = await api.getManagedCluster({ id: params.clusterID });
	// console.log(val);
	return json(val.data);
}
