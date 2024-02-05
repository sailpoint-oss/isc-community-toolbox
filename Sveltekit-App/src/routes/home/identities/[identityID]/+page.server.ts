import { createConfiguration } from '$lib/sailpoint/sdk';
import {
	IdentitiesBetaApi,
	SearchApi,
	type EventDocument,
	type IdentityBeta,
	type Search
} from 'sailpoint-api-client';

export const load = async ({ locals, params }) => {


	const config = createConfiguration(locals.session.baseUrl, locals.idnSession.access_token);
	const identityApi = new IdentitiesBetaApi(config);
	const searchApi = new SearchApi(config);

	const identityResp = identityApi.getIdentity({ id: params.identityID });

	const identityData = new Promise<IdentityBeta>((resolve) => {
		identityResp
			.then((response) => {
				resolve(response.data);
			})
			.catch((err) => {
				throw err;
			});
	});

	const identityEvents = new Promise<EventDocument[]>((resolve) => {
		identityResp.then((response) => {
			const identity = response.data;
			const search: Search = {
				indices: ['events'],
				query: {
					query: `target.name: "${identity.name}"`
				},
				sort: ['created']
			};

			searchApi
				.searchPost({
					search
				})
				.then((response) => {
					resolve(response.data);
				})
				.catch((err) => {
					throw err;
				});
		});
	});

	return { identityData, identityEvents };
};
