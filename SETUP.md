# Paunify Setup Guide

## Prerequisites

- Node.js 18+
- Spotify Account

## Installation

```bash
npm install
```

## Spotify Configuration

### 1. Get Spotify Client ID
1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Login with your Spotify account
3. Click "Create An App"
4. Fill in app name: "Paunify" and description
5. Copy the **Client ID**

### 2. Configure Redirect URIs
1. In your Spotify Dashboard, click "Edit Settings"
2. Add to **Redirect URIs**:
   - `http://localhost:5173/callback` (for development)
   - `https://your-domain.pages.dev/callback` (for production)

### 3. Set Environment Variable

Create a `.env` file in the project root:
```bash
cp .env.example .env
```

Edit `.env` and add your Client ID:
```bash
VITE_SPOTIFY_CLIENT_ID=your_actual_client_id_here
```

## Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building

```bash
npm run build
```

## Deployment

### Cloudflare Pages
```bash
npx wrangler pages deploy dist
```

### Vercel
```bash
npm run build
# Deploy the dist folder to Vercel
```

## Features

- 🎸 Retro 70s room visualization
- 🔥 Personalized music taste roast
- 📸 Export as image
- 🔗 Share to social media
- 👥 Roast Your Friend feature

## Tech Stack

- Vite + React + TypeScript
- TailwindCSS
- Framer Motion
- Zustand
- html2canvas
