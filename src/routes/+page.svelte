<script lang="ts">
	import { getSearchResults } from '$lib/api/getSearchResults';
	import SearchResults from '$lib/views/SearchResults.svelte';
	import type { Video } from '$lib/types/video';
	import SearchPage from '$lib/views/SearchPage.svelte';
	import type { Statistics } from '$lib/types/statistics';
	import { getVideoStatistics } from '$lib/api/getVideoStatistics';

	let results: Video[] = [];
	let videoStats: { [key: string]: Statistics } = {};
	$: results;
	$: videoStats;
	$: showResults = false;
	$: loading = true;

	$: order = 'relevance';
	$: searchQuery = '';

	async function updateOrder(newOrder: string) {
		loading = true;
		order = newOrder;
		await updateSearchResults(searchQuery);
	}

	async function updateSearchResults(searchInput: string) {
		searchQuery = searchInput;
		results = await getSearchResults(searchInput, order);
		await getVideoStats();
		showResults = true;
	}

	async function getVideoStats() {
		for (let result of results) {
			const stats: Statistics = await getVideoStatistics(result.id.videoId);
			videoStats[result.id.videoId] = stats;
		}
		loading = false;
	}
</script>

<svelte:head>
	<title>YT API Search</title>
</svelte:head>

<main class="w-full flex items-center justify-center">
	{#if showResults}
		<SearchResults searchResults={results} {searchQuery} {updateOrder} {videoStats} {loading} />
	{:else}
		<SearchPage searchFunction={updateSearchResults} />
	{/if}
</main>
