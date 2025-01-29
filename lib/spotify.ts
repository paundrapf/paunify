export const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
export const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
export const SPOTIFY_REDIRECT_URI = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`

export const SPOTIFY_SCOPES = [
  "user-read-private",
  "user-read-email",
  "user-top-read",
  "user-read-recently-played",
  "playlist-read-private",
  "playlist-read-collaborative",
].join(" ")

export const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize"

export async function fetchSpotifyApi(endpoint: string, accessToken: string) {
  const response = await fetch(`https://api.spotify.com/v1${endpoint}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return await response.json()
}

export async function getTopItems(type: "tracks" | "artists", accessToken: string, timeRange = "medium_term") {
  return fetchSpotifyApi(`/me/top/${type}?time_range=${timeRange}&limit=10`, accessToken)
}

export async function getRecentlyPlayed(accessToken: string) {
  return fetchSpotifyApi("/me/player/recently-played?limit=10", accessToken)
}

export async function getUserProfile(accessToken: string) {
  return fetchSpotifyApi("/me", accessToken)
}

export async function getFollowedArtists(accessToken: string) {
  return fetchSpotifyApi("/me/following?type=artist", accessToken)
}

export async function getSavedTracks(accessToken: string) {
  return fetchSpotifyApi("/me/tracks?limit=10", accessToken)
}

export async function getPlaylists(accessToken: string) {
  return fetchSpotifyApi("/me/playlists?limit=10", accessToken)
}

