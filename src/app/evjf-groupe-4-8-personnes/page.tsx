import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EVJF Groupe 4 à 8 Personnes | Île de Ré | Bateau Privé",
  description:
    "L'EVJF parfait pour 4 à 8 personnes : bateau privatisé sur l'Île de Ré, ambiance festive, toutes les formules disponibles. Chef à bord, huîtres, coucher de soleil. Devis gratuit.",
};

const prixGroupe = [
  { nb: 4, aperoSunset: "196€", capHuitres: "260€", chefBord: "440€", journee: "580€" },
  { nb: 5, aperoSunset: "245€", capHuitres: "325€", chefBord: "550€", journee: "725€" },
  { nb: 6, aperoSunset: "294€", capHuitres: "390€", chefBord: "660€", journee: "870€" },
  { nb: 7, aperoSunset: "343€", capHuitres: "455€", chefBord: "770€", journee: "1015€" },
  { nb: 8, aperoSunset: "392€", capHuitres: "520€", chefBord: "880€", journee: "1160€" },
];

const faqs = [
  {
    q: "Est-ce qu'on tient à 8 sur un bateau ?",
    a: "Oui, nos catamarans accueillent confortablement jusqu'à 10 à 12 personnes. À 8, vous avez de la place pour vous installer, vous déplacer et profiter du pont sans être serrées.",
  },
  {
    q: "Peut-on prévoir des activités autres que la navigation ?",
    a: "Bien sûr. On peut organiser une étape vélo à Saint-Martin-de-Ré, une baignade dans une crique ou même un arrêt dans un bar à cocktails à La Rochelle en soirée. On construit le programme avec vous.",
  },
  {
    q: "Y a-t-il des réductions pour les grands groupes ?",
    a: "Pour les groupes de 7 à 8 personnes, nous proposons souvent des tarifs groupés. Demandez-nous un devis : on cherche toujours la formule la plus avantageuse pour vous.",
  },
  {
    q: "Peut-on apporter de la nourriture ou des boissons supplémentaires ?",
    a: "Absolument. Vous pouvez apporter ce que vous souhaitez à bord. Si vous avez un gâteau surprise ou des bouteilles spéciales pour la mariée, prévenez-nous à l'avance et on prévoira de l'espace.",
  },
];

