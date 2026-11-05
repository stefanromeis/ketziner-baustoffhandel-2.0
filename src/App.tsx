import React from 'react';
import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { ProductRange } from './components/ProductRange';
import { Services } from './components/Services';
import { OffersBanner } from './components/OffersBanner';
import { AboutTeam } from './components/AboutTeam';
import { ContactSection } from './components/ContactSection';
import { SiteFooter } from './components/SiteFooter';

export function App() {
  return (
    <div className="min-h-screen w-full bg-paper font-sans text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <ProductRange />
        <Services />
        <OffersBanner />
        <AboutTeam />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>);

}