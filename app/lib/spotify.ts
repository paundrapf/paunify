export const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
export const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
export const SPOTIFY_REDIRECT_URI = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`

export const SPOTIFY_SCOPES = [
  "user-read-private",
  "user-read-email",
  "user-top-read",
  "user-read-recently-played",
  "user-library-read",
  "playlist-read-private",
  "playlist-read-collaborative",
].join(" ")

export const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize`

