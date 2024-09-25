export async function getSearchResults(query: string) {
	try {
		const response = await fetch(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&key=${import.meta.env.VITE_API_KEY}`,
			{
				method: 'GET'
			}
		);
		if (response.ok) {
			const data = await response.json();
			return data.items;
		}
	} catch (error) {
		console.error(error);
	}
}
