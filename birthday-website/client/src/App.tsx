import { useRef } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Opening from './pages/Opening';
import Gallery from './pages/Gallery';
import Poem from './pages/Poem';
import Birthday from './pages/Birthday';

function App() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleOpeningEnter = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="w-full min-h-screen">
            {/* Opening Section */}
            <div className="w-full h-screen">
              <Opening onEnter={handleOpeningEnter} />
            </div>
            
            {/* Gallery Section */}
            <div ref={galleryRef} className="w-full h-screen">
              <Gallery />
            </div>
            
            {/* Poem Section */}
            <div className="w-full h-screen">
              <Poem />
            </div>
            
            {/* Birthday Section */}
            <div className="w-full h-screen">
              <Birthday />
            </div>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
