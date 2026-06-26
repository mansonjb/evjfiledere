import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Découverte Île de Ré EVJF | Guide Complet Activités & Sorties 2025",
  description:
    "Le guide complet pour découvrir l'Île de Ré pour votre EVJF : vélo, plages, villages (Saint-Martin, La Flotte, Ars-en-Ré), huîtres, hébergements, comment y aller. Tout ce qu'il faut savoir.",
};

const villages = [
  {
    name: "Saint-Martin-de-Ré",
    desc: "Le village principal de l'île. Remparts Vauban classés UNESCO, port animé, boutiques de créateurs, restaurants. Incontournable.",
  },
  {
    name: "La Flotte",
    desc: "Classé parmi les Plus Beaux Villages de France. Port de pêche, ruelles fleuries, marché artisanal. Très photogénique.",
  },
  {
    name: "Ars-en-Ré",
    desc: "Autre village classé. Atmosphère plus tranquille, marais salants à vélo, clocher noir et blanc emblématique.",
  },
  {
    name: "Saint-Clément-des-Baleines",
    desc: "Tout à l'ouest de l'île. Le phare des Baleines, l'un des plus hauts de France (57m). Vue imprenable depuis le sommet.",
  },
];

const plages = [
  {
    name: "Plage des Gollandières",
    lieu: "La Flotte",
    desc: "Plage de sable fin bien exposée, eau claire, peu de rochers. Idéale pour se baigner.",
  },
  {
    name: "Plage de la Conche",
    lieu: "Sainte-Marie-de-Ré",
    desc: "Grande plage familiale avec surveillance en saison, facile d'accès à vélo depuis Saint-Martin.",
  },
  {
    name: "Plage du Peu Ragot",
    lieu: "Rivedoux-Plage",
    desc: "Première plage en arrivant sur l'île. Eau calme, bon spot pour une baignade rapide.",
  },
];

const calendrier = [
  { mois: "Mai", note: "Ideal. Peu de monde, pistes cyclables libres, huîtres excellentes, météo douce." },
  { mois: "Juin", note: "Parfait. L'île se réveille, les plages ne sont pas encore bondées, les restaurants ont de la place." },
  { mois: "Juillet-Août", note: "Haute saison. Ambiance garantie mais réservez tôt (bateau, vélos, hébergement, restaurants)." },
  { mois: "Septembre", note: "Excellent. L'affluence baisse, il fait encore chaud, les prix descendent. Souvent le meilleur mois." },
  { mois: "Octobre", note: "Pour les groupes qui aiment le calme et la lumière d'automne sur la mer." },
];

export default function EvjfDecouverteIleDeRePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[360px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1920&q=80"
          alt="Île de Ré découverte EVJF village et mer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--ocean)]/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <nav className="text-sm text-[var(--blush)] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">Découverte Île de Ré</span>
          </nav>
          <p className="section-label text-[var(--coral)] mb-2">Guide complet</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "var(--font-serif)" }}>
            Découvrir l&apos;Île de Ré<br />pour votre EVJF
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-[var(--ocean)] leading-relaxed mb-6">
          L&apos;Île de Ré, c&apos;est 32km de long, 350km de pistes cyclables, des villages médiévaux, des plages de sable fin et des parcs à huîtres. C&apos;est aussi une île reliée à La Rochelle par un pont, avec une infrastructure d&apos;accueil solide pour les groupes.
        </p>
        <p className="text-lg text-[var(--ocean)] leading-relaxed">
          Ce guide rassemble tout ce qu&apos;il faut savoir pour organiser votre EVJF sur l&apos;île, en dehors de ce qu&apos;on propose en mer. Les villages, les plages, la gastronomie, l&apos;hébergement, et comment y arriver.
        </p>
      </section>

      {/* Vélo */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label mb-3">Le moyen de transport de l&apos;île</p>
          <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            Le vélo : incontournable
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[var(--ocean)] leading-relaxed mb-6">
                Sur l&apos;Île de Ré, le vélo n&apos;est pas une option touristique, c&apos;est le mode de déplacement naturel. Le relief est quasi plat, les pistes cyclables (350km au total) relient tous les villages entre eux, et les voitures sont de toute façon coincées en été.
              </p>
              <p className="text-[var(--ocean)] leading-relaxed mb-6">
                Pour un EVJF, c&apos;est parfait : groupe uni, liberté totale, photos partout. Les loueurs sont nombreux dans tous les villages et à proximité des ports.
              </p>
              <div className="bg-[var(--cream)] rounded-xl p-5 border border-[var(--sand)]">
                <h3 className="font-semibold text-[var(--ocean)] mb-2">Prix indicatifs location</h3>
                <ul className="text-sm text-[var(--ocean)] space-y-1">
                  <li>Vélo classique : 8 à 12€/demi-journée</li>
                  <li>Vélo électrique : 15 à 20€/demi-journée</li>
                  <li>Réservation recommandée en juillet-août</li>
                </ul>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80"
                alt="Piste cyclable Île de Ré bord de mer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plages */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Se baigner</p>
        <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-10" style={{ fontFamily: "var(--font-serif)" }}>
          Les meilleures plages pour un EVJF
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plages.map((plage) => (
            <div key={plage.name} className="p-6 rounded-2xl border border-[var(--sand)] bg-white">
              <div className="text-xs text-[var(--champagne)] font-semibold uppercase tracking-widest mb-2">{plage.lieu}</div>
              <h3 className="text-lg font-semibold text-[var(--ocean)] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                {plage.name}
              </h3>
              <p className="text-sm text-[var(--ocean)] leading-relaxed">{plage.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Villages */}
      <section className="bg-[var(--ocean)] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-[var(--coral)] mb-3">À explorer</p>
          <h2 className="text-4xl font-semibold text-white mb-10" style={{ fontFamily: "var(--font-serif)" }}>
            Les villages de l&apos;île
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {villages.map((v) => (
              <div key={v.name} className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                  {v.name}
                </h3>
                <p className="text-[var(--cream)]/80 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gastronomie */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Ce qu&apos;on mange</p>
        <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-10" style={{ fontFamily: "var(--font-serif)" }}>
          La gastronomie de l&apos;Île de Ré
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🦪",
              title: "Huîtres de l'Île de Ré",
              desc: "Élevées dans les claires de l'île depuis des siècles. Goût iodé, chair ferme, label reconnu. On les déguste avec un muscadet ou un Chablis.",
            },
            {
              icon: "🍷",
              title: "Pineau des Charentes",
              desc: "L'apéritif charentais : jus de raisin et cognac. Doux, fruité, parfait pour commencer l'apéro sur le pont.",
            },
            {
              icon: "🧂",
              title: "Fleur de sel",
              desc: "Récoltée à la main dans les marais salants de l'île. À ramener en souvenir, à mettre sur tout.",
            },
            {
              icon: "🫏",
              title: "Les ânes en culottes",
              desc: "Symbole de l'île, les ânes portent des pantalons pour se protéger des moustiques. On les croise souvent sur les routes.",
            },
          ].map((item) => (
            <div key={item.title} className="text-center p-5">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-base font-semibold text-[var(--ocean)] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                {item.title}
              </h3>
              <p className="text-xs text-[var(--ocean)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hébergement */}
      <section className="bg-[var(--cream)] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label mb-3">Où dormir</p>
          <h2 className="text-3xl font-semibold text-[var(--ocean)] mb-8" style={{ fontFamily: "var(--font-serif)" }}>
            Options d&apos;hébergement pour votre groupe
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Maisons de vacances",
                desc: "La meilleure option pour un groupe EVJF. Jardins, cuisines communes, terrasses. À réserver tôt en haute saison.",
              },
              {
                title: "Hôtels",
                desc: "Quelques bonnes adresses à Saint-Martin et La Flotte. Pratique si le groupe préfère la liberté sans cuisine.",
              },
              {
                title: "Campings",
                desc: "Des campings bien équipés avec mobil-homes ou chalets. Option économique, parfois mieux placée pour les plages.",
              },
            ].map((h) => (
              <div key={h.title} className="p-6 rounded-2xl bg-white border border-[var(--sand)]">
                <h3 className="text-lg font-semibold text-[var(--ocean)] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                  {h.title}
                </h3>
                <p className="text-sm text-[var(--ocean)] leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendrier */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Quand venir</p>
        <h2 className="text-3xl font-semibold text-[var(--ocean)] mb-8" style={{ fontFamily: "var(--font-serif)" }}>
          Le meilleur moment pour votre EVJF
        </h2>
        <div className="space-y-4">
          {calendrier.map((c, i) => (
            <div
              key={c.mois}
              className={`flex gap-6 items-center p-5 rounded-2xl border ${
                i === 1 || i === 3
                  ? "bg-[var(--coral)]/5 border-[var(--coral)]/30"
                  : "bg-white border-[var(--sand)]"
              }`}
            >
              <div className="w-28 font-semibold text-[var(--ocean)] flex-shrink-0" style={{ fontFamily: "var(--font-serif)" }}>
                {c.mois}
                {(i === 1 || i === 3) && (
                  <div>
                    <span className="badge-coral text-xs mt-1">Recommandé</span>
                  </div>
                )}
              </div>
              <div className="text-sm text-[var(--ocean)] leading-relaxed">{c.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Comment venir */}
      <section className="bg-[var(--ocean)] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-[var(--coral)] mb-3">Pratique</p>
          <h2 className="text-3xl font-semibold text-white mb-8" style={{ fontFamily: "var(--font-serif)" }}>
            Comment venir sur l&apos;Île de Ré
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                Le pont de l&apos;Île de Ré
              </h3>
              <p className="text-[var(--cream)]/80 text-sm leading-relaxed mb-4">
                L&apos;île est reliée à La Rochelle par un pont de 3km. Le péage est payant en voiture (tarif variable selon la saison, environ 8-16€ aller). À pied ou à vélo : 2,50€ seulement.
              </p>
              <p className="text-[var(--cream)]/80 text-sm">
                En juillet-août, les bouchons au péage peuvent être longs. Prévoyez de partir tôt ou tard pour éviter les heures de pointe.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                Depuis La Rochelle
              </h3>
              <p className="text-[var(--cream)]/80 text-sm leading-relaxed mb-4">
                La Rochelle est desservie par TGV depuis Paris (2h15), Bordeaux (1h) et Nantes (1h20). L&apos;aéroport de La Rochelle propose des vols depuis plusieurs villes européennes.
              </p>
              <p className="text-[var(--cream)]/80 text-sm">
                Des bus réguliers relient La Rochelle à Saint-Martin-de-Ré (ligne Réabus). Compter 45 min environ depuis le centre-ville.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--coral)] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
          Ajoutez la mer à votre programme
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          L&apos;Île de Ré à vélo, c&apos;est bien. L&apos;Île de Ré vue depuis la mer, avec les huîtres et le champagne à bord, c&apos;est encore mieux.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--coral)] font-semibold px-10 py-4 rounded-full hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Demander un devis
          </Link>
          <Link
            href="/formules"
            className="inline-block border-2 border-white text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all"
          >
            Nos formules en mer
          </Link>
        </div>
      </section>
    </main>
  );
}
