<script lang="ts">
  const stats = [
    { value: '150+', label: 'Abgeschlossene Projekte' },
    { value: '25', label: 'Jahre Erfahrung' },
    { value: '98%', label: 'Kundenzufriedenheit' },
    { value: '12', label: 'Fachkräfte im Team' },
  ];
</script>

<section class="bg-[#0A0A0A] py-16 border-t border-white/5">
  <div class="max-w-7xl mx-auto px-6 lg:px-10">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
      {#each stats as stat, i}
        <div class="bg-[#0f0f0f] px-8 py-10 flex flex-col gap-2 group hover:bg-[#141414] transition-colors duration-200">
          <span class="font-mono font-bold text-signal-orange text-4xl lg:text-5xl">
            {stat.value}
          </span>
          <span class="text-white/50 text-sm font-medium leading-snug">
            {stat.label}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>
