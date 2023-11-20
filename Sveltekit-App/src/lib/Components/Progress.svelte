<script>
	import { ProgressRadial } from '@skeletonlabs/skeleton';
</script>

<div class="progress-bar">
	<ProgressRadial
		stroke={100}
		meter="stroke-primary-500"
		track="stroke-primary-500/30"
		class="progress-bar"
	/>
</div>

<style>
	.progress-bar {
		padding-top: calc(50vh - 4.5rem - 200px);
		padding-left: calc(50% - 4.5rem);
	}
</style>
