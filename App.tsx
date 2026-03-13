import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import Services from './components/Services';
import HumanFramework from './components/HumanFramework';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Newsletter from './components/Newsletter';
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

  return (
    <div className="min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Services />
        <HumanFramework />
        <Newsletter />
        <FAQ />

        {/* Contact CTA Section */}
        <section id="contact" className="py-24 lg:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary font-semibold text-sm mb-3 tracking-wide uppercase">Kontakt</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-4">
                Bereit für Ihre KI-Roadmap?
              </h2>
              <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
                In nur 15 Minuten analysieren wir Ihr Potenzial und erstellen Ihren Umsetzungsplan. Kostenlos & unverbindlich.
              </p>
              <ContactForm />
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
    </div>
  );
}

export default App;
