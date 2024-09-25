<script lang="ts">
	import { onMount } from 'svelte';
	import searchIcon from '../assets/icons/SearchIcon.svg';
	export let searchFunction: (searchInput: string) => void;

	onMount(() => {
		const searchInput = document.querySelector('input');
		if (searchInput) {
			searchInput.value = '';
		}
	});

	function handleSearch() {
		const searchInput = document.querySelector('input')?.value;
		if (searchInput) {
			searchFunction(searchInput);
			return;
		}
		alert('Please enter a search term');
	}
</script>

<form class="flex flex-row items-center justify-between w-full h-12 px-4 border rounded-2xl">
	<input type="text" placeholder="Search for videos" class="flex-1 h-full bg-transparent" />
	<button on:click={() => handleSearch()} class="w-auto h-8">
		<img class="w-auto h-full" src={searchIcon} alt="Search" />
	</button>
</form>

<style>
	input {
		outline: 0;
	}
</style>
