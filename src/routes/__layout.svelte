<script>
	import '../app.postcss';
	import Nav from '../components/nav.svelte';
</script>

<svelte:head>
	<html lang="en" />
	<title>Kalli van den Heuvel</title>
	<meta
		name="description"
		content="The homepage of kalli.nl. Here you can find basic information about Kalli van den Heuvel"
	/>
</svelte:head>

<Nav />

<div class="p-5 max-w-6xl mx-auto">
	<slot />
</div>
