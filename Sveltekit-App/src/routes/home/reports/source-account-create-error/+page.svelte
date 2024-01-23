<script lang="ts">
	import Progress from '$lib/Components/Progress.svelte';
	import { TriggerCodeModal } from '$lib/Utils';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { Table, getModalStore, tableMapperValues } from '@skeletonlabs/skeleton';
	import alasql from 'alasql';
	import type { EventDocument, Search } from 'sailpoint-api-client';
	import { onMount } from 'svelte';

	const modalStore = getModalStore();

	//export let data;
	let tableSimple: TableSource | undefined = undefined;
	let rawData: any;
	onMount(async () => {
		const search: Search = {
			indices: ['events'],
			query: {
				query: `name: "Create Account Failed" AND created: [now-90d TO now]`
			},
			sort: ['created']
		};

		const response = await fetch('/api/sailpoint/search', {
			method: 'POST',
			body: JSON.stringify(search),
			headers: {
				'content-type': 'application/json'
			}
		});

		rawData = await response.json();

		if (JSON.stringify(rawData) !== '{}') {
			let reportResult = [];

			for (let row of <any>rawData) {
				reportResult.push({
					name: row.target.name,
					source: row.attributes.sourceName,
					failure: row.name
				});
			}

			let res = alasql(
				'SELECT failure, source, name, count(*) as failures FROM ? GROUP BY failure, source, name',
				[reportResult]
			);
			console.log(res);
			tableSimple = {
				// A list of heading labels.
				head: ['Name', 'Source', 'Failure', 'Number Failures'],
				// The data visibly shown in your table body UI.
				body: tableMapperValues(res, ['name', 'source', 'failure', 'failures']),
				// Optional: The data returned when interactive is enabled and a row is clicked.
				meta: tableMapperValues(res, ['name', 'source', 'failure', 'failures'])
			};
		}
	});

	function onTableclick(event: any) {
		TriggerCodeModal(
			rawData.filter(
				(row: EventDocument) =>
					row.target?.name == event.detail[0] &&
					row.attributes?.sourceName == event.detail[1] &&
					row.name == event.detail[2]
			)[0],
			modalStore
		);
	}
</script>

<div class="p-4">
	<div class="flex justify-center mt-4 flex-col align-middle">
		<div class="text-2xl text-center py-2">Listing of Source Account Create Errors</div>
		{#if tableSimple}
			<Table class="w-full" source={tableSimple} interactive={true} on:selected={onTableclick} />
		{:else}
			<Progress />
		{/if}
	</div>
</div>
