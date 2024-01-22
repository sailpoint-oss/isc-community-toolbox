<script lang="ts">
	import { createOnAmountChange, createOnPageChange, createOnGo, formatDate } from '$lib/Utils.js';
	import type { ModalSettings, PaginationSettings } from '@skeletonlabs/skeleton';
	import { getModalStore, Paginator } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	export let data;

	function TriggerSourceViewModal(source: any) {
		const modal: ModalSettings = {
			type: 'component',
			component: 'codeBlockModal',
			meta: {
				code: JSON.stringify(source, null, 4),
				language: 'json'
			}
		};

		modalStore.trigger(modal);
	}

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
	<div class=" p-4 flex flex-row justify-between gap-4 flex-wrap">
		<div class="flex flex-row gap-1">
			<input
				on:keydown={onGo}
				bind:value={filters}
				class="input"
				title="Filter"
				type="text"
				placeholder="Filter"
			/>
			<input
				on:keydown={onGo}
				bind:value={sorters}
				class="input"
				title="Sorter"
				type="text"
				placeholder="Sorter"
			/>
			<button on:click={onGo} class="btn variant-filled-primary text-white"> Go </button>
		</div>
		<p class="my-auto">Total Count: {data.totalCount}</p>
		<Paginator
			bind:settings
			on:page={onPageChange}
			on:amount={onAmountChange}
			showNumerals
			maxNumerals={1}
			showFirstLastButtons={true}
			showPreviousNextButtons={true}
		/>
	</div>
	<table class="table">
		<thead>
			<th>ID</th>
			<th>Name</th>
			<th>Lifecycle State</th>
			<th>eMail</th>
			<th>Created</th>
			<th>Modified</th>
			<th />
		</thead>
		<tbody class="overflow-hidden">
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
							class="btn variant-filled-primary text-white"
							data-sveltekit-preload-data="hover"
						>
							Open
						</a>
						<button
							on:click={() => TriggerSourceViewModal(identity)}
							class="btn variant-filled-primary text-white"
						>
							View
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<div class=" p-4 flex flex-row justify-between gap-4 flex-wrap">
		<div class="flex flex-row gap-1">
			<input
				on:keydown={onGo}
				bind:value={filters}
				class="input"
				title="Filter"
				type="text"
				placeholder="Filter"
			/>
			<input
				on:keydown={onGo}
				bind:value={sorters}
				class="input"
				title="Sorter"
				type="text"
				placeholder="Sorter"
			/>
			<button on:click={onGo} class="btn variant-filled-primary text-white"> Go </button>
		</div>
		<p class="my-auto">Total Count: {data.totalCount}</p>
		<Paginator
			bind:settings
			on:page={onPageChange}
			on:amount={onAmountChange}
			showNumerals
			maxNumerals={1}
			showFirstLastButtons={true}
			showPreviousNextButtons={true}
		/>
	</div>
</div>
