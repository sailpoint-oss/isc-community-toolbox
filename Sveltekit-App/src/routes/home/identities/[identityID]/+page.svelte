<script lang="ts">
	import VaCluster from '$lib/Components/VACluster.svelte';
	import { formatDate } from '$lib/Utils.js';
	import { Accordion, AccordionItem, CodeBlock, Tab, TabGroup } from '@skeletonlabs/skeleton';

	export let data;

	console.log(data);

	let tabSet: number = 1;
</script>

<div class="p-4 flex flex-col gap-4">
	<div class="card p-4">
		<h1 class="text-2xl font-bold">Name: {data.identityData.name}</h1>
		<p class="">Alias: {data.identityData.alias}</p>
		<p class="">ID: {data.identityData.id}</p>
		<p class="">Lifecycle State: {data.identityData.lifecycleState.stateName}</p>
	</div>
	<div class="card p-4">
		<TabGroup>
			<!-- <Tab bind:group={tabSet} name="raw-source-values" value={0}>Source Events</Tab> -->
			<Tab bind:group={tabSet} name="tab2" value={1}>Identity Attributes JSON</Tab>
			<Tab bind:group={tabSet} name="raw-source-values" value={2}>Full Identity JSON</Tab>
			<!-- Tab Panels --->
			<svelte:fragment slot="panel">
				{#if tabSet === 0}
					<!-- SOURCE EVENTS -->
				{:else if tabSet === 1}
					<CodeBlock
						lineNumbers
						language=":json"
						code={JSON.stringify(data.identityData.attributes, null, 4)}
					/>
				{:else if tabSet === 2}
					<CodeBlock
						lineNumbers
						language=":json"
						code={JSON.stringify(data.identityData, null, 4)}
					/>
				{/if}
			</svelte:fragment>
		</TabGroup>
	</div>
</div>
