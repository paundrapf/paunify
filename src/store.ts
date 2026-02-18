import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SpotifyData, RoastResult, RoomConfig, AppState } from './types';

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Auth
      accessToken: null,
      expiresAt: null,
      setTokens: (access, expiresIn) => {
        const expiresAt = Date.now() + expiresIn * 1000;
        set({ accessToken: access, expiresAt });
        localStorage.setItem('spotify_access_token', access);
        localStorage.setItem('spotify_expires_at', expiresAt.toString());
      },
      clearTokens: () => set({
        accessToken: null,
        expiresAt: null
      }),

      // Data
      spotifyData: null,
      setSpotifyData: (data) => set({ spotifyData: data }),

      // Roast
      roastResult: null,
      setRoastResult: (result) => set({ roastResult: result }),

      // Room
      roomConfig: {
        template: 'bedroom',
        primaryColor: '#D4A017',
        accentColor: '#FF10F0',
        lighting: 'warm'
      },
      setRoomConfig: (config) => set((state) => ({
        roomConfig: { ...state.roomConfig, ...config }
      })),

      // UI
      currentView: 'landing',
      setCurrentView: (view) => set({ currentView: view }),

      // Export
      isExporting: false,
      setIsExporting: (value) => set({ isExporting: value })
    }),
    {
      name: 'paunify-storage',
      partialize: (state) => ({
        accessToken: state.accessToken,
        expiresAt: state.expiresAt
      })
    }
  )
);
