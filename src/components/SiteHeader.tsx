import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, PhoneIcon, XIcon, MapPinIcon } from 'lucide-react';
import { Logo } from './Logo';
import { OpenBadge } from './OpenBadge';
import { contact, navItems } from '../data/site';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-ink text-[13px] text-white/90">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          <OpenBadge />
          <div className="hidden items-center gap-6 md:flex">
            <span className="inline-flex items-center gap-1.5 text-white/70">
              <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {contact.street}, {contact.city}
            </span>
            <a href={contact.mobileHref} className="text-white/70 transition-colors duration-150 hover:text-white">
              Mobil {contact.mobile}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
          <Logo />

          <nav aria-label="Hauptnavigation" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) =>
              <li key={item.href}>
                  <a
                  href={item.href}
                  className="text-[15px] font-medium text-ink/80 transition-colors duration-150 hover:text-brand-dark">
                  
                    {item.label}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={contact.phoneHref}
              className="hidden items-center gap-2 whitespace-nowrap rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-brand-dark sm:inline-flex">
              
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              {contact.phone}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-paper-deep lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Menü schließen' : 'Menü öffnen'}>
              
              {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open &&
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="border-t border-line bg-paper px-5 pb-5 lg:hidden">
            
              <ul className="divide-y divide-line">
                {navItems.map((item) =>
              <li key={item.href}>
                    <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 font-display text-xl font-bold uppercase">
                  
                      {item.label}
                    </a>
                  </li>
              )}
              </ul>
              <a
              href={contact.phoneHref}
              className="mt-4 flex items-center justify-center gap-2 rounded-md bg-brand py-3 font-semibold text-white">
              
                <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                {contact.phone}
              </a>
            </motion.nav>
          }
        </AnimatePresence>
      </div>
    </header>);

}