import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { FadeIn } from "../components/FadeIn"
import {
  getTopItems,
  getRecentlyPlayed,
  getUserProfile,
  getFollowedArtists,
  getSavedTracks,
  getPlaylists,
  refreshAccessToken,
} from "@/lib/spotify"

async function fetchAllStats(accessToken: string, refreshToken: string) {
  try {
    const [topTracks, topArtists, recentlyPlayed, userProfile, followedArtists, savedTracks, playlists] =
      await Promise.all([
        getTopItems("tracks", accessToken),
        getTopItems("artists", accessToken),
        getRecentlyPlayed(accessToken),
        getUserProfile(accessToken),
        getFollowedArtists(accessToken),
        getSavedTracks(accessToken),
        getPlaylists(accessToken),
      ])

    return {
      topTracks,
      topArtists,
      recentlyPlayed,
      userProfile,
      followedArtists,
      savedTracks,
      playlists,
    }
  } catch (error) {
    if (error instanceof Error && error.message === "Spotify access token expired") {
      // Token kedaluwarsa, coba refresh
      const newTokens = await refreshAccessToken(refreshToken)
      // Simpan token baru (ini harus dilakukan dengan cara yang lebih aman dalam produksi)
      cookies().set("spotify_access_token", newTokens.access_token, { httpOnly: true, maxAge: newTokens.expires_in })
      if (newTokens.refresh_token) {
        cookies().set("spotify_refresh_token", newTokens.refresh_token, { httpOnly: true })
      }
      // Coba lagi dengan token baru
      return fetchAllStats(newTokens.access_token, refreshToken)
    }
    throw error
  }
}

export default async function Stats() {
  const cookieStore = cookies()
  const accessToken = cookieStore.get("spotify_access_token")?.value
  const refreshToken = cookieStore.get("spotify_refresh_token")?.value

  if (!accessToken || !refreshToken) {
    redirect("/")
  }

  try {
    const stats = await fetchAllStats(accessToken, refreshToken)

    return (
      <main className="min-h-screen pt-20">
        <FadeIn>
          <section className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">Your Spotify Stats</h1>

            {/* Render stats here (sama seperti sebelumnya) */}
          </section>
        </FadeIn>
      </main>
    )
  } catch (error) {
    console.error("Error fetching Spotify stats:", error)
    return (
      <main className="min-h-screen pt-20">
        <FadeIn>
          <section className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">Error</h1>
            <p>Sorry, we couldn't fetch your Spotify stats. Please try logging in again.</p>
          </section>
        </FadeIn>
      </main>
    )
  }
}

