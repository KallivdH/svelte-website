<!-- <nav class="p-5">
	<div class="max-w-6xl mx-auto text-white">
		<a class="bg-blue-700 px-4 py-2 rounded-3xl mr-5 float-left" href="/">Kalli van den Heuvel</a>
		<a class="bg-red-700 px-4 py-2 rounded-3xl float-right" href="/contact">Contact</a>
		<a class="bg-green-700 px-4 py-2 rounded-3xl mr-5 float-right" href="/#projects">Projects</a>
	</div>
</nav> -->
<script>
	import { onMount } from 'svelte';
	let mobileMenuOpen = false;

	function clickOutside(node, { enabled: initialEnabled, cb }) {
		const handleOutsideClick = ({ target }) => {
			if (!node.contains(target)) {
				cb();
			}
		};

		function update({ enabled }) {
			if (enabled) {
				window.addEventListener('click', handleOutsideClick);
			} else {
				window.removeEventListener('click', handleOutsideClick);
			}
		}

		update({ enabled: initialEnabled });

		return {
			update,
			destroy() {
				window.removeEventListener('click', handleOutsideClick);
			}
		};
	}

	const mediaQueryHandler = (e) => {
		if (!e.matches) {
			mobileMenuOpen = false;
		}
	};

	onMount(() => {
		const mediaListener = window.matchMedia('(max-width: 767px)');
		mediaListener.addListener(mediaQueryHandler);
	});
</script>

<header
	use:clickOutside={{ enabled: mobileMenuOpen, cb: () => (mobileMenuOpen = false) }}
	class="max-w-6xl mx-auto flex flex-wrap flex-row justify-between md:items-center md:space-x-4 py-6 px-6 relative text-white"
>
	<a on:click={() => (mobileMenuOpen = false)} class="bg-blue-700 px-4 py-2 rounded-3xl" href="/"
		>Kalli van den Heuvel</a
	>
	<button
		on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
		class="inline-block md:hidden w-10 h-10 p-2 bg-blue-700 rounded-3xl"
		aria-label="Mobile menu"
	>
		<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>
	<nav
		class="{mobileMenuOpen
			? 'flex'
			: 'hidden'} absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 space-y-5 md:space-y-0 w-full md:w-auto bg-gray-100 shadow-md md:shadow-none md:bg-transparent p-6 pt-4 md:p-0 "
	>
		<div>
			<a
				on:click={() => (mobileMenuOpen = false)}
				class="bg-red-700 px-4 py-2 rounded-3xl"
				href="/contact">Contact</a
			>
		</div>
		<div>
			<a
				on:click={() => (mobileMenuOpen = false)}
				class="bg-green-700 px-4 py-2 rounded-3xl"
				href="/vinyl">Vinyl Collection</a
			>
		</div>
		<div>
			<a
				on:click={() => (mobileMenuOpen = false)}
				class="bg-purple-700 px-4 py-2 rounded-3xl"
				href="/blog">Blog</a
			>
		</div>
	</nav>
</header>
