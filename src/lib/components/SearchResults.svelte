<script async script lang="ts">
	import { getVideoStatistics } from '$lib/api/getVideoStatistics';
	import type { Statistics } from '$lib/types/statistics';
	import type { Video } from '$lib/types/video';

	export let searchResults: Video[] = [];

	let videoStats: { [key: string]: Statistics } = {};
	$: videoStats;

	async function getVideoStats() {
		for (let results of searchResults) {
			const stats: Statistics = await getVideoStatistics(results.id.videoId);
			videoStats[results.id.videoId] = stats;
			console.log(videoStats);
		}
	}

	getVideoStats();

	$: loading = true;
	$: {
		if (Object.keys(videoStats).length === searchResults.length) {
			loading = false;
		}
	}
</script>

<section>
	{#if loading}
		<p>Loading...</p>
	{:else if searchResults.length > 0}
		<ul class="flex flex-col gap-2">
			{#each searchResults as video}
				<li class="flex flex-row gap-4 hover:bg-neutral-800 p-2 rounded-2xl">
					<img
						src={video.snippet.thumbnails.high.url}
						alt={video.snippet.title}
						class="w-48 object-fill rounded-xl"
					/>
					<div class="flex flex-col gap-2">
						<div class="flex flex-col">
							<a
								href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
								target="_blank"
								class="text-lg font-bold hover:underline">{video.snippet.title}</a
							>
							<div class="flex flex-row gap-1 justify-start items-center">
								<p class="text-xs">
									{Number(videoStats[video.id.videoId]?.commentCount).toLocaleString()} comments
								</p>
								<p>&#x2022;</p>
								<p class="text-xs">
									{Number(videoStats[video.id.videoId]?.viewCount).toLocaleString()} views
								</p>
							</div>
						</div>
						<div class="flex flex-row gap-2 justify-start items-center">
							<img
								src={video.snippet.thumbnails.high.url}
								alt={video.snippet.title}
								class="w-4 h-4 rounded-full"
							/>
							<p class="text-xs font-semibold">{video.snippet.channelTitle}</p>
						</div>
						<p class="text-xs">{video.snippet.description}</p>
					</div>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No search results found</p>
	{/if}
</section>
