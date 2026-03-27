<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';

  let scrolled = $state(false);
  let menuOpen = $state(false);

  const isHome = $derived($page.url.pathname === base || $page.url.pathname === base + '/');
  const anchor = (id: string) => isHome ? `#${id}` : `${base}/#${id}`;

  const navItems = [
    { label: 'Leistungen', href: () => anchor('leistungen') },
    { label: 'Referenzen', href: () => `${base}/referenzen` },
    { label: 'Über uns', href: () => `${base}/ueber-uns` },
    { label: 'Kontakt', href: () => anchor('kontakt') },
  ];

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
    <a href="{base}/" class="flex items-center gap-2 group">
      <img src="{base}/logo_2.png" alt="Rach & Schleich" class="h-7 w-auto" />
    </a>

    <!-- Desktop Nav -->
    <ul class="hidden md:flex items-center gap-8">
      {#each navItems as item}
        <li>
          <a
            href={item.href()}
            class="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            {item.label}
          </a>
        </li>
      {/each}
      <li>
        <a href="{base}/blog" class="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200">
          Blog
        </a>
      </li>
    </ul>

    <!-- CTA -->
    <div class="hidden md:flex items-center gap-4">
      <a
        href={anchor('kontakt')}
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
      {#each navItems as item}
        <a
          href={item.href()}
          class="text-white/80 hover:text-white text-base font-medium transition-colors"
          onclick={() => (menuOpen = false)}
        >
          {item.label}
        </a>
      {/each}
      <a
        href="{base}/blog"
        class="text-white/80 hover:text-white text-base font-medium transition-colors"
        onclick={() => (menuOpen = false)}
      >
        Blog
      </a>
      <a
        href={anchor('kontakt')}
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