export default function EvjfGroupe48Page() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[360px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1688675109833-fe7ef928a2f7?w=1920&q=80"
          alt="EVJF groupe 4 à 8 personnes bateau Île de Ré"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--ocean)]/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <nav className="text-sm text-[var(--blush)] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">EVJF 4 à 8 personnes</span>
          </nav>
          <p className="section-label text-[var(--coral)] mb-2">4 à 8 personnes</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "var(--font-serif)" }}>
            L&apos;EVJF parfait pour<br />4 à 8 personnes
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-[var(--ocean)] leading-relaxed mb-6">
          Entre 4 et 8, c&apos;est la taille idéale pour un EVJF en mer. Assez de monde pour créer une vraie ambiance de fête, assez peu pour rester sur un seul bateau et vivre l&apos;expérience ensemble, sans que ça parte dans tous les sens.
        </p>
        <p className="text-lg text-[var(--ocean)] leading-relaxed">
          À cette taille de groupe, toutes nos formules sont disponibles. Du rapide apéro coucher de soleil à la journée complète avec chef embarqué, vous avez le choix. Et comme toujours, le bateau vous appartient entièrement.
        </p>
      </section>

      {/* Avantages */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-center mb-3">Pourquoi c&apos;est la taille parfaite</p>
          <h2 className="text-4xl font-semibold text-[var(--ocean)] text-center mb-12" style={{ fontFamily: "var(--font-serif)" }}>
            Le bon équilibre pour une expérience réussie
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⛵",
                title: "Un seul bateau pour toutes",
                desc: "Pas besoin de se séparer. Tout le monde est ensemble, les conversations passent d'un groupe à l'autre, l'ambiance monte naturellement.",
              },
              {
                icon: "🎶",
                title: "L'ambiance se crée seule",
                desc: "À 4 ou à 8, il y a assez de monde pour qu'on rit, qu'on danse sur le pont et qu'on profite vraiment. L'EVJF prend vie.",
              },
              {
                icon: "🍾",
                title: "Toutes les formules accessibles",
                desc: "Chef à bord, journée complète, Cap Huîtres : à cette taille, tout est disponible et le prix reste raisonnable par personne.",
              },
              {
                icon: "📸",
                title: "Les meilleures photos",
                desc: "Assez de monde pour avoir de belles photos de groupe, pas trop pour que tout le monde soit visible et reconnaissable.",
              },
              {
                icon: "🗓️",
                title: "Easier à organiser",
                desc: "Coordonner 4 à 8 personnes reste gérable. Les disponibilités se calent plus facilement qu'avec un grand groupe.",
              },
              {
                icon: "💛",
                title: "Privatisation totale",
                desc: "Même à 4, vous avez le bateau pour vous. C'est votre espace, votre moment, sans partage avec d'autres groupes.",
              },
            ].map((item) => (
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

      {/* Formules recommandées */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Nos coups de coeur</p>
        <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-4" style={{ fontFamily: "var(--font-serif)" }}>
          Formules particulièrement adaptées
        </h2>
        <p className="text-[var(--ocean)] mb-10">
          Toutes nos formules fonctionnent parfaitement à 4-8. Voici celles que les groupes de cette taille choisissent le plus souvent.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Chef à Bord",
              duration: "5h",
              price: "À partir de 110€/pers",
              badge: "Coup de coeur",
              desc: "Un chef cuisine en direct sous vos yeux : huîtres, poisson du jour, tarte charentaise. Le luxe d'un bon repas sans sortir du bateau.",
            },
            {
              title: "Cap Huîtres & Champagne",
              duration: "3h",
              price: "À partir de 65€/pers",
              badge: "Le plus populaire",
              desc: "Direction les parcs ostréicoles de l'Île de Ré pour une dégustation à bord. Simple, convivial, et franchement délicieux.",
            },
          ].map((f) => (
            <div key={f.title} className="card-editorial p-7">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-[var(--ocean)]" style={{ fontFamily: "var(--font-serif)" }}>
                  {f.title}
                </h3>
                <span className="badge-coral">{f.badge}</span>
              </div>
              <p className="text-[var(--ocean)] leading-relaxed mb-4">{f.desc}</p>
              <div className="flex items-center justify-between">
                <span className="badge-champagne">{f.duration}</span>
                <span className="text-[var(--coral)] font-semibold">{f.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/formules" className="text-[var(--coral)] hover:underline font-medium">
            Voir toutes nos formules →
          </Link>
        </div>
      </section>

      {/* Circuit journée */}
      <section className="bg-[var(--ocean)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-[var(--coral)] mb-3">Idée d&apos;itinéraire</p>
          <h2 className="text-4xl font-semibold text-white mb-10" style={{ fontFamily: "var(--font-serif)" }}>
            La journée EVJF parfaite à 6
          </h2>
          <div className="space-y-6">
            {[
              { time: "10h00", label: "Embarquement", desc: "Rendez-vous au Port des Minimes à La Rochelle. Café et viennoiseries à bord pour bien démarrer." },
              { time: "11h00", label: "Navigation vers l'Île de Ré", desc: "Une heure de mer, le temps de profiter du pont, de prendre les premières photos et de déboucher le rosé." },
              { time: "12h00", label: "Déjeuner à bord", desc: "Mouillage face aux parcs ostréicoles. Dégustation d'huîtres, plateau de charcuterie, verre de blanc charentais." },
              { time: "14h00", label: "Saint-Martin-de-Ré à vélo", desc: "Débarquement dans le port, location de vélos, tour des remparts Vauban et visite des boutiques du village." },
              { time: "17h00", label: "Retour en mer", desc: "Navigation coucher de soleil sur le chemin du retour. Champagne et souvenirs plein les yeux." },
              { time: "19h00", label: "La Rochelle en soirée", desc: "Retour au port, dîner dans le Vieux-Port et, pour les plus courageuses, bar à cocktails jusqu'en fin de nuit." },
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
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Tarifs clairs</p>
        <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-10" style={{ fontFamily: "var(--font-serif)" }}>
          Estimation selon la taille de votre groupe
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-[var(--sand)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--ocean)] text-white">
                <th className="text-left py-4 px-5 font-semibold">Groupe</th>
                <th className="text-center py-4 px-5 font-semibold">Apéro Sunset</th>
                <th className="text-center py-4 px-5 font-semibold">Cap Huîtres</th>
                <th className="text-center py-4 px-5 font-semibold">Chef à Bord</th>
                <th className="text-center py-4 px-5 font-semibold">Journée</th>
              </tr>
            </thead>
            <tbody>
              {prixGroupe.map((row, i) => (
                <tr key={row.nb} className={i % 2 === 0 ? "bg-white" : "bg-[var(--cream)]"}>
                  <td className="py-4 px-5 font-medium text-[var(--ocean)]">{row.nb} pers.</td>
                  <td className="py-4 px-5 text-center text-[var(--coral)] font-semibold">{row.aperoSunset}</td>
                  <td className="py-4 px-5 text-center text-[var(--coral)] font-semibold">{row.capHuitres}</td>
                  <td className="py-4 px-5 text-center text-[var(--coral)] font-semibold">{row.chefBord}</td>
                  <td className="py-4 px-5 text-center text-[var(--coral)] font-semibold">{row.journee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-[var(--ocean)]/60">Prix total pour le groupe. Pour un devis personnalisé, contactez-nous directement.</p>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label mb-3">Questions fréquentes</p>
          <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-10" style={{ fontFamily: "var(--font-serif)" }}>
            Ce qu&apos;on nous demande souvent
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-[var(--sand)] rounded-2xl p-7">
                <h3 className="text-lg font-semibold text-[var(--ocean)] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                  {faq.q}
                </h3>
                <p className="text-[var(--ocean)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--coral)] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
          Demandez votre devis en 24h
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          Votre date, votre nombre de personnes, vos envies. On vous revient avec une proposition claire et sans engagement.
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
