import querystring from "querystring";
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const getAccessToken = async () => {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: "POST",
		headers: {
			Authorization: `Basic ${basic}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: querystring.stringify({
			grant_type: "refresh_token",
			refresh_token,
		}),
	});

	return response.json();
};

export const getNowPlaying = async () => {
	const { access_token } = await getAccessToken();
	return fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export default async function getNowPlayingItem() {
	const response = await getNowPlaying();
	if (response.status === 204 || response.status > 400) {
		return false;
	}
	const song = await response.json();
	const albumImageUrl = song.item.album.images[0].url;
	const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
	const isPlaying = song.is_playing;
	const songUrl = song.item.external_urls.spotify;
	const title = song.item.name;

	return {
		albumImageUrl,
		artist,
		isPlaying,
		songUrl,
		title,
	};
}