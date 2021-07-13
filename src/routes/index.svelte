<div id="hero" class="h-screen-5/6 flex items-center font-mono py-10">
	<div class="grid md:grid-cols-2 grid-cols-1 gap-1">
		<div id="hero-content">
			<h2 class="text-4xl mb-2">Welcome, I am</h2>
			<h1 class="text-6xl mb-5">Kalli van den Heuvel</h1>
			<p class="mb-5">
				I work as a programmer at Directlease in Henglo. Furthermore I study HBO-ICT at Saxion
				enschede. You can find interesting stuff about programming, climbing and music on this
				website. Soooo don't leave yet.
			</p>
			<a class="bg-green-700 px-4 py-2 text-white" href="/#projects">Projects</a>
		</div>
		<div id="hero-img">
			<img
				class="float-left md:float-right"
				src="kalli.png"
				alt="Kalli van den Heuvel"
				width="383px"
				height="403.91px"
			/>
		</div>
	</div>
</div>
<div id="projects" class="text-white font-mono py-10">
	<div class="w-full bg-blue-700 p-10 rounded-3xl flex flex-wrap md:flex-nowrap mb-10">
		<div class="p-10">
			<img src="website-stack.png" alt="Website stack" width="1000px" height="1000px" />
		</div>
		<div class="p-10">
			<h2 class="text-4xl mb-2">This website</h2>
			<p class="mb-5">
				I have chosen to make this website with svelte. Svelte is a frontend framework that doesn't
				use a Virtual DOM. There for its pretty fast and I like the coding workflow a lot. Further I
				use tailwindCSS, this is a utility based css libary. The hosting is done on netlify where
				you can host static websites for free.
			</p>
			<a
				class="bg-gray-100 px-4 py-2 text-blue-700"
				href="https://github.com/KallivdH/svelte-website">Github</a
			>
		</div>
	</div>
	<div class="w-full bg-red-700 p-10 rounded-3xl flex flex-wrap md:flex-nowrap">
		<div class="p-10">
			<h2 class="text-4xl mb-2">Spring boot powered website</h2>
			<p class="mb-5">
				This is a school assignment I had to do. The front end is vanilla javascript and every api
				call is done with fetch. Further is the backend made with spring boot.
			</p>
			<a
				class="bg-gray-100 px-4 py-2 text-red-700"
				href="https://github.com/KallivdH/svelte-website">Github</a
			>
		</div>
		<div class="p-10">
			<img
				src="spring-boot.png"
				class="float-right"
				alt="Website stack"
				width="1000px"
				height="1000px"
			/>
		</div>
	</div>
</div>
<div id="contact" class="py-10 flex justify-center">
	<form
		method="POST"
		class="w-full max-w-lg"
		name="contact"
		data-netlify="true"
		data-netlify-recaptcha="true"
	>
		<h1 class="text-6xl mb-5">Contact me</h1>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
				<label name="first-name" class="text-xs font-bold mb-2" for="first-name">
					First Name
				</label>
				<input
					class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
					id="first-name"
					type="text"
					required
				/>
			</div>
			<div class="w-full md:w-1/2 px-3">
				<label name="last-name" class="block tracking-wide text-xs font-bold mb-2" for="last-name">
					Last Name
				</label>
				<input
					class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="last-name"
					type="text"
					required
				/>
			</div>
		</div>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full px-3">
				<label class="block tracking-wide text-xs font-bold mb-2" for="email"> E-mail </label>
				<input
					name="email"
					class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="email"
					type="email"
					required
				/>
			</div>
		</div>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full px-3">
				<label class="block tracking-wide text-xs font-bold mb-2" for="message"> Message </label>
				<textarea
					name="message"
					class="no-resize appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
					id="message"
					required
				/>
			</div>
		</div>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div data-netlify-recaptcha="true" />
		</div>
		<div class="md:flex md:items-center">
			<div class="md:w-1/3">
				<button class="bg-green-700 text-white py-2 px-4" type="submit"> Send </button>
			</div>
			<div class="md:w-2/3" />
		</div>
	</form>
</div>

<style>
	.h-screen-5\/6 {
		height: 83vh;
	}
</style>
