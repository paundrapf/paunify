import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store';

export function RoastDisplay() {
  const { roastResult } = useAppStore();
  const [displayText, setDisplayText] = useState('');
  const [showBadges, setShowBadges] = useState(false);

  useEffect(() => {
    if (!roastResult) return;

    let index = 0;
    const text = roastResult.overallRoast;
    
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setShowBadges(true);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [roastResult]);

  if (!roastResult) return null;

  return (
    <div className="mt-8 text-center">
      {/* Personality Type */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-6"
      >
        <span className="inline-block px-4 py-2 rounded-full text-sm font-bold"
          style={{
            background: 'linear-gradient(135deg, #FF10F0 0%, #00FFFF 100%)',
            color: 'white'
          }}
        >
          {roastResult.personalityType}
        </span>
        <p className="mt-3 text-gray-600 text-sm max-w-md mx-auto px-4">
          {roastResult.personalityDescription}
        </p>
      </motion.div>

      {/* Roast Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mb-6"
      >
        <div 
          className="inline-block px-6 py-4 rounded-2xl max-w-lg mx-4"
          style={{
            background: 'linear-gradient(135deg, #FFF8E7 0%, #F5ECD8 100%)',
            boxShadow: '0 4px 20px rgba(212, 160, 23, 0.3)'
          }}
        >
          <p className="text-gray-800 text-lg font-semibold leading-relaxed">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </motion.div>

      {/* Badges */}
      {showBadges && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 px-4"
        >
          {roastResult.badges.map((badge, index) => (
            <span 
              key={index}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: 'rgba(212, 160, 23, 0.2)',
                color: '#B88A0D'
              }}
            >
              {badge}
            </span>
          ))}
        </motion.div>
      )}
    </div>
  );
}
