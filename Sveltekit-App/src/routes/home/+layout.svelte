<script lang="ts">
	import { page } from '$app/stores';
	import LeftSidebar from '$lib/sidebar/LeftSidebar.svelte';
	import { AppBar, AppShell, Avatar, LightSwitch } from '@skeletonlabs/skeleton';

	let crumbs: Array<{ label: string; href: string }> = [];

	$: {
		// Remove zero-length tokens.
		const tokens = $page.url.pathname.split('/').filter((t) => t !== '');

		// Create { label, href } pairs for each token.
		let tokenPath = '';
		crumbs = tokens.map((t) => {
			tokenPath += '/' + t;
			t = t.charAt(0).toUpperCase() + t.slice(1);
			return { label: t, href: tokenPath };
		});

		// Add a way to get home too.
		// crumbs.unshift({ label: 'Home', href: '/' });
	}
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<img class="h-8 w-8" src="/logo.ico" alt="SailPoint TetraSail" />
			</svelte:fragment>
			<p class="text-xl">IdentityNow Admin Console</p>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<Avatar width="w-10" />
				<a href="/logout" class="btn variant-filled-primary !text-white text-xs">Logout</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<LeftSidebar />
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
	<!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<div class="max-h-screen">
		<div class="pl-2 pt-2 pr-2">
			<ol class="breadcrumb card p-2">
				{#each crumbs as crumb, i}
					<!-- If crumb index is less than the breadcrumb length minus 1 -->
					{#if i < crumbs.length - 1}
						<li class="crumb"><a class="anchor" href={crumb.href}>{crumb.label}</a></li>
						<li class="crumb-separator" aria-hidden>&rsaquo;</li>
					{:else}
						<li class="crumb">{crumb.label}</li>
					{/if}
				{/each}
			</ol>
		</div>
		<div class="p-2">
			<slot />
		</div>
	</div>
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
