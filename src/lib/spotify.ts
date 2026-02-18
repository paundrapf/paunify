// Spotify OAuth 2.0 PKCE Flow
// Set your Spotify Client ID via environment variable VITE_SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID || '93f5af3067cd426baa8d986129ace81c';
const REDIRECT_URI = window.location.origin + '/callback';
const AUTH_PROXY = 'https://paunify-oauth.farexoe.workers.dev/auth/token'; // Cloudflare Worker proxy
const SCOPES = [
  'user-read-private',
  'user-read-email',
  'user-top-read',
  'user-read-recently-played'
].join(' ');

function generateCodeVerifier(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

async function generateCodeChallenge(verifier: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

export async function initiateSpotifyLogin(): Promise<void> {
  const verifier = generateCodeVerifier();
  const challenge = await generateCodeChallenge(verifier);
  
  // Store verifier
  localStorage.setItem('spotify_code_verifier', verifier);
  
  const params = new URLSearchParams({
    client_id: SPOTIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    code_challenge_method: 'S256',
    code_challenge: challenge,
    scope: SCOPES,
    state: Math.random().toString(36).substring(2, 15)
  });

  window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

export async function exchangeCodeForTokens(code: string): Promise<{ access_token: string; expires_in: number }> {
  const verifier = localStorage.getItem('spotify_code_verifier');
  if (!verifier) {
    throw new Error('Code verifier not found');
  }

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: REDIRECT_URI,
    client_id: SPOTIFY_CLIENT_ID,
    code_verifier: verifier
  }).toString();

  // Use Cloudflare Worker proxy to avoid CORS
  const response = await fetch(AUTH_PROXY, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Token exchange failed:', response.status, errorText);
    throw new Error('Token exchange failed: ' + response.status);
  }

  const tokens = await response.json();
  
  // Clean up
  localStorage.removeItem('spotify_code_verifier');
  
  return {
    access_token: tokens.access_token,
    expires_in: tokens.expires_in
  };
}

export function isTokenExpired(): boolean {
  const expiresAt = localStorage.getItem('spotify_expires_at');
  if (!expiresAt) return true;
  return Date.now() > parseInt(expiresAt);
}
