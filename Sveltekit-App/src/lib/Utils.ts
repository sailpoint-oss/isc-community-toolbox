export function formatDate(date: string | null | undefined) {
	if (!date) return 'N/A';
	return new Date(date).toLocaleString();
}

export function getOffset(url: URL) {
	return url.searchParams.get('offset') || '0';
}

export function getLimit(url: URL) {
	return url.searchParams.get('limit') || '10';
}

export function getFilters(url: URL) {
	return url.searchParams.get('filters') || '';
}

export function getSorters(url: URL) {
	return url.searchParams.get('sorters') || '';
}

export function getPage(url: URL) {
	return url.searchParams.get('page') || '0';
}

export function getPaginationParams(url: URL) {
	return {
		offset: getOffset(url),
		limit: getLimit(url),
		page: getPage(url),
		filters: getFilters(url),
		sorters: getSorters(url)
	};
}
