import { motion } from 'framer-motion';

interface LavaLampProps {
  color?: string;
}

export function LavaLamp({ color = '#FF10F0' }: LavaLampProps) {
  return (
    <div className="relative w-16 h-40">
      {/* Lamp Base */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-12 rounded-b-lg"
        style={{
          background: 'linear-gradient(180deg, #2A2622 0%, #1a1a1a 100%)'
        }}
      />

      {/* Lamp Glass */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-10 h-28 rounded-t-full rounded-b-xl overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${color}33 0%, ${color}11 50%, ${color}05 100%)`
        }}
      >
        {/* Bubbles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, ${color}88 0%, ${color}44 100%)`,
              width: 12 + Math.random() * 16,
              height: 12 + Math.random() * 16,
              left: `${10 + Math.random() * 60}%`,
              bottom: `${Math.random() * 20}%`
            }}
            animate={{
              y: [-20, -80, -20],
              scale: [1, 1.2, 1],
              opacity: [0.8, 0.4, 0.8]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut'
            }}
          />
        ))}

        {/* Glow */}
        <div 
          className="absolute inset-0 blur-xl"
          style={{
            background: `radial-gradient(circle at 50% 80%, ${color}44 0%, transparent 70%)`
          }}
        />
      </div>

      {/* Lamp Cap */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 rounded-t-lg"
        style={{
          background: 'linear-gradient(180deg, #606060 0%, #404040 100%)'
        }}
      />
    </div>
  );
}
