# Plan: Landing Page – Rach&Schleich GmbH

## Context
Neues SvelteKit 2 + Svelte 5 Projekt (noch kein `package.json` vorhanden). Ziel ist eine professionelle, Apple-inspirierte Landing Page für die Dachdecker-Firma Rach&Schleich GmbH. Dark-Hero mit Cursor-Spotlight, helle Service-Sections darunter, Bento-Grid für die drei Hauptleistungen.

---

## Phase 0 – Projekt-Initialisierung

```bash
# Im Verzeichnis c:\Users\andrg\OpenRouter\Rach_Lager_App
npm create svelte@latest . -- --template skeleton --types typescript --no-prettier --no-eslint --no-playwright --no-vitest
npm install
npm install -D tailwindcss@3 postcss autoprefixer
npm install -D daisyui@4
npx tailwindcss init -p
```

---

## Dateistruktur nach Setup

```
src/
  app.css                  # Tailwind-Direktiven + globale Fonts
  app.html                 # Google Fonts Preconnect (Clash Display, Inter)
  lib/
    components/
      Navbar.svelte
      Hero.svelte          # ← Cursor-Spotlight hier
      Stats.svelte
      BentoGrid.svelte
      Testimonials.svelte
      Emergency.svelte
      Footer.svelte
  routes/
    +layout.svelte
    +page.svelte
tailwind.config.js
```

---

## Konfiguration

### tailwind.config.js
```js
module.exports = {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {
    extend: {
      colors: {
        'signal-orange': '#FF5A00',
        'steel-blue': '#2B4F6E',
        'warm-copper': '#B87333',
        'anthrazit': '#1A1A1A',
        'off-white': '#F8F8F8',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{ dachdecker: {
      primary: '#FF5A00', secondary: '#2B4F6E',
      accent: '#B87333', neutral: '#1A1A1A', 'base-100': '#F8F8F8',
    }}],
  },
}
```

### app.html
- Google Fonts Preconnect
- Clash Display (via Fontshare CDN: `https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap`)
- Inter via Google Fonts

---

## Seitenstruktur (+page.svelte)

```
<Navbar />
<Hero />          ← dunkel, Cursor-Spotlight
<Stats />         ← Übergangsband (dunkel→hell)
<BentoGrid />     ← hell, Off-White
<Testimonials />
<Emergency />     ← dunkel, Signal-Orange CTA
<Footer />
```

---

## Komponenten-Details

### Navbar.svelte
- Transparenter Start, glassmorphism (`backdrop-blur`) beim Scrollen via Svelte 5 `$state`
- Logo links: „Rach&Schleich" in Clash Display
- Navigation: Leistungen · Referenzen · Über uns · Kontakt
- CTA-Button rechts: „Angebot anfordern" (Signal-Orange)

### Hero.svelte – Diced Split-Layout mit Cursor Spotlight
Inspiriert von: https://21st.dev/Northstrix/diced-hero-section/default

- **Bild**: `Projekt_Images/Dach.png` → kopieren nach `static/images/dach.png`
- **Layout**: Zwei-Spalten-Split (Desktop) – Text links, Bild-Grid rechts

#### Linke Spalte (Text + CTA)
- Cursor-Spotlight als Overlay auf dem gesamten dunklen Hero-Bereich
- Svelte 5: `let mouseX = $state(0); let mouseY = $state(0);`
- `onmousemove` → Koordinaten relativ zum Hero-Container
- Spotlight-Radial-Gradient (absolut, `pointer-events: none`):
  ```
  background: radial-gradient(600px circle at {mouseX}px {mouseY}px,
    rgba(255, 90, 0, 0.15), transparent 75%)
  ```
- Headline: „Das Dach in den besten Händen." (Clash Display, 72–96px, weiß)
- Subline: Kurztext Firma
- CTAs: „Kostenlos anfragen" (Signal-Orange filled) + „Referenzen" (outline weiß)

#### Rechte Spalte – Diced Image Grid
- **2×2 Grid** (`grid-cols-2 gap-3`)
- `dach.png` wird 4× verwendet, jeweils mit `object-position` um verschiedene Ausschnitte zu zeigen:
  - Oben links:  `object-[30%_20%]`
  - Oben rechts: `object-[70%_20%]`
  - Unten links: `object-[30%_80%]`
  - Unten rechts: `object-[70%_80%]`
- Jede Kachel: `overflow-hidden`, Höhe `clamp(160px, 22vw, 260px)`

**Diced-Effekt – Pseudo-Element-Technik (kein clip-path):**
- Äußere Ecke jeder Kachel: `border-radius` nur an der dem Grid-Rand zugewandten Ecke (z.B. oben-links → `rounded-tl-[20px]`)
- Innere Ecke (Richtung Grid-Mitte): absolut positioniertes `div` mit:
  - Größe: `w-[60px] h-[60px]` (3× die ursprüngliche Größe)
  - Hintergrund: `bg-black` (`#000000`, reines Schwarz)
  - Gegenläufiger `border-radius` (z.B. oben-links-Kachel → `rounded-tl-[20px]` am BR-Overlay)
  - Erzeugt konkaven Ausschnitt durch Überlagerung der Kachel-Ecke mit schwarzem Kreissegment

