import { getFilters, getLimit, getSorters, getPage } from '$lib/Utils.js';
import { createConfiguration } from '$lib/sailpoint/sdk.js';
import { getToken } from '$lib/utils/oauth.js';
import { error } from '@sveltejs/kit';
import {
	IdentitiesBetaApi,
	type IdentitiesBetaApiListIdentitiesRequest
} from 'sailpoint-api-client';

export const load = async ({ cookies, url }) => {
	const session = JSON.parse(cookies.get('session')!);
	const idnSession = await getToken(cookies);

	const config = createConfiguration(session.baseUrl, idnSession.access_token);
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

	try {
		const apiResponse = await api.listIdentities(requestParams);

		return {
			totalCount: apiResponse.headers['x-total-count'],
			identities: apiResponse.data,
			params: { page, limit, filters, sorters }
		};
	} catch (err) {
		error(500, {
        			message:
        				'an error occurred while fetching identities. Please examine your filters and and sorters and try again.',
        			context: { params: { page, limit, filters, sorters } },
        			urls: [
        				'https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results'
        			],
        			// @ts-expect-error Error is only thrown from the API client
        			errData: err.response.data
        		});
	}
};
