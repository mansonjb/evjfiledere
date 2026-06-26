import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EVJF Petit Groupe 2-4 Personnes | Île de Ré | La Dernière Escale",
  description:
    "Pour les EVJF intimistes à 2, 3 ou 4 personnes : balade privée en mer ultra-personnalisée sur l'Île de Ré. Bateau rien que pour vous, skipper disponible, flexibilité totale. Devis en 24h.",
};

const prixGroupe = [
  { nb: 2, aperoSunset: "98€", capHuitres: "130€" },
  { nb: 3, aperoSunset: "147€", capHuitres: "195€" },
  { nb: 4, aperoSunset: "196€", capHuitres: "260€" },
];

const faqs = [
  {
    q: "Y a-t-il un minimum de personnes pour réserver ?",
    a: "Non, nous acceptons les groupes à partir de 2 personnes. Vous pouvez être deux sœurs, deux meilleures amies ou un trio complice : le bateau vous appartient entièrement.",
  },
  {
    q: "Le bateau est-il toujours privatisé ?",
    a: "Toujours. Nous ne faisons jamais de sorties partagées avec d'autres groupes. Dès que vous montez à bord, c'est votre espace, votre moment, votre EVJF.",
  },
  {
    q: "Peut-on décider du trajet en cours de route ?",
    a: "Oui, c'est l'un des grands avantages des petits groupes. Si vous avez envie de s'arrêter plus longtemps dans une crique ou de changer d'itinéraire, votre skipper s'adapte selon les conditions météo.",
  },
  {
    q: "Peut-on prévoir une surprise pour la mariée ?",
    a: "Absolument, et c'est même notre spécialité. Dites-nous ce que vous préparez et on s'occupe du reste : décoration à bord, bouteille de champagne surprise, plateau de fromages ou même un gâteau personnalisé.",
  },
];

