<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { base } from '$app/paths';

  const team = [
    {
      name: 'Alex Rach',
      role: 'Geschäftsführer & Dachdeckermeister',
      badge: 'Meister',
      badgeColor: 'bg-signal-orange/15 text-signal-orange',
      since: '1998',
      photo: `${base}/Projekt_Images/Alex.png`,
      initials: 'AR',
      accentFrom: 'from-signal-orange/30',
      accentTo: 'to-anthrazit',
      bio: 'Alex Rach hat das Dachdeckerhandwerk von der Pike auf gelernt. Nach der Gesellenzeit in Regensburg legte er 2003 seinen Meisterbrief ab und gründete kurz darauf gemeinsam mit Klaus Schleich den Betrieb. Seitdem verantwortet er Planung, Kalkulation und die persönliche Abnahme jedes Projekts.',
      skills: ['Dachsanierung', 'Steildach', 'Flachdach', 'Wärmedämmung', 'Bauwerksabdichtung'],
      fact: 'Hat mit eigenen Händen über 400 Dächer gedeckt.',
    },
    {
      name: 'Vitali Schleich',
      role: 'Elektriker & Photovoltaik-Spezialist',
      badge: 'Elektrofachkraft',
      badgeColor: 'bg-yellow-500/15 text-yellow-400',
      since: '2019',
      photo: `${base}/Projekt_Images/Vitali.png`,
      initials: 'VS',
      accentFrom: 'from-yellow-600/25',
      accentTo: 'to-anthrazit',
      bio: 'Vitali Schleich ist gelernter Elektroinstallateur und hat sich frühzeitig auf Photovoltaik und Gebäudeenergietechnik spezialisiert. Seit 2019 ist er fester Bestandteil des Teams und verantwortet alle elektrischen Arbeiten rund um PV-Anlagen, Blitzschutz und Dachsensorik. Seine Zertifizierungen umfassen SMA, Fronius und KACO.',
      skills: ['Photovoltaik', 'Blitzschutz', 'DC/AC-Verkabelung', 'Wechselrichter', 'Energiespeicher'],
      fact: 'Bisher über 80 PV-Anlagen auf Wohn- und Gewerbegebäuden installiert.',
    },
    {
      name: 'Sergej Zyplakov',
      role: 'Erfahrener Dachdecker',
      badge: 'Geselle',
      badgeColor: 'bg-green-500/20 text-green-400',
      since: '2011',
      photo: `${base}/Projekt_Images/Sergei.png`,
      initials: 'SZ',
      accentFrom: 'from-stahl-blue/30',
      accentTo: 'to-anthrazit',
      bio: 'Sergej Zyplakov ist seit über 13 Jahren im Betrieb und kennt jeden Dachtyp aus dem Effeff. Er leitet Kolonnen auf der Baustelle, ist Ansprechpartner für Kunden vor Ort und sorgt dafür, dass Zeitplan und Qualität stimmen. Kunden schätzen seine ruhige Art und seine direkte, ehrliche Kommunikation.',
      skills: ['Steildachdeckung', 'Blechnerarbeiten', 'Gauben', 'Dachfenster', 'Gerüstkoordination'],
      fact: 'Seit 13 Jahren kein einziger Kundenbeschwerdefall.',
    },
  ];

  const milestones = [
    { year: '1998', text: 'Gründung durch Alex Rach nach Gesellenzeit' },
    { year: '2003', text: 'Meisterbrief und offizielle Firmengründung Rach & Schleich GmbH' },
    { year: '2011', text: 'Erweiterung des Teams, erste Gewerbe-Großprojekte' },
    { year: '2019', text: 'Einstieg in Photovoltaik und Dachbegrünung' },
    { year: '2023', text: 'Über 500 abgeschlossene Projekte im Raum Regensburg' },
  ];
</script>

<svelte:head>
  <title>Über uns – Rach&amp;Schleich GmbH</title>
  <meta name="description" content="Das Team hinter Rach & Schleich GmbH: Meisterbetrieb aus Regensburg mit 25 Jahren Erfahrung." />
