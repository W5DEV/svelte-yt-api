<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	export let searchFunction;
</script>

<div class="flex flex-col items-center justify-center gap-4 w-full max-w-3xl py-12 px-2">
	<Heading />
	<SearchBar {searchFunction} />
</div>
