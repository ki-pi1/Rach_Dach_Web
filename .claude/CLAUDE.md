# Claude.md - Dachdecker Firmenwebsite

## Projektübersicht
Entwicklung einer professionellen, leistungsstarken Website für eine Dachdecker-Firma mit Fokus auf Handwerksleistungen, Kundengewinnung und lokale SEO. Das Design folgt einem **bold, distinctive** Ansatz - keine generischen AI-Aesthetics.

## GOLDENE REGEL: Kosten
**NIEMALS** eine Generierungs-API aufrufen, ohne vorher:
1. Die Kostenaufzulisten
2. Eine **explizite Bestaetigung** vom Nutzer zu haben

## Tech Stack
- **Framework**: Next.js 15 mit App Router + TypeScript
- **UI-Komponenten**: Svelte 5 + Sveltekit 2 Integration
- **Styling**: Tailwind CSS 3 + DaisyUI 4
- **Deployment**: Vercel (optimiert für Next.js)
- **CMS**: Sanity.io für flexible Inhaltsverwaltung

## Design-System & UI-Richtlinien

### Frontend-Design Skill für UI-Entscheidungen
- Jede UI-Komponente folgt konsistenten Design-Prinzipien
- Design-Entscheidungen basieren auf Nutzerverhalten und Konversionsoptimierung
- Komponenten-Bibliothek mit Storybook-Dokumentation

