<script>
	import '../../app.postcss';
	export let title;
	export let thumbnail;
	export let date;
</script>

<svelte:head>
	<html lang="en" />
	<title>Kalli van den Heuvel</title>
	<meta
		name="description"
		content="The homepage of kalli.nl. Here you can find basic information about Kalli van den Heuvel"
	/>
</svelte:head>

<div>
	<span class="text-sm italic float-right mb-1 pr-6">Date: {date}</span>
	<img class="rounded-3xl mb-10 min-w-full object-contain" src={thumbnail} alt={title} />
	<div class="prose mx-auto prose-blue mb-20">
		<h1>{title}</h1>
		<slot />
	</div>
</div>
