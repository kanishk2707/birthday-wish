import { Envelope } from '@/components/Envelope';

export default function Poem() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #faf5f0 0%, #f5ede5 50%, #f0e5d8 100%)',
        }}
      />

      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-30"
        style={{
          background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 opacity-20"
        style={{
          background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />

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
          A Letter for You
        </h2>
      </div>

      {/* Envelope */}
      <div className="relative z-20 w-full h-full flex items-center justify-center px-6">
        <Envelope />
      </div>


    </section>
  );
}
