<script lang="ts">
	import Progress from '$lib/Components/Progress.svelte';
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	import alasql from 'alasql';
	import type { IdentityDocument } from 'sailpoint-api-client';
	import { onMount } from 'svelte';

	export let data;
	console.log(data);

	let results;
	let tableSimple: TableSource | undefined = undefined;

	onMount(async () => {
		if (JSON.stringify(data.reportData) !== '{}') {
			let reportResult = [];

			for (let row of data.reportData as IdentityDocument[]) {
				let accounts: string[] = [];
				if (row.accounts)
					for (let account of row.accounts) {
						if (account.disabled == false) {
							if (account.source && account.source.name) accounts.push(account.source.name);
						}
					}
				reportResult.push({
					name: row.displayName,
					source: accounts.join(', '),
					created: row.created,
					accessCount: row.accessCount,
					entitlementCount: row.entitlementCount,
					roleCount: row.roleCount
				});
			}

			let res = alasql(
				'SELECT name, source, created, accessCount, entitlementCount, roleCount FROM ?',
				[reportResult]
			);

			tableSimple = {
				// A list of heading labels.
				head: ['Name', 'Sources', 'Created', 'Access Count', 'Entitlement Count', 'Role Count'],
				// The data visibly shown in your table body UI.
				body: tableMapperValues(res, [
					'name',
					'source',
					'created',
					'accessCount',
					'entitlementCount',
					'roleCount'
				]),
				// Optional: The data returned when interactive is enabled and a row is clicked.
				meta: tableMapperValues(res, [
					'name',
					'source',
					'created',
					'accessCount',
					'entitlementCount',
					'roleCount'
				])
			};
		}
	});

	function onTableclick(event: any) {
		console.log(event);
	}
</script>

<div class="flex justify-center flex-col align-middle">
	<div class="card text-2xl p-2 mb-2 text-center">
		Listing of identities that are missing the cloud life cycle state attribute
	</div>
	{#if tableSimple}
		<Table class="w-full" source={tableSimple} interactive={true} on:selected={onTableclick} />
	{:else}
		<Progress />
	{/if}
</div>
