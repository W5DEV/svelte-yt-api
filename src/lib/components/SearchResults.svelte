<script async script lang="ts">
	import type { Statistics } from '$lib/types/statistics';
	import type { Video } from '$lib/types/video';

	export let searchResults: Video[], videoStats: { [key: string]: Statistics }, loading: boolean;
	$: searchResults;
	$: videoStats;
	$: loading;
</script>

<div>
	{#if loading}
		<p>Loading...</p>
	{:else if searchResults.length > 0}
		<ul class="flex flex-col gap-2">
			{#each searchResults as video}
				<li class="flex flex-row gap-4 p-2 hover:bg-neutral-800 rounded-2xl">
					<img
						src={video.snippet.thumbnails.high.url}
						alt={video.snippet.title}
						class="object-fill w-48 rounded-xl"
					/>
					<div class="flex flex-col gap-2">
						<div class="flex flex-col">
							<a
								href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
								target="_blank"
								class="text-lg font-bold hover:underline">{video.snippet.title}</a
							>
							{#if video.snippet.channelTitle !== 'YouTube Movies'}
								<div class="flex flex-row items-center justify-start gap-1">
									<p class="text-xs">
										{videoStats[video.id.videoId]?.commentCount === '0' ||
										videoStats[video.id.videoId]?.commentCount === 'undefined' ||
										videoStats[video.id.videoId]?.commentCount === 'NaN' ||
										videoStats[video.id.videoId]?.commentCount === undefined
											? 'No'
											: Number(videoStats[video.id.videoId]?.commentCount).toLocaleString()} comments
									</p>
									<p>&#x2022;</p>
									<p class="text-xs">
										{videoStats[video.id.videoId]?.viewCount === '0' ||
										videoStats[video.id.videoId]?.viewCount === 'undefined' ||
										videoStats[video.id.videoId]?.viewCount === 'NaN' ||
										videoStats[video.id.videoId]?.viewCount === undefined
											? 'No'
											: Number(videoStats[video.id.videoId]?.viewCount).toLocaleString()} views
									</p>
								</div>
							{/if}
						</div>
						<div class="flex flex-row items-center justify-start gap-2">
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
</div>
