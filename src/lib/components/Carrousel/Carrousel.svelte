<script lang="ts">
	import { onMount } from 'svelte';
	import { getAssetURL } from '$lib/data/assets';
	import UIcon from '../Icon/UIcon.svelte';
	import sadcatok from '$lib/assets/cat.png';
	import codingcat from '$lib/assets/codingcat.png';
	import ghostpfp from '$lib/assets/ghost.png';
	import gncat from '$lib/assets/gncat.png';
	import gymcat from '$lib/assets/gymcat.png';
	import manoj from '$lib/assets/manoj.png';
	import clownpepe from '$lib/assets/pepe1.png';
	import whatpepe from '$lib/assets/pepe2.png';
	import risitaspopcorn from '$lib/assets/risitas.png';
	import angrystick from '$lib/assets/stick1.png';
	import emotionstick from '$lib/assets/stick2.png';
	import happystick from '$lib/assets/stick3.png';

	//make a struct of items with name and logo
	const items = [
		{
			name: 'Me when im coding',
			logo: codingcat
		},
		{
			name: 'Me with music',
			logo: ghostpfp
		},
		{
			name: 'Me at 3am',
			logo: emotionstick
		},
		{
			name: 'Me when you sleep',
			logo: gncat
		},
		{
			name: 'Me when you text @not_jonam',
			logo: happystick
		},
		{
			name: 'Me at the gym',
			logo: gymcat
		},
		{
			name: 'Me asf',
			logo: manoj
		},
		{
			name: 'Me with 300mg Caffeine',
			logo: whatpepe
		},
		{
			name: 'Me when theres drama',
			logo: risitaspopcorn
		},
		{
			name: 'Me when im delulu',
			logo: clownpepe
		},
		{
			name: 'Me during the day',
			logo: sadcatok
		}
	];

	const delay = 5000;

	let element: HTMLElement;

	let timeout: unknown;
	let index = 0;
	let toRight = true;

	$: {
		if (element) {
			element.scroll({
				left: index * 150,
				behavior: 'smooth'
			});
		}
	}

	const slide = (right: boolean) => {
		if (right) {
			if (index < items.length - 1) {
				index = index + 1;
			} else {
				index = index - 1;
				toRight = false;
			}
		} else {
			if (index > 0) {
				index = index - 1;
			} else {
				index = index + 1;
				toRight = true;
			}
		}
	};

	const toggle = (right: boolean) => {
		clearTimeout(timeout as number);

		timeout = setTimeout(() => {
			slide(right);

			toggle(toRight);
		}, delay);
	};

	const toggleLeft = () => {
		clearTimeout(timeout as number);
		toRight = false;
		slide(false);
		toggle(toRight);
	};

	const toggleRight = () => {
		clearTimeout(timeout as number);
		toRight = true;
		slide(true);
		toggle(toRight);
	};

	onMount(() => {
		toggle(true);
	});
</script>

<div class="carrousel flex-[0.5] row-center">
	<div bind:this={element} class="row overflow-hidden box-content w-150px">
		{#each items as item}
			<div class="box-content w-150px p-15px col-center">
				<img class="w-120px h-120px aspect-square" src={getAssetURL(item.logo)} alt={item.name} />
				<span class="text-center m-t-20px">{item.name}</span>
			</div>
		{/each}
	</div>
</div>
