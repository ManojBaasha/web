<script lang="ts">
	import { onMount } from 'svelte';

	export let src: string;
	export let startX: number;
	export let startY: number;
	export let duration: number;
	export let delay: number;
	export let size: number;
	export let direction: 'left' | 'right' | 'up' | 'down' | 'diagonal';
	export let rotation: number;
	export let rotationSpeed: number;
	export let diagonalAngle: number;

	let visible = false;
	let opacity = 0;
	let currentRotation = rotation;

	onMount(() => {
		// Random delay before showing the image
		setTimeout(() => {
			visible = true;
			opacity = 1;
		}, delay);

		// Update rotation continuously
		const rotationInterval = setInterval(() => {
			currentRotation += rotationSpeed;
		}, 16); // ~60fps

		return () => clearInterval(rotationInterval);
	});
</script>

<div
	class="floating-image"
	data-direction={direction}
	style="
		--start-x: {startX}px;
		--start-y: {startY}px;
		--duration: {duration}s;
		--size: {size}px;
		--rotation: {currentRotation}deg;
		--diagonal-angle: {diagonalAngle}deg;
		opacity: {opacity};
	"
>
	<img {src} alt="floating tech icon" />
</div>

<style>
	.floating-image {
		position: absolute;
		left: var(--start-x);
		top: var(--start-y);
		width: var(--size);
		height: var(--size);
		opacity: 0;
		transition: opacity 2s ease-in-out;
		pointer-events: none;
		transform: rotate(var(--rotation));
	}

	.floating-image[data-direction="left"] {
		animation: float-left var(--duration) linear forwards;
	}

	.floating-image[data-direction="right"] {
		animation: float-right var(--duration) linear forwards;
	}

	.floating-image[data-direction="up"] {
		animation: float-up var(--duration) linear forwards;
	}

	.floating-image[data-direction="down"] {
		animation: float-down var(--duration) linear forwards;
	}

	.floating-image[data-direction="diagonal"] {
		animation: float-diagonal var(--duration) linear forwards;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
	}

	@keyframes float-left {
		0% {
			transform: translate(0, 0) rotate(var(--rotation));
			opacity: 0;
		}
		5% {
			opacity: 1;
		}
		95% {
			opacity: 1;
		}
		100% {
			transform: translate(-100vw, 0) rotate(var(--rotation));
			opacity: 0;
		}
	}

	@keyframes float-right {
		0% {
			transform: translate(0, 0) rotate(var(--rotation));
			opacity: 0;
		}
		5% {
			opacity: 1;
		}
		95% {
			opacity: 1;
		}
		100% {
			transform: translate(100vw, 0) rotate(var(--rotation));
			opacity: 0;
		}
	}

	@keyframes float-up {
		0% {
			transform: translate(0, 0) rotate(var(--rotation));
			opacity: 0;
		}
		5% {
			opacity: 1;
		}
		95% {
			opacity: 1;
		}
		100% {
			transform: translate(0, -100vh) rotate(var(--rotation));
			opacity: 0;
		}
	}

	@keyframes float-down {
		0% {
			transform: translate(0, 0) rotate(var(--rotation));
			opacity: 0;
		}
		5% {
			opacity: 1;
		}
		95% {
			opacity: 1;
		}
		100% {
			transform: translate(0, 100vh) rotate(var(--rotation));
			opacity: 0;
		}
	}

	@keyframes float-diagonal {
		0% {
			transform: translate(0, 0) rotate(var(--rotation));
			opacity: 0;
		}
		5% {
			opacity: 1;
		}
		95% {
			opacity: 1;
		}
		100% {
			transform: translate(
				calc(cos(var(--diagonal-angle)) * 150vw),
				calc(sin(var(--diagonal-angle)) * 150vh)
			) rotate(var(--rotation));
			opacity: 0;
		}
	}
</style> 