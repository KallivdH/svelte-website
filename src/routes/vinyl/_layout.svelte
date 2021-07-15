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

<div class="mt-48 flex justify-center gap-10">
	<img class="float-left" src={cover} alt="{title} - {artist}" />
	<div class="float-right">
		<h1 class="text-6xl mb-5">{title}</h1>
		<h2 class="text-4xl mb-28">{artist}</h2>
		<div class="text-8xl">{rating} / 10</div>
	</div>
</div>
