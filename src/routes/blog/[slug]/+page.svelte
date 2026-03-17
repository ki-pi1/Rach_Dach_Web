<script lang="ts">
  import { page } from '$app/stores';
  import { getPost, blogPosts } from '$lib/blog-posts';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  const post = $derived($page.params.slug ? getPost($page.params.slug) : undefined);

  const categoryColors: Record<string, string> = {
    'Kosten & Preise': 'bg-signal-orange/15 text-signal-orange',
    'Notfälle & Sicherheit': 'bg-red-500/15 text-red-400',
    'Photovoltaik & Energie': 'bg-yellow-500/15 text-yellow-400',
    'Begrünung & Ökologie': 'bg-green-500/15 text-green-400',
    'Dämmung & Energieeffizienz': 'bg-stahl-blue/15 text-stahl-blue',
  };

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  }

  const otherPosts = $derived(blogPosts.filter((p) => p.slug !== ($page.params.slug ?? '')).slice(0, 3));
</script>

<svelte:head>
  <title>{post ? post.title + ' – Rach&Schleich GmbH' : 'Blog – Rach&Schleich GmbH'}</title>
  {#if post}<meta name="description" content={post.excerpt} />{/if}
</svelte:head>

{#if post}
  <Navbar />

  <main class="bg-anthrazit min-h-screen">
    <!-- Article Header -->
    <section class="pt-32 pb-12 px-6 border-b border-white/10">
      <div class="max-w-3xl mx-auto">
        <a href="/blog" class="inline-flex items-center gap-2 text-white/40 hover:text-white/80 text-sm font-mono mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Alle Artikel
        </a>

        <div class="flex items-center gap-3 mb-6">
          <span class="text-xs font-semibold px-3 py-1 rounded-full {categoryColors[post.category]} font-mono">
            {post.category}
          </span>
        </div>

        <h1 class="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          {post.title}
        </h1>

        <p class="text-white/60 text-lg leading-relaxed mb-8">{post.excerpt}</p>

        <div class="flex items-center gap-6 text-white/40 text-sm font-mono border-t border-white/10 pt-6">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime} Min. Lesezeit</span>
          <span>·</span>
          <span>Rach &amp; Schleich GmbH</span>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="py-12 px-6">
      <div class="max-w-3xl mx-auto">
        <div class="prose-rach">
          {@html post.content}
        </div>

        <!-- Author Box -->
        <div class="mt-16 p-6 bg-white/5 border border-white/10 rounded-xl flex items-start gap-5">
          <div class="w-12 h-12 bg-signal-orange rounded-lg flex items-center justify-center text-white font-display font-bold text-lg shrink-0">R</div>
          <div>
            <p class="text-white font-semibold mb-1">Rach &amp; Schleich GmbH</p>
            <p class="text-white/50 text-sm">Dachdecker-Meisterbetrieb aus Regensburg. Über 20 Jahre Erfahrung in Dachdeckung, Dämmung und Blechnerarbeiten.</p>
            <a href="/#kontakt" class="inline-block mt-3 text-signal-orange text-sm font-semibold hover:underline">Kostenlose Beratung anfragen →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Articles -->
    {#if otherPosts.length > 0}
      <section class="py-12 px-6 border-t border-white/10">
        <div class="max-w-5xl mx-auto">
          <h2 class="font-display text-2xl font-bold text-white mb-8">Weitere Artikel</h2>
          <div class="grid md:grid-cols-3 gap-5">
            {#each otherPosts as other}
              <a
                href="/blog/{other.slug}"
                class="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-signal-orange/50 transition-all duration-300"
              >
                <span class="text-xs font-semibold px-2 py-1 rounded-full {categoryColors[other.category]} font-mono mb-3 inline-block">
                  {other.category}
                </span>
                <h3 class="font-display font-bold text-white text-base group-hover:text-signal-orange transition-colors mb-2">
                  {other.title}
                </h3>
                <p class="text-white/40 text-xs font-mono">{other.readTime} Min.</p>
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
      <h1 class="font-display text-4xl font-bold text-white mb-4">Artikel nicht gefunden</h1>
      <a href="/blog" class="text-white/60 hover:text-white underline">Zurück zum Blog</a>
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
  :global(.prose-rach table) {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
  }
  :global(.prose-rach th) {
    background: rgba(255, 90, 0, 0.15);
    color: #FF5A00;
    padding: 0.75rem 1rem;
    text-align: left;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  :global(.prose-rach td) {
    padding: 0.75rem 1rem;
    color: rgba(255, 255, 255, 0.65);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
  :global(.prose-rach tr:hover td) {
    background: rgba(255, 255, 255, 0.03);
  }
</style>
