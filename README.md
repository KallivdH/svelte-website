# Svelte website of Kalli van den Heuvel

I have chosen to make this website with svelte. Svelte is a frontend framework that doesn't use a Virtual DOM. There for, it's pretty fast, and I like the coding workflow a lot. Further, I use a utility-based CSS library called Tailwind CSS. The hosting is done on Netlify, where you can host static websites for free.

## Developing

Once you've cloned the repo and installed dependencies with `npm install` ( or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. I'm using the Netlify adaptor, but you can use what you want. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
