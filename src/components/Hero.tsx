import React from 'react';
import { ArrowRightIcon, NavigationIcon } from 'lucide-react';
import { advantages, contact, images } from '../data/site';

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="bg-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-12 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="flex flex-col justify-center lg:col-span-5">
          <p className="text-sm font-semibold text-brand-dark">Baustoffhandel & Handwerkerfachmarkt im Havelland</p>
          <h1
            id="hero-title"
            className="mt-4 font-display text-[56px] font-extrabold uppercase leading-[0.88] tracking-tight text-ink sm:text-[76px] lg:text-[88px]">
            
            Sie bauen.
            <span className="block text-brand">Wir liefern.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Baumaterial, Werkzeug und Geräte in Markenqualität – für Neubau, Sanierung und Garten. Mit Beratung, die
            sich auskennt, und Lieferung bis auf die Baustelle.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#sortiment"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3.5 font-semibold text-white transition-colors duration-150 hover:bg-ink-soft">
              
              Sortiment ansehen
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={contact.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-ink/20 px-5 py-3.5 font-semibold text-ink transition-colors duration-150 hover:border-ink">
              
              <NavigationIcon className="h-4 w-4" aria-hidden="true" />
              Anfahrt
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <img
            src={images.hero}
            alt="Lagerplatz des Ketziner Baustoffhandels mit Paletten voller Dachziegel und Pflastersteine"
            className="aspect-[4/3] w-full rounded-lg object-cover lg:aspect-auto lg:h-full lg:min-h-[520px]" />
          
          <div className="absolute bottom-4 left-4 rounded-md bg-ink px-4 py-3 text-white sm:bottom-6 sm:left-6">
            <p className="text-xs text-white/60">Direkt in Ketzin</p>
            <p className="font-display text-lg font-bold uppercase">{contact.street}</p>
          </div>
        </div>
      </div>

      <div className="border-y border-line">
        <ul className="mx-auto grid max-w-7xl grid-cols-1 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {advantages.map((item, i) =>
          <li
            key={item.title}
            className={`py-6 sm:pr-6 ${i > 0 ? 'border-t border-line sm:border-t-0' : ''} ${
            i % 2 === 1 ? 'sm:border-l sm:pl-6' : ''} ${
            i >= 2 ? 'sm:border-t lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l lg:pl-6' : ''}`}>
            
              <p className="font-display text-lg font-bold uppercase text-ink">{item.title}</p>
              <p className="mt-1 text-sm text-muted">{item.text}</p>
            </li>
          )}
        </ul>
      </div>
    </section>);

}