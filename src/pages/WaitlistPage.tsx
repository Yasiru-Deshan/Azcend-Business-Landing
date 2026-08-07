import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Link } from 'react-router-dom';

export const WaitlistPage = () => {
  return (
    <div
      className="bg-zinc-950 min-h-screen font-sans selection:bg-[var(--color-brand-500)] selection:text-zinc-950 flex flex-col relative"
      style={{
        backgroundImage: "url('/IMG_3816.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-zinc-950/80 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40 z-0" />

      <div className="relative z-10 flex flex-col flex-1">
        <Navbar hideLinks={true} />
        <main className="flex-1 flex flex-col pt-32 pb-20 px-6 max-w-5xl mx-auto w-full">
          <div className="mb-8 flex items-center">
            <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          <div className="flex-1 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/60 rounded-2xl overflow-hidden shadow-2xl shadow-black/80 flex flex-col min-h-[600px]">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdc2BFS_5N2IHI78qF-y1_fM70cOd8UKj_17BYIO7zUaJEgvQ/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="flex-1 w-full min-h-[600px]"
              title="Azcend Fitness Waitlist"
            >
              Loading…
            </iframe>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
