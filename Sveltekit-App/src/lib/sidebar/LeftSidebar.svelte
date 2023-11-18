<script lang="ts">
	import { navigation } from './navigation';
	import { page } from '$app/stores';
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
</script>

<div class="bg-surface-50-900-token h-full">
	<AppRail width="w-36" active="bg-primary-active-token !text-white" aspectRatio="aspect-video">
		{#each navigation as section}
			<p class="py-2 px-1 text-center bg-primary-100-800-token">{section.name}</p>
			<hr class="!border-t-2" />
			{#each section.content as link (link.url)}
				<AppRailAnchor
					href={link.url}
					data-sveltekit-preload-data="hover"
					selected={$page.url.pathname === link.url}
				>
					<p class="text-center px-4">{link.name}</p>
				</AppRailAnchor>
			{/each}
		{/each}
	</AppRail>
</div>
