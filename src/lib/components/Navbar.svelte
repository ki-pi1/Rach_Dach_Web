<script lang="ts">
  let scrolled = $state(false);
  let menuOpen = $state(false);

  $effect(() => {
    const handler = () => { scrolled = window.scrollY > 40; };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  });
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  class:scrolled
>
  <div class="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-2 group">
      <span class="w-8 h-8 bg-signal-orange rounded flex items-center justify-center text-white font-display font-bold text-sm">R</span>
      <span class="font-display font-bold text-white text-lg tracking-tight">
        Rach<span class="text-signal-orange">&amp;</span>Schleich
      </span>
    </a>

    <!-- Desktop Nav -->
    <ul class="hidden md:flex items-center gap-8">
      {#each ['Leistungen', 'Referenzen', 'Über uns', 'Kontakt'] as item}
        <li>
          <a
            href="#{item.toLowerCase().replace(' ', '-')}"
            class="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            {item}
          </a>
        </li>
      {/each}
    </ul>

    <!-- CTA -->
    <div class="hidden md:flex items-center gap-4">
      <a
        href="#kontakt"
        class="bg-signal-orange hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded transition-colors duration-200"
      >
        Angebot anfordern
      </a>
    </div>

    <!-- Mobile burger -->
    <button
      class="md:hidden text-white p-2"
      onclick={() => (menuOpen = !menuOpen)}
      aria-label="Menü öffnen"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {#if menuOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if menuOpen}
    <div class="md:hidden bg-anthrazit/95 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
      {#each ['Leistungen', 'Referenzen', 'Über uns', 'Kontakt'] as item}
        <a
          href="#{item.toLowerCase().replace(' ', '-')}"
          class="text-white/80 hover:text-white text-base font-medium transition-colors"
          onclick={() => (menuOpen = false)}
        >
          {item}
        </a>
      {/each}
      <a
        href="#kontakt"
        class="bg-signal-orange text-white text-sm font-semibold px-5 py-3 rounded text-center mt-2"
        onclick={() => (menuOpen = false)}
      >
        Angebot anfordern
      </a>
    </div>
  {/if}
</nav>

<style>
  nav.scrolled {
    background: rgba(10, 10, 10, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
</style>
