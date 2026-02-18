import { motion } from 'framer-motion';
import type { SpotifyTrack } from '../types';

interface RetroTVProps {
  currentTrack?: SpotifyTrack;
}

export function RetroTV({ currentTrack }: RetroTVProps) {
  const trackName = currentTrack?.name || 'No track';
  const artistName = currentTrack?.artists[0]?.name || 'Unknown';
  const albumArt = currentTrack?.album.images[0]?.url;

  return (
    <div className="relative w-40 h-32">
      {/* TV Body */}
      <div 
        className="absolute inset-0 rounded-xl p-2"
        style={{
          background: 'linear-gradient(180deg, #5D4E37 0%, #3D3731 100%)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
        }}
      >
        {/* Screen Bezel */}
        <div 
          className="w-full h-full rounded-lg overflow-hidden"
          style={{
            background: '#1a1a1a',
            padding: '4px'
          }}
        >
          {/* Screen Content */}
          <div className="w-full h-full rounded bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] relative overflow-hidden">
            {/* Scanlines effect */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
              }}
            />

            {/* Content */}
            <div className="relative z-10 p-3 flex flex-col items-center justify-center h-full">
              {albumArt ? (
                <img 
                  src={albumArt}
                  alt={trackName}
                  className="w-16 h-16 rounded object-cover mb-2"
                  crossOrigin="anonymous"
                />
              ) : (
                <div 
                  className="w-16 h-16 rounded mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #D4A017 0%, #CC5500 100%)'
                  }}
                />
              )}
              <div className="text-center">
                <p className="text-white text-xs font-bold truncate w-28">{trackName}</p>
                <p className="text-gray-400 text-[10px] truncate w-28">{artistName}</p>
              </div>
            </div>

            {/* Glow */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)'
              }}
            />
          </div>
        </div>

        {/* TV Knobs */}
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          <div className="w-3 h-3 rounded-full" style={{ background: '#3D3731' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#3D3731' }} />
        </div>
      </div>

      {/* Antenna */}
      <div 
        className="absolute -top-4 left-8 w-8 h-8"
        style={{
          borderLeft: '2px solid #808080',
          borderBottom: '2px solid #808080',
          transform: 'rotate(45deg)'
        }}
      />
    </div>
  );
}
