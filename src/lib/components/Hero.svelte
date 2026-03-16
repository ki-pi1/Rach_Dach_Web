<script lang="ts">
  let heroEl: HTMLElement;
  let mouseX = $state(0);
  let mouseY = $state(0);

  function handleMouseMove(e: MouseEvent) {
    const rect = heroEl.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  }

  // Outer corner: rounded. Inner corner: concave via background-colored overlay div.
  const tiles = [
    { imgPos: 'object-[30%_20%]', outer: 'rounded-tl-[20px]', innerAt: 'bottom-0 right-0', innerR: 'rounded-tl-[20px]' },
    { imgPos: 'object-[70%_20%]', outer: 'rounded-tr-[20px]', innerAt: 'bottom-0 left-0',  innerR: 'rounded-tr-[20px]' },
    { imgPos: 'object-[30%_80%]', outer: 'rounded-bl-[20px]', innerAt: 'top-0 right-0',    innerR: 'rounded-bl-[20px]' },
    { imgPos: 'object-[70%_80%]', outer: 'rounded-br-[20px]', innerAt: 'top-0 left-0',     innerR: 'rounded-br-[20px]' },
  ];
</script>

<section
  bind:this={heroEl}
  onmousemove={handleMouseMove}
  class="relative min-h-screen bg-[#0A0A0A] flex items-center overflow-hidden"
>
  <!-- Cursor spotlight overlay -->
  <div
    class="absolute inset-0 pointer-events-none z-10 transition-[background] duration-100 ease-linear"
    style="background: radial-gradient(600px circle at {mouseX}px {mouseY}px, rgba(255,90,0,0.13), transparent 70%)"
  ></div>

  <!-- Subtle grid texture -->
  <div
    class="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
    style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 64px 64px;"
  ></div>

  <div class="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full py-24 lg:py-0 lg:min-h-screen flex items-center">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

      <!-- Left: Text + CTA -->
      <div class="flex flex-col gap-8">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 w-fit">
          <span class="w-2 h-2 rounded-full bg-signal-orange animate-pulse"></span>
          <span class="text-white/50 text-sm font-medium tracking-widest uppercase">Meisterbetrieb seit 2000</span>
        </div>

        <!-- Headline -->
        <h1 class="font-display font-bold text-white leading-[1.05] text-5xl sm:text-6xl lg:text-7xl">
          Das Dach<br />
          in den<br />
          <span class="text-signal-orange">besten Händen.</span>
        </h1>

        <!-- Subline -->
        <p class="text-white/60 text-lg leading-relaxed max-w-md">
          Rach&amp;Schleich GmbH – Ihr zuverlässiger Dachdecker-Meisterbetrieb für
          Dachsanierung, Neueindeckung und Dämmung in der Region.
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap items-center gap-4">
          <a
            href="#kontakt"
            class="bg-signal-orange hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Kostenlos anfragen
          </a>
          <a
            href="#leistungen"
            class="border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-7 py-3.5 rounded transition-all duration-200"
          >
            Unsere Leistungen →
          </a>
        </div>

        <!-- Trust indicators -->
        <div class="flex items-center gap-6 pt-2">
          <div class="flex -space-x-2">
            {#each ['M', 'K', 'S', 'T'] as initial, i}
              <div
                class="w-8 h-8 rounded-full border-2 border-[#0A0A0A] flex items-center justify-center text-xs font-bold text-white"
                style="background: {['#FF5A00','#2B4F6E','#B87333','#555'][i]}"
              >
                {initial}
              </div>
            {/each}
          </div>
          <p class="text-white/50 text-sm">
            <span class="text-white font-semibold">150+ zufriedene</span> Kunden in der Region
          </p>
        </div>
      </div>

      <!-- Right: Diced Image Grid -->
      <div class="grid grid-cols-2 gap-3">
        {#each tiles as tile}
          <div
            class="relative overflow-hidden group {tile.outer}"
            style="height: clamp(160px, 22vw, 260px);"
          >
            <img
              src="/images/dach.png"
              alt="Dachdecker bei der Arbeit"
              class="w-full h-full object-cover {tile.imgPos} transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
            />
            <!-- vignette -->
            <div class="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none"></div>
            <!-- Concave inner corner: pure black overlay blocks spotlight & creates concave shape -->
            <div class="absolute {tile.innerAt} w-[60px] h-[60px] bg-black {tile.innerR} pointer-events-none"></div>
          </div>
        {/each}
      </div>

    </div>
  </div>

  <!-- Bottom fade to dark -->
  <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none z-10"></div>
</section>
