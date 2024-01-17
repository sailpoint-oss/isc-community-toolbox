<script lang="ts">
	import { page } from '$app/stores';
	import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<div class="p-4">
	<div class="card p-4">
		<p class="text-center p-2">
			WHOOPS! an error occurred. <br /> If you believe this is a bug please submit an issue on
			<a
				class="underline text-blue-500 hover:text-blue-700"
				href="https://github.com/sailpoint-oss/idn-admin-console/issues/new/choose"
				rel="noreferrer"
				target="_blank"
			>
				GitHub
			</a>
		</p>
		{#if $page.error?.message}
			<p class="py-2">Message: <br /><span class="text-red-500">{$page.error.message}</span></p>
		{/if}

		{#if $page.error?.urls}
			<p>These links may be helpful:</p>
			<ul>
				{#each $page.error?.urls as url}
					<li>
						-
						<a
							class="underline text-blue-500 hover:text-blue-700"
							href={url}
							rel="noreferrer"
							target="_blank">{url}</a
						>
					</li>
				{/each}
			</ul>
		{/if}
		<div class="py-2">
			<p>Context</p>
			<CodeBlock language="json" code={JSON.stringify($page.error?.context, null, 4)} />
		</div>
		<div class="pt-2">
			<p>Error Data</p>
			<CodeBlock language="json" code={JSON.stringify($page.error?.errData, null, 4)} />
		</div>
	</div>
</div>
