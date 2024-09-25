<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';

	export let searchFunction;
</script>

<section class="flex flex-col items-center justify-center w-full max-w-3xl gap-4 px-2 py-12">
	<Heading />
	<SearchBar {searchFunction} />
</section>
