import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soirée EVJF La Rochelle | Bar Cocktails + Vieux Port + Bateau",
  description:
    "Soirée EVJF à La Rochelle : apéro en mer face aux tours médiévales, dîner dans le Vieux-Port, bar à cocktails. Le combo mer + ville parfait pour un enterrement de vie de jeune fille festif.",
};

const itineraire = [
  {
    time: "17h00",
    lieu: "Vieux-Port de La Rochelle",
    desc: "Embarquement depuis le Vieux-Port, en face des tours médiévales. L'ambiance est déjà là : la lumière dorée de la fin d'après-midi, les bateaux qui se balancent, la ville qui s'éveille pour la soirée.",
  },
  {
    time: "17h30",
    lieu: "En mer, face à la Tour Saint-Nicolas",
    desc: "Apéro en mer face à la Tour Saint-Nicolas et la Tour de la Chaîne. Le champagne est servi, les amuse-bouches circulent, et les photos depuis le large avec les tours en fond ne ressemblent à rien d'autre.",
  },
  {
    time: "18h30",
    lieu: "Navigation Vieux-Port / baie de La Rochelle",
    desc: "On navigue le long de la côte rochelaise pendant que le soleil descend. C'est le moment des photos de groupe, de la playlist perso, et des fou-rires avant la soirée qui commence vraiment.",
  },
  {
    time: "19h00",
    lieu: "Retour au Vieux-Port",
    desc: "Retour à quai. Visite à pied des tours médiévales pour celles qui veulent, ou direction les terrasses du Vieux-Port directement.",
  },
  {
    time: "20h00",
    lieu: "Dîner dans le Vieux-Port",
    desc: "La Rochelle a de très bonnes adresses autour du port. La Cuisine de Jules pour une cuisine du marché, Le Balthazar pour une ambiance plus festive. Réservation à faire en amont pour les groupes.",
  },
  {
    time: "22h00",
    lieu: "Bar à cocktails",
    desc: "Le Comptoir des Délices, Le 4 Walls ou un autre bar selon vos envies et votre groupe. La Rochelle est une ville étudiante : les bars ne manquent pas et l'ambiance suit.",
  },
];

const pointsForts = [
  {
    title: "Mer + ville en une soirée",
    desc: "Pas besoin de choisir entre sortie en mer et soirée en ville. Ce circuit donne les deux, dans le bon ordre.",
  },
  {
    title: "Flexibilité totale",
    desc: "Le dîner et les bars après le bateau, c'est vous qui choisissez. On gère la partie mer, vous gérez la suite.",
  },
  {
    title: "Les plus belles photos de La Rochelle",
    desc: "La vue sur les tours médiévales depuis le large, au coucher du soleil : c'est une photo qu'on ne peut pas faire autrement.",
  },
  {
    title: "Adapté à tous les budgets",
    desc: "La partie bateau commence à 55€/pers. Le dîner et les bars, vous les gérez selon ce que vous voulez dépenser.",
  },
];

const restaurants = [
  { name: "La Cuisine de Jules", desc: "Cuisine du marché, poissons frais, ambiance chaleureuse. Parfait pour un groupe EVJF." },
  { name: "Le Balthazar", desc: "Plus festif, ambiance brasserie. Accepte les groupes avec réservation à l'avance." },
  { name: "Les Flots", desc: "Vue sur le port, fruits de mer et poissons. La carte est simple et bonne." },
];

const bars = [
  { name: "Le Comptoir des Délices", desc: "Bar à cocktails dans le Vieux-Port. Ambiance décontractée, cocktails soignés." },
  { name: "Le 4 Walls", desc: "Bar à shots et cocktails populaire avec les groupes. Ambiance garantie." },
];

