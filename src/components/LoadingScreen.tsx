import { motion } from 'framer-motion';

const loadingMessages = [
  'Ngeload data Spotify lu...',
  'Ngubah jadi ruangan retro...',
  'Lagi pikit-pikit roast...',
  'Nyari artist favorit lu...',
  'Analisa beat musik...',
  'Bikin bingkai album...',
  'Siap-siap diroast ya...'
];

export function LoadingScreen() {
  const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        {/* Animated Vinyl */}
        <motion.div
          className="w-32 h-32 mx-auto mb-8 rounded-full"
          style={{
            background: `
              radial-gradient(circle at center, #1a1a1a 20%, transparent 21%),
              repeating-radial-gradient(circle at center, #1a1a1a 0px, #1a1a1a 2px, #0a0a0a 3px, #0a0a0a 4px)
            `
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #D4A017 0%, #CC5500 100%)'
            }}
          />
        </motion.div>

        {/* Title */}
        <motion.h1 
          className="text-4xl font-display mb-4"
          style={{
            background: 'linear-gradient(135deg, #D4A017 0%, #FF10F0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Paunify
        </motion.h1>

        {/* Loading Text */}
        <p className="text-gray-600 mb-8">{randomMessage}</p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #D4A017 0%, #FF10F0 100%)'
            }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 p-4 rounded-xl bg-white/50 max-w-sm mx-auto"
        >
          <p className="text-sm text-gray-600">
            💡 Tahu kamu? Roast terlucu biasanya datang dari playlist yang paling inconsistent!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
