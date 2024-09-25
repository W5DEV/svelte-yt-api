<script lang="ts">
	import SearchResults from '$lib/components/SearchResults.svelte';
	export let searchResults;
</script>

<section class="w-full p-8 flex flex-col items-center justify-center">
	<SearchResults {searchResults} />
</section>
