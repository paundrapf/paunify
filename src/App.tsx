import { useEffect, useState } from 'react';
import { useAppStore } from './store';
import { LandingPage } from './components/LandingPage';
import { LoadingScreen } from './components/LoadingScreen';
import { RoomContainer } from './components/RoomContainer';
import { RoastDisplay } from './components/RoastDisplay';
import { ShareButtons } from './components/ShareButtons';
import { exchangeCodeForTokens } from './lib/spotify';
import { fetchAllSpotifyData } from './lib/api';
import { RoastEngine } from './lib/roast';

function App() {
  const { 
    currentView, 
    setCurrentView,
    accessToken,
    expiresAt,
    setTokens,
    setSpotifyData,
    setRoastResult,
    clearTokens
  } = useAppStore();

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if we're in callback mode
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      handleCallback(code);
    } else if (accessToken && expiresAt && Date.now() < expiresAt) {
      // Already logged in, fetch data
      if (!useAppStore.getState().spotifyData) {
        fetchSpotifyData();
      }
    }
  }, []);

  const handleCallback = async (code: string) => {
    try {
      setCurrentView('loading');
      const tokens = await exchangeCodeForTokens(code);
      setTokens(tokens.access_token, tokens.expires_in);
      
      // Store in localStorage for persistence
      localStorage.setItem('spotify_access_token', tokens.access_token);
      localStorage.setItem('spotify_expires_at', (Date.now() + tokens.expires_in * 1000).toString());
      
      await fetchSpotifyData(tokens.access_token);
      
      // Clean URL
      window.history.replaceState({}, '', window.location.pathname);
    } catch (err) {
      console.error('Callback error:', err);
      setError('Failed to authenticate. Please try again.');
      setCurrentView('landing');
    }
  };

  const fetchSpotifyData = async (token?: string) => {
    const currentToken = token || accessToken;
    if (!currentToken) return;

    try {
      setCurrentView('loading');
      const data = await fetchAllSpotifyData(currentToken);
      setSpotifyData(data);

      // Run roast engine
      const roastEngine = new RoastEngine(data);
      const roastResult = roastEngine.analyze();
      setRoastResult(roastResult);

      // Show room
      setTimeout(() => {
        setCurrentView('room');
      }, 1500);
    } catch (err) {
      console.error('Data fetch error:', err);
      if (err instanceof Error && err.message === 'TOKEN_EXPIRED') {
        clearTokens();
        setCurrentView('landing');
      } else {
        setError('Failed to fetch your data. Please try again.');
      }
    }
  };

  // Listen for auth from localStorage
  useEffect(() => {
    const handleStorage = () => {
      const token = localStorage.getItem('spotify_access_token');
      const expires = localStorage.getItem('spotify_expires_at');
      
      if (token && expires && Date.now() < parseInt(expires)) {
        if (!accessToken) {
          setTokens(token, (parseInt(expires) - Date.now()) / 1000);
          fetchSpotifyData(token);
        }
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [accessToken]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button 
            onClick={() => {
              setError(null);
              setCurrentView('landing');
              clearTokens();
            }}
            className="px-6 py-2 rounded-full bg-gray-800 text-white"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (currentView === 'loading') {
    return <LoadingScreen />;
  }

  if (currentView === 'room') {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => {
              clearTokens();
              setCurrentView('landing');
            }}
            className="mb-4 text-gray-500 hover:text-gray-700 flex items-center gap-2"
          >
            ← Connect Another Account
          </button>

          {/* Room */}
          <RoomContainer />

          {/* Roast */}
          <RoastDisplay />

          {/* Share */}
          <ShareButtons />
        </div>
      </div>
    );
  }

  return <LandingPage />;
}

export default App;
