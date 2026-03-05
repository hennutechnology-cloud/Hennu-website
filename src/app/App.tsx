import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { Process } from './components/Process';
import { TechnologyStack } from './components/TechnologyStack';
import { WhyChoose } from './components/WhyChoose';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  // Set browser tab title and favicon
  useEffect(() => {
    document.title = 'Hennu Tech — Intelligent Software for the Future';

    // Set favicon to the Hennu Tech logo
    const link: HTMLLinkElement =
      document.querySelector("link[rel~='icon']") ||
      (() => {
        const el = document.createElement('link');
        el.rel = 'icon';
        document.head.appendChild(el);
        return el;
      })();
    link.type = 'image/x-icon';
    link.href = '/favicon.ico';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="industries">
        <Industries />
      </section>

      <section id="process">
        <Process />
      </section>

      <section id="technology">
        <TechnologyStack />
      </section>

      <section id="why-choose">
        <WhyChoose />
      </section>

      <section id="cta">
        <CTA />
      </section>

      <Footer />
    </div>
  );
}