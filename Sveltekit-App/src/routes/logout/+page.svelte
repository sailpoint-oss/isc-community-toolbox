<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	onMount(() => {
		setTimeout(() => {
			console.log('Redirecting to login...');
			goto('/');
		}, 2000);
	});
</script>

<div>
	<h1>IdentityNow Admin Console</h1>

	<br />

	{#if data.sessionLoggedOut}
		<p>Logged out</p>
	{:else}
		<p>Issue logging out</p>
	{/if}
</div>
