import { motion } from 'framer-motion';

interface AlbumFrameProps {
  imageUrl?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function AlbumFrame({ imageUrl, name, size = 'md' }: AlbumFrameProps) {
  const frameSizes = {
    sm: 'w-20 h-20',
    md: 'w-28 h-28',
    lg: 'w-36 h-36'
  };

  return (
    <motion.div 
      className={`relative ${frameSizes[size]} flex items-center justify-center`}
      whileHover={{ scale: 1.05, rotate: -2 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Frame */}
      <div 
        className="absolute inset-0 rounded-lg shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #8B5A2B 0%, #5D4E37 100%)',
          padding: '6px'
        }}
      >
        <div 
          className="w-full h-full rounded"
          style={{
            background: 'linear-gradient(135deg, #D4C9BA 0%, #A89B8C 100%)',
            padding: '3px'
          }}
        >
          {/* Album cover */}
          <div className="w-full h-full rounded overflow-hidden bg-[#2A2622]">
            {imageUrl ? (
              <img 
                src={imageUrl}
                alt={name || 'Album'}
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#D4A017] to-[#CC5500]" />
            )}
          </div>
        </div>
      </div>

      {/* Frame hook */}
      <div 
        className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #C0C0C0 0%, #808080 100%)'
        }}
      />
    </motion.div>
  );
}
