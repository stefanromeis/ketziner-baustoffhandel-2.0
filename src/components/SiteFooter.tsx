import React from 'react';
import { Logo } from './Logo';
import { contact, footerLinks } from '../data/site';

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between lg:px-8">
        <div>
          <Logo inverted />
          <p className="mt-4 text-sm text-white/60">
            {contact.street} · {contact.city} · {contact.phone}
          </p>
        </div>
        <nav aria-label="Rechtliches">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {footerLinks.map((l) =>
            <li key={l.label}>
                <a href={l.href} className="text-white/70 transition-colors duration-150 hover:text-white">
                  {l.label}
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div className="border-t border-ink-line">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs text-white/50 lg:px-8">
          © {new Date().getFullYear()} {contact.name}
        </p>
      </div>
    </footer>);

}