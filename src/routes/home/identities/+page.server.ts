import { getFilters, getLimit, getPage, getSorters } from '$lib/Utils.js';
import { createConfiguration } from '$lib/sailpoint/sdk.js';
import { getSession, getToken } from '$lib/utils/oauth.js';
import { error } from '@sveltejs/kit';
import {
	IdentitiesBetaApi,
	type IdentitiesBetaApiListIdentitiesRequest,
	type IdentityBeta
} from 'sailpoint-api-client';

export const load = async ({ locals, url }) => {

	try {

		const config = createConfiguration(locals.session!.baseUrl, locals.idnSession!.access_token)
		const api = new IdentitiesBetaApi(config);

		const page = getPage(url);
		const filters = getFilters(url);
		const limit = getLimit(url);
		const sorters = getSorters(url);

		const requestParams: IdentitiesBetaApiListIdentitiesRequest = {
			filters,
			offset: Number(page) * Number(limit),
			limit: Number(limit),
			sorters,
			count: true
		};

		const apiResponse = await api.listIdentities(requestParams);
		const totalCount = apiResponse.headers['x-total-count'];
		const identities: IdentityBeta[] = apiResponse.data;


		return {
			totalCount,
			identities,
			params: { page, limit, filters, sorters }
		};
	} catch (error) {
		return {
			status: 500,
			error: error
		}
	}

};
