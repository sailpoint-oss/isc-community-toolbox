<script lang="ts">
	import { JSONEditor } from 'svelte-jsoneditor';
	import { modeCurrent } from '@skeletonlabs/skeleton';

	type TextContent = {
		text: string;
	};
	type JSONContent = {
		json: unknown;
	};
	type Content = JSONContent | TextContent;

	let requestBody: Content = {
		json: {
			array: [1, 2, 3],
			boolean: true,
			color: '#82b92c',
			null: null,
			number: 123,
			object: { a: 'b', c: 'd' },
			string: 'Hello World'
		}
	};

	let responseBody: Content = {
		json: {
			array: [1, 2, 3],
			boolean: true,
			color: '#82b92c',
			null: null,
			number: 123,
			object: { a: 'b', c: 'd' },
			string: 'Hello World'
		}
	};

	$: editorClasses = $modeCurrent === false ? 'jse-theme-dark' : '';
</script>

<div class="flex flex-col gap-2">
	<div class="card">
		<p class="text-center pt-4">Request</p>
		<div class="{editorClasses}  rounded-lg overflow-hidden pt-2">
			<JSONEditor bind:content={requestBody} />
		</div>
	</div>
	<div class="card">
		<p class="text-center pt-4">Response</p>
		<div class="{editorClasses}  rounded-lg overflow-hidden pt-2">
			<JSONEditor bind:content={responseBody} />
		</div>
	</div>
</div>

<style>
	/* load one or multiple themes */

	@import 'svelte-jsoneditor/themes/jse-theme-dark.css';
</style>
