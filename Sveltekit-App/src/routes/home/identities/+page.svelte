<script lang="ts">
	import Paginator from '$lib/Components/Paginator.svelte';
	import {
		createOnAmountChange,
		createOnPageChange,
		createOnGo,
		formatDate,
		TriggerCodeModal
	} from '$lib/Utils.js';
	import type { ModalSettings, PaginationSettings } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	export let data;

	$: onPageChange = createOnPageChange({ ...data.params, filters, sorters }, '/home/identities');
	$: onAmountChange = createOnAmountChange(
		{ ...data.params, filters, sorters },
		'/home/identities'
	);
	$: onGo = createOnGo({ ...data.params, filters, sorters }, '/home/identities');

	let settings = {
		page: Number(data.params.page),
		limit: Number(data.params.limit),
		size: data.totalCount,
		amounts: [10, 50, 100, 250]
	} satisfies PaginationSettings;

	let filters = '';
	let sorters = '';
</script>

<div class="card flex justify-center flex-col align-middle">
	<Paginator
		{onAmountChange}
		{onGo}
		{onPageChange}
		{settings}
		{filters}
		{sorters}
		totalCount={data.totalCount}
	/>
	<div class="table-container">
		<table class="table">
			<thead class="table-head">
				<th>ID</th>
				<th>Name</th>
				<th>Lifecycle State</th>
				<th>eMail</th>
				<th>Created</th>
				<th>Modified</th>
				<th />
			</thead>
			<tbody class="table-body">
				{#each data.identities as identity}
					<tr>
						<td>
							<p class="text-center">{identity.id}</p>
						</td>
						<td>
							<p class="text-center">{identity.name}</p>
						</td>
						<td>
							<p class="text-center">{identity.lifecycleState?.stateName}</p>
						</td>
						<td>
							<p class="text-center">{identity.emailAddress}</p>
						</td>
						<td>
							<p class="text-center">{formatDate(identity.created)}</p>
						</td>
						<td>
							<p class="text-center">{formatDate(identity.modified)}</p>
						</td>
						<td class="flex flex-col justify-center gap-1">
							<a
								href={`/home/identities/${identity.id}`}
								class="btn variant-filled-primary text-sm !text-white"
								data-sveltekit-preload-data="hover"
							>
								Open
							</a>
							<button
								on:click={() => TriggerCodeModal(identity, modalStore)}
								class="btn variant-filled-primary text-sm !text-white"
							>
								View
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<Paginator
		{onAmountChange}
		{onGo}
		{onPageChange}
		{settings}
		{filters}
		{sorters}
		totalCount={data.totalCount}
	/>
</div>
