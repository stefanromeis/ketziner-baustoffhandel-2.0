import React from 'react';
import { TruckIcon } from 'lucide-react';
import { fleet, images, services } from '../data/site';

export function Services() {
  return (
    <section id="leistungen" aria-labelledby="leistungen-title" className="bg-ink py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2
            id="leistungen-title"
            className="font-display text-5xl font-extrabold uppercase leading-[0.9] lg:col-span-6 lg:text-6xl">
            
            Mehr als
            <span className="block text-brand">nur Material</span>
          </h2>
          <p className="max-w-md text-white/70 lg:col-span-5 lg:col-start-8">
            Wir begleiten Ihr Projekt von der ersten Mengenberechnung bis zur letzten Palette auf der Baustelle.
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-lg bg-ink-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) =>
          <li key={s.title} className="flex flex-col bg-ink p-6 lg:p-7">
              <h3 className="font-display text-xl font-bold uppercase">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/65">{s.text}</p>
            </li>
          )}
        </ol>

        <div id="fuhrpark" className="mt-20 grid gap-10 lg:grid-cols-12 lg:items-center">
          <img
            src={images.fleet}
            alt="Blauer LKW mit Ladekran und orangefarbener Kipper auf dem Hof"
            className="aspect-[4/3] w-full rounded-lg object-cover lg:col-span-7"
            loading="lazy" />
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-brand">
              <TruckIcon className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-semibold">Unser Fuhrpark</span>
            </div>
            <h3 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95]">
              Geliefert, wo Sie bauen
            </h3>
            <dl className="mt-8 divide-y divide-ink-line border-y border-ink-line">
              {fleet.map((f) =>
              <div key={f.name} className="py-4">
                  <dt className="font-semibold">{f.name}</dt>
                  <dd className="text-sm text-white/60">{f.detail}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </section>);

}