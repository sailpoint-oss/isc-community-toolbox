<script lang="ts">
	import { TriggerCodeModal } from '$lib/Utils.js';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { ProgressRadial, Table, getModalStore, tableMapperValues } from '@skeletonlabs/skeleton';
	import alasql from 'alasql';
	import type { IdentityDocument } from 'sailpoint-api-client';
	import { onMount } from 'svelte';

	export let data;

	//export let data;
	let tableSimple: TableSource | undefined = undefined;

	onMount(async () => {
		if (JSON.stringify(data.reportData) !== '{}') {
			let reportResult = [];

			console.log(data.reportData);

			for (const row of data.reportData as IdentityDocument[]) {
				let accounts: string[] = [];

				if (row.accounts) {
					for (let account of row.accounts) {
						if (account.disabled == false) {
							if (account.source && account.source.name) accounts.push(account.source.name);
						}
					}
				}

				reportResult.push({
					id: row.id,
					name: row.displayName,
					source: accounts.join(', '),
					accessCount: row.accessCount,
					entitlementCount: row.entitlementCount,
					roleCount: row.roleCount,
					fullObject: row
				});
			}

			let res = alasql(
				'SELECT id, name, source, accessCount, entitlementCount, roleCount, fullObject FROM ?',
				[reportResult]
			);
			tableSimple = {
				// A list of heading labels.
				head: ['ID', 'Name', 'Sources', 'Access Count', 'Entitlement Count', 'Role Count'],
				// The data visibly shown in your table body UI.
				body: tableMapperValues(res, [
					'id',
					'name',
					'source',
					'accessCount',
					'entitlementCount',
					'roleCount'
				]),
				// Optional: The data returned when interactive is enabled and a row is clicked.
				meta: tableMapperValues(res, [
					'id',
					'name',
					'source',
					'accessCount',
					'entitlementCount',
					'roleCount',
					'fullObject'
				])
			};
		}
	});

	const modalStore = getModalStore();

	function onTableclick(event: any) {
		console.log(event);
		TriggerCodeModal(event.detail[7], modalStore);
	}
</script>

<div class="flex justify-center flex-col align-middle">
	<div class="card text-2xl p-2 mb-2 text-center">
		<p>List of all identities that are inactive but still have access in sources</p>
		<p class="text-sm my-2">Total Count: {data.reportData.length}</p>
	</div>
	{#if tableSimple}
		<Table class="w-full" source={tableSimple} interactive={true} on:selected={onTableclick} />
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
