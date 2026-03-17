<script lang="ts">
  import { blogPosts } from '$lib/blog-posts';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

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
</script>

<svelte:head>
  <title>Blog – Rach&amp;Schleich GmbH</title>
  <meta name="description" content="Fachwissen vom Dachdecker: Kosten, Dämmung, Photovoltaik und mehr." />
</svelte:head>

<Navbar />

<main class="bg-anthrazit min-h-screen">
  <!-- Header -->
  <section class="pt-32 pb-16 px-6 border-b border-white/10">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-1 h-8 bg-signal-orange rounded-full"></div>
        <span class="font-mono text-signal-orange text-sm tracking-widest uppercase">Fachwissen</span>
      </div>
      <h1 class="font-display text-5xl lg:text-7xl font-bold text-white leading-none mb-6">
        Dachdecker<span class="text-signal-orange">.</span>Blog
      </h1>
      <p class="text-white/60 text-lg max-w-xl">
        Praxiswissen aus dem Handwerk – zu Kosten, Förderungen, Dämmung und allem, was Sie als Hausbesitzer wissen sollten.
      </p>
    </div>
  </section>

  <!-- Articles Grid -->
  <section class="py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Featured post (first article) -->
      <a
        href="/blog/{blogPosts[0].slug}"
        class="group block mb-10 bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-signal-orange/50 transition-all duration-300"
      >
        <div class="grid lg:grid-cols-5">
          <!-- Image -->
          <div class="lg:col-span-2 bg-gradient-to-br from-signal-orange/20 to-stahl-blue/20 min-h-56 relative overflow-hidden flex items-center justify-center">
            <img
              src="/Projekt_Images/Bild3.png"
              alt="Dachsanierung"
              class="w-[70%] h-[70%] object-contain relative z-10"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-transparent to-anthrazit/40 z-20 pointer-events-none"></div>
          </div>
          <div class="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-xs font-semibold px-3 py-1 rounded-full {categoryColors[blogPosts[0].category]} font-mono">
                {blogPosts[0].category}
              </span>
              <span class="text-white/30 text-xs font-mono">FEATURED</span>
            </div>
            <h2 class="font-display text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-signal-orange transition-colors">
              {blogPosts[0].title}
            </h2>
            <p class="text-white/60 leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
            <div class="flex items-center gap-6 text-white/40 text-sm font-mono">
              <span>{formatDate(blogPosts[0].date)}</span>
              <span>·</span>
              <span>{blogPosts[0].readTime} Min. Lesezeit</span>
            </div>
          </div>
        </div>
      </a>

      <!-- Remaining posts grid -->
      <div class="grid md:grid-cols-2 gap-6">
        {#each blogPosts.slice(1) as post}
          <a
            href="/blog/{post.slug}"
            class="group bg-white/5 border border-white/10 rounded-xl p-7 hover:border-signal-orange/50 hover:bg-white/8 transition-all duration-300 flex flex-col"
          >
            <div class="flex items-center gap-3 mb-4">
              <span class="text-xs font-semibold px-3 py-1 rounded-full {categoryColors[post.category]} font-mono">
                {post.category}
              </span>
            </div>
            <h2 class="font-display text-xl font-bold text-white mb-3 group-hover:text-signal-orange transition-colors flex-1">
              {post.title}
            </h2>
            <p class="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
            <div class="flex items-center justify-between text-white/30 text-xs font-mono border-t border-white/10 pt-4">
              <span>{formatDate(post.date)}</span>
              <span>{post.readTime} Min.</span>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-16 px-6 border-t border-white/10">
    <div class="max-w-3xl mx-auto text-center">
      <p class="text-white/50 font-mono text-sm uppercase tracking-widest mb-4">Persönliche Beratung</p>
      <h2 class="font-display text-3xl font-bold text-white mb-6">
        Fragen zu Ihrem Dach?
      </h2>
      <p class="text-white/60 mb-8">Wir beraten Sie kostenlos und unverbindlich – telefonisch oder vor Ort.</p>
      <a
        href="/#kontakt"
        class="inline-block bg-signal-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition-colors"
      >
        Jetzt Kontakt aufnehmen
      </a>
    </div>
  </section>
</main>

<Footer />
