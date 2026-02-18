import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store';
import { VinylRecord } from './VinylRecord';
import { LavaLamp } from './LavaLamp';
import { AlbumFrame } from './AlbumFrame';
import { CassetteTape } from './CassetteTape';
import { RetroTV } from './RetroTV';

export function RoomContainer() {
  const roomRef = useRef<HTMLDivElement>(null);
  const { spotifyData, roastResult } = useAppStore();

  if (!spotifyData || !roastResult) return null;

  const topTracks = spotifyData.topTracks.medium.slice(0, 5);
  const topAlbums = spotifyData.topTracks.medium
    .slice(0, 6)
    .map(t => t.album)
    .filter((album, index, self) => 
      index === self.findIndex(a => a.id === album.id)
    )
    .slice(0, 4);

  return (
    <div 
      id="paunify-room"
      ref={roomRef}
      className="relative w-full max-w-[600px] aspect-square mx-auto rounded-3xl overflow-hidden shadow-2xl"
      style={{
        background: `
          linear-gradient(180deg, 
            #E8D5B5 0%, 
            #D4C9BA 40%, 
            #C4B5A0 100%
          )
        `
      }}
    >
      {/* Wall Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 60px,
              rgba(139, 90, 43, 0.1) 60px,
              rgba(139, 90, 43, 0.1) 62px
            )
          `
        }}
      />

      {/* Floor */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[35%]"
        style={{
          background: `
            linear-gradient(180deg,
              #8B5A2B 0%,
              #6B4423 100%
            )
          `,
          boxShadow: 'inset 0 10px 30px rgba(0,0,0,0.2)'
        }}
      >
        {/* Floor pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                rgba(0,0,0,0.1) 20px,
                rgba(0,0,0,0.1) 22px
              )
            `
          }}
        />
      </div>

      {/* Window with sunset view */}
      <motion.div 
        className="absolute top-6 left-6 w-24 h-32"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative w-full h-full rounded-lg overflow-hidden border-4 border-[#5D4E37] shadow-lg">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, #FF6B6B 0%, #FFA500 50%, #FFD700 100%)'
            }}
          />
          {/* Sun */}
          <div 
            className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full"
            style={{
              background: 'radial-gradient(circle, #FFD700 0%, #FFA500 70%)',
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)'
            }}
          />
        </div>
        {/* Window frame */}
        <div className="absolute inset-0 border-4 border-[#5D4E37] rounded-lg pointer-events-none" />
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#5D4E37] -translate-x-1/2" />
        <div className="absolute left-0 right-0 top-1/2 h-1 bg-[#5D4E37] -translate-y-1/2" />
      </motion.div>

      {/* Vinyl Record Player */}
      <motion.div 
        className="absolute bottom-[30%] left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <VinylRecord 
          imageUrl={topTracks[0]?.album.images[0]?.url}
          isPlaying={true}
        />
      </motion.div>

      {/* Album Frames on Wall */}
      <div className="absolute top-10 right-6 flex flex-col gap-3">
        {topAlbums.slice(0, 2).map((album, index) => (
          <motion.div
            key={album.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <AlbumFrame 
              imageUrl={album.images[0]?.url}
              name={album.name}
              size="md"
            />
          </motion.div>
        ))}
      </div>

      {/* Cassette Tapes on Shelf */}
      <div className="absolute bottom-[38%] left-6 flex gap-2">
        {topTracks.slice(0, 3).map((track, index) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <CassetteTape 
              title={track.name}
              artist={track.artists[0]?.name}
            />
          </motion.div>
        ))}
      </div>

      {/* Lava Lamp */}
      <motion.div 
        className="absolute bottom-[38%] right-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <LavaLamp />
      </motion.div>

      {/* Retro TV */}
      <motion.div 
        className="absolute bottom-[5%] left-[10%]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
      >
        <RetroTV currentTrack={topTracks[0]} />
      </motion.div>

      {/* Plant */}
      <motion.div 
        className="absolute bottom-[5%] right-[10%]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="relative">
          {/* Macrame hanger */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-1 h-12 bg-[#C4A77D]" />
          {/* Pot */}
          <div 
            className="w-12 h-10 rounded-b-xl"
            style={{
              background: 'linear-gradient(180deg, #D2691E 0%, #8B4513 100%)'
            }}
          />
          {/* Plant leaves */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="relative">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-6 bg-[#568203] rounded-full origin-bottom"
                  style={{
                    transform: `rotate(${(i - 2) * 25}deg) translateY(-8px)`,
                    opacity: 0.8 + i * 0.05
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Room Label */}
      <motion.div 
        className="absolute top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full"
        style={{
          background: 'rgba(212, 160, 23, 0.9)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <span className="text-white text-xs font-bold">
          {spotifyData.user.display_name || 'Your'}'s Groovy Room
        </span>
      </motion.div>
    </div>
  );
}