export default function EvjfPetitGroupePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[360px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=1920&q=80"
          alt="EVJF petit groupe balade privée Île de Ré"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--ocean)]/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <nav className="text-sm text-[var(--blush)] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">EVJF Petit Groupe</span>
          </nav>
          <p className="section-label text-[var(--coral)] mb-2">2 à 4 personnes</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "var(--font-serif)" }}>
            Un EVJF intime pour<br />2 à 4 personnes
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-[var(--ocean)] leading-relaxed mb-6">
          Pas besoin d&apos;un grand groupe pour vivre un EVJF mémorable. Parfois, les plus beaux moments se passent à deux, à trois ou à quatre : la mariée avec ses sœurs, ses meilleures amies de toujours ou son cercle le plus proche. C&apos;est souvent là que les fous rires durent le plus longtemps.
        </p>
        <p className="text-lg text-[var(--ocean)] leading-relaxed">
          Pour ces EVJF intimistes, nous proposons une expérience où tout est vraiment fait sur mesure. On n&apos;adapte pas un programme standard : on construit avec vous quelque chose qui ressemble à votre groupe, à vos envies, à ce moment-là.
        </p>
      </section>

      {/* Avantages */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-center mb-3">Ce qui change tout</p>
          <h2 className="text-4xl font-semibold text-[var(--ocean)] text-center mb-12" style={{ fontFamily: "var(--font-serif)" }}>
            Les avantages d&apos;un petit groupe
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "⚓",
                title: "Bateau entièrement pour vous",
                desc: "Zéro partage, zéro inconnu. Le catamaran ou le voilier vous appartient du départ au retour.",
              },
              {
                icon: "🗺️",
                title: "Flexibilité totale",
                desc: "Itinéraire ajustable, horaires flexibles, escales improvisées. On s'adapte à vous, pas l'inverse.",
              },
              {
                icon: "🎉",
                title: "Expérience vraiment VIP",
                desc: "Votre skipper est entièrement disponible pour vous : anecdotes, photos, petites attentions.",
              },
              {
                icon: "💬",
                title: "Personnalisation à 100%",
                desc: "Playlist, déco de bateau, plateau surprise, itinéraire sur mesure : rien n'est figé.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-[var(--ocean)] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--ocean)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formules recommandées */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Nos suggestions</p>
        <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-10" style={{ fontFamily: "var(--font-serif)" }}>
          Formules idéales pour un petit groupe
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-editorial p-7">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-[var(--ocean)]" style={{ fontFamily: "var(--font-serif)" }}>
                Apéro Sunset
              </h3>
              <span className="badge-champagne">2h</span>
            </div>
            <p className="text-[var(--ocean)] leading-relaxed mb-4">
              La formule parfaite pour commencer l&apos;EVJF : 2 heures en mer au coucher du soleil, champagne et amuse-bouches inclus. Simple, magique, inoubliable.
            </p>
            <div className="text-[var(--coral)] font-semibold text-lg">À partir de 49€/personne</div>
          </div>
          <div className="card-editorial p-7">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-[var(--ocean)]" style={{ fontFamily: "var(--font-serif)" }}>
                Cap Huîtres
              </h3>
              <span className="badge-champagne">3h</span>
            </div>
            <p className="text-[var(--ocean)] leading-relaxed mb-4">
              Cap sur les parcs ostréicoles de l&apos;Île de Ré. Dégustation d&apos;huîtres fraîches à bord avec un verre de vin blanc charentais. Un classique qu&apos;on ne se lasse pas de faire.
            </p>
            <div className="text-[var(--coral)] font-semibold text-lg">À partir de 65€/personne</div>
          </div>
        </div>
        <p className="mt-6 text-sm text-[var(--ocean)]/70">
          Vous pouvez aussi opter pour toutes nos autres formules, y compris le Chef à Bord ou la Journée Complète.{" "}
          <Link href="/formules" className="text-[var(--coral)] hover:underline">Voir toutes les formules</Link>
        </p>
      </section>

      {/* Circuit suggéré */}
      <section className="bg-[var(--ocean)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-[var(--coral)] mb-3">Notre idée pour vous</p>
          <h2 className="text-4xl font-semibold text-white mb-10" style={{ fontFamily: "var(--font-serif)" }}>
            Circuit idéal pour un groupe de 2 à 4
          </h2>
          <div className="space-y-6">
            {[
              { time: "Matin", label: "3h en mer privatisé", desc: "Départ du port, navigation sur l'Atlantique, dégustation d'huîtres à bord face aux parcs ostréicoles." },
              { time: "Midi", label: "Arrivée à Saint-Martin-de-Ré", desc: "Débarquement dans le port, location de vélos (15 min à pied depuis le port)." },
              { time: "Après-midi", label: "Vélo et village", desc: "Tour des remparts Vauban à vélo, boutiques des artisans, glace artisanale au port." },
              { time: "Soirée", label: "Retour au calme", desc: "Dîner dans un restaurant du port ou retour sur La Rochelle pour un bar à cocktails." },
            ].map((step) => (
              <div key={step.time} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-[var(--champagne)] font-semibold text-sm">{step.time}</span>
                </div>
                <div className="w-px bg-[var(--coral)]/40 mt-1 flex-shrink-0" style={{ minHeight: "2rem" }} />
                <div>
                  <div className="text-white font-semibold mb-1">{step.label}</div>
                  <div className="text-[var(--cream)]/80 text-sm leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tableau de prix */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Tarifs transparents</p>
        <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-10" style={{ fontFamily: "var(--font-serif)" }}>
          Combien ça coûte pour votre groupe ?
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-[var(--sand)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--ocean)] text-white">
                <th className="text-left py-4 px-6 font-semibold">Nombre de personnes</th>
                <th className="text-center py-4 px-6 font-semibold">Apéro Sunset (2h)</th>
                <th className="text-center py-4 px-6 font-semibold">Cap Huîtres (3h)</th>
              </tr>
            </thead>
            <tbody>
              {prixGroupe.map((row, i) => (
                <tr key={row.nb} className={i % 2 === 0 ? "bg-white" : "bg-[var(--cream)]"}>
                  <td className="py-4 px-6 font-medium text-[var(--ocean)]">{row.nb} personnes</td>
                  <td className="py-4 px-6 text-center text-[var(--coral)] font-semibold">{row.aperoSunset}</td>
                  <td className="py-4 px-6 text-center text-[var(--coral)] font-semibold">{row.capHuitres}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-[var(--ocean)]/60">Prix total pour le groupe. Devis sur mesure pour les formules Chef à Bord ou Journée Complète.</p>
      </section>

      {/* Témoignage */}
      <section className="bg-[var(--blush)]/30 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="quote-mark">&ldquo;</span>
          <p className="text-xl text-[var(--ocean)] leading-relaxed italic mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            On était trois : moi, ma sœur et la meilleure amie de la mariée. On avait peur que ça fasse trop petit pour réserver un bateau entier, mais non. Le skipper était tellement sympa et disponible, il nous a emmenées voir les parcs à huîtres et on a même eu droit à un petit crochet vers une crique qu&apos;il connaissait. Un moment parfait entre nous.
          </p>
          <div className="section-label">Camille P. — EVJF pour 3 personnes, juillet 2024</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Vos questions</p>
        <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-10" style={{ fontFamily: "var(--font-serif)" }}>
          Petit groupe : ce qu&apos;on nous demande souvent
        </h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="border border-[var(--sand)] rounded-2xl p-7 bg-white">
              <h3 className="text-lg font-semibold text-[var(--ocean)] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                {faq.q}
              </h3>
              <p className="text-[var(--ocean)] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--coral)] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
          Demandez votre devis en 24h
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          Dites-nous votre date, votre nombre de personnes et vos envies. On revient vers vous rapidement avec une proposition sur mesure.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--coral)] font-semibold px-10 py-4 rounded-full hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Demander votre devis personnalisé
          </Link>
          <Link
            href="/formules"
            className="inline-block border-2 border-white text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all"
          >
            Voir toutes les formules
          </Link>
        </div>
      </section>
    </main>
  );
}
