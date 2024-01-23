<script lang="ts">
	import StatusCard from '$lib/Components/HomepageCards/StatusCard.svelte';

	const supportLinks: { label: string; href: string }[] = [
		{
			label: '🎫 Submit a ticket',
			href: 'https://support.sailpoint.com/csm?id=sc_cat_item&sys_id=a78364e81bec151050bcc8866e4bcb5c&referrer=popular_items'
		},
		{
			label: '🔭  Scope of SaaS Support',
			href: 'https://community.sailpoint.com/t5/IdentityNow-Wiki/What-is-supported-by-SaaS-Support/ta-p/198779'
		},
		{ label: '🔖  Support Knowledge Base', href: 'https://support.sailpoint.com/' }
	];

	const tenantLinks: { label: string; slug: string }[] = [
		{ label: '🔑 Grant Tenant Access', slug: '/ui/a/admin/global/grant-tenant-access' },
		{
			label: '🏠 Dashboard',
			slug: '/ui/admin#admin:dashboard:overview'
		},
		{ label: '🙂 Identity Profiles', slug: '/ui/admin#admin:identities:profiles' },
		{ label: '📋 Identity List', slug: '/ui/a/admin/identities/all-identities' },
		{ label: '🎭 Access Profiles', slug: '/ui/a/admin/access/access-profiles/landing' },
		{ label: '📦 Roles', slug: '/ui/a/admin/access/roles/landing-page' },
		{ label: '🔗  Sources', slug: '/ui/a/admin/connections/sources-list/configured-sources' },
		{
			label: '💻 Virtual Appliances',
			slug: '/ui/a/admin/connections/virtual-appliances/clusters-list'
		}
	];

	const resourcelinks: { label: string; href: string }[] = [
		{
			label: '💁 Developer Community',
			href: 'https://developer.sailpoint.com/discuss/'
		},
		{ label: '📖 API Documentation', href: 'https://developer.sailpoint.com/idn/api/v3' },
		{ label: '💻 CLI Documentation', href: 'https://developer.sailpoint.com/idn/tools/cli' },
		{
			label: '🔌 Connector Reference',
			href: 'https://community.sailpoint.com/t5/IdentityNow-Connectors/IdentityNow-Connectors/ta-p/80019'
		},
		{
			label: '🧮 Transform Guides',
			href: 'https://community.sailpoint.com/t5/Search/bd-p/search?searchString=%22IdentityNow+Transforms+-%22'
		},
		{
			label: '🧭 Compass',
			href: 'https://community.sailpoint.com'
		},
		{
			label: '🔒 User Level Access Matrix',
			href: 'https://documentation.sailpoint.com/saas/help/common/users/user_level_matrix.html'
		}
	];
</script>

<div class="flex flex-col gap-2 grow">
	<StatusCard />

	<div class="flex flex-row gap-2 grow">
		<div class="p-4 card variant-soft-surface grow">
			<h1 class="text-center">Tenant Links</h1>
			<ul class="flex flex-col">
				{#each tenantLinks as link}
					<li class="listbox-item">
						<a
							class="hover:underline text-center hover:text-tertiary-600"
							target="_blank"
							rel="noreferrer"
							href={'https://placeholder.com' + link.slug}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="p-4 card variant-soft-surface grow">
			<h1 class="text-center">Resources</h1>
			<ul class="flex flex-col">
				{#each resourcelinks as link}
					<li class="listbox-item">
						<a
							class="hover:underline text-center hover:text-tertiary-600"
							target="_blank"
							rel="noreferrer"
							href={link.href}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="p-4 card variant-soft-surface grow">
			<h1 class="text-center">Support</h1>
			<ul class="flex flex-col">
				{#each supportLinks as link}
					<li class="flex flex-row gap-1 hover:underline hover:text-tertiary-600">
						<a target="_blank" rel="noreferrer" href={link.href}>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
