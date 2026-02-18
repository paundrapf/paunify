# Paunify 🎸

Visualisasi mendengarkan Spotify lo dalam ruangan retro 70s yang aesthetic. Beda dari receiptify - ini bukan karcis, tapi ruangan!

## Features

- 🎸 **Retro 70s Room** - Ruangan aesthetic dengan album frames, vinyl player, lava lamp
- 🔥 **Music Roast** - Analisa taste musik lo dan dapat roasting yang sesuai
- 📸 **Export Image** - Download hasil room sebagai gambar
- 🔗 **Share** - Share ke Twitter, Facebook
- 👥 **Roast Your Friend** - Roast temen lo lewat link

## Tech Stack

- Vite + React + TypeScript
- TailwindCSS
- Framer Motion
- Zustand
- html2canvas

## Getting Started

### Prerequisites

- Node.js 18+
- Spotify Account

### Installation

```bash
npm install
```

### Spotify Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Copy your **Client ID**
4. Add Redirect URIs:
   - `http://localhost:5173/callback` (development)
   - `https://your-domain.pages.dev/callback` (production)

5. Create `.env` file:
```bash
cp .env.example .env
```

6. Edit `.env` and add your Client ID:
```
VITE_SPOTIFY_CLIENT_ID=your_client_id_here
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build

```bash
npm run build
```

### Deploy to Cloudflare Pages

```bash
npx wrangler pages deploy dist
```

## Roast Patterns

Paunify punya 30+ patterns untuk menganalisa musik lo:

- **Genre:** Indie Skena, JKT48, K-Pop, Dangdut Koplo, Metal, Jazz, Lo-Fi, EDM, Rap, R&B, Anime, Bollywood, dll
- **Audio Features:** Sad Boi Hours, Hyper Positive, Club Ready, Acoustic Vibe, Workout Beast
- **Behavioral:** On Repeat Abuser, Night Owl, Local Pride, Genre Hopper
- **Obscurity:** Mainstream Basic, Balanced, Underground Skena

## License

MIT

---

Made with ❤️ for Gen-Z Indonesia
