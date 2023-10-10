<script lang="ts">
	import { pages } from '$lib/sidebar/pages';
</script>

<div class="p-2">
	<div class="text-2xl text-center">Select a report to run</div>

	<div class="flex flex-row flex-wrap">
		{#each pages as page (page.url)}
			<a
				class="card card-hover overflow-hidden m-4 w-modal-slim"
				data-sveltekit-preload-data="hover"
				href={page.url}
			>
				<header>
					<div class="w-full aspect-[21/9] relative bg-[#526bf8] overflow-hidden">
						<div
							class="text font-bold text-white uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[24px]"
						>
							{page.name}
						</div>
					</div>
				</header>
				<div class="p-4 space-y-4">
					<h3 class="h3" data-toc-ignore>Summary</h3>
					<article>
						<p>
							{page.description}
						</p>
					</article>
				</div>
				<hr class="opacity-50" />
			</a>
		{/each}
	</div>
</div>
