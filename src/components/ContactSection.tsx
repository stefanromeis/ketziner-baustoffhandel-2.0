import React from 'react';
import { MailIcon, PhoneIcon, SmartphoneIcon, NavigationIcon } from 'lucide-react';
import { OpenBadge } from './OpenBadge';
import { contact, openingHours } from '../data/site';

export function ContactSection() {
  const today = new Date().getDay();

  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="border-t border-line bg-paper-deep py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <h2 id="kontakt-title" className="font-display text-5xl font-extrabold uppercase leading-[0.9] text-ink">
            Besuchen Sie uns
          </h2>
          <address className="mt-6 not-italic text-lg text-ink">
            {contact.name}
            <br />
            {contact.street}
            <br />
            {contact.city}
          </address>

          <ul className="mt-8 space-y-3">
            <li>
              <a href={contact.phoneHref} className="group inline-flex items-center gap-3 text-ink">
                <PhoneIcon className="h-5 w-5 text-brand-dark" aria-hidden="true" />
                <span className="font-display text-2xl font-bold group-hover:text-brand-dark">{contact.phone}</span>
              </a>
            </li>
            <li>
              <a href={contact.mobileHref} className="inline-flex items-center gap-3 text-ink hover:text-brand-dark">
                <SmartphoneIcon className="h-5 w-5 text-brand-dark" aria-hidden="true" />
                Mobil {contact.mobile}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-3 text-ink hover:text-brand-dark">
                <MailIcon className="h-5 w-5 text-brand-dark" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
          </ul>

          <div className="mt-10 rounded-lg bg-paper p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-xl font-bold uppercase text-ink">Öffnungszeiten</h3>
              <span className="text-sm text-ink">
                <OpenBadge />
              </span>
            </div>
            <dl className="mt-4 divide-y divide-line">
              {openingHours.map((row) => {
                const isToday = row.days.includes(today);
                return (
                  <div
                    key={row.label}
                    className={`flex justify-between gap-4 py-2.5 text-[15px] ${isToday ? 'font-semibold text-ink' : 'text-muted'}`}>
                    
                    <dt>
                      {row.label}
                      {isToday && <span className="ml-2 text-xs font-semibold text-brand-dark">heute</span>}
                    </dt>
                    <dd className="whitespace-nowrap">{row.time}</dd>
                  </div>);

              })}
            </dl>
            <p className="mt-3 text-sm text-muted">Mittagspause Mo – Fr: 13:00 – 13:30 Uhr</p>
          </div>
        </div>

        <div className="flex flex-col lg:col-span-7">
          <div className="relative min-h-[380px] flex-1 overflow-hidden rounded-lg border border-line bg-paper">
            <iframe
              title="Karte: Ketziner Baustoffhandel, Am Mühlenweg, Ketzin"
              src="https://www.openstreetmap.org/export/embed.html?bbox=12.825%2C52.466%2C12.866%2C52.484&layer=mapnik&marker=52.4747%2C12.8456"
              className="absolute inset-0 h-full w-full grayscale-[30%]"
              loading="lazy" />
            
          </div>
          <a
            href={contact.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 self-start font-semibold text-ink hover:text-brand-dark">
            
            <NavigationIcon className="h-4 w-4" aria-hidden="true" />
            Route planen
          </a>
        </div>
      </div>
    </section>);

}