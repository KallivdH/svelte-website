<script context="module">
	export const prerender = true;
	import LogoGithub32 from 'carbon-icons-svelte/lib/LogoGithub32';
	import LogoYoutube32 from 'carbon-icons-svelte/lib/LogoYoutube32';
	import LogoLinkedin32 from 'carbon-icons-svelte/lib/LogoLinkedin32';
	import LogoInstagram32 from 'carbon-icons-svelte/lib/LogoInstagram32';
</script>

<div
	id="contact"
	class="min-h-screen-5/6 my-10 flex justify-around items-center flex-wrap md:flex-nowrap"
>
	<div class="flex-shrink-0">
		<img
			class="object-contain"
			width="287.28px"
			height="384px"
			src="/duimpje.jpg"
			alt="Terchelling funny"
		/>
	</div>
	<form
		method="POST"
		class="mt-5 sm:m-5 w-full max-w-lg"
		name="contact"
		netlify
		netlify-honeypot="bot-field"
	>
		<input type="hidden" name="form-name" value="contact" />
		<h1 class="text-6xl mb-5">Contact me</h1>
		<div class="hidden">
			<label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
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
		<div class="flex md:items-center">
			<div class="w-2/6">
				<button class="bg-green-700 text-white py-2 px-4" type="submit"> Send </button>
			</div>
			<a class="w-1/6 relative" href="https://github.com/KallivdH">
				<LogoGithub32
					class="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2"
					aria-label="Github"
				/></a
			>
			<a class="w-1/6 relative" href="https://github.com/KallivdH">
				<LogoYoutube32
					class="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2"
					aria-label="Youtube"
				/></a
			>
			<a class="w-1/6 relative" href="https://github.com/KallivdH">
				<LogoLinkedin32
					class="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2"
					aria-label="LinkedIn"
				/></a
			>
			<a class="w-1/6 relative" href="https://github.com/KallivdH">
				<LogoInstagram32
					class="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2"
					aria-label="Instagram"
				/></a
			>
		</div>
	</form>
</div>
