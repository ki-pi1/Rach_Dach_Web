<script lang="ts">
  import { referenzen } from '$lib/referenzen';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { base } from '$app/paths';

  const categoryColors: Record<string, string> = {
    'Dachsanierung': 'bg-signal-orange/15 text-signal-orange',
    'Flachdach': 'bg-stahl-blue/15 text-stahl-blue',
    'Begrünung & PV': 'bg-green-500/15 text-green-400',
  };

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('de-DE', {
      month: 'long',
      year: 'numeric',
    });
  }
</script>

<svelte:head>
  <title>Referenzen – Rach&amp;Schleich GmbH</title>
  <meta name="description" content="Abgeschlossene Projekte von Rach & Schleich GmbH: Dachsanierung, Flachdach, Begrünung und mehr." />
</svelte:head>

<Navbar />

<main class="bg-anthrazit min-h-screen">
  <!-- Header -->
  <section class="pt-32 pb-16 px-6 border-b border-white/10">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-1 h-8 bg-signal-orange rounded-full"></div>
        <span class="font-mono text-signal-orange text-sm tracking-widest uppercase">Unsere Arbeit</span>
      </div>
      <h1 class="font-display text-5xl lg:text-7xl font-bold text-white leading-none mb-6">
        Referenzen<span class="text-signal-orange">.</span>
      </h1>
      <p class="text-white/60 text-lg max-w-xl">
        Echte Projekte, reale Zahlen. Kein Stockfoto, keine Musterrechnung – das sind unsere abgeschlossenen Arbeiten.
      </p>
    </div>
  </section>

  <!-- Stats bar -->
  <section class="border-b border-white/10">
    <div class="max-w-6xl mx-auto px-6 py-8 grid grid-cols-3 divide-x divide-white/10">
      {#each [['20+', 'Jahre Erfahrung'], ['500+', 'Projekte gesamt'], ['100%', 'Meisterbetrieb']] as [val, label]}
        <div class="px-6 first:pl-0 last:pr-0 text-center">
          <p class="font-display text-3xl font-bold text-signal-orange">{val}</p>
          <p class="text-white/40 text-sm font-mono mt-1">{label}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Projects -->
  <section class="py-16 px-6">
    <div class="max-w-6xl mx-auto flex flex-col gap-8">
      {#each referenzen as ref, i}
        <a
          href="{base}/referenzen/{ref.slug}"
          class="group grid lg:grid-cols-5 bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-signal-orange/50 transition-all duration-300"
        >
          <!-- Visual panel -->
          <div class="lg:col-span-2 min-h-52 bg-gradient-to-br
            {i === 0 ? 'from-signal-orange/25 to-anthrazit' : i === 1 ? 'from-stahl-blue/30 to-anthrazit' : 'from-green-700/25 to-anthrazit'}
            flex flex-col justify-between p-8 relative"
          >
            <span class="font-mono text-white/20 text-6xl font-bold leading-none select-none">
              0{i + 1}
            </span>
            <div>
              <p class="font-mono text-white/40 text-xs uppercase tracking-widest mb-1">{ref.location}</p>
              <p class="font-mono text-white/25 text-xs">{ref.flaeche} · {ref.duration}</p>
            </div>
          </div>

          <!-- Content -->
          <div class="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <span class="text-xs font-semibold px-3 py-1 rounded-full {categoryColors[ref.category]} font-mono">
                  {ref.category}
                </span>
                <span class="text-white/30 text-xs font-mono">{formatDate(ref.date)}</span>
              </div>
              <h2 class="font-display text-2xl lg:text-3xl font-bold text-white mb-1 group-hover:text-signal-orange transition-colors">
                {ref.title}
              </h2>
              <p class="text-white/40 font-mono text-sm mb-4">{ref.subtitle}</p>
              <p class="text-white/60 leading-relaxed">{ref.excerpt}</p>
            </div>
            <div class="flex flex-wrap gap-2 mt-6">
              {#each ref.tags as tag}
                <span class="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-white/50 font-mono">{tag}</span>
              {/each}
            </div>
          </div>
        </a>
      {/each}
    </div>
  </section>

  <!-- CTA -->
  <section class="py-16 px-6 border-t border-white/10">
    <div class="max-w-3xl mx-auto text-center">
      <p class="text-white/50 font-mono text-sm uppercase tracking-widest mb-4">Ihr Projekt</p>
      <h2 class="font-display text-3xl font-bold text-white mb-6">
        Das nächste Referenzprojekt könnte Ihres sein.
      </h2>
      <p class="text-white/60 mb-8">Kostenloses Vor-Ort-Angebot innerhalb von 48 Stunden.</p>
      <a
        href="{base}/#kontakt"
        class="inline-block bg-signal-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition-colors"
      >
        Angebot anfordern
      </a>
    </div>
  </section>
</main>

<Footer />
