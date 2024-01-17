export const load = async ({ fetch, params }) => {
	const identityData = (await fetch(`/api/sailpoint/identity/${params.identityID}`)).json();

	return { identityData };
};
