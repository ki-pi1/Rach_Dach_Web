<script lang="ts">
  import { page } from '$app/stores';
  import { getReferenz, referenzen } from '$lib/referenzen';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  const ref = $derived($page.params.slug ? getReferenz($page.params.slug) : undefined);

  const categoryColors: Record<string, string> = {
    'Dachsanierung': 'bg-signal-orange/15 text-signal-orange',
    'Flachdach': 'bg-stahl-blue/15 text-stahl-blue',
    'Begrünung & PV': 'bg-green-500/15 text-green-400',
  };

  const otherRefs = $derived(
    referenzen.filter((r) => r.slug !== ($page.params.slug ?? '')).slice(0, 2)
  );

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  }
</script>

<svelte:head>
  <title>{ref ? ref.title + ' – Rach&Schleich GmbH' : 'Referenzen – Rach&Schleich GmbH'}</title>
  {#if ref}<meta name="description" content={ref.excerpt} />{/if}
</svelte:head>

{#if ref}
  <Navbar />

  <main class="bg-anthrazit min-h-screen">
    <!-- Header -->
    <section class="pt-32 pb-12 px-6 border-b border-white/10">
      <div class="max-w-3xl mx-auto">
        <a href="/referenzen" class="inline-flex items-center gap-2 text-white/40 hover:text-white/80 text-sm font-mono mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Alle Referenzen
        </a>

        <div class="flex items-center gap-3 mb-6">
          <span class="text-xs font-semibold px-3 py-1 rounded-full {categoryColors[ref.category]} font-mono">
            {ref.category}
          </span>
        </div>

        <h1 class="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
          {ref.title}
        </h1>
        <p class="text-signal-orange font-mono text-base mb-6">{ref.subtitle}</p>
        <p class="text-white/60 text-lg leading-relaxed mb-8">{ref.excerpt}</p>

        <!-- Meta grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-8">
          {#each [['Ort', ref.location], ['Fläche', ref.flaeche], ['Dauer', ref.duration], ['Abschluss', formatDate(ref.date)]] as [label, value]}
            <div>
              <p class="text-white/30 font-mono text-xs uppercase tracking-widest mb-1">{label}</p>
              <p class="text-white font-semibold text-sm">{value}</p>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- Tags -->
    <section class="px-6 py-6 border-b border-white/10">
      <div class="max-w-3xl mx-auto flex flex-wrap gap-2">
        {#each ref.tags as tag}
          <span class="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/50 font-mono">{tag}</span>
        {/each}
      </div>
    </section>

    <!-- Content -->
    <section class="py-12 px-6">
      <div class="max-w-3xl mx-auto">
        <div class="prose-rach">
          {@html ref.content}
        </div>

        <!-- CTA Box -->
        <div class="mt-16 p-6 bg-signal-orange/10 border border-signal-orange/30 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div class="flex-1">
            <p class="text-white font-semibold mb-1">Ähnliches Projekt geplant?</p>
            <p class="text-white/60 text-sm">Wir erstellen Ihnen ein kostenloses Angebot – vor Ort und innerhalb von 48 Stunden.</p>
          </div>
          <a
            href="/#kontakt"
            class="shrink-0 bg-signal-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition-colors text-sm whitespace-nowrap"
          >
            Angebot anfordern
          </a>
        </div>
      </div>
    </section>

    <!-- Other references -->
    {#if otherRefs.length > 0}
      <section class="py-12 px-6 border-t border-white/10">
        <div class="max-w-5xl mx-auto">
          <h2 class="font-display text-2xl font-bold text-white mb-8">Weitere Referenzen</h2>
          <div class="grid md:grid-cols-2 gap-5">
            {#each otherRefs as other}
              <a
                href="/referenzen/{other.slug}"
                class="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-signal-orange/50 transition-all duration-300"
              >
                <span class="text-xs font-semibold px-2 py-1 rounded-full {categoryColors[other.category]} font-mono mb-3 inline-block">
                  {other.category}
                </span>
                <h3 class="font-display font-bold text-white text-lg group-hover:text-signal-orange transition-colors mb-1">
                  {other.title}
                </h3>
                <p class="text-white/40 font-mono text-xs mb-3">{other.subtitle}</p>
                <div class="flex gap-4 text-white/30 text-xs font-mono">
                  <span>{other.flaeche}</span>
                  <span>·</span>
                  <span>{other.duration}</span>
                </div>
              </a>
            {/each}
          </div>
        </div>
      </section>
    {/if}
  </main>

  <Footer />
{:else}
  <Navbar />
  <main class="bg-anthrazit min-h-screen flex items-center justify-center px-6">
    <div class="text-center">
      <p class="font-mono text-signal-orange text-sm mb-4">404</p>
      <h1 class="font-display text-4xl font-bold text-white mb-4">Referenz nicht gefunden</h1>
      <a href="/referenzen" class="text-white/60 hover:text-white underline">Zurück zu den Referenzen</a>
    </div>
  </main>
  <Footer />
{/if}

<style>
  :global(.prose-rach h2) {
    font-family: 'Clash Display', 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  :global(.prose-rach h3) {
    font-family: 'Clash Display', 'Inter', sans-serif;
    font-size: 1.125rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 1.75rem;
    margin-bottom: 0.75rem;
  }
  :global(.prose-rach p) {
    color: rgba(255, 255, 255, 0.65);
    line-height: 1.8;
    margin-bottom: 1.25rem;
  }
  :global(.prose-rach ul),
  :global(.prose-rach ol) {
    color: rgba(255, 255, 255, 0.65);
    padding-left: 1.5rem;
    margin-bottom: 1.25rem;
  }
  :global(.prose-rach li) {
    margin-bottom: 0.5rem;
    line-height: 1.7;
  }
  :global(.prose-rach ul li) {
    list-style-type: disc;
  }
  :global(.prose-rach ol li) {
    list-style-type: decimal;
  }
  :global(.prose-rach strong) {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
  }
  :global(.prose-rach blockquote) {
    border-left: 3px solid #FF5A00;
    padding-left: 1.5rem;
    margin: 2rem 0;
  }
  :global(.prose-rach blockquote p) {
    color: rgba(255, 255, 255, 0.75);
    font-style: italic;
    font-size: 1.05rem;
    margin-bottom: 0.5rem;
  }
  :global(.prose-rach blockquote footer) {
    color: rgba(255, 255, 255, 0.35);
    font-size: 0.85rem;
    font-family: 'JetBrains Mono', monospace;
  }
</style>
