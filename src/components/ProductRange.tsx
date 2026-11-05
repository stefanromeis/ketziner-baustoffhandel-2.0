import React from 'react';
import { DownloadIcon } from 'lucide-react';
import { images, productCategories } from '../data/site';

export function ProductRange() {
  return (
    <section id="sortiment" aria-labelledby="sortiment-title" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2 id="sortiment-title" className="font-display text-5xl font-extrabold uppercase leading-[0.9] text-ink">
              Unser Sortiment
            </h2>
            <p className="mt-5 max-w-sm text-muted">
              Vom Fundament bis zum Dachfirst – alles, was Profis und Bauherren brauchen. Vieles sofort ab Lager.
            </p>
            <img
              src={images.products}
              alt="Porenbetonsteine, Mörtelsäcke und Dämmrollen im Lager"
              className="mt-8 aspect-[4/5] w-full max-w-sm rounded-lg object-cover"
              loading="lazy" />
            
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="border-t border-ink">
            {productCategories.map((cat) =>
            <li
              key={cat.name}
              className="grid items-baseline gap-x-8 gap-y-1 border-b border-line py-6 sm:grid-cols-[15rem_1fr]">
              
                <h3 className="font-display text-2xl font-bold uppercase text-ink">{cat.name}</h3>
                <p className="text-[15px] text-muted">{cat.examples}</p>
              </li>
            )}
          </ul>

          <div className="mt-10 flex flex-col gap-4 rounded-lg bg-paper-deep p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-ink">Aktuelle Preisliste</p>
              <p className="text-sm text-muted">Alle Standardartikel mit Preisen als PDF.</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-ink-soft">
              
              <DownloadIcon className="h-4 w-4" aria-hidden="true" />
              Preisliste laden
            </a>
          </div>
        </div>
      </div>
    </section>);

}