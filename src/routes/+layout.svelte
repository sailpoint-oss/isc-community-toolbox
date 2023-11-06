<script lang="ts">
	import { Modal, initializeStores, type ModalComponent } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import '../app.postcss';
	import CodeBlockModal from '$lib/Components/CodeBlockModal.svelte';

	initializeStores();
	let ready: boolean = false;
	onMount(() => (ready = true));

	const modalRegistry: Record<string, ModalComponent> = {
		// Set a unique modal ID, then pass the component reference
		codeBlockModal: { ref: CodeBlockModal },

		// ...
	};
</script>

<Modal components={modalRegistry} />

{#if ready}
	<slot />
{/if}
