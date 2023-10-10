<script lang="ts">
	import { navigation } from './navigation.ts';
	import { page } from '$app/stores';
</script>

<div class="p-2">
	<div class="flex flex-col gap-2">
		{#each navigation as section}
			{section.name}
			<hr class="!border-t-2" />
			{#each section.content as link (link.url)}
				<a
					class="btn variant-filled-primary !text-white p-2"
					data-sveltekit-preload-data="hover"
					href={link.url}
				>
					{link.name}
				</a>
			{/each}
		{/each}
	</div>
</div>
