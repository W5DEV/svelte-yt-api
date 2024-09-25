export async function getVideoStatistics(id: string) {
	try {
		const response = await fetch(
			`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=&key=${import.meta.env.VITE_API_KEY}`,
			{
				method: 'GET'
			}
		);
		if (response.ok) {
			const data = await response.json();
			return data.items[0].statistics;
		}
	} catch (error) {
		console.error(error);
	}
}
