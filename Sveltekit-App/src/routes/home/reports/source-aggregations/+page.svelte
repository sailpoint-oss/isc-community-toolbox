<script lang="ts">
	import Progress from '$lib/Components/Progress.svelte';
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	export let data;
	console.log(data);

	let tableSimple: TableSource | undefined = undefined;

	const aggregations = data.aggData.events.map((event) => {
		return {
			sourceName: event.name,
			accountStart: event.accounts.started?.created,
			accountPass: event.accounts.passed?.created,
			entitlementStart: event.entitlements.started?.created,
			entitlementPass: event.entitlements.passed?.created
		};
	});

	onMount(() => {
		tableSimple = {
			// A list of heading labels.
			head: [
				'Name',
				'Account Aggregation Started',
				'Account Aggregation Passed',
				'Entitlement Aggregation Started',
				'Entitlement Aggregation Passed'
			],
			// The data visibly shown in your table body UI.
			body: tableMapperValues(aggregations, [
				'sourceName',
				'accountStart',
				'accountPass',
				'entitlementStart',
				'entitlementPass'
			]),
			// Optional: The data returned when interactive is enabled and a row is clicked.
			meta: tableMapperValues(aggregations, [
				'sourceName',
				'accountStart',
				'accountPass',
				'entitlementStart',
				'entitlementPass'
			])
		};
	});

	function onTableclick(event: any) {
		console.log(event);
	}
</script>

<div class="p-4">
	<div class="flex justify-center mt-4 flex-col align-middle">
		<div class="text-2xl py-2 text-center">
			Listing of sources and their most recent aggregation events
		</div>
		{#if tableSimple}
			<Table class="w-full" source={tableSimple} interactive={true} on:selected={onTableclick} />
		{:else}
			<div class="grid h-full place-content-center p-8">
				<Progress width="w-[100px]" />
			</div>
		{/if}
	</div>
</div>
