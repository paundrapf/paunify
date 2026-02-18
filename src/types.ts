export interface SpotifyUser {
  id: string;
  display_name: string;
  email: string;
  images?: { url: string }[];
  country: string;
  product: string;
}

export interface SpotifyTrack {
  id: string;
  name: string;
  artists: { name: string; id: string }[];
  album: {
    id: string;
    name: string;
    images: { url: string; width: number; height: number }[];
  };
  popularity: number;
  duration_ms: number;
}

export interface SpotifyArtist {
  id: string;
  name: string;
  genres: string[];
  images: { url: string }[];
  popularity: number;
  followers: { total: number };
}

export interface SpotifyPlayHistory {
  track: SpotifyTrack;
  played_at: string;
}

export interface SpotifyAudioFeatures {
  id: string;
  valence: number;
  energy: number;
  danceability: number;
  tempo: number;
  acousticness: number;
  instrumentalness: number;
  liveness: number;
  speechiness: number;
  key: number;
  mode: number;
  time_signature: number;
}

export interface SpotifyData {
  user: SpotifyUser;
  topTracks: {
    short: SpotifyTrack[];
    medium: SpotifyTrack[];
    long: SpotifyTrack[];
  };
  topArtists: {
    short: SpotifyArtist[];
    medium: SpotifyArtist[];
    long: SpotifyArtist[];
  };
  recentlyPlayed: SpotifyPlayHistory[];
  audioFeatures: SpotifyAudioFeatures[];
}

export type RoastSeverity = 'mild' | 'medium' | 'savage';

export interface PatternScore {
  patternId: string;
  patternName: string;
  matchPercentage: number;
  severity: RoastSeverity;
  score: number;
  roastMessage: string;
  badge?: string;
}

export interface RoastResult {
  primaryPattern: PatternScore;
  secondaryPatterns: PatternScore[];
  overallRoast: string;
  personalityType: string;
  personalityDescription: string;
  badges: string[];
}

export type RoomTemplate = 'bedroom' | 'vinyl_store' | 'disco' | 'coffee_shop' | 'garage' | 'kpop_room';

export interface RoomConfig {
  template: RoomTemplate;
  primaryColor: string;
  accentColor: string;
  lighting: 'warm' | 'neon' | 'dim';
}

export interface AppState {
  // Auth
  accessToken: string | null;
  expiresAt: number | null;
  setTokens: (access: string, expiresIn: number) => void;
  clearTokens: () => void;

  // Data
  spotifyData: SpotifyData | null;
  setSpotifyData: (data: SpotifyData) => void;

  // Roast
  roastResult: RoastResult | null;
  setRoastResult: (result: RoastResult) => void;

  // Room
  roomConfig: RoomConfig;
  setRoomConfig: (config: Partial<RoomConfig>) => void;

  // UI
  currentView: 'landing' | 'loading' | 'room';
  setCurrentView: (view: 'landing' | 'loading' | 'room') => void;

  // Export
  isExporting: boolean;
  setIsExporting: (value: boolean) => void;
}
