<script lang="ts">
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';

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
</script>

<div class="p-4">
	<div class="flex justify-center flex-col align-middle">
		<table class="table">
			<thead>
				<th>ID</th>
				<th>Name</th>
				<th>Description</th>
				<th>Type</th>
				<th>Authoritative</th>
				<th>Healthy</th>
				<th />
			</thead>
			<tbody>
				{#each data.sources as source}
					<tr>
						<td>
							<p class="text-center">{source.id}</p>
						</td>
						<td>
							<p class="text-center">{source.name}</p>
						</td>
						<td>
							<p class="text-center">{source.description}</p>
						</td>
						<td>
							<p class="text-center">{source.type}</p>
						</td>
						<td>
							<p class="text-center">{source.authoritative ? 'True' : 'False'}</p>
						</td>
						<td>
							<p class="text-center font-bold {source.healthy ? 'text-green-500' : 'text-red-500'}">
								{source.healthy ? 'True' : 'False'}
							</p>
						</td>
						<td class="flex flex-col justify-center gap-1">
							<a
								href={`/home/sources/${source.id}`}
								class="btn variant-filled-primary text-white"
								data-sveltekit-preload-data="hover"
							>
								Open
							</a>
							<button
								on:click={() => TriggerSourceViewModal(source)}
								class="btn variant-filled-primary text-white"
							>
								View
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
