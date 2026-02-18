import { motion } from 'framer-motion';

interface CassetteTapeProps {
  title?: string;
  artist?: string;
}

export function CassetteTape({ title, artist }: CassetteTapeProps) {
  return (
    <motion.div 
      className="relative w-24 h-16 rounded cursor-pointer"
      whileHover={{ scale: 1.05, y: -5 }}
      style={{
        background: 'linear-gradient(180deg, #3D3731 0%, #2A2622 100%)',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
      }}
    >
      {/* Tape Window */}
      <div 
        className="absolute top-2 left-4 right-4 h-8 rounded"
        style={{
          background: '#1a1a1a',
          border: '1px solid #5D4E37'
        }}
      >
        {/* Tape Reels */}
        <div className="absolute top-1/2 left-3 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-[#C0C0C0]">
          <div className="absolute inset-1 rounded-full bg-[#404040]" />
        </div>
        <div className="absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-[#C0C0C0]">
          <div className="absolute inset-1 rounded-full bg-[#404040]" />
        </div>

        {/* Tape Window Label */}
        <div 
          className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-6 rounded"
          style={{
            background: title ? 'transparent' : 'linear-gradient(135deg, #D4A017 0%, #CC5500 100%)'
          }}
        >
          {title && (
            <div className="w-full h-full overflow-hidden">
              <p className="text-white text-[6px] truncate px-1">{title}</p>
              <p className="text-gray-400 text-[5px] truncate px-1">{artist}</p>
            </div>
          )}
        </div>
      </div>

      {/* Screw holes */}
      <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-[#606060]" />
      <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-[#606060]" />
      <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-[#606060]" />
      <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-[#606060]" />

      {/* Label area */}
      <div 
        className="absolute bottom-1 left-2 right-2 h-3 rounded text-center"
        style={{
          background: title ? 'transparent' : 'linear-gradient(135deg, #D4A017 0%, #CC5500 100%)'
        }}
      >
        {title && (
          <p className="text-white text-[6px] font-bold truncate">{title}</p>
        )}
      </div>
    </motion.div>
  );
}
