export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // Handle OAuth token exchange
    if (url.pathname === '/auth/token' && request.method === 'POST') {
      const body = await request.text();
      
      // Forward to Spotify
      const spotifyResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body
      });

      const data = await spotifyResponse.text();
      
      return new Response(data, {
        status: spotifyResponse.status,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    return new Response('Not Found', { status: 404 });
  }
}
