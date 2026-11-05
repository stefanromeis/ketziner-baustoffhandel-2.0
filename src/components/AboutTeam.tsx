import React from 'react';
import { images, partners } from '../data/site';

export function AboutTeam() {
  return (
    <section id="ueber-uns" aria-labelledby="about-title" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:items-center lg:px-8">
        <img
          src={images.team}
          alt="Das Team des Ketziner Baustoffhandels am Verkaufstresen"
          className="aspect-[4/3] w-full rounded-lg object-cover lg:col-span-6"
          loading="lazy" />
        
        <div className="lg:col-span-5 lg:col-start-8">
          <h2 id="about-title" className="font-display text-5xl font-extrabold uppercase leading-[0.9] text-ink">
            Ihr Team in Ketzin
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Als familiengeführter Fachhandel kennen wir unsere Kunden – und ihre Baustellen. Ob Handwerksbetrieb oder
            Bauherr am Wochenende: Bei uns bekommen Sie ehrliche Beratung und Material, auf das Verlass ist.
          </p>
          <blockquote className="mt-8 border-l-2 border-brand pl-5">
            <p className="font-display text-2xl font-bold uppercase leading-tight text-ink">
              „Kommen Sie vorbei – wir finden die passende Lösung.“
            </p>
            <footer className="mt-2 text-sm text-muted">Familie Mier, Inhaber</footer>
          </blockquote>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-5 lg:px-8">
        <div className="border-t border-line pt-8">
          <h3 className="text-sm font-semibold text-muted">Markenprodukte unserer Partner</h3>
          <ul className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-4">
            {partners.map((p) =>
            <li key={p} className="font-display text-2xl font-bold uppercase text-ink/45">
                {p}
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}