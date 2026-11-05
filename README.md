# Ketziner Baustoffhandel 2.0

Neue Website des Ketziner Baustoffhandels, gebaut mit [Astro](https://astro.build) und Tailwind CSS.
Die Seite wird komplett als statisches HTML ausgeliefert, damit Suchmaschinen alle Inhalte direkt lesen können.

## Entwicklung

Benötigt Node.js 22.23.4 oder neuer (`.nvmrc` nennt die verwendete Version).

```bash
npm install
npm run dev      # Entwicklungsserver auf http://localhost:4321
npm run build    # Typprüfung und Build nach dist/
npm run preview  # gebaute Seite lokal ansehen
```

## Aufbau

- `src/pages/index.astro`: Startseite
- `src/layouts/BaseLayout.astro`: HTML-Grundgerüst, SEO-Metadaten und strukturierte Daten
- `src/components/`: Abschnitte der Seite
- `src/data/site.ts`: Inhalte wie Kontaktdaten, Sortiment, Leistungen und die von Hand gepflegte Google-Bewertung
- `public/.htaccess`: Weiterleitungen der alten PHP-Adressen für den Umzug auf die echte Domain (nur auf Apache wirksam)
- `src/utils/openingHours.ts`: Öffnungszeiten für die „Jetzt geöffnet“-Anzeige und die strukturierten Daten
- `src/assets/`: Fotos und Logos der bisherigen Website, die beim Build automatisch optimiert werden

Der Fuhrpark ist in `src/components/Services.astro` vorerst auskommentiert.

Die Domain für Canonical-URL und Sitemap steht in `astro.config.mjs` und `public/robots.txt`.

## Vorschau auf GitHub Pages

Jeder Push auf `main` baut die Seite und veröffentlicht sie unter
<https://stefanromeis.github.io/ketziner-baustoffhandel-2.0/> (`.github/workflows/deploy.yml`).
Diese Vorschau ist mit `noindex` markiert und erscheint deshalb nicht in Suchmaschinen.
