import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Training from './components/Training';
import HumanFrameworkPage from './components/HumanFrameworkPage';
import LogoCloud from './components/LogoCloud';
import Services from './components/Services';
import ProcessBlock from './components/ProcessBlock';
import TeamSection from './components/TeamSection';
import ReadinessCheck from './components/ReadinessCheck';
import HumanFramework from './components/HumanFramework';
import Newsletter from './components/Newsletter';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import NewsletterLanding from './components/NewsletterLanding';

type LegalType = 'impressum' | 'datenschutz' | null;

function App() {
  const [legalView, setLegalView] = React.useState<LegalType>(null);
  const [currentPath, setCurrentPath] = React.useState(window.location.hash || '#');

  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openLegal = (type: LegalType) => {
    setLegalView(type);
    document.body.style.overflow = type ? 'hidden' : 'auto';
  };

  if (currentPath === '#newsletter') {
    return (
      <div className="min-h-screen bg-background">
        <NewsletterLanding />
        <LegalModal isOpen={legalView !== null} onClose={() => openLegal(null)}>
          {legalView === 'impressum' && <Impressum />}
          {legalView === 'datenschutz' && <Datenschutz />}
        </LegalModal>
      </div>
    );
  }

  if (currentPath === '#training') {
    return <Training />;
  }

  if (currentPath === '#framework') {
    return <HumanFrameworkPage />;
  }

  return (
    <div className="min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Services />
        <ProcessBlock />
        <TeamSection />
        <ReadinessCheck />
        <HumanFramework />
        <Newsletter />
        <FAQ />

        {/* Contact CTA Section — full teal */}
        <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-primary">
          {/* Watermark */}
          <p className="absolute bottom-0 right-0 text-[18vw] font-extrabold text-primary-foreground/5 leading-none select-none pointer-events-none tracking-tighter">
            HUMAN.
          </p>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-2 h-2 bg-primary-foreground/40 rotate-45 block" />
                <span className="font-mono text-xs text-primary-foreground/70 tracking-widest uppercase">Kontakt</span>
                <span className="w-2 h-2 bg-primary-foreground/40 rotate-45 block" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-primary-foreground mb-4">
                Bereit für Ihre KI-Roadmap?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-12 max-w-xl mx-auto">
                In einem kostenlosen Erstgespräch zeigen wir Ihnen Ihre konkreten nächsten Schritte — zugeschnitten auf Ihr Unternehmen.
              </p>
              <ContactForm dark />
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenLegal={openLegal} />
      <TrustSection onOpenDatenschutz={() => openLegal('datenschutz')} />

      <LegalModal isOpen={legalView !== null} onClose={() => openLegal(null)}>
        {legalView === 'impressum' && <Impressum />}
        {legalView === 'datenschutz' && <Datenschutz />}
      </LegalModal>

      <Analytics />
    </div>
  );
}

export default App;
