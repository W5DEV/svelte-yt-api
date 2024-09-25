<script lang="ts">
	export let updateOrder: (filter: string) => void;
	export let searchQuery: string;

	$: openMenu = false;
</script>

<div
	class="flex items-center justify-between w-full px-4 py-4 border-b border-base-content/20 sm:px-6 sm:py-6 lg:px-8"
>
	<h1 class="text-base font-semibold leading-7">
		Results for "{searchQuery}"
	</h1>

	<!-- Sort dropdown -->
	<div class="relative">
		<button
			type="button"
			on:click={() => (openMenu = !openMenu)}
			class="flex items-center text-sm font-medium leading-6 gap-x-1"
			id="sort-menu-button"
			aria-expanded="false"
			aria-haspopup="true"
		>
			Sort Results
			<svg class="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path
					fill-rule="evenodd"
					d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
		<div
			class={'absolute w-auto h-auto bg-neutral-900 rounded-md shadow-lg z-10 top-12 right-0 ' +
				(!openMenu ? 'hidden' : '')}
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="sort-menu-button"
		>
			<ul class="py-1">
				<li class="relative">
					<button
						on:click={() => {
							updateOrder('Relevance');
							openMenu = false;
						}}
						class="block w-full px-4 py-2 text-sm hover:bg-neutral-800"
						role="menuitem"
					>
						Relevance
					</button>
				</li>
				<li class="relative">
					<button
						on:click={() => {
							updateOrder('Rating');
							openMenu = false;
						}}
						class="block w-full px-4 py-2 text-sm hover:bg-neutral-800"
						role="menuitem"
					>
						Rating
					</button>
				</li>
				<li class="relative">
					<button
						on:click={() => {
							updateOrder('Date');
							openMenu = false;
						}}
						class="block w-full px-4 py-2 text-sm hover:bg-neutral-800"
						role="menuitem"
					>
						Date
					</button>
				</li>
			</ul>
		</div>
	</div>
</div>
