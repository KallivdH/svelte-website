const config = {
	layout: {
		vinyl: './src/routes/vinyl/_layout.svelte',
		post: './src/routes/post/_layout.svelte'
	},
	extensions: ['.svelte.md', '.md'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: []
};

export default config;
