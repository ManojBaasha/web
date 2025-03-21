# Portfolio Website

## Features

- Responsive design
- Dark/light mode
- Projects showcase
- Resume
- Skills display
- Spotify Now Playing widget that shows your currently playing track

## Spotify Now Playing Setup

The portfolio includes a feature that displays your currently playing Spotify track. To set this up:

1. Follow the detailed instructions in [SPOTIFY_SETUP.md](SPOTIFY_SETUP.md)
2. Make sure to set the environment variables for Spotify API integration

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install` or `yarn install`
3. Run the development server: `npm run dev` or `yarn dev`
4. Build for production: `npm run build` or `yarn build`

## Environment Variables

Copy the `.env.example` file to `.env` and fill in the values:

```
# Spotify API credentials
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```

## Deployment

The website is deployed using GitHub Pages. The workflow is configured in `.github/workflows/deploy.yml`.
