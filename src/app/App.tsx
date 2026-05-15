import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { HistorySection } from './components/HistorySection';
import { LifeSection } from './components/LifeSection';
import { CultureSection } from './components/CultureSection';
import { PeopleSection } from './components/PeopleSection';
import { LivelihoodSection } from './components/LivelihoodSection';
import { PamanaSection } from './components/PamanaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 cursor-none">
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <HistorySection />
        <LifeSection />
        <CultureSection />
        <PeopleSection />
        <LivelihoodSection />
        <PamanaSection />
      </main>
      <Footer />
    </div>
  );
}