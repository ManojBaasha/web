<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import FloatingImage from './FloatingImage.svelte';
	// Import all local images
	import codingcat from '$lib/assets/codingcat.png';
	import ghost from '$lib/assets/ghost.png';
	import ai from '$lib/assets/ai.png';
	import cat from '$lib/assets/cat.png';
	import gncat from '$lib/assets/gncat.png';
	import gymcat from '$lib/assets/gymcat.png';
	import pepe1 from '$lib/assets/pepe1.png';
	import pepe2 from '$lib/assets/pepe2.png';
	import risitas from '$lib/assets/risitas.png';
	import skull from '$lib/assets/skull.png';
	import stick1 from '$lib/assets/stick1.png';
	import stick2 from '$lib/assets/stick2.png';
	import stick3 from '$lib/assets/stick3.png';

	let stars1: HTMLElement;
	let stars2: HTMLElement;
	let stars3: HTMLElement;

	// List of possible images to float
	const images = [
		// Tech icons from CDN
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
		// Fun images from local assets
		codingcat,
		ghost,
		ai,
		cat,
		gncat,
		gymcat,
		pepe1,
		pepe2,
		risitas,
		skull,
		stick1,
		stick2,
		stick3
	];

	let floatingImages: Array<{
		src: string;
		startX: number;
		startY: number;
		duration: number;
		delay: number;
		size: number;
		direction: 'left' | 'right' | 'up' | 'down' | 'diagonal';
		rotation: number;
		rotationSpeed: number;
		diagonalAngle: number;
	}> = [];

	onMount(() => {
		// Generate random star positions
		const generateStars = (count: number) => {
			let value = '';
			for (let i = 0; i < count; i++) {
				const x = Math.floor(Math.random() * 2000);
				const y = Math.floor(Math.random() * 2000);
				value += `${x}px ${y}px #FFF`;
				if (i < count - 1) value += ', ';
			}
			return value;
		};

		// Apply star shadows
		if (stars1) stars1.style.boxShadow = generateStars(700);
		if (stars2) stars2.style.boxShadow = generateStars(200);
		if (stars3) stars3.style.boxShadow = generateStars(100);

		// Function to generate a random floating image
		const generateFloatingImage = () => {
			const src = images[Math.floor(Math.random() * images.length)];
			const direction = Math.random() < 0.3 ? 'diagonal' : 
				['left', 'right', 'up', 'down'][Math.floor(Math.random() * 4)] as 'left' | 'right' | 'up' | 'down';
			
			// Calculate starting position based on direction
			let startX = 0;
			let startY = 0;
			let diagonalAngle = 0;
			
			switch (direction) {
				case 'left':
					startX = window.innerWidth;
					startY = Math.random() * window.innerHeight;
					break;
				case 'right':
					startX = 0;
					startY = Math.random() * window.innerHeight;
					break;
				case 'up':
					startX = Math.random() * window.innerWidth;
					startY = window.innerHeight;
					break;
				case 'down':
					startX = Math.random() * window.innerWidth;
					startY = 0;
					break;
				case 'diagonal':
					// Randomly choose which corner to start from
					const corner = Math.floor(Math.random() * 4);
					switch (corner) {
						case 0: // Top-left
							startX = 0;
							startY = 0;
							diagonalAngle = 45;
							break;
						case 1: // Top-right
							startX = window.innerWidth;
							startY = 0;
							diagonalAngle = 135;
							break;
						case 2: // Bottom-left
							startX = 0;
							startY = window.innerHeight;
							diagonalAngle = 315;
							break;
						case 3: // Bottom-right
							startX = window.innerWidth;
							startY = window.innerHeight;
							diagonalAngle = 225;
							break;
					}
					break;
			}

			// Randomize size (smaller objects move faster)
			const size = 10 + Math.random() * 30; // 10-40px size
			const baseSpeed = 20; // Base speed in seconds
			const speedMultiplier = 1 - (size - 10) / 30; // Smaller objects move faster
			const duration = baseSpeed * speedMultiplier;
			const delay = Math.random() * 2000; // 0-2 seconds initial delay
			const rotation = Math.random() * 360; // Random initial rotation
			const rotationSpeed = (Math.random() - 0.5) * 2; // Random rotation speed (-1 to 1 degrees per second)

			floatingImages = [...floatingImages, { 
				src, 
				startX, 
				startY, 
				duration, 
				delay, 
				size, 
				direction,
				rotation,
				rotationSpeed,
				diagonalAngle
			}];

			// Remove the image after it completes one animation cycle
			setTimeout(() => {
				floatingImages = floatingImages.filter(img => img.src !== src);
			}, duration * 1000 + delay + 1000); // Add 1 second buffer for fade out
		};

		// Generate floating images periodically
		const generateImages = () => {
			// Only generate if we have less than 8 images
			if (floatingImages.length < 8) {
				// Generate 1-2 new images at a time
				const numToGenerate = 1 + Math.floor(Math.random() * 2);
				for (let i = 0; i < numToGenerate; i++) {
					generateFloatingImage();
				}
			}
			// Schedule next generation in 5-10 seconds
			setTimeout(generateImages, 5000 + Math.random() * 5000);
		};

		// Start generating images
		generateImages();
	});
</script>

<div class="star-background">
	<div bind:this={stars1} class="stars stars1"></div>
	<div bind:this={stars2} class="stars stars2"></div>
	<div bind:this={stars3} class="stars stars3"></div>
	{#each floatingImages as image}
		<FloatingImage {...image} />
	{/each}
</div>

<style>
	.star-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: radial-gradient(ellipse at bottom, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
		overflow: hidden;
		z-index: -1;
	}

	.stars {
		position: absolute;
		width: 1px;
		height: 1px;
		background: transparent;
		animation: animStar 50s linear infinite;
	}

	.stars:after {
		content: " ";
		position: absolute;
		top: 2000px;
		width: 1px;
		height: 1px;
		background: transparent;
		box-shadow: inherit;
	}

	.stars1 {
		width: 1px;
		height: 1px;
	}

	.stars2 {
		width: 2px;
		height: 2px;
		animation-duration: 100s;
	}

	.stars3 {
		width: 3px;
		height: 3px;
		animation-duration: 150s;
	}

	@keyframes animStar {
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(-2000px);
		}
	}

	:global(:root) {
		--bg-gradient-start: #0A0F1A;
		--bg-gradient-end: #000000;
	}

	:global([data-theme="light"]) {
		--bg-gradient-start: #F0F4F8;
		--bg-gradient-end: #FFFFFF;
	}
</style> 