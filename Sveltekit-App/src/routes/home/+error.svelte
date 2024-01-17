<script lang="ts">
	import { page } from '$app/stores';
	import { CodeBlock } from '@skeletonlabs/skeleton';

	console.log($page);
</script>

<div class="card p-2 m-4">
	<p class="text-center py-2">WHOOPS!</p>

	<CodeBlock language="json" code={JSON.stringify($page, null, 4)} />
</div>
