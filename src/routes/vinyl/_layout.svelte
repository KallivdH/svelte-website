<script>
	import '../../app.postcss';
	export let title;
	export let artist;
	export let cover;
	export let rating;
</script>

<svelte:head>
	<html lang="en" />
	<title>Kalli van den Heuvel</title>
	<meta
		name="description"
		content="The homepage of kalli.nl. Here you can find basic information about Kalli van den Heuvel"
	/>
</svelte:head>

<div class="md:mt-48 flex flex-wrap md:flex-nowrap sm:justify-center gap-10">
	<img class="float-left w-96 h-96 object-contain" src={cover} alt="{title} - {artist}" />
	<div>
		<h1 class="text-3xl mb-2 sm:text-6xl sm:mb-5">{title}</h1>
		<h2 class="text-2xl mb-5 sm:text-4xl sm:mb-10">{artist}</h2>
		{#if rating > 0}
			<div class="text-4xl sm:text-8xl">{rating} / 10</div>
		{/if}
	</div>
</div>
