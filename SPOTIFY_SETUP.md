# Spotify Now Playing Setup

This guide will help you set up the Spotify "Now Playing" widget for your portfolio website.

## Step 1: Create a Spotify Developer Application

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)
2. Log in with your Spotify account
3. Click on "Create an App"
4. Fill in the app name and description, then click "Create"
5. In your app dashboard, note your **Client ID** and **Client Secret** (click "Show Client Secret" to reveal it)
6. Click "Edit Settings" and add the following Redirect URI:
   ```
   http://localhost:3000
   ```
7. Click "Save"

## Step 2: Get Authorization Code

1. Replace `YOUR_CLIENT_ID` in the URL below with your actual Client ID:
   ```
   https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing
   ```

2. Open this URL in your browser
3. Accept the permissions
4. You'll be redirected to a URL like:
   ```
   http://localhost:3000/?code=LONG_AUTHORIZATION_CODE
   ```
5. Copy the code value (everything after `code=`)

## Step 3: Get Refresh Token

1. Run the following command in your terminal, replacing the placeholders with your values:

```bash
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" \
     -H "Authorization: Basic BASE64_ENCODED_CLIENT_ID_AND_SECRET" \
     -d "grant_type=authorization_code&code=CODE_FROM_STEP_2&redirect_uri=http%3A%2F%2Flocalhost:3000" \
     https://accounts.spotify.com/api/token
```

Where:
- `BASE64_ENCODED_CLIENT_ID_AND_SECRET` is the base64 encoded string of `your_client_id:your_client_secret`
  - You can generate this at https://www.base64encode.org/ by entering `your_client_id:your_client_secret`
- `CODE_FROM_STEP_2` is the authorization code you got from Step 2

2. From the JSON response, copy the `refresh_token` value

## Step 4: Set Environment Variables

1. Create a `.env` file in the root of the project (copy from `.env.example`)
2. Add the following values:

```
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```

## Step 5: Deploy

1. When deploying to your hosting provider (like Vercel, Netlify, etc.), add these environment variables in your hosting provider's dashboard.

## Important Notes

- The refresh token is valid indefinitely unless you revoke it
- Keep your Client Secret and Refresh Token private
- If you're facing any issues, check the Spotify API documentation for more details 