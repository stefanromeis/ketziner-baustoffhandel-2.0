import React from 'react';

interface LogoProps {
  inverted?: boolean;
}

export function Logo({ inverted = false }: LogoProps) {
  const text = inverted ? 'text-white' : 'text-ink';
  return (
    <a href="#top" className="flex items-end gap-2.5" aria-label="Ketziner Baustoffhandel – Startseite">
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <path d="M24 2 L38 30 L10 30 Z" fill="#0094d4" />
        <path d="M2 36 Q20 31 38 33 L38 38 L2 38 Z" fill="#0094d4" />
      </svg>
      <span className={`font-display font-extrabold uppercase leading-[0.9] tracking-tight ${text}`}>
        <span className="block text-[15px]">Ketziner</span>
        <span className="block text-[15px]">Baustoffhandel</span>
      </span>
    </a>);

}