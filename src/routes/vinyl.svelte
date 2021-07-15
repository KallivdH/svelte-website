<script context="module">
	const markdownFiles = import.meta.glob('./vinyl/*.md');

	let markdownFilesArray = [];
	for (let path in markdownFiles) {
		markdownFilesArray.push(
			markdownFiles[path]().then(({ metadata }) => {
				path = path.substring(0, path.length - 3);
				return { path, metadata };
			})
		);
	}

	export const load = async () => {
		const vinylCollection = await Promise.all(markdownFilesArray);
		return {
			props: {
				vinylCollection
			}
		};
	};
</script>

<script>
	export let vinylCollection;
</script>

<h1 class="md:text-left text-center text-6xl mb-5">Vinyl Collection</h1>

<div class="min-h-full my-10 flex justify-center md:justify-start flex-wrap gap-10">
	{#each vinylCollection as { path, metadata }}
		<a class="bg-gray-200 drop-shadow-lg" href={path}>
			<img
				class="w-80 h-80 object-contain"
				width="320"
				height="320"
				src={metadata.cover}
				alt="{metadata.title} - {metadata.artist}"
			/>
		</a>
	{/each}
</div>
