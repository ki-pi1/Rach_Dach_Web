# Claude.md - Rach & Schleich GmbH Dachdecker-Website

## Projektübersicht
Professionelle Website für eine Dachdecker-Firma. Fokus: Kundengewinnung, lokale SEO, Handwerksästhetik. **Kein generisches Template.**

## GOLDENE REGEL: Kosten
**NIEMALS** eine Generierungs-API aufrufen ohne:
1. Kosten aufzulisten
2. Explizite Bestätigung des Nutzers

## Tech Stack
- **Framework**: SvelteKit 2 + Svelte 5 (Runes-Modus aktiv)
- **Styling**: Tailwind CSS 3 + DaisyUI 4
- **Adapter**: `@sveltejs/adapter-node` (Node.js Server)
- **Deployment**: Hostinger VPS via Docker + Traefik (SSL)

## Commands
```bash
npm run dev        # Dev-Server starten
npm run build      # Production Build
npm run preview    # Build lokal testen
npm run check      # TypeScript + Svelte prüfen
```

## Projektstruktur
```
src/
  routes/
    +layout.svelte     # Root Layout
    +page.svelte        # Startseite
  lib/
    components/
      Hero.svelte
      Navbar.svelte
      Footer.svelte
      BentoGrid.svelte
      Emergency.svelte
      Stats.svelte
      Testimonials.svelte
    index.ts            # Barrel-Export
static/               # Statische Assets
Dockerfile
docker-compose.yml
```

## Svelte 5 Runes
Runes-Modus ist global aktiv (`runes: true` in `vite.config`). Immer `$state`, `$derived`, `$effect` statt `let` für reaktive Werte.

## Deployment (Hostinger VPS)
- Traefik läuft systemseitig mit `network_mode: host`
- App läuft auf Port `3000`, gebunden an `127.0.0.1`
- Domain: `rs-bau.cloud`
- SSL via Let's Encrypt (Traefik übernimmt automatisch)
- GitHub Repo: `ki-pi1/Rach_Dach_Web`

## Design-System
Siehe Skill `frontend-design` für vollständige Design-Richtlinien.

**Kurzfassung:**
- Primär: Signal-Orange `#FF5A00` / Anthrazit `#1A1A1A`
- Sekundär: Stahlblau `#2B4F6E` / Kupfer `#B87333`
- Fonts: Clash Display (Headlines), Inter (Text), JetBrains Mono (Zahlen)
- Industrielle Ästhetik — kein Bauklotz-Design

## Gotchas
- `adapter-node` erfordert `node build/index.js` im Container
- DaisyUI-Theme heißt `dachdecker` (in `tailwind.config.js` definiert)
- Svelte-Runes: kein `export let` mehr — stattdessen `const { prop } = $props()`
