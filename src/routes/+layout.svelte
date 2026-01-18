<script lang="ts">
	import 'uno.css';
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import '$lib/index.scss';
	import { onHydrated, theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import StarBackground from '$lib/components/StarBackground/StarBackground.svelte';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	onMount(() => {
		onHydrated();
		injectAnalytics();
	});
</script>

<div class={`body contents ${$theme ? 'theme-dark' : 'theme-light'}`}>
	<StarBackground />
	<NavMenu />
	<div class="content container"><slot /></div>
</div>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 0px 0px;
	}

	.body {
		margin: 0px;
		background-color: transparent;
		color: var(--main-text);
		font-family: var(--text-f);
		display: flex;
		flex-direction: column;
		transition-duration: 200ms;
		letter-spacing: 1px;
		min-height: 100vh;
		position: relative;
	}

	:global(p) {
		margin: 0px;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 5px 0px;
	}
</style>
