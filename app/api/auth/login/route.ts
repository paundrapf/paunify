import { NextResponse } from "next/server"
import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI, SPOTIFY_SCOPES, SPOTIFY_AUTH_URL } from "@/lib/spotify"

export async function GET() {
  const state = Math.random().toString(36).substring(7)

  const params = new URLSearchParams({
    client_id: SPOTIFY_CLIENT_ID!,
    response_type: "code",
    redirect_uri: SPOTIFY_REDIRECT_URI,
    scope: SPOTIFY_SCOPES,
    state: state,
  })

  const authUrl = `${SPOTIFY_AUTH_URL}?${params.toString()}`

  return NextResponse.json({ url: authUrl })
}

