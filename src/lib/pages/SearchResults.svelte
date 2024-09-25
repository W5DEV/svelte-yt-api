<script lang="ts">
	import FilterResults from '$lib/components/FilterResults.svelte';
	import SearchResults from '$lib/components/SearchResults.svelte';
	export let searchResults, searchQuery, updateOrder, videoStats, loading;
</script>

<section class="w-full p-8 flex flex-col items-center justify-center">
	<FilterResults {searchQuery} {updateOrder} />
	<SearchResults {searchResults} {videoStats} {loading} />
</section>
