import { NextResponse } from "next/server"
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REDIRECT_URI } from "@/lib/spotify"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")
  const state = searchParams.get("state")

  if (code) {
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + Buffer.from(SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET).toString("base64"),
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: SPOTIFY_REDIRECT_URI,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch access token")
      }

      const data = await response.json()

      // Here, you would typically save the tokens to a database or session
      // For this example, we'll just set them as cookies
      const res = NextResponse.redirect(new URL("/stats", request.url))
      res.cookies.set("spotify_access_token", data.access_token, {
        httpOnly: true,
        maxAge: data.expires_in,
      })
      res.cookies.set("spotify_refresh_token", data.refresh_token, {
        httpOnly: true,
      })

      return res
    } catch (error) {
      console.error("Error in callback:", error)
      return NextResponse.redirect(new URL("/error", request.url))
    }
  } else {
    return NextResponse.redirect(new URL("/error", request.url))
  }
}

