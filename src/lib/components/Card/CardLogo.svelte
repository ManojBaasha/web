<script lang="ts">
	export let src: string;
	export let alt: string;
	export let size = 50;
	export let radius = '15px';
	export let classes = '';
</script>

<div
	class={`rounded-${radius} ${classes} overflow-hidden`}
	style="width: {size}px; height: {size}px;"
>
	<img
		class="w-full h-full object-contain"
		{src}
		{alt}
		style="max-width: {size}px; max-height: {size}px;"
	/>
</div>
