import { useState } from 'react';
import { motion } from 'framer-motion';
import { initiateSpotifyLogin } from '../lib/spotify';

export function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await initiateSpotifyLogin();
    } catch (error) {
      console.error('Login failed:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        {/* Logo/Title */}
        <motion.h1 
          className="text-6xl md:text-8xl font-display mb-4"
          style={{
            background: 'linear-gradient(135deg, #D4A017 0%, #FF10F0 50%, #00FFFF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Paunify
        </motion.h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-2">
          Your Music Taste, Roasted & Displayed
        </p>
        <p className="text-gray-500 max-w-md mx-auto">
          Visualisasi mendengarkan Spotify lo dalam ruangan retro 70s yang aesthetic. 
          Siap di-scroll scroll-scroll-an?
        </p>
      </motion.div>

      {/* Preview Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl mb-8"
        style={{
          background: 'linear-gradient(180deg, #E8D5B5 0%, #D4C9BA 40%, #C4B5A0 100%)'
        }}
      >
        {/* Mini Room Preview */}
        <div className="relative w-full h-full p-4">
          {/* Wall */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(139,90,43,0.1) 40px, rgba(139,90,43,0.1) 42px)'
          }} />

          {/* Floor */}
          <div className="absolute bottom-0 left-0 right-0 h-[35%]" style={{
            background: 'linear-gradient(180deg, #8B5A2B 0%, #6B4423 100%)'
          }} />

          {/* Window */}
          <div className="absolute top-8 left-8 w-16 h-20 rounded border-4 border-[#5D4E37]" style={{
            background: 'linear-gradient(180deg, #FF6B6B 0%, #FFA500 50%, #FFD700 100%)'
          }}>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-400" />
          </div>

          {/* Vinyl */}
          <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-20 h-20 rounded-full" style={{
            background: 'radial-gradient(circle at center, #1a1a1a 20%, transparent 21%), repeating-radial-gradient(circle at center, #1a1a1a 0px, #1a1a1a 2px, #0a0a0a 3px, #0a0a0a 4px)'
          }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#D4A017]" />
          </div>

          {/* Album Frames */}
          <div className="absolute top-8 right-6 flex flex-col gap-2">
            <div className="w-12 h-12 rounded" style={{ background: '#5D4E37', padding: '3px' }}>
              <div className="w-full h-full rounded bg-gradient-to-br from-pink-500 to-purple-500" />
            </div>
            <div className="w-12 h-12 rounded" style={{ background: '#5D4E37', padding: '3px' }}>
              <div className="w-full h-full rounded bg-gradient-to-br from-blue-500 to-cyan-500" />
            </div>
          </div>

          {/* Cassette */}
          <div className="absolute bottom-[38%] left-6 w-16 h-10 rounded" style={{
            background: 'linear-gradient(180deg, #3D3731 0%, #2A2622 100%)'
          }}>
            <div className="absolute top-1 left-2 right-2 h-4 rounded bg-black" />
          </div>

          {/* Lava Lamp */}
          <div className="absolute bottom-[38%] right-6 w-8 h-16 rounded-full" style={{
            background: 'linear-gradient(180deg, rgba(255,16,240,0.5) 0%, rgba(255,16,240,0.2) 100%)'
          }} />

          {/* TV */}
          <div className="absolute bottom-[5%] left-[15%] w-20 h-14 rounded-xl p-1" style={{
            background: 'linear-gradient(180deg, #5D4E37 0%, #3D3731 100%)'
          }}>
            <div className="w-full h-full rounded bg-black" />
          </div>

          {/* Plant */}
          <div className="absolute bottom-[5%] right-[15%]">
            <div className="w-8 h-8 rounded-b-lg" style={{ background: '#D2691E' }} />
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-4 bg-green-600 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-3 gap-4 max-w-lg mb-8"
      >
        {[
          { emoji: '🎸', text: 'Retro 70s' },
          { emoji: '🔥', text: 'Roast' },
          { emoji: '📸', text: 'Share' }
        ].map((feature, index) => (
          <div key={index} className="text-center p-3 rounded-xl bg-white/50">
            <div className="text-2xl mb-1">{feature.emoji}</div>
            <div className="text-xs text-gray-600">{feature.text}</div>
          </div>
        ))}
      </motion.div>

      {/* Login Button */}
      <motion.button
        onClick={handleLogin}
        disabled={isLoading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 rounded-full font-bold text-white text-lg flex items-center gap-3 transition-all disabled:opacity-50"
        style={{
          background: '#1DB954',
          boxShadow: '0 4px 20px rgba(29, 185, 84, 0.4)'
        }}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
        {isLoading ? 'Connecting...' : 'Connect with Spotify'}
      </motion.button>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-gray-400 text-sm text-center"
      >
        Powered by Spotify Web API<br/>
        Made with ❤️ for Gen-Z Indonesia
      </motion.p>
    </div>
  );
}