export default function SoireeLaRochellePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[360px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1744709561288-74517c00d17c?w=1920&q=80"
          alt="Soirée EVJF La Rochelle Vieux Port tours médiévales"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--ocean)]/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <nav className="text-sm text-[var(--blush)] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2 opacity-50">/</span>
            <Link href="/circuits" className="hover:text-white transition-colors">Circuits</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">Soirée La Rochelle</span>
          </nav>
          <p className="section-label text-[var(--coral)] mb-2">Soirée festive</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "var(--font-serif)" }}>
            La Rochelle by Night<br />pour votre EVJF
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-[var(--ocean)] leading-relaxed mb-6">
          La Rochelle est une des villes les plus photogéniques de la côte atlantique. Et la voir depuis la mer au coucher du soleil, avec les tours médiévales en fond de photo, c&apos;est quelque chose qu&apos;on ne fait pas en voiture ou à pied.
        </p>
        <p className="text-lg text-[var(--ocean)] leading-relaxed">
          Ce circuit combine une sortie en mer en début de soirée avec une vraie soirée en ville après. C&apos;est le circuit idéal pour les groupes qui veulent tout faire en une journée, ou pour celles qui ne prévoient qu&apos;un soir sur La Rochelle.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="bg-white border border-[var(--sand)] rounded-xl px-5 py-3">
            <div className="text-xs text-[var(--champagne)] font-semibold uppercase tracking-widest mb-1">Durée sortie mer</div>
            <div className="font-semibold text-[var(--ocean)]">2h</div>
          </div>
          <div className="bg-white border border-[var(--sand)] rounded-xl px-5 py-3">
            <div className="text-xs text-[var(--champagne)] font-semibold uppercase tracking-widest mb-1">Groupe</div>
            <div className="font-semibold text-[var(--ocean)]">4 à 15 personnes</div>
          </div>
          <div className="bg-white border border-[var(--sand)] rounded-xl px-5 py-3">
            <div className="text-xs text-[var(--champagne)] font-semibold uppercase tracking-widest mb-1">Prix bateau</div>
            <div className="font-semibold text-[var(--coral)]">À partir de 55€/pers</div>
          </div>
        </div>
      </section>

      {/* Itinéraire */}
      <section className="bg-[var(--ocean)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-[var(--coral)] mb-3">Le programme</p>
          <h2 className="text-4xl font-semibold text-white mb-12" style={{ fontFamily: "var(--font-serif)" }}>
            La soirée de A à Z
          </h2>
          <div className="space-y-8">
            {itineraire.map((step) => (
              <div key={step.time} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-[var(--champagne)] font-semibold text-sm">{step.time}</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[var(--coral)] mt-1" />
                  <div className="w-px flex-1 bg-[var(--coral)]/30 mt-2" />
                </div>
                <div className="pb-4">
                  <div className="text-white font-semibold mb-1">{step.lieu}</div>
                  <div className="text-[var(--cream)]/80 text-sm leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Points forts */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Ce qui rend ce circuit unique</p>
        <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-12" style={{ fontFamily: "var(--font-serif)" }}>
          Pourquoi ce circuit marche
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {pointsForts.map((pf) => (
            <div key={pf.title} className="p-6 rounded-2xl bg-white border border-[var(--sand)]">
              <h3 className="text-lg font-semibold text-[var(--ocean)] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                {pf.title}
              </h3>
              <p className="text-sm text-[var(--ocean)] leading-relaxed">{pf.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nos adresses */}
      <section className="bg-[var(--cream)] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label mb-3">Nos bonnes adresses</p>
          <h2 className="text-3xl font-semibold text-[var(--ocean)] mb-10" style={{ fontFamily: "var(--font-serif)" }}>
            Restaurants et bars dans le Vieux-Port
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-semibold text-[var(--ocean)] mb-4 border-b border-[var(--sand)] pb-2" style={{ fontFamily: "var(--font-serif)" }}>
                Pour dîner
              </h3>
              <div className="space-y-4">
                {restaurants.map((r) => (
                  <div key={r.name}>
                    <div className="font-medium text-[var(--ocean)]">{r.name}</div>
                    <div className="text-sm text-[var(--ocean)]/70">{r.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--ocean)] mb-4 border-b border-[var(--sand)] pb-2" style={{ fontFamily: "var(--font-serif)" }}>
                Pour boire un verre
              </h3>
              <div className="space-y-4">
                {bars.map((b) => (
                  <div key={b.name}>
                    <div className="font-medium text-[var(--ocean)]">{b.name}</div>
                    <div className="text-sm text-[var(--ocean)]/70">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-[var(--ocean)]/60">
            Ces adresses sont des suggestions. La Rochelle a beaucoup d&apos;autres bonnes options. Pour les groupes de plus de 8 personnes, pensez à réserver à l&apos;avance.
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1744709561288-74517c00d17c?w=1920&q=80"
            alt="La Rochelle Vieux Port soirée EVJF tours médiévales"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--coral)] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
          Demandez votre devis en 24h
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          La partie bateau c&apos;est nous. Le dîner et les bars, c&apos;est vous. Mais si vous voulez qu&apos;on vous aide à organiser le tout, on peut aussi.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--coral)] font-semibold px-10 py-4 rounded-full hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Réserver ce circuit
          </Link>
          <Link
            href="/circuits"
            className="inline-block border-2 border-white text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all"
          >
            Voir tous les circuits
          </Link>
        </div>
      </section>
    </main>
  );
}
