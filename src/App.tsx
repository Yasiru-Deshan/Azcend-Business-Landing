import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemsSection } from './components/sections/ProblemsSection';
import { EcosystemSection } from './components/sections/EcosystemSection';
import { AppSection } from './components/sections/AppSection';
import { ValuesSection } from './components/sections/ValuesSection';
import { ScalingSection } from './components/sections/ScalingSection';
import { PartnerSection } from './components/sections/PartnerSection';
import { AboutSection } from './components/sections/AboutSection';
import { FAQSection } from './components/sections/FAQSection';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-[var(--color-brand-500)] selection:text-zinc-950 font-sans">
      <Navbar />
      
      <main>
        <HeroSection />
        <ProblemsSection />
        <EcosystemSection />
        <AppSection />
        <ValuesSection />
        <ScalingSection />
        <PartnerSection />
        <AboutSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
