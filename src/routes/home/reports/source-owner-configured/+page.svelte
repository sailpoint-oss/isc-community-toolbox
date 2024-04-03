<script lang="ts">
	import Progress from '$lib/Components/Progress.svelte';
	import { TriggerCodeModal, formatDate } from '$lib/Utils';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	export let data;
	console.log(data);

	const modalStore = getModalStore();

	let reportPromise = new Promise<
		{ name: string; type: string; modified: string; created: string; owner: string; id: string }[][]
	>((resolve, reject) => {
		data.sources.then((data) => {
			let reportResult = {};

			for (let row of data) {
				if (row.owner.id in reportResult) {
					reportResult[row.owner.id].push({
						id: row.id,
						name: row.name,
						type: row.type,
						modified: row.modified,
						created: row.created,
						owner: row.owner
					});
				} else {
					reportResult[row.owner.id] = [
						{
							id: row.id,
							name: row.name,
							type: row.type,
							modified: row.modified,
							created: row.created,
							owner: row.owner.name
						}
					];
				}
			}

			resolve(Object.values(reportResult));
		});
	});
</script>

<div class="flex justify-center flex-col align-middle gap-2">
	<div class="card p-4">
		<p class="text-2xl text-center">Listing of sources and their configured owners</p>
	</div>
	{#await reportPromise}
		<div class="grid h-full place-content-center p-8">
			<Progress width="w-[100px]" />
		</div>
	{:then report}
		<div class="table-container card p-4">
			{#each report as sources}
				<Accordion>
					<AccordionItem>
						<svelte:fragment slot="summary">{sources[0].owner}</svelte:fragment>
						<svelte:fragment slot="content">
							<table class="table">
								<thead class="table-head">
									<th> Source Name </th>
									<th> Type </th>
									<th> Modified </th>
									<th> Created </th>
									<th> Owner </th>
									<th />
								</thead>
								<tbody>
									{#each sources as source}
										<tr>
											<td>{source.name}</td>
											<td>{source.type}</td>
											<td>{formatDate(source.modified)}</td>
											<td>{formatDate(source.created)}</td>
											<td class="flex flex-col justify-center gap-1">
												<a
													href={`/home/sources/${source.id}`}
													class="btn variant-filled-primary text-sm !text-white"
													data-sveltekit-preload-data="hover"
												>
													Open Source
												</a>
												<button
													on:click={() => TriggerCodeModal(source, modalStore)}
													class="btn variant-filled-primary text-sm !text-white"
												>
													View
												</button>
											</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			{/each}
		</div>
	{/await}
</div>
