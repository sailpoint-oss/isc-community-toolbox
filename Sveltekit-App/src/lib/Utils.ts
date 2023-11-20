export function formatDate(date: string | null | undefined) {
	if (!date) return 'N/A';
	return new Date(date).toLocaleString();
}
