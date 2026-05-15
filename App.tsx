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
import { LanguageProvider, useLang } from './lib/language';

type LegalType = 'impressum' | 'datenschutz' | null;

function AppInner() {
  const [legalView, setLegalView] = React.useState<LegalType>(null);
  const [currentPath, setCurrentPath] = React.useState(window.location.hash || '#');
  const { lang } = useLang();

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

  const contactLabel = lang === 'en' ? 'Contact' : 'Kontakt';
  const contactH2de = <>Bereit für Ihre <span className="font-light italic">KI-Roadmap?</span></>;
  const contactH2en = <>Ready for your <span className="font-light italic">AI Roadmap?</span></>;
  const contactDesc = lang === 'en'
    ? 'In a free discovery call we show you your concrete next steps — tailored to your company.'
    : 'In einem kostenlosen Erstgespräch zeigen wir Ihnen Ihre konkreten nächsten Schritte — zugeschnitten auf Ihr Unternehmen.';

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

        {/* Contact CTA Section */}
        <section id="contact" className="py-24 lg:py-32 relative bg-primary overflow-hidden">
          {/* Subtle noise overlay for depth */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"}} />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-mono text-xs text-primary-foreground/60 tracking-widest uppercase mb-3">{contactLabel}</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-primary-foreground mb-4">
                {lang === 'en' ? contactH2en : contactH2de}
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-12 max-w-xl mx-auto">
                {contactDesc}
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

function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}

export default App;
