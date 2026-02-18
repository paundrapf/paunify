import type { 
  SpotifyUser, 
  SpotifyTrack, 
  SpotifyArtist, 
  SpotifyPlayHistory, 
  SpotifyAudioFeatures,
  SpotifyData
} from '../types';

class SpotifyAPI {
  private accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  private async fetch<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    const url = new URL(`https://api.spotify.com/v1${endpoint}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    const response = await fetch(url.toString(), {
      headers: {
        'Authorization': `Bearer ${this.accessToken}`
      }
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('TOKEN_EXPIRED');
      }
      throw new Error(`API error: ${response.status}`);
    }

    return response.json();
  }

  async getCurrentUser(): Promise<SpotifyUser> {
    return this.fetch('/me');
  }

  async getTopTracks(
    timeRange: 'short_term' | 'medium_term' | 'long_term' = 'medium_term',
    limit: number = 50
  ): Promise<SpotifyTrack[]> {
    const data = await this.fetch<{ items: SpotifyTrack[] }>('/me/top/tracks', {
      time_range: timeRange,
      limit: limit.toString()
    });
    return data.items;
  }

  async getTopArtists(
    timeRange: 'short_term' | 'medium_term' | 'long_term' = 'medium_term',
    limit: number = 50
  ): Promise<SpotifyArtist[]> {
    const data = await this.fetch<{ items: SpotifyArtist[] }>('/me/top/artists', {
      time_range: timeRange,
      limit: limit.toString()
    });
    return data.items;
  }

  async getRecentlyPlayed(limit: number = 50): Promise<SpotifyPlayHistory[]> {
    const data = await this.fetch<{ items: SpotifyPlayHistory[] }>('/me/player/recently-played', {
      limit: limit.toString()
    });
    return data.items;
  }

  async getAudioFeatures(trackIds: string[]): Promise<SpotifyAudioFeatures[]> {
    const chunks = [];
    for (let i = 0; i < trackIds.length; i += 100) {
      chunks.push(trackIds.slice(i, i + 100));
    }

    const results = await Promise.all(
      chunks.map(chunk => 
        this.fetch<{ audio_features: SpotifyAudioFeatures[] }>('/audio-features', { ids: chunk.join(',') })
      )
    );

    return results.flatMap(r => r.audio_features).filter(Boolean);
  }
}

export async function fetchAllSpotifyData(accessToken: string): Promise<SpotifyData> {
  const api = new SpotifyAPI(accessToken);

  const [
    user,
    topTracksShort,
    topTracksMedium,
    topTracksLong,
    topArtistsShort,
    topArtistsMedium,
    topArtistsLong,
    recentlyPlayed
  ] = await Promise.all([
    api.getCurrentUser(),
    api.getTopTracks('short_term', 50),
    api.getTopTracks('medium_term', 50),
    api.getTopTracks('long_term', 50),
    api.getTopArtists('short_term', 50),
    api.getTopArtists('medium_term', 50),
    api.getTopArtists('long_term', 50),
    api.getRecentlyPlayed(50)
  ]);

  const topTrackIds = topTracksMedium.map(t => t.id);
  const audioFeatures = await api.getAudioFeatures(topTrackIds);

  return {
    user,
    topTracks: {
      short: topTracksShort,
      medium: topTracksMedium,
      long: topTracksLong
    },
    topArtists: {
      short: topArtistsShort,
      medium: topArtistsMedium,
      long: topArtistsLong
    },
    recentlyPlayed,
    audioFeatures
  };
}

export default SpotifyAPI;
