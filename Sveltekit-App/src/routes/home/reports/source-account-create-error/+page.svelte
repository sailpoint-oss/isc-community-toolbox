<script lang="ts">
	import Progress from '$lib/Components/Progress.svelte';
	import { TriggerCodeModal } from '$lib/Utils';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { Table, getModalStore, tableMapperValues } from '@skeletonlabs/skeleton';
	import alasql from 'alasql';
	import type { EventDocument, Search } from 'sailpoint-api-client';
	import { onMount } from 'svelte';

	const modalStore = getModalStore();

	export let data;

	let report: any;

	let reportPromise = new Promise<
		{ failure: string; source: string; name: string; failures: number }[]
	>((resolve, reject) => {
		data.errorEvents.then((data) => {
			let reportResult = [];

			for (let row of data) {
				reportResult.push({
					name: row.target?.name,
					source: row.attributes?.sourceName,
					failure: row.name
				});
			}

			let res = alasql(
				'SELECT failure, source, name, count(*) as failures FROM ? GROUP BY failure, source, name',
				[reportResult]
			);

			console.log(res);

			resolve(res);
		});
	});
</script>

<div class=" flex justify-center flex-col align-middle gap-2">
	<div class="card p-4">
		<p class="text-2xl text-center">Listing of Source Account Create Errors</p>
	</div>
	{#await reportPromise}
		<div class="grid h-full place-content-center p-8">
			<Progress width="w-[100px]" />
		</div>
	{:then report}
		{#if report.length === 0}
			<div class="card p-4">
				<p class="text-md text-center text-success-500">
					No Source Account Create Errors for the last 90 Days
				</p>
			</div>
		{:else}
			<div class="table-container">
				<table class="table">
					<thead class="table-head">
						<th>Source</th>
						<th>Failure</th>
						<th>Name</th>
						<th>Count</th>
					</thead>
					<tbody>
						{#each report as row}
							<tr>
								<td>{row.source}</td>
								<td>{row.failure}</td>
								<td>{row.name}</td>
								<td>{row.failures}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	{/await}
</div>
