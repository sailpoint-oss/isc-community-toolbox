<script lang="ts">
	import VaCluster from '$lib/Components/VACluster.svelte';
	import { formatDate } from '$lib/Utils.js';
	import { Accordion, AccordionItem, CodeBlock, Tab, TabGroup } from '@skeletonlabs/skeleton';

	export let data;

	console.log(data);

	let tabSet: number = 0;
</script>

<div class="p-4 flex flex-col gap-4">
	<div class="card p-4">
		<h1 class="text-2xl font-bold">{data.sourceData.source.name}</h1>
		<p class="">{data.sourceData.source.description}</p>
		<p class="">ID: {data.sourceData.source.id}</p>
		<p class="">Type: {data.sourceData.source.type}</p>
		<p class="">
			Authoritative: {data.sourceData.source.authoritative ? 'True' : 'False'}
		</p>
		<p>
			Healthy:
			<span class={data.sourceData.source.healthy ? 'text-green-500' : 'text-red-500'}>
				{data.sourceData.source.healthy ? 'True' : 'False'}
			</span>
		</p>
	</div>
	<div class="card p-4">
		<VaCluster cluster={data.sourceData.source.cluster} />
	</div>
	<div class="card p-4">
		<h2>Most Recent Aggregations</h2>
		<div>
			<p>Accounts</p>
			<Accordion>
				<AccordionItem>
					<svelte:fragment slot="summary">
						Started: {formatDate(
							data.sourceData.sourceEvents.accounts.started?.created,
						)}
					</svelte:fragment>
					<svelte:fragment slot="content">
						<CodeBlock
							lineNumbers
							language=":json"
							code={JSON.stringify(
								data.sourceData.sourceEvents.accounts.started,
								null,
								4,
							)}
						/>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="summary">
						Passed: {formatDate(data.sourceData.sourceEvents.accounts.passed?.created)}
					</svelte:fragment>
					<svelte:fragment slot="content">
						<CodeBlock
							lineNumbers
							language=":json"
							code={JSON.stringify(
								data.sourceData.sourceEvents.accounts.passed,
								null,
								4,
							)}
						/>
					</svelte:fragment>
				</AccordionItem>
			</Accordion>
			<p>Entitlements</p>
			<Accordion>
				<AccordionItem>
					<svelte:fragment slot="summary">
						Started: {formatDate(
							data.sourceData.sourceEvents.entitlements.started?.created,
						)}
					</svelte:fragment>
					<svelte:fragment slot="content">
						<CodeBlock
							lineNumbers
							language=":json"
							code={JSON.stringify(
								data.sourceData.sourceEvents.entitlements.started,
								null,
								4,
							)}
						/>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="summary">
						Passed: {formatDate(
							data.sourceData.sourceEvents.entitlements.passed?.created,
						)}
					</svelte:fragment>
					<svelte:fragment slot="content">
						<CodeBlock
							lineNumbers
							language=":json"
							code={JSON.stringify(
								data.sourceData.sourceEvents.entitlements.passed,
								null,
								4,
							)}
						/>
					</svelte:fragment>
				</AccordionItem>
			</Accordion>
		</div>
	</div>
	<div class="card p-4">
		<TabGroup>
			<Tab bind:group={tabSet} name="raw-source-values" value={0}>Source Events</Tab>
			<Tab bind:group={tabSet} name="tab2" value={1}>Connector Attributes JSON</Tab>
			<Tab bind:group={tabSet} name="raw-source-values" value={2}>Full Source JSON</Tab>
			<!-- Tab Panels --->
			<svelte:fragment slot="panel">
				{#if tabSet === 0}
					Search Events
				{:else if tabSet === 1}
					<CodeBlock
						lineNumbers
						language=":json"
						code={JSON.stringify(data.sourceData.source.connectorAttributes, null, 4)}
					/>
				{:else if tabSet === 2}
					<CodeBlock
						lineNumbers
						language=":json"
						code={JSON.stringify(data.sourceData.source, null, 4)}
					/>
				{/if}
			</svelte:fragment>
		</TabGroup>
	</div>
</div>
