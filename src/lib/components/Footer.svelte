<script lang="ts">
  import { base } from '$app/paths';
</script>

<footer class="bg-[#0f0f0f] border-t border-white/5 py-14">
  <div class="max-w-7xl mx-auto px-6 lg:px-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

      <!-- Brand -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <span class="w-8 h-8 bg-signal-orange rounded flex items-center justify-center text-white font-display font-bold text-sm">R</span>
          <span class="font-display font-bold text-white text-lg tracking-tight">
            Rach<span class="text-signal-orange">&amp;</span>Schleich GmbH
          </span>
        </div>
        <p class="text-white/40 text-sm leading-relaxed max-w-xs">
          Ihr zertifizierter Dachdecker-Meisterbetrieb. Qualität, die schützt.
        </p>
        <div class="flex gap-3 mt-2">
          {#each ['Facebook', 'Instagram'] as platform}
            <a
              href="{base}/"
              class="w-8 h-8 rounded border border-white/10 hover:border-white/30 flex items-center justify-center text-white/40 hover:text-white transition-all duration-200"
              aria-label={platform}
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                {#if platform === 'Facebook'}
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                {:else}
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" stroke-width="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2"/>
                {/if}
              </svg>
            </a>
          {/each}
        </div>
      </div>

      <!-- Navigation -->
      <div>
        <p class="text-white/30 text-xs font-semibold tracking-widest uppercase mb-5">Navigation</p>
        <ul class="flex flex-col gap-3">
          {#each [
            { label: 'Leistungen', href: `${base}/#leistungen` },
            { label: 'Referenzen', href: `${base}/referenzen` },
            { label: 'Über uns', href: `${base}/ueber-uns` },
            { label: 'Blog', href: `${base}/blog` },
            { label: 'Kontakt', href: `${base}/#kontakt` },
          ] as item}
            <li>
              <a href={item.href} class="text-white/50 hover:text-white text-sm transition-colors duration-200">
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <p class="text-white/30 text-xs font-semibold tracking-widest uppercase mb-5">Kontakt</p>
        <ul class="flex flex-col gap-3 text-white/50 text-sm">
          <li>
            <a href="tel:+49000000000" class="hover:text-white transition-colors duration-200 font-mono">
              0800 000 000
            </a>
          </li>
          <li>
            <a href="mailto:info@rach-schleich.de" class="hover:text-white transition-colors duration-200">
              info@rach-schleich.de
            </a>
          </li>
          <li class="leading-relaxed">
            Musterstraße 12<br />
            80333 München
          </li>
        </ul>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
      <p>© {new Date().getFullYear()} Rach&amp;Schleich GmbH. Alle Rechte vorbehalten.</p>
      <div class="flex gap-6">
        <a href="{base}/impressum" class="hover:text-white/50 transition-colors">Impressum</a>
        <a href="{base}/datenschutz" class="hover:text-white/50 transition-colors">Datenschutz</a>
      </div>
    </div>
  </div>
</footer>
