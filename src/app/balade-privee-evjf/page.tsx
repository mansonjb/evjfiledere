import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Balade Privée EVJF Île de Ré | Votre Groupe Uniquement | Sur Mesure",
  description:
    "Balade privée en bateau pour votre EVJF sur l'Île de Ré : zéro partage avec d'autres groupes, playlist perso, route personnalisée, skipper disponible. Toutes tailles de groupe. Devis gratuit.",
};

const avantages = [
  {
    icon: "🚫",
    title: "Zéro partage",
    desc: "Pas de cohabitation avec des inconnus. Pas de groupe qui fait du bruit à côté. Le bateau est exclusivement pour vous, du départ au retour.",
  },
  {
    icon: "🎵",
    title: "Playlist personnalisée",
    desc: "Vous envoyez vos morceaux, on les passe sur la sono du bord. Les hits de la mariée, vos chansons souvenir, vos coups de coeur du moment.",
  },
  {
    icon: "🗺️",
    title: "Route à votre goût",
    desc: "Huîtres, crique secrète, Saint-Martin-de-Ré, coucher de soleil ? On construit le trajet autour de ce qui compte pour vous.",
  },
  {
    icon: "⏱️",
    title: "Horaires flexibles",
    desc: "Pas d'horaire imposé par un groupe collectif. On part quand vous êtes prêtes, on s'arrête quand vous voulez (dans les limites des marées).",
  },
  {
    icon: "🎂",
    title: "Surprises et anniversaires",
    desc: "Bouteille qui apparaît d'un coup, gâteau surprise, bandeau de la mariée au bon moment : le skipper est dans la confidence.",
  },
  {
    icon: "📸",
    title: "Un skipper qui fait des photos",
    desc: "Votre skipper sait manier un appareil. Il capture les moments sans qu'on lui demande, et les retouches les plus basiques sont possibles.",
  },
];

const differenceTable = [
  {
    critere: "Autres groupes à bord",
    prive: "Non, jamais",
    collectif: "Oui, souvent 2-3 groupes",
  },
  {
    critere: "Itinéraire",
    prive: "Sur mesure selon vos envies",
    collectif: "Fixe, identique pour tous",
  },
  {
    critere: "Horaires",
    prive: "Flexibles",
    collectif: "Imposés",
  },
  {
    critere: "Playlist",
    prive: "La vôtre",
    collectif: "Musique d'ambiance générique",
  },
  {
    critere: "Attention du skipper",
    prive: "100% pour vous",
    collectif: "Partagée entre plusieurs groupes",
  },
  {
    critere: "Surprises possibles",
    prive: "Oui, à l'avance",
    collectif: "Difficile à organiser",
  },
];

export default function BaladePriveeEvjfPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[360px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1688675109833-fe7ef928a2f7?w=1920&q=80"
          alt="Balade privée EVJF bateau Île de Ré groupe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--ocean)]/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <nav className="text-sm text-[var(--blush)] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">Balade Privée</span>
          </nav>
          <p className="section-label text-[var(--coral)] mb-2">Privatisation totale</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "var(--font-serif)" }}>
            Une Balade Privée<br />Rien que Pour Vous
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-[var(--ocean)] leading-relaxed mb-6">
          Chez La Dernière Escale, il n&apos;y a qu&apos;un seul type de sortie : la privatisation complète. Pas de tours collectifs, pas de cohabitation avec d&apos;autres groupes, pas de programme standardisé qu&apos;on applique à tout le monde.
        </p>
        <p className="text-lg text-[var(--ocean)] leading-relaxed">
          À partir du moment où vous montez à bord, le bateau et le skipper sont exclusivement pour vous. Point.
        </p>
      </section>

      {/* Avantages */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-center mb-3">Ce que ça change concrètement</p>
          <h2 className="text-4xl font-semibold text-[var(--ocean)] text-center mb-12" style={{ fontFamily: "var(--font-serif)" }}>
            Ce que vous gagnez avec une balade privée
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {avantages.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-[var(--sand)] bg-[var(--cream)]">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-[var(--ocean)] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--ocean)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Pourquoi choisir le privé</p>
        <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-10" style={{ fontFamily: "var(--font-serif)" }}>
          Privé vs collectif : la différence en clair
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-[var(--sand)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--ocean)] text-white">
                <th className="text-left py-4 px-6 font-semibold">Critère</th>
                <th className="text-center py-4 px-6 font-semibold text-[var(--coral)]">Balade privée</th>
                <th className="text-center py-4 px-6 font-semibold text-[var(--champagne)]">Sortie collective</th>
              </tr>
            </thead>
            <tbody>
              {differenceTable.map((row, i) => (
                <tr key={row.critere} className={i % 2 === 0 ? "bg-white" : "bg-[var(--cream)]"}>
                  <td className="py-4 px-6 text-[var(--ocean)] font-medium">{row.critere}</td>
                  <td className="py-4 px-6 text-center text-[var(--ocean)]">
                    <span className="inline-flex items-center gap-2">
                      <span className="text-[var(--coral)]">✓</span>
                      {row.prive}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--ocean)]/50">{row.collectif}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Formules */}
      <section className="bg-[var(--ocean)] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-[var(--coral)] mb-3">Toutes privatisées</p>
          <h2 className="text-4xl font-semibold text-white mb-10" style={{ fontFamily: "var(--font-serif)" }}>
            Nos formules privées disponibles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Apéro Sunset", duration: "2h", price: "dès 49€/pers", desc: "Coucher de soleil en mer, champagne et amuse-bouches." },
              { title: "Cap Huîtres", duration: "3h", price: "dès 65€/pers", desc: "Huîtres fraîches à bord face aux parcs ostréicoles." },
              { title: "Chef à Bord", duration: "5h", price: "dès 110€/pers", desc: "Un chef cuisine en direct pour un repas gastronomique en mer." },
              { title: "Journée Complète", duration: "8h", price: "dès 145€/pers", desc: "Une journée entière avec tout : mer, huîtres, baignade, coucher de soleil." },
            ].map((f) => (
              <div key={f.title} className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="badge-champagne mb-3 inline-block">{f.duration}</div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  {f.title}
                </h3>
                <p className="text-[var(--cream)]/70 text-sm mb-4">{f.desc}</p>
                <div className="text-[var(--coral)] font-semibold text-sm">{f.price}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/formules"
              className="inline-block bg-[var(--coral)] text-white font-semibold px-8 py-3.5 rounded-full hover:shadow-lg transition-all"
            >
              Voir le détail de toutes les formules
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <span className="quote-mark">&ldquo;</span>
        <p className="text-xl text-[var(--ocean)] leading-relaxed italic mb-6" style={{ fontFamily: "var(--font-serif)" }}>
          Ce que j&apos;ai préféré, c&apos;est qu&apos;on était vraiment juste entre nous. On a pu mettre notre playlist, on a demandé à changer un peu de direction et le skipper s&apos;est adapté sans hésiter. C&apos;était notre moment, pas un programme standardisé.
        </p>
        <div className="section-label">Léa M. — Organisation EVJF pour 6 personnes, août 2024</div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--coral)] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
          Demandez votre devis en 24h
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          Votre groupe, votre date, vos envies. On vous propose quelque chose qui ressemble à ce que vous cherchez.
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
            Voir les formules
          </Link>
        </div>
      </section>
    </main>
  );
}