### UI/UX Pro Max für Design-System-Generierung
- **Farbpalette**: 
  - Primär: Kräftiges Anthrazit (#1A1A1A) mit Akzent in Signal-Orange (#FF5A00)
  - Sekundär: Industrielles Stahlblau (#2B4F6E)
  - Akzente: Warmes Kupfer (#B87333) für Handwerks-Assoziation
  - Hintergrund: Off-White (#F8F8F8) für Kontrast
- **Typografie**:
  - Überschriften: "Clash Display" (variable font) - bold, charakterstark
  - Fließtext: "Inter" - exzellente Lesbarkeit
  - Auszeichnungen: "JetBrains Mono" für technische Daten/Zahlen
- **Abstände**: 8-Punkt-Raster mit gelegentlichen bewussten Brüchen für Spannung
- **Border-Radius**: Mix aus scharfkantig (0px) für industriellen Look und weich (12px) für Zugänglichkeit
- **Schatten**: Tiefe, dramatische Box-Shadows für Hero-Elemente

### 21st.dev Component-Inspiration
- Adaption innovativer Interaktionsmuster
- Mikro-Interaktionen bei Hover-Zuständen
- Scroll-Animationen mit Substanz (nur wenn sie Mehrwert bieten)

### Bold, Distinctive Design-Choices
- **Hero-Bereich**: Split-Screen Design mit diagonale Trennung
- **Karten**: Asymmetrisches Grid für Leistungen
- **Zahlen/Daten**: Großzügige, typografische Inszenierung
- **Kontrastreiche CTA-Buttons mit subtilen Animationen
- **Industrielle Ästhetik** die Handwerkskompetenz ausstrahlt

## Seitenstruktur

### 1. Startseite
- Split-Screen Hero: Linke Seite Text/CTA, rechte Seite Full-Bleed Video/Image mit Parallax-Effekt
- Floating Statistics Banner mit Live-Daten (zufriedene Kunden, abgeschlossene Projekte)
- Leistungen als interaktive 3D-Flip-Karten mit DaisyUI
- Referenzen als Full-Width Masonry-Grid
- Kundenstimmen mit authentischen Fotos und Video-Testimonials
- Interaktive Deutschlandkarte mit Service-Gebieten
- Kontakt-Sektion mit prominenter Notrufnummer (pulsierendes Element)

### 2. Leistungen
- Detaillierte Unterseiten für jede Hauptleistung
- Technische Illustrationen vs. Fotos
- Kostenindikatoren mit Preis-Spannen
- Vorher/Nachher-Slider (custom Svelte 5 Komponente)

### 3. Über uns
- Team-Timeline als horizontale Scrolling-Story
- Meisterbriefe und Zertifikate als interaktive Badges
- Firmen-Video mit authentischen Einblicken

### 4. 3D-Dachkonfigurator (Premium-Feature)
- Vereinfachtes 3D-Modell zur Dachvisualisierung
- Materialauswahl (Ziegel, Blech, etc.)
- Farbauswahl mit Echtzeit-Vorschau
- Speichern und Anfrage senden

### 5. Kontakt & Notdienst
- Sticky "Notdienst-Schalter" auf allen Unterseiten
- Intelligentes Kontaktformular mit Terminvorschlägen
- Live-Verfügbarkeitsanzeige der Handwerker

## Performance-Optimierung (Core Web Vitals)

### LCP (Largest Contentful Paint)
- Next.js Image Optimization für alle Bilder
- Kritische CSS inline
- Preload für Hero-Bilder
- AVIF/WebP Format mit Fallbacks

### INP (Interaction to Next Paint)
- Optimierte Event-Handler in Svelte 5
- Vermeidung von Layout-Shifts
- Debounced Resize-Listener

### CLS (Cumulative Layout Shift)
- Feste Aspect-Ratios für Medien
- Platzhalter-Komponenten während Loading
- Font-Display: swap für Typografie

## Komponenten-Architektur

### Next.js + Svelte 5 Integration
```
/app
  /components
    /ui (shadcn/ui-like Basis-Komponenten mit DaisyUI)
    /sections (Page-Sections als Svelte 5 Komponenten)
    /forms (Interaktive Formulare)
    /3d (Three.js Integration für Konfigurator)
  /lib
    /utils
    /hooks
  /styles
    /design-tokens (CSS-Variablen für Design-System)
```

## SEO & Lokale Optimierung
- **LocalBusiness Schema** mit detaillierten Service-Gebieten
- **BreadcrumbList** für alle Unterseiten
- **FAQ-Schema** für häufige Kundenfragen
- Dynamische Unterseiten für jede Stadt im Service-Gebiet
- Google Maps Integration mit Service-Radius

## Content-Strategie (Initial)

### Blog-Artikel (20+)
1. "Dachsanierung Kosten 2025: Aktuelle Preise im Überblick"
2. "Notdienst bei Sturmschäden: So handeln Sie richtig"
3. "Photovoltaik auf dem Dach: Förderungen 2025"
4. "Dachbegrünung: Vor- und Nachteile im Überblick"
5. "Zwischensparren-Dämmung vs. Aufsparren-Dämmung"
... und weitere regionalspezifische Themen

### Video-Content
- 60s Erklärvideos für jede Hauptleistung
- 15s Instagram-Reels für Social Media
- 360°-Ansichten abgeschlossener Projekte

## Entwicklungsumgebung & Tooling

### Setup
```bash
# Next.js 15 mit TypeScript
npx create-next-app@latest dachdecker-website --typescript --tailwind --app

# Svelte 5 Integration
npm install svelte@5 @sveltejs/kit@2

# DaisyUI
npm install daisyui@4
```

### Tailwind Konfiguration (mit DaisyUI)
```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,svelte}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5A00',
        secondary: '#2B4F6E',
        accent: '#B87333',
      },
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dachdecker: {
          primary: '#FF5A00',
          secondary: '#2B4F6E',
          accent: '#B87333',
          neutral: '#1A1A1A',
          'base-100': '#F8F8F8',
        },
      },
    ],
  },
}
```

## Projektphasen mit Meilensteinen

### Phase 1: Foundation (2 Wochen)
- Design-System aufsetzen
- Next.js 15 + Svelte 5 Integration testen
- Basis-Komponenten entwickeln

### Phase 2: Core Features (3 Wochen)
- Hauptseiten-Templates
- Dachkonfigurator Prototyp
- Kontaktformular mit API-Integration

### Phase 3: Content & Optimierung (2 Wochen)
- Content-Migration
- Bildoptimierung
- Performance-Tuning

### Phase 4: Testing & Launch (1 Woche)
- Cross-Browser-Tests
- SEO-Audit
- Deployment mit Vercel

## Qualitätssicherung

### Code-Qualität
- TypeScript strict mode
- ESLint + Prettier
- Husky pre-commit hooks
- Unit Tests mit Vitest

### Performance-Budget
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1
- First Contentful Paint < 1.8s
- Total Bundle Size < 300kb (gzipped)

### Barrierefreiheit (WCAG 2.1 AA)
- Kontrastverhältnisse min. 4.5:1
- ARIA-Labels
- Tastatur-Navigation
- Screen-Optimierungen

---

**Wichtig**: Dieses Dokument dient als zentrale Referenz für alle Entwicklungsentscheidungen. Bei Abweichungen oder Unklarheiten ist der Frontend-Design Skill zu konsultieren. Das Design muss handwerklich, vertrauenswürdig und technisch innovativ wirken - kein generisches "Handwerker-Website"-Template.