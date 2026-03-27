<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Impressum – Rach&amp;Schleich GmbH</title>
  <meta name="robots" content="noindex, follow" />
</svelte:head>

<Navbar />

<main class="bg-[#0A0A0A] min-h-screen pt-24 pb-20">
  <div class="max-w-3xl mx-auto px-6 lg:px-10">

    <!-- Header -->
    <div class="mb-12">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-1 h-7 bg-signal-orange rounded-full"></div>
        <p class="text-signal-orange text-sm font-mono font-semibold tracking-widest uppercase">Rechtliches</p>
      </div>
      <h1 class="font-display font-bold text-white text-4xl lg:text-5xl">Impressum</h1>
    </div>

    <!-- Content -->
    <div class="prose-legal">

      <section class="mb-10">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Rach &amp; Schleich GmbH<br />
          Musterstraße 12<br />
          80333 München
        </p>
      </section>

      <section class="mb-10">
        <h2>Handelsregister</h2>
        <p>
          Registergericht: Amtsgericht München<br />
          Registernummer: HRB <span class="placeholder">[XXXXX]</span>
        </p>
      </section>

      <section class="mb-10">
        <h2>Vertreten durch</h2>
        <p>
          Geschäftsführer: <span class="placeholder">[Vorname Nachname]</span>
        </p>
      </section>

      <section class="mb-10">
        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+49000000000">0800 000 000</a><br />
          E-Mail: <a href="mailto:info@rach-schleich.de">info@rach-schleich.de</a>
        </p>
      </section>

      <section class="mb-10">
        <h2>Umsatzsteuer-Identifikationsnummer</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
          DE <span class="placeholder">[XXXXXXXXX]</span>
        </p>
      </section>

      <section class="mb-10">
        <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p>
          Berufsbezeichnung: Dachdeckermeisterbetrieb<br />
          Zuständige Handwerkskammer: Handwerkskammer für München und Oberbayern<br />
          Berufsrechtliche Regelungen: Handwerksordnung (HwO)
        </p>
      </section>

      <section class="mb-10">
        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>
          Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet,
          an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section class="mb-10">
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
          den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
          oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
          Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
          der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
          Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>
      </section>

      <section class="mb-10">
        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
          haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
          der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
      </section>

      <section class="mb-10">
        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
          deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
          des jeweiligen Autors bzw. Erstellers.
        </p>
      </section>

    </div>

    <!-- Back link -->
    <div class="mt-12">
      <a href="{base}/" class="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-200">
        ← Zurück zur Startseite
      </a>
    </div>

  </div>
</main>

<Footer />

<style>
  .prose-legal :global(h2) {
    font-family: var(--font-display, 'Clash Display', sans-serif);
    font-weight: 700;
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.75rem;
  }

  .prose-legal :global(p) {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9375rem;
    line-height: 1.75;
    margin-bottom: 0.75rem;
  }

  .prose-legal :global(a) {
    color: #FF5A00;
    text-decoration: none;
    transition: opacity 0.15s;
  }

  .prose-legal :global(a:hover) {
    opacity: 0.8;
  }

  .placeholder {
    color: #FF5A00;
    font-weight: 600;
    font-style: italic;
  }
</style>
