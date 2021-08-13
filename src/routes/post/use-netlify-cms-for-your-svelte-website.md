---
layout: post
title: Use Netlify CMS for your Svelte website
date: 10th-Aug-2021
thumbnail: /thumbnail-blogpost1.png
---
When making a static website, most of the time you make your pages locally. With Netlify you can run a static website with CMS. If you got a website that doesn't need to be updated every day, then Netlify is something for you. When a new post is made with the CMS. The static website generator will make a new build all in the cloud thanks to [Netlify](https://www.netlify.com/jamstack/). Svelte kit is the static website generator that I'm using. Currently still in beta, but a powerful tool for making static websites. [Learn More](https://svelte.dev/blog/whats-the-deal-with-sveltekit)

I made a boilerplate repository for this website. You can check it out on my [GitHub](https://github.com/KallivdH/stn-boilerplate). It is a basic Sveltekit project with Tailwind CSS and mdsvex. I added these packages with [svelte-add](https://github.com/svelte-add/svelte-add). After that, I followed a [tutorial](https://www.netlifycms.org/docs/add-to-your-site/) on the Netlify CMS website. 

A few things to know about installing Netlify CMS

* Store the admin folder in `/static`.
* Media folder should be set to `/static`.
* The public folder should be set to `/`.
* For Netlify identity, all code should be added to the app.html file in the `/src` folder.
* `src/routes/post` in this folder are all blog posts created

After you can make blog posts with the CMS. Remember, Netlify CMS is cloud-based. So, it will only work if you publish your website on Netlify. There is a [beta feature](https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository) where you can run the CMS locally for testing purposes.

Now with mdsvex we can add a layout to our blog posts. If you added mdsvex with svelte-add you should have the `mdsvex.config.js` file in your project root folder.

```javascript
const config = {
	layout: {
		post: './src/routes/post/_layout.svelte'
	},
	extensions: ['.svelte.md', '.md'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: []
};

export default config;
```

Here I added the post layout with its path. In the` _layout.svelte` file, you can use the metadata of the markdown files. For example, by calling them `export let title;` and using it in the file `<h1>{title}</h1>`. More info about mdsvex can be found [here](https://mdsvex.pngwn.io/docs).

Finally