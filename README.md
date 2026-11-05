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
- `src/data/site.ts`: Inhalte wie Kontaktdaten, Sortiment und Leistungen
- `src/utils/openingHours.ts`: Öffnungszeiten für die „Jetzt geöffnet“-Anzeige und die strukturierten Daten
- `src/assets/`: Bilder, die beim Build automatisch optimiert werden

Die Domain für Canonical-URL und Sitemap steht in `astro.config.mjs` und `public/robots.txt`.
