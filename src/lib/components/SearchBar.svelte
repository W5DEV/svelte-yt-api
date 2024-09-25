<script lang="ts">
	import { onMount } from 'svelte';
	import searchIcon from '../icons/SearchIcon.svg';
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

<form class="border rounded-2xl px-4 h-12 w-full flex flex-row justify-between items-center">
	<input type="text" placeholder="Search for videos" class="bg-transparent h-full flex-1" />
	<button on:click={() => handleSearch()} class="w-auto h-8">
		<img class="w-auto h-full" src={searchIcon} alt="Search" />
	</button>
</form>

<style>
	input {
		outline: 0;
	}
</style>
