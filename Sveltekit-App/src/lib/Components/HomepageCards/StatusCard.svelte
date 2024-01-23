<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let summaryResp: Promise<any>;

	const getStatus = async () => {
		console.debug('Getting Status Summary');
		summaryResp = (await fetch('https://status.sailpoint.com/api/v2/summary.json')).json();
		console.debug(await summaryResp);
	};

	let interval: any;

	onMount(async () => {
		getStatus();
		interval = setInterval(() => getStatus(), 30000);
	});

	onDestroy(() => clearInterval(interval));

	function parseClass(status: string) {
		console.log(status);

		switch (status) {
			case 'none':
				return 'text-success-500';

			case 'minor':
				return 'text-warning-500';

			case 'major':
				return 'text-error-500';
		}
	}
</script>

<div class="p-4 card grow">
	<h1 class="text-center">IdentityNow Status</h1>

	{#await summaryResp}
		<div class="flex flex-row gap-2 justify-center">
			<div class="placeholder-circle animate-spin w-16" />
			<p>Checking</p>
		</div>
	{:then summary}
		<div class="flex flex-row align-center gap-2 justify-center">
			<a
				href="https://status.sailpoint.com"
				class="{parseClass(summary?.status?.indicator)} text-center hover:underline"
				rel="noreferrer"
				target="_blank"
			>
				{summary?.status?.description}
			</a>
		</div>
	{/await}
</div>
