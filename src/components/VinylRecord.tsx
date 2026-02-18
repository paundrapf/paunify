import { motion } from 'framer-motion';

interface VinylRecordProps {
  imageUrl?: string;
  isPlaying?: boolean;
}

export function VinylRecord({ imageUrl, isPlaying = false }: VinylRecordProps) {
  return (
    <div className="relative w-40 h-40">
      {/* Vinyl Record */}
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            radial-gradient(circle at center, #1a1a1a 18%, transparent 19%),
            repeating-radial-gradient(
              circle at center,
              #1a1a1a 0px,
              #1a1a1a 2px,
              #0a0a0a 3px,
              #0a0a0a 4px
            )
          `,
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
        }}
        animate={isPlaying ? { rotate: 360 } : {}}
        transition={isPlaying ? { duration: 3, repeat: Infinity, ease: 'linear' } : {}}
      />

      {/* Center Label */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full overflow-hidden"
        style={{
          background: imageUrl ? 'white' : 'linear-gradient(135deg, #D4A017 0%, #CC5500 100%)'
        }}
      >
        {imageUrl && (
          <img 
            src={imageUrl}
            alt="Album"
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
          />
        )}
      </div>

      {/* Center Hole */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#1a1a1a] rounded-full" />

      {/* Tonearm */}
      <div 
        className="absolute -right-4 top-1/2 w-16 h-1 origin-left rounded-full"
        style={{
          background: 'linear-gradient(90deg, #808080 0%, #C0C0C0 100%)',
          transform: 'rotate(-25deg)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}
      >
        {/* Head */}
        <div 
          className="absolute -right-1 -top-1 w-4 h-3 rounded"
          style={{
            background: 'linear-gradient(135deg, #606060 0%, #808080 100%)'
          }}
        />
      </div>
    </div>
  );
}
