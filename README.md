# Paunify

Transform your Spotify listening history into a retro 70s room visualization. Instead of a receipt like receiptify, get an aesthetic room with your top albums as framed artwork.

![Paunify Preview](https://ibb.co.com/6c5CrQxL)

## About

Paunify analyzes your Spotify data and creates a unique visual representation of your music taste. See your top albums displayed as framed artwork in a cozy retro room, complete with spinning vinyl player, lava lamp, and retro TV.

## Features

- **Retro 70s Room** - Aesthetic room visualization with album frames, vinyl player, and lava lamp
- **Music Taste Analysis** - Get roasted based on your listening habits
- **Export Image** - Download your room as PNG
- **Social Sharing** - Share to Twitter/X, Facebook
- **Roast Your Friend** - Generate a shareable link to roast your friends

## Tech Stack

- Vite + React + TypeScript
- TailwindCSS
- Framer Motion
- Zustand
- html2canvas

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

Open `http://localhost:5173` in your browser.

## Spotify Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Copy your Client ID
4. Add Redirect URIs:
   - `http://localhost:5173/callback` (development)
   - `https://your-domain.pages.dev/callback` (production)
5. Create `.env` file:
   ```bash
   cp .env.example .env
   ```
6. Add your Client ID to `.env`:
   ```
   VITE_SPOTIFY_CLIENT_ID=your_client_id
   ```

## Deployment

### Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy dist
```

### Build Only

```bash
npm run build
```

The built files will be in the `dist` folder.

## How It Works

Paunify analyzes your Spotify data through multiple patterns:

- **Genre Detection** - Identifies your dominant music taste
- **Audio Features** - Analyzes mood (happy, sad, energetic)
- **Behavioral Patterns** - Detects listening habits (repeat, night owl)
- **Obscurity Score** - Measures how mainstream or underground you are

## Requirements

- Node.js 18+
- Spotify Premium account (required for Web API access)
- Modern web browser

## License

MIT

---

Built for Gen-Z Indonesia who want to show off their music taste in a unique way.
