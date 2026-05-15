import { useState } from 'react';
import { useDrag } from '@use-gesture/react';

interface EnvelopeProps {
  onOpen?: () => void;
}

export function Envelope({ onOpen }: EnvelopeProps) {
  const [isTorn, setIsTorn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dragY, setDragY] = useState(0);

  const bind = useDrag(({ down, movement: [, my], velocity: [, vy], direction: [, dy] }) => {
    if (isTorn || isOpen) return;

    // Add slight resistance if dragging down instead of up
    let limitedY = my;
    if (my > 0) limitedY = my * 0.2; 

    // Trigger tear if dragged up more than 40px or swiped up fast
    const isTearThresholdMet = my < -40 || (vy > 0.5 && dy < 0);

    if (!down && isTearThresholdMet) {
      setIsTorn(true);
      setDragY(0); // Let CSS animation take over
      setTimeout(() => {
        setIsOpen(true);
        onOpen?.();
      }, 1000);
    } else {
      // Snap back if released before threshold
      setDragY(down ? limitedY : 0);
    }
  }, { axis: 'y' });

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <style>{`
        @keyframes tearTop {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-200px) rotate(-10deg); opacity: 0; }
        }
        @keyframes fallBottom {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(200px) rotate(10deg); opacity: 0; }
        }
        @keyframes popOutLetter {
          0% { transform: scale(0.8) translateY(0); z-index: 10; opacity: 0; }
          10% { opacity: 1; }
          100% { transform: scale(1.4) translateY(-10px); z-index: 50; opacity: 1; }
        }
        
        .animate-tear-top {
          animation: tearTop 1.2s forwards cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-fall-bottom {
          animation: fallBottom 1.2s forwards cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-letter-pop {
          animation: popOutLetter 1.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        
        /* Jagged tear edges */
        .clip-tear-top {
          clip-path: polygon(0 0, 100% 0, 100% 50%, 90% 48%, 80% 52%, 70% 47%, 60% 51%, 50% 48%, 40% 53%, 30% 49%, 20% 52%, 10% 48%, 0 50%);
        }
        .clip-tear-bottom {
          clip-path: polygon(0 50%, 10% 48%, 20% 52%, 30% 49%, 40% 53%, 50% 48%, 60% 51%, 70% 47%, 80% 52%, 90% 48%, 100% 50%, 100% 100%, 0 100%);
        }
      `}</style>
      
      {/* Container */}
      <div
        className="relative transition-transform duration-300 hover:scale-105"
        style={{
          width: '320px',
          height: '220px',
          perspective: '1500px',
        }}
      >
        {/* Letter Inside */}
        <div
          className={`absolute inset-0 flex items-center justify-center ${isTorn ? 'animate-letter-pop' : ''}`}
          style={{
            opacity: 0,
            transform: 'scale(0.8)',
            zIndex: 10,
            pointerEvents: isOpen ? 'auto' : 'none'
          }}
        >
          <div
            className="w-72 p-8 rounded-lg shadow-2xl bg-white"
            style={{
              background: 'linear-gradient(135deg, #f9f4ed 0%, #f3ebe2 100%)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              position: 'relative',
            }}
          >
            {/* Coffee stain effect */}
            <div
              className="absolute top-4 right-6 opacity-30"
              style={{
                width: '60px',
                height: '60px',
                background: 'radial-gradient(circle, #8b6f47 0%, #d4af37 50%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(8px)',
              }}
            />

            {/* Poem text */}
            <p
              className="text-center relative z-10"
              style={{
                fontFamily: 'Dancing Script, cursive',
                fontSize: '0.9rem',
                color: '#3a2a22',
                lineHeight: '1.6',
                fontWeight: 600,
              }}
            >
              To my princess,<br/>
              thanks for making my life much better and happier, i wasnt just trying to be romantic or whatever when i said i would do anything for you or even bend realities for you, i would do my everything to make you happy and you wouldnt know how much i love you because im trying to figure out the same, i just know i love you more than anything<br/><br/>
              dont expect similar thing for our 1 year anniversary btw, this already took me more than 1.5 months 😭🙏
            </p>
          </div>
        </div>

        {/* Cover Halves */}
        {/* Top Half (Draggable) */}
        <div
          {...bind()}
          className={`absolute inset-0 clip-tear-top shadow-xl ${isTorn ? 'animate-tear-top pointer-events-none' : 'cursor-grab active:cursor-grabbing'}`}
          style={{
            background: 'linear-gradient(135deg, #e8dfd5 0%, #d8cec3 100%)',
            transformOrigin: 'top center',
            zIndex: 21,
            border: '1px solid rgba(0,0,0,0.05)',
            borderRadius: '8px',
            transform: !isTorn && dragY !== 0 ? `translateY(${dragY}px)` : undefined,
            touchAction: 'none'
          }}
        >
          {/* Decorative wax seal top half */}
          <div 
            className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              background: 'linear-gradient(135deg, #a32a2a, #7a1c1c)',
              boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.2)',
              clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'
            }}
          />
        </div>

        {/* Bottom Half */}
        <div
          className={`absolute inset-0 clip-tear-bottom shadow-xl ${isTorn ? 'animate-fall-bottom pointer-events-none' : ''}`}
          style={{
            background: 'linear-gradient(135deg, #e8dfd5 0%, #d8cec3 100%)',
            transformOrigin: 'bottom center',
            zIndex: 20,
            border: '1px solid rgba(0,0,0,0.05)',
            borderRadius: '8px'
          }}
        >
          {/* Decorative wax seal bottom half */}
          <div 
            className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              background: 'linear-gradient(135deg, #a32a2a, #7a1c1c)',
              boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.2)',
              clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)'
            }}
          />
        </div>

        {/* Instructions */}
        {!isTorn && (
          <div className="absolute -bottom-12 left-0 right-0 text-center animate-pulse z-30 pointer-events-none">
            <span className="text-white/70 text-sm tracking-widest uppercase font-light">Drag up to Tear Open</span>
          </div>
        )}
      </div>
    </div>
  );
}

