import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

export function OffersBanner() {
  return (
    <section id="angebote" aria-labelledby="angebote-title" className="bg-brand text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-16">
        <div className="lg:col-span-8">
          <h2 id="angebote-title" className="font-display text-4xl font-extrabold uppercase leading-[0.92] sm:text-5xl">
            Aktionsflyer: Angebote des Monats
          </h2>
          <p className="mt-4 max-w-xl text-white/90">
            Ausgewählte Baustoffe und Werkzeuge zu Sonderpreisen – nur solange der Vorrat reicht.
          </p>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <a
            href="#"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-ink px-6 py-4 font-semibold text-white transition-colors duration-150 hover:bg-ink-soft">
            
            Flyer ansehen
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>);

}