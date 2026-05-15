import DomeGallery from '@/components/DomeGallery';

export default function Gallery() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-warm-cream to-soft-ivory">
      {/* Section title */}
      <div className="absolute top-12 left-0 right-0 z-30 text-center">
        <h2
          className="text-4xl md:text-5xl font-light"
          style={{
            fontFamily: 'Playfair Display, serif',
            color: '#2a1e19',
            letterSpacing: '0.05em',
          }}
        >
          My Princess
        </h2>
      </div>

      {/* Dome Gallery */}
      <div className="w-full h-full">
        <DomeGallery
          grayscale={false}
          overlayBlurColor="rgba(250, 245, 240, 0.8)"
        />
      </div>


    </section>
  );
}
