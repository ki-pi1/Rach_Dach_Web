<script lang="ts">
  const services = [
    {
      title: 'Dachsanierung',
      description: 'Wir analysieren, planen und sanieren Ihr bestehendes Dach mit modernen Materialien und bewährten Techniken – für ein Dach, das Jahrzehnte hält.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>`,
      large: true,
      cta: 'Mehr erfahren',
    },
    {
      title: 'Neueindeckung',
      description: 'Komplette Neueindeckung mit Ziegel, Schiefer oder modernen Materialien. Wir beraten Sie kompetent bei der Materialwahl.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>`,
      large: false,
      cta: 'Details',
    },
    {
      title: 'Dachdämmung',
      description: 'Energiesparen mit professioneller Wärmedämmung. Wir optimieren Ihr Dach für maximale Energieeffizienz und Wohnkomfort.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>`,
      large: false,
      cta: 'Details',
    },
  ];
</script>

<section id="leistungen" class="bg-anthrazit py-24 border-t border-white/10">
  <div class="max-w-7xl mx-auto px-6 lg:px-10">

    <!-- Section header -->
    <div class="mb-14">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-1 h-7 bg-signal-orange rounded-full"></div>
        <p class="text-signal-orange text-sm font-mono font-semibold tracking-widest uppercase">Leistungen</p>
      </div>
      <h2 class="font-display font-bold text-white text-4xl lg:text-5xl leading-tight max-w-2xl">
        Alles rund ums Dach –<br />aus einer Hand.
      </h2>
    </div>

    <!-- Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">

      <!-- Large card: Dachsanierung -->
      <div class="lg:col-span-7 lg:row-span-2 bg-gradient-to-br from-signal-orange/25 to-anthrazit border border-signal-orange/20 rounded-2xl p-8 flex flex-col justify-between group hover:border-signal-orange/50 transition-all duration-300 hover:-translate-y-1 min-h-[320px]">
        <div>
          <div class="w-12 h-12 text-signal-orange mb-6">
            {@html services[0].icon}
          </div>
          <h3 class="font-display font-bold text-white text-3xl lg:text-4xl mb-4">
            {services[0].title}
          </h3>
          <p class="text-white/55 text-base leading-relaxed max-w-sm">
            {services[0].description}
          </p>
        </div>
        <div class="pt-8">
          <a
            href="#kontakt"
            class="inline-flex items-center gap-2 text-signal-orange font-semibold text-sm group/link"
          >
            {services[0].cta}
            <span class="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
          </a>
        </div>
      </div>

      <!-- Medium card: Neueindeckung -->
      <div class="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col justify-between group hover:border-stahl-blue/50 transition-all duration-300 hover:-translate-y-1 min-h-[200px]">
        <div>
          <div class="w-10 h-10 text-stahl-blue mb-5">
            {@html services[1].icon}
          </div>
          <h3 class="font-display font-bold text-white text-2xl mb-3">
            {services[1].title}
          </h3>
          <p class="text-white/55 text-sm leading-relaxed">
            {services[1].description}
          </p>
        </div>
        <a
          href="#kontakt"
          class="inline-flex items-center gap-2 text-stahl-blue font-semibold text-sm mt-5 group/link"
        >
          {services[1].cta}
          <span class="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
        </a>
      </div>

      <!-- Medium card: Dachdämmung -->
      <div class="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col justify-between group hover:border-warm-copper/50 transition-all duration-300 hover:-translate-y-1 min-h-[200px]">
        <div>
          <div class="w-10 h-10 text-warm-copper mb-5">
            {@html services[2].icon}
          </div>
          <h3 class="font-display font-bold text-white text-2xl mb-3">
            {services[2].title}
          </h3>
          <p class="text-white/55 text-sm leading-relaxed">
            {services[2].description}
          </p>
        </div>
        <a
          href="#kontakt"
          class="inline-flex items-center gap-2 text-warm-copper font-semibold text-sm mt-5 group/link"
        >
          {services[2].cta}
          <span class="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
        </a>
      </div>

      <!-- Trust badge -->
      <div class="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col justify-between min-h-[120px]">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 bg-warm-copper/15 rounded-full flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-warm-copper" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div>
            <p class="font-display font-bold text-white text-lg leading-tight">Meisterbetrieb</p>
            <p class="text-white/40 text-sm mt-1 font-mono">Zertifiziert &amp; versichert seit 2000</p>
          </div>
        </div>
      </div>

      <!-- Notruf highlight card -->
      <div class="lg:col-span-8 bg-gradient-to-br from-signal-orange/25 to-anthrazit border border-signal-orange/20 rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group hover:border-signal-orange/40 transition-all duration-300">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-signal-orange animate-pulse"></span>
            <span class="text-white/60 text-xs font-semibold tracking-widest uppercase font-mono">24 / 7 Notruf</span>
          </div>
          <p class="font-display font-bold text-white text-2xl">Sturmschaden? Wir sind sofort da.</p>
        </div>
        <a
          href="tel:+49000000000"
          class="flex-shrink-0 bg-signal-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors duration-200 whitespace-nowrap"
        >
          Jetzt anrufen →
        </a>
      </div>

    </div>
  </div>
</section>
