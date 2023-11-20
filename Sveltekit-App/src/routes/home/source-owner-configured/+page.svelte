<script lang="ts">
	import Progress from '$lib/Components/Progress.svelte';
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	import alasql from 'alasql';
	import { onMount } from 'svelte';

	export let data;
	console.log(data);

	let results;
	let tableSimple: TableSource | undefined = undefined;

	onMount(async () => {
		results = await data.response.json();
		console.log(results);

		if (JSON.stringify(data) !== '{}') {
			let reportResult = [];

			for (let row of <any>results) {
				reportResult.push({
					name: row.name,
					modified: row.modified,
					ownerName: row.owner.name,
					ownerId: row.owner.id,
				});
			}

			let res = alasql('SELECT name, modified, ownerName, ownerId FROM ?', [reportResult]);

			tableSimple = {
				// A list of heading labels.
				head: ['Name', 'Modified', 'Owner Name', 'Owner Id'],
				// The data visibly shown in your table body UI.
				body: tableMapperValues(res, ['name', 'modified', 'ownerName', 'ownerId']),
				// Optional: The data returned when interactive is enabled and a row is clicked.
				meta: tableMapperValues(res, ['name', 'modified', 'ownerName', 'ownerId']),
			};
		}
	});

	function onTableclick(event: any) {
		console.log(event);
	}
</script>

<div class="p-4">
	<div class="flex justify-center mt-4 flex-col align-middle">
		<div class="text-2xl py-2 text-center">Listing of sources and their delete threshold</div>
		{#if tableSimple}
			<Table
				class="w-full"
				source={tableSimple}
				interactive={true}
				on:selected={onTableclick}
			/>
		{:else}
			<Progress />
		{/if}
	</div>
</div>
