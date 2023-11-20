<script>
	import LeftSidebar from '$lib/sidebar/LeftSidebar.svelte';
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<img class="h-8 w-8" src="/logo.ico" alt="SailPoint TetraSail" />
			</svelte:fragment>
			<p class="text-xl">IdentityNow Health Check</p>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<a href="/" class="btn variant-filled-primary !text-white text-lg">Logout</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<LeftSidebar />
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
	<!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<div class="h-full">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
