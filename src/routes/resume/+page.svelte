<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { RESUME } from '$lib/params';

	const { items, title } = RESUME;
</script>

<CommonPage {title}>
	<div class="resume">
		{#if items && items.length > 0}
			<div class="resume-grid">
				{#each items as resume}
					<a href={resume.url} target="_blank" rel="noopener noreferrer">
						<Chip size={'1.25em'}>{resume.name}</Chip>
					</a>
				{/each}
			</div>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}

	.resume-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
		width: 100%;
		max-width: 800px;
		padding: 0 1rem;

		a {
			color: inherit;
			text-decoration: none;
			display: flex;
			justify-content: center;
		}
	}
</style>
