<script lang="ts">
	import Chip from '$lib/components/Chip/Chip.svelte';
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { PROJECTS } from '$lib/params';
	import type { Project, Skill } from '$lib/types';
	import { onMount } from 'svelte';
	import { MY_SKILLS } from '$lib/skills.params';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import {
		CATEGORY_MAPPING,
		getSubCategories,
		getMainCategories
	} from '$lib/data/category-mapping';

	interface SkillFilter extends Skill {
		isSelected?: boolean;
	}

	const { items, title } = PROJECTS;

	let filters: Array<SkillFilter> = MY_SKILLS.filter((it) => {
		return items.some((project) => project.skills.some((skill) => skill.slug === it.slug));
	});

	let search = '';
	let displayed: Array<Project> = [];

	let selectedMainCategory: string | null = null;
	let selectedSkills: Set<string> = new Set();

	$: displayed = items.filter((project) => {
		const matchesSearch = search
			? project.name.toLowerCase().includes(search.toLowerCase()) ||
			  project.description.toLowerCase().includes(search.toLowerCase())
			: true;

		if (!selectedMainCategory && selectedSkills.size === 0) {
			return matchesSearch;
		}

		if (selectedMainCategory) {
			const categorySkills = getSubCategories(selectedMainCategory);
			return matchesSearch && project.skills.some((skill) => categorySkills.includes(skill.slug));
		}

		return matchesSearch && project.skills.some((skill) => selectedSkills.has(skill.slug));
	});

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		search = e.detail.search;
	};

	onMount(() => {
		const query = location.search;

		if (query) {
			const queryParams = new URLSearchParams(location.search);

			const item = queryParams.get('item');

			if (item) {
				search = item;
			}
		}
	});

	function toggleSkill(skill: string) {
		if (selectedSkills.has(skill)) {
			selectedSkills.delete(skill);
		} else {
			if (selectedMainCategory) {
				selectedSkills = new Set([skill]);
			} else {
				selectedSkills.add(skill);
			}
		}
		selectedSkills = selectedSkills; // trigger reactivity
	}

	function toggleMainCategory(category: string) {
		if (selectedMainCategory === category) {
			selectedMainCategory = null;
			selectedSkills.clear();
		} else {
			selectedMainCategory = category;
			selectedSkills.clear();
		}
	}
</script>

<SearchPage {title} on:search={onSearch}>
	<div class="projects-filters">
		<div class="main-categories">
			{#each getMainCategories() as category}
				<Chip
					active={selectedMainCategory === category}
					classes={'text-0.8em'}
					on:click={() => toggleMainCategory(category)}
				>
					{MY_SKILLS.find((s) => s.slug === category)?.name || category}
				</Chip>
			{/each}
		</div>
		{#if selectedMainCategory}
			<div class="sub-categories">
				{#each getSubCategories(selectedMainCategory) as skill}
					<Chip
						active={selectedSkills.has(skill)}
						classes={'text-0.8em'}
						on:click={() => toggleSkill(skill)}
					>
						{MY_SKILLS.find((s) => s.slug === skill)?.name || skill}
					</Chip>
				{/each}
			</div>
		{/if}
	</div>
	{#if displayed.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="projects-list mt-5">
			{#each displayed as project}
				<ProjectCard {project} />
			{/each}
		</div>
	{/if}
</SearchPage>

<style lang="scss">
	.projects-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;

		@media (max-width: 1350px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	.main-categories {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
		flex-wrap: wrap;
	}

	.sub-categories {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
		flex-wrap: wrap;
	}
</style>
