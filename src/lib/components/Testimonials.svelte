<script lang="ts">
  const testimonials = [
    {
      name: 'Klaus Müller',
      location: 'München',
      rating: 5,
      text: 'Absolut professionelle Arbeit! Rach&Schleich hat unser Dach in Rekordzeit saniert. Die Handwerker waren pünktlich, sauber und haben perfekte Arbeit geleistet.',
      initial: 'K',
      color: '#FF5A00',
    },
    {
      name: 'Sandra Wagner',
      location: 'Augsburg',
      rating: 5,
      text: 'Nach dem Sturmschaden haben sie innerhalb weniger Stunden reagiert. Das Notdienst-Team war kompetent und hat alles schnell und zuverlässig abgedichtet.',
      initial: 'S',
      color: '#2B4F6E',
    },
    {
      name: 'Thomas Berger',
      location: 'Ingolstadt',
      rating: 5,
      text: 'Faire Preise, exzellente Beratung und erstklassige Ausführung. Die Neueindeckung mit Tondachziegeln sieht fantastisch aus. Klare Empfehlung!',
      initial: 'T',
      color: '#B87333',
    },
  ];
</script>

<section class="bg-anthrazit py-24 border-t border-white/10">
  <div class="max-w-7xl mx-auto px-6 lg:px-10">

    <div class="mb-14">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-1 h-7 bg-signal-orange rounded-full"></div>
        <p class="text-signal-orange text-sm font-mono font-semibold tracking-widest uppercase">Kundenstimmen</p>
      </div>
      <h2 class="font-display font-bold text-white text-4xl lg:text-5xl leading-tight">
        Was unsere Kunden<br />sagen.
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      {#each testimonials as t}
        <div class="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-5 hover:border-white/20 transition-all duration-300">
          <!-- Stars -->
          <div class="flex gap-1">
            {#each Array(t.rating) as _}
              <svg class="w-4 h-4 text-signal-orange fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            {/each}
          </div>

          <!-- Quote -->
          <p class="text-white/65 text-base leading-relaxed flex-1">
            „{t.text}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-4 border-t border-white/10">
            <div
              class="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
              style="background: {t.color}"
            >
              {t.initial}
            </div>
            <div>
              <p class="font-semibold text-white text-sm">{t.name}</p>
              <p class="text-white/35 text-xs font-mono">{t.location}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
