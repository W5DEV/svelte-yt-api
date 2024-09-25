<script lang="ts">
	import { getSearchResults } from '$lib/api/getSearchResults';
	import SearchResults from '$lib/pages/SearchResults.svelte';
	import type { Video } from '$lib/types/video';
	import SearchPage from '$lib/pages/SearchPage.svelte';

	let results: Video[] = [];
	$: results;
	$: showResults = false;

	async function updateSearchResults(searchInput: string) {
		results = await getSearchResults(searchInput);
		showResults = true;
	}
</script>

<svelte:head>
	<title>YT API Search</title>
</svelte:head>

<main class="w-full flex items-center justify-center">
	{#if showResults}
		<SearchResults searchResults={results} />
	{:else}
		<SearchPage searchFunction={updateSearchResults} />
	{/if}
</main>
