import { getFilters, getLimit, getSorters, getPage } from '$lib/Utils.js';
import { createConfiguration } from '$lib/sailpoint/sdk.js';
import { getToken } from '$lib/utils/oauth.js';
import { SourcesApi, type SourcesApiListSourcesRequest } from 'sailpoint-api-client';

export const load = async ({ cookies, url }) => {
	const session = JSON.parse(cookies.get('session')!);
	const idnSession = await getToken(cookies);

	const config = createConfiguration(session.baseUrl, idnSession.access_token);
	const api = new SourcesApi(config);

	const page = getPage(url);
	const filters = getFilters(url);
	const limit = getLimit(url);
	const sorters = getSorters(url);

	const requestParams: SourcesApiListSourcesRequest = {
		filters,
		offset: Number(page) * Number(limit),
		limit: Number(limit),
		sorters,
		count: true
	};

	const apiResponse = await api.listSources(requestParams);

	return {
		totalCount: apiResponse.headers['x-total-count'],
		sources: apiResponse.data,
		params: { page, limit, filters, sorters }
	};
};