</svelte:head>

<Navbar />

<main class="bg-anthrazit min-h-screen">

  <!-- Header -->
  <section class="pt-32 pb-16 px-6 border-b border-white/10">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-1 h-8 bg-signal-orange rounded-full"></div>
        <span class="font-mono text-signal-orange text-sm tracking-widest uppercase">Das Team</span>
      </div>
      <h1 class="font-display text-5xl lg:text-7xl font-bold text-white leading-none mb-6">
        Über uns<span class="text-signal-orange">.</span>
      </h1>
      <p class="text-white/60 text-lg max-w-2xl leading-relaxed">
        Kein anonymer Betrieb, keine Subunternehmer-Kette. Rach & Schleich ist ein inhabergeführter
        Meisterbetrieb aus Regensburg – wer anruft, spricht mit dem Team, das das Dach auch baut.
      </p>
    </div>
  </section>

  <!-- Kurzporträt -->
  <section class="py-16 px-6 border-b border-white/10">
    <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="font-display text-3xl font-bold text-white mb-6">
          Handwerk mit Haltung –<br/>
          <span class="text-signal-orange">seit 1998</span>
        </h2>
        <p class="text-white/60 leading-relaxed mb-4">
          Was 1998 als Ein-Mann-Betrieb startete, ist heute ein eingespieltes Team aus Dachdeckern,
          Blechnern und einem Photovoltaik-Spezialisten. Wir arbeiten ausschließlich im Raum Regensburg –
          nicht weil wir nicht weiter könnten, sondern weil wir lieber wenige Projekte richtig machen
          als viele halbherzig.
        </p>
        <p class="text-white/60 leading-relaxed mb-4">
          Unser Meisterbetrieb ist Mitglied im Zentralverband des Deutschen Dachdeckerhandwerks
          und der Dachdecker-Innung Oberpfalz. Jede Arbeit wird vom Meister persönlich abgenommen.
        </p>
        <p class="text-white/60 leading-relaxed">
          Wir geben auf unsere Arbeit <strong class="text-white">10 Jahre Gewährleistung</strong> –
          weit mehr als gesetzlich vorgeschrieben. Das ist kein Marketing, das ist Überzeugung.
        </p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 gap-4">
        {#each [
          ['25+', 'Jahre im Betrieb'],
          ['500+', 'Projekte abgeschlossen'],
          ['3', 'Fachkräfte im Team'],
          ['10J', 'Gewährleistung'],
        ] as [val, label]}
          <div class="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-2">
            <span class="font-display text-4xl font-bold text-signal-orange">{val}</span>
            <span class="text-white/50 text-sm font-mono">{label}</span>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Team -->
  <section class="py-16 px-6 border-b border-white/10">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12">
        <p class="font-mono text-signal-orange text-sm uppercase tracking-widest mb-3">Menschen</p>
        <h2 class="font-display text-4xl font-bold text-white">Das Team</h2>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        {#each team as person}
          <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col">

            <!-- Foto -->
            <div class="relative h-64 bg-gradient-to-b {person.accentFrom} {person.accentTo} overflow-hidden flex flex-col items-center justify-center gap-3">
              {#if person.photo}
                <img
                  src={person.photo}
                  alt={person.name}
                  class="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-anthrazit/60 to-transparent"></div>
              {:else}
                <div class="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                  <span class="font-display text-2xl font-bold text-white/60">{person.initials}</span>
                </div>
              {/if}
              <!-- Seit-Badge -->
              <div class="absolute top-4 right-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
                <span class="font-mono text-white/50 text-xs">seit {person.since}</span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-7 flex flex-col flex-1">
              <div class="mb-4">
                <span class="text-xs font-semibold px-3 py-1 rounded-full {person.badgeColor} font-mono">
                  {person.badge}
                </span>
              </div>
              <h3 class="font-display text-xl font-bold text-white mb-1">{person.name}</h3>
              <p class="text-white/40 text-sm font-mono mb-4">{person.role}</p>
              <p class="text-white/60 text-sm leading-relaxed mb-5">{person.bio}</p>

              <!-- Skills -->
              <div class="flex flex-wrap gap-2 mb-5">
                {#each person.skills as skill}
                  <span class="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-white/40 font-mono">
                    {skill}
                  </span>
                {/each}
              </div>

              <!-- Fact -->
              <div class="mt-auto pt-4 border-t border-white/10 flex items-start gap-3">
                <span class="text-signal-orange text-lg leading-none mt-0.5">→</span>
                <p class="text-white/50 text-xs font-mono italic leading-relaxed">{person.fact}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Firmengeschichte -->
  <section class="py-16 px-6 border-b border-white/10">
    <div class="max-w-4xl mx-auto">
      <div class="mb-12">
        <p class="font-mono text-signal-orange text-sm uppercase tracking-widest mb-3">Geschichte</p>
        <h2 class="font-display text-4xl font-bold text-white">Wie wir wurden, wer wir sind</h2>
      </div>

      <div class="relative">
        <!-- Vertikale Linie -->
        <div class="absolute left-4 top-0 bottom-0 w-px bg-white/10"></div>

        <div class="flex flex-col gap-0">
          {#each milestones as m}
            <div class="flex gap-8 pb-10 last:pb-0">
              <!-- Punkt -->
              <div class="relative shrink-0">
                <div class="w-8 h-8 rounded-full bg-anthrazit border-2 border-signal-orange flex items-center justify-center z-10 relative">
                  <div class="w-2 h-2 rounded-full bg-signal-orange"></div>
                </div>
              </div>
              <!-- Text -->
              <div class="pb-2">
                <span class="font-mono text-signal-orange text-sm font-bold block mb-1">{m.year}</span>
                <p class="text-white/65 leading-relaxed">{m.text}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Werte -->
  <section class="py-16 px-6 border-b border-white/10">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12">
        <p class="font-mono text-signal-orange text-sm uppercase tracking-widest mb-3">Haltung</p>
        <h2 class="font-display text-4xl font-bold text-white">Wofür wir stehen</h2>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        {#each [
          {
            title: 'Meisterbetrieb',
            icon: '🏅',
            text: 'Jedes Projekt wird vom Meister persönlich geplant und abgenommen. Keine Subunternehmer, keine wechselnden Kolonnen.',
          },
          {
            title: 'Regionalität',
            icon: '📍',
            text: 'Wir arbeiten ausschließlich im Raum Regensburg. Kurze Wege bedeuten schnelle Reaktion bei Problemen – auch Jahre nach Projektabschluss.',
          },
          {
            title: 'Ehrlichkeit',
            icon: '🤝',
            text: 'Wir sagen Ihnen, was Ihr Dach wirklich braucht – und was nicht. Kein Upselling, keine unnötigen Extras.',
          },
        ] as val}
          <div class="bg-white/5 border border-white/10 rounded-xl p-7">
            <span class="text-3xl mb-4 block">{val.icon}</span>
            <h3 class="font-display text-lg font-bold text-white mb-3">{val.title}</h3>
            <p class="text-white/55 text-sm leading-relaxed">{val.text}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-16 px-6">
    <div class="max-w-3xl mx-auto text-center">
      <p class="text-white/50 font-mono text-sm uppercase tracking-widest mb-4">Persönlicher Kontakt</p>
      <h2 class="font-display text-3xl font-bold text-white mb-6">
        Lernen Sie uns kennen.
      </h2>
      <p class="text-white/60 mb-8">Kostenloses Vor-Ort-Gespräch – kein Callcenter, kein Formular-Ping-Pong.</p>
      <a
        href="{base}/#kontakt"
        class="inline-block bg-signal-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition-colors"
      >
        Jetzt Termin anfragen
      </a>
    </div>
  </section>

</main>

<Footer />
