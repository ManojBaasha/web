<script lang="ts">
  import { onMount } from 'svelte';

  let song: {
    isPlaying: boolean;
    title?: string;
    artist?: string;
    albumImageUrl?: string;
    songUrl?: string;
  } = {
    isPlaying: false
  };

  let loading = true;

  async function getNowPlaying() {
    try {
      loading = true;
      const res = await fetch('/api/spotify');
      song = await res.json();
    } catch (error) {
      console.error('Error fetching Spotify data:', error);
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    getNowPlaying();
    // Update every 30 seconds
    const interval = setInterval(getNowPlaying, 30000);
    return () => clearInterval(interval);
  });
</script>

<div class="spotify-now-playing">
  {#if loading}
    <div class="spotify-loading">
      <div class="spotify-icon">
        <svg viewBox="0 0 168 168" xmlns="http://www.w3.org/2000/svg">
          <path d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"/>
        </svg>
      </div>
      <p>Loading...</p>
    </div>
  {:else if song.isPlaying}
    <a href={song.songUrl} target="_blank" rel="noopener noreferrer" class="spotify-container">
      <div class="spotify-info">
        <div class="spotify-icon">
          <svg viewBox="0 0 168 168" xmlns="http://www.w3.org/2000/svg">
            <path d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"/>
          </svg>
        </div>
        <div class="spotify-details">
          <div class="spotify-animation">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p class="spotify-song">{song.title}</p>
          <p class="spotify-artist">by {song.artist}</p>
        </div>
      </div>
      {#if song.albumImageUrl}
        <div class="spotify-album-image">
          <img src={song.albumImageUrl} alt={`${song.title} album cover`} />
        </div>
      {/if}
    </a>
  {:else}
    <div class="spotify-container not-playing">
      <div class="spotify-info">
        <div class="spotify-icon">
          <svg viewBox="0 0 168 168" xmlns="http://www.w3.org/2000/svg">
            <path d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"/>
          </svg>
        </div>
        <div class="spotify-details">
          <p class="spotify-song">Not Playing</p>
          <p class="spotify-artist">Spotify</p>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .spotify-now-playing {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;
    max-width: 300px;
  }

  .spotify-container {
    display: flex;
    align-items: center;
    background-color: var(--main);
    border: 1px solid var(--accent-lighter);
    border-radius: 8px;
    padding: 12px;
    text-decoration: none;
    color: var(--main-text);
    transition: all 0.3s ease;
  }

  .spotify-container:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .spotify-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 12px;
  }

  .spotify-icon {
    width: 24px;
    height: 24px;
    margin-bottom: 6px;
    fill: #1DB954;
  }

  .spotify-details {
    display: flex;
    flex-direction: column;
  }

  .spotify-song {
    font-weight: bold;
    font-size: 14px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 180px;
  }

  .spotify-artist {
    font-size: 12px;
    opacity: 0.8;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 180px;
  }

  .spotify-album-image {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
  }

  .spotify-album-image img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
  }

  .spotify-animation {
    display: flex;
    align-items: flex-end;
    height: 16px;
    margin-bottom: 4px;
  }

  .spotify-animation span {
    width: 4px;
    margin-right: 3px;
    border-radius: 2px;
    background: #1DB954;
    animation: sound 1.5s infinite ease-in-out;
  }

  .spotify-animation span:nth-child(1) {
    height: 8px;
    animation-delay: 0.2s;
  }

  .spotify-animation span:nth-child(2) {
    height: 12px;
    animation-delay: 0.6s;
  }

  .spotify-animation span:nth-child(3) {
    height: 6px;
    animation-delay: 0.8s;
  }

  @keyframes sound {
    0% {
      height: 3px;
    }
    50% {
      height: 12px;
    }
    100% {
      height: 3px;
    }
  }

  .spotify-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px;
    background-color: var(--main);
    border: 1px solid var(--accent-lighter);
    border-radius: 8px;
  }

  .spotify-loading p {
    font-size: 12px;
    margin-top: 6px;
    opacity: 0.8;
  }

  .not-playing {
    opacity: 0.7;
  }
</style> 