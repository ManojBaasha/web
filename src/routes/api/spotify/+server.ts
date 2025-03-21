import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

// Spotify API endpoints
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';

// Spotify credentials from environment variables
const CLIENT_ID = env.SPOTIFY_CLIENT_ID || '';
const CLIENT_SECRET = env.SPOTIFY_CLIENT_SECRET || '';
const REFRESH_TOKEN = env.SPOTIFY_REFRESH_TOKEN || '';

const getBasicAuth = () => {
  return btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
};

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${getBasicAuth()}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    }),
  });

  return response.json();
};

export const GET: RequestHandler = async () => {
  try {
    // Check if we have the required environment variables
    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
      return json({ 
        isPlaying: false, 
        error: 'Missing Spotify credentials. Please set environment variables.'
      });
    }
    
    const { access_token } = await getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // If no track is playing or another error, return isPlaying: false
    if (response.status === 204 || response.status > 400) {
      return json({ isPlaying: false });
    }

    const song = await response.json();

    if (song.item === null) {
      return json({ isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((artist: { name: string }) => artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    });
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return json({ isPlaying: false, error: 'Failed to fetch' });
  }
}; 