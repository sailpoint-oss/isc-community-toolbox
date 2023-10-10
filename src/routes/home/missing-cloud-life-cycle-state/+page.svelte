<script lang="ts">
	import {
		ProgressRadial,
		Table,
		tableMapperValues,
		type TableSource,
	} from '@skeletonlabs/skeleton';
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
				let accounts: string[] = [];
				for (let account of row.accounts) {
					if (account.disabled == false) {
						accounts.push(account.source.name);
					}
				}
				reportResult.push({
					name: row.displayName,
					source: accounts.join(', '),
					created: row.created,
					accessCount: row.accessCount,
					entitlementCount: row.entitlementCount,
					roleCount: row.roleCount,
				});
			}

			let res = alasql(
				'SELECT name, source, created, accessCount, entitlementCount, roleCount FROM ?',
				[reportResult],
			);

			tableSimple = {
				// A list of heading labels.
				head: [
					'Name',
					'Sources',
					'Created',
					'Access Count',
					'Entitlement Count',
					'Role Count',
				],
				// The data visibly shown in your table body UI.
				body: tableMapperValues(res, [
					'name',
					'source',
					'created',
					'accessCount',
					'entitlementCount',
					'roleCount',
				]),
				// Optional: The data returned when interactive is enabled and a row is clicked.
				meta: tableMapperValues(res, [
					'name',
					'source',
					'created',
					'accessCount',
					'entitlementCount',
					'roleCount',
				]),
			};
		}
	});

	function onTableclick(event: any) {
		console.log(event);
	}
</script>

<main>
	<div class="p-4">
		<div class="flex justify-center mt-4 flex-col align-middle">
			<div class="text-2xl py-2 text-center">
				Listing of identities that are missing the cloud life cycle state attribute
			</div>
			{#if tableSimple}
				<Table
					class="w-full"
					source={tableSimple}
					interactive={true}
					on:selected={onTableclick}
				/>
			{:else}
				<div class="progress-bar">
					<ProgressRadial
						stroke={100}
						meter="stroke-primary-500"
						track="stroke-primary-500/30"
						class="progress-bar"
					/>
				</div>
			{/if}
		</div>
	</div>
</main>

<style>
	.progress-bar {
		padding-top: calc(50vh - 4.5rem - 200px);
		padding-left: calc(50% - 4.5rem);
	}
</style>
