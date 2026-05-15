import { useEffect, useState } from 'react';
import { StarryNightBackground } from '@/components/StarryNightBackground';
import { Button } from '@/components/ui/button';

interface OpeningProps {
  onEnter: () => void;
  girlfriendName?: string;
}

export default function Opening({ onEnter, girlfriendName = 'My Goddess' }: OpeningProps) {
  const [showName, setShowName] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Stagger animations
    const nameTimer = setTimeout(() => setShowName(true), 500);
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 1500);
    const buttonTimer = setTimeout(() => setShowButton(true), 2500);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <StarryNightBackground />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-6">
        {/* Name - Fade in */}
        <div
          className={`transition-all duration-1000 ease-out ${
            showName ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-center"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#ffffff',
              letterSpacing: '0.05em',
              textShadow: '0 4px 20px rgba(255, 255, 255, 0.2), 0 2px 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            {girlfriendName}
          </h1>
        </div>

        {/* Subtitle - Fade in */}
        <div
          className={`transition-all duration-1000 ease-out ${
            showSubtitle ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p
            className="text-xl md:text-2xl text-center max-w-2xl"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: '#5a4a42',
              fontStyle: 'italic',
              letterSpacing: '0.03em',
            }}
          >
            For the girl who changed my world.
          </p>
        </div>

        {/* Enter Button - Fade in and float */}
        <div
          className={`transition-all duration-1000 ease-out mt-8 ${
            showButton ? 'opacity-100 animate-float' : 'opacity-0'
          }`}
        >
          <Button
            onClick={onEnter}
            className="px-12 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #c9a227 100%)',
              color: '#2a1e19',
              boxShadow: '0 8px 30px rgba(212, 175, 55, 0.4)',
              fontFamily: 'Playfair Display, serif',
              letterSpacing: '0.05em',
            }}
          >
            Enter
          </Button>
        </div>
      </div>


    </div>
  );
}