**Spotlight-Blockade in den Ecken:**
- Spotlight-Overlay liegt auf `z-10`, Content-Wrapper auf `z-20`
- Concave-Divs erben den `z-20`-Kontext → rendern immer über dem Spotlight
- `bg-black` (vollständig opak) → kein Spotlight-Licht bricht in die Ecken ein
- `pointer-events-none` auf Concave-Div → Mausinteraktion bleibt auf dem Bild aktiv

```svelte
const tiles = [
  { imgPos: 'object-[30%_20%]', outer: 'rounded-tl-[20px]', innerAt: 'bottom-0 right-0', innerR: 'rounded-tl-[20px]' },
  { imgPos: 'object-[70%_20%]', outer: 'rounded-tr-[20px]', innerAt: 'bottom-0 left-0',  innerR: 'rounded-tr-[20px]' },
  { imgPos: 'object-[30%_80%]', outer: 'rounded-bl-[20px]', innerAt: 'top-0 right-0',    innerR: 'rounded-bl-[20px]' },
  { imgPos: 'object-[70%_80%]', outer: 'rounded-br-[20px]', innerAt: 'top-0 left-0',     innerR: 'rounded-br-[20px]' },
];
```

- Hover auf einzelnen Kacheln: `scale(1.05)`, `brightness(1.1)`, `transition 500ms`

#### Responsive
- `< 1024px`: Spalten stapeln sich, Bild-Grid kommt unter den Text
- `< 640px`: 2×2 Grid wird zu 1×2 (2 Bilder nebeneinander)

### Stats.svelte
- 4 Karten in einer Zeile: `150+ Projekte` · `25 Jahre Erfahrung` · `98% Zufriedenheit` · `12 Mitarbeiter`
- Zahlen in JetBrains Mono, groß, Signal-Orange
- Dunkles Band als Übergang Hero→Bento

### BentoGrid.svelte
- CSS Grid mit `grid-template-columns: repeat(12, 1fr)` und variablen Spans
- Hintergrund: Off-White (#F8F8F8)
- 3 Haupt-Leistungen + 2 kleine Zusatzkarten:

| Karte | Spans | Inhalt |
|---|---|---|
| Dachsanierung | col-span-8, row-span-2 | Groß, Icon + Text + CTA |
| Neueindeckung | col-span-4, row-span-1 | Mittel |
| Dachdämmung | col-span-4, row-span-1 | Mittel |
| „Seit 2000 in der Region" | col-span-4 | Trust-Badge |
| Notruf 24/7 | col-span-8 | Orange Highlight-Karte |

- Karten: `rounded-2xl`, `border border-gray-200`, subtiler `box-shadow`
- Hover: `scale(1.02)`, `shadow-xl` mit `transition-all 300ms`

### Testimonials.svelte
- 3 Testimonial-Karten horizontal nebeneinander
- Sternebewertung, Zitat, Name + Ort
- Hintergrund: leichtes Grau

### Emergency.svelte
- Dunkler Hintergrund (#0A0A0A)
- Pulsierende Signal-Orange Telefonnummer: `animate-pulse`
- Subtext: „24/7 Notdienst – wir sind immer für Sie da"
- Sekundärer CTA: Kontaktformular-Link

### Footer.svelte
- 3 Spalten: Logo+Beschreibung · Navigation · Kontakt
- Dunkler Hintergrund, Off-White Text

---

## Assets
- `Projekt_Images/Dach.png` → kopieren nach `static/images/dach.png` (SvelteKit-Konvention für statische Dateien)
- Im Hero referenziert als `src="/images/dach.png"`

---

## Kritische Dateien
- `src/routes/+page.svelte` – Haupt-Assembly
- `src/routes/+layout.svelte` – Global styles import
- `src/app.css` – Tailwind + Fonts
- `src/app.html` – Font CDN Links
- `src/lib/components/Hero.svelte` – Cursor Spotlight Kernlogik
- `src/lib/components/BentoGrid.svelte` – Bento Layout
- `tailwind.config.js`

---

## Verifikation
1. `npm run dev` → localhost:5173
2. Hero: Maus bewegen → Spotlight-Effekt sichtbar (Orange-Schimmer)
3. Bento-Grid auf verschiedenen Auflösungen (Tablet: 2 Spalten, Mobile: 1 Spalte)
4. Navbar: Scrollen → Glassmorphism aktiviert
5. Emergency-Section: Pulsierender Effekt auf Telefonnummer
6. Fonts geladen: Clash Display für Headlines, Inter für Body
