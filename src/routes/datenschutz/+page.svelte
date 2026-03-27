<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Datenschutzerklärung – Rach&amp;Schleich GmbH</title>
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
      <h1 class="font-display font-bold text-white text-4xl lg:text-5xl">Datenschutzerklärung</h1>
      <p class="text-white/30 text-sm font-mono mt-3">Stand: März 2026</p>
    </div>

    <!-- Content -->
    <div class="prose-legal">

      <section class="mb-10">
        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
        </p>
        <p>
          Rach &amp; Schleich GmbH<br />
          Musterstraße 12<br />
          80333 München<br />
          E-Mail: <a href="mailto:info@rach-schleich.de">info@rach-schleich.de</a><br />
          Telefon: <a href="tel:+49000000000">0800 000 000</a>
        </p>
      </section>

      <section class="mb-10">
        <h2>2. Allgemeines zur Datenverarbeitung</h2>
        <p>
          Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
          Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich
          ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach
          Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige
          Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung
          der Daten durch gesetzliche Vorschriften gestattet ist.
        </p>
      </section>

      <section class="mb-10">
        <h2>3. Hosting</h2>
        <p>
          Diese Website wird auf einem Virtual Private Server (VPS) des Anbieters
          <strong>Hostinger International Ltd.</strong>, 61 Lordou Vironos str., 6023 Larnaca, Zypern,
          gehostet. Weitere Informationen zum Datenschutz bei Hostinger finden Sie unter:
          <a href="https://www.hostinger.com/de/legal/datenschutz-bestimmungen" target="_blank" rel="noopener noreferrer">
            https://www.hostinger.com/de/legal/datenschutz-bestimmungen
          </a>
        </p>
        <p>
          Beim Aufrufen unserer Website werden durch den Server automatisch Informationen in sogenannten
          Server-Log-Files gespeichert, die Ihr Browser automatisch übermittelt. Dies sind:
        </p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL (die zuvor besuchte Seite)</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p>
          Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten
          mit anderen Datenquellen wird nicht vorgenommen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
          DSGVO (berechtigtes Interesse an der technischen Bereitstellung der Website).
        </p>
      </section>

      <section class="mb-10">
        <h2>4. Kontaktaufnahme per E-Mail oder Telefon</h2>
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden die von Ihnen übermittelten Daten
          (z. B. Name, Telefonnummer, E-Mail-Adresse, Ihr Anliegen) bei uns gespeichert, um Ihre
          Anfrage zu bearbeiten.
        </p>
        <p>
          Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
          sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).
          Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht
          mehr erforderlich sind, spätestens jedoch nach Ablauf der gesetzlichen Aufbewahrungspflichten.
        </p>
      </section>

      <section class="mb-10">
        <h2>5. Cookies</h2>
        <p>
          Diese Website verwendet keine Tracking-Cookies und keine Marketing-Cookies. Es werden
          ausschließlich technisch notwendige Session-Cookies eingesetzt, die nach dem Schließen des
          Browsers automatisch gelöscht werden. Eine Einwilligung ist hierfür gemäß § 25 Abs. 2 TTDSG
          nicht erforderlich.
        </p>
      </section>

      <section class="mb-10">
        <h2>6. Analyse-Tools und Werbung</h2>
        <p>
          Diese Website verwendet keine Webanalyse-Tools (z. B. Google Analytics) und keine
          Werbenetzwerke. Es findet keine Nachverfolgung Ihres Surfverhaltens statt.
        </p>
      </section>

      <section class="mb-10">
        <h2>7. Externe Links und Social Media</h2>
        <p>
          Unsere Website enthält Links zu Social-Media-Plattformen (Facebook, Instagram). Diese Links
          führen zu externen Seiten. Sobald Sie auf diese Links klicken und die jeweilige Plattform
          besuchen, gelten deren Datenschutzbestimmungen. Wir haben keinen Einfluss auf die dort
          stattfindende Datenverarbeitung. Auf unserer Website sind keine Social-Media-Plugins
          (Share-Buttons) direkt eingebunden, die ohne Ihr Zutun Daten übertragen.
        </p>
      </section>

      <section class="mb-10">
        <h2>8. Ihre Rechte als betroffene Person</h2>
        <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
        <ul>
          <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO)</li>
          <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
          <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
          <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
          <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
          <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
          <li><strong>Recht auf Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
          <a href="mailto:info@rach-schleich.de">info@rach-schleich.de</a>
        </p>
      </section>

      <section class="mb-10">
        <h2>9. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
          Ihrer personenbezogenen Daten durch uns zu beschweren. Zuständige Aufsichtsbehörde für
          Bayern ist:
        </p>
        <p>
          Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
          Promenade 27<br />
          91522 Ansbach<br />
          <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer">www.lda.bayern.de</a>
        </p>
      </section>

      <section class="mb-10">
        <h2>10. Datensicherheit</h2>
        <p>
          Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
          Inhalte eine SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
          dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem
          Schloss-Symbol in Ihrer Browserzeile.
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

  .prose-legal :global(strong) {
    color: rgba(255, 255, 255, 0.75);
  }

  .prose-legal :global(ul) {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9375rem;
    line-height: 1.75;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    list-style: disc;
  }

  .prose-legal :global(li) {
    margin-bottom: 0.25rem;
  }

  .prose-legal :global(a) {
    color: #FF5A00;
    text-decoration: none;
    transition: opacity 0.15s;
  }

  .prose-legal :global(a:hover) {
    opacity: 0.8;
  }
</style>
