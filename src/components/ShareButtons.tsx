import { useState } from 'react';
import html2canvas from 'html2canvas';
import { useAppStore } from '../store';

export function ShareButtons() {
  const { isExporting, setIsExporting, roastResult } = useAppStore();
  const [exportedImage, setExportedImage] = useState<string | null>(null);

  const exportImage = async (format: 'png' | 'jpeg' = 'png') => {
    const element = document.getElementById('paunify-room');
    if (!element) return;

    setIsExporting(true);

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false
      });

      const url = canvas.toDataURL(`image/${format}`, 0.95);
      setExportedImage(url);

      // Download
      const link = document.createElement('a');
      link.href = url;
      link.download = `paunify-${Date.now()}.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const shareToTwitter = () => {
    if (!roastResult) return;
    
    const text = encodeURIComponent(
      `${roastResult.overallRoast}\n\n#PaunifyMe #PaunifyRoast`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  const shareToFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const createShareableLink = () => {
    // Generate a unique link for "Roast Your Friend" feature
    const uniqueId = Math.random().toString(36).substring(2, 15);
    const shareUrl = `${window.location.origin}?roast=${uniqueId}`;
    navigator.clipboard.writeText(shareUrl);
    alert('Shareable link copied! Send it to your friend to roast them!');
  };

  return (
    <div className="mt-8 space-y-4">
      {/* Export Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => exportImage('png')}
          disabled={isExporting}
          className="px-6 py-3 rounded-full font-semibold text-white transition-all hover:scale-105 disabled:opacity-50"
          style={{
            background: 'linear-gradient(135deg, #FF10F0 0%, #CC00C0 100%)',
            boxShadow: '0 4px 15px rgba(255, 16, 240, 0.4)'
          }}
        >
          {isExporting ? 'Exporting...' : '📸 Download Image'}
        </button>

        <button
          onClick={createShareableLink}
          className="px-6 py-3 rounded-full font-semibold text-white transition-all hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #00FFFF 0%, #00CCCC 100%)',
            boxShadow: '0 4px 15px rgba(0, 255, 255, 0.4)'
          }}
        >
          🔗 Roast Your Friend
        </button>
      </div>

      {/* Social Share */}
      <div className="flex justify-center gap-4">
        <button
          onClick={shareToTwitter}
          className="p-3 rounded-full bg-black text-white hover:scale-110 transition-transform"
        >
          𝕏
        </button>

        <button
          onClick={shareToFacebook}
          className="p-3 rounded-full bg-[#1877F2] text-white hover:scale-110 transition-transform"
        >
          f
        </button>

        <button
          onClick={copyLink}
          className="p-3 rounded-full bg-gray-600 text-white hover:scale-110 transition-transform"
        >
          🔗
        </button>
      </div>

      {/* Hashtags */}
      <p className="text-center text-gray-500 text-sm">
        Share dengan #{roastResult?.personalityType.replace(/\s+/g, '')} #PaunifyMe
      </p>
    </div>
  );
}
