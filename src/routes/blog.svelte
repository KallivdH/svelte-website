<script context="module">
	const markdownFiles = import.meta.glob('./post/*.md');

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
		const posts = await Promise.all(markdownFilesArray);
		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	export let posts;
</script>

<h1 class="md:text-left text-center text-6xl mb-5">Blog</h1>

{#if posts.length > 0}
	<div class="flex flex-wrap md:justify-start justify-center items-start">
		{#each posts as { path, metadata }}
			<a class="bg-gray-200 drop-shadow-lg m-5" href={path}>
				<img
					class="object-scale-down"
					width="320"
					height="320"
					src={metadata.thumbnail}
					alt={metadata.title}
				/>
				<div class="p-5">
					<h2 class="text-xl">{metadata.title}</h2>
				</div>
			</a>
		{/each}
	</div>
{:else}
	<h2>no posts</h2>
{/if}
