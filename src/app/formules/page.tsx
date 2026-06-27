import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos Formules EVJF en Mer | Île de Ré & La Rochelle",
  description:
    "Découvrez nos formules EVJF en bateau sur l'Île de Ré et La Rochelle : Apéro Sunset, Huîtres & Champagne, Chef à Bord, Journée complète. Devis gratuit en 24h.",
  openGraph: {
    title: "Nos Formules EVJF en Mer | Île de Ré & La Rochelle",
    description:
      "Découvrez nos formules EVJF en bateau sur l'Île de Ré et La Rochelle : Apéro Sunset, Huîtres & Champagne, Chef à Bord, Journée complète. Devis gratuit en 24h.",
    locale: "fr_FR",
    type: "website",
  },
};

const formules = [
  {
    id: "apero-sunset",
    number: "01",
    title: "Apéro Sunset",
    duration: "2h",
    badge: null,
    price: "À partir de 49€/personne",
    capacity: "4 à 12 personnes",
    image: "https://images.unsplash.com/photo-1620035118505-50d949de137e?w=900&q=80",
    alt: "Coucher de soleil en catamaran EVJF Île de Ré",
    description:
      "La formule parfaite pour commencer en beauté votre EVJF. Montez à bord d'un catamaran ou d'un voilier pour 2 heures de navigation privatisée au coucher du soleil, champagne et amuse-bouches inclus. Le ciel pastel de l'Atlantique, le clapot des vagues, vos amies autour de vous : ce moment restera gravé dans vos mémoires.",
    inclus: [
      "Catamaran ou voilier privatisé",
      "Capitaine professionnel",
      "1 bouteille de champagne pour 4 personnes",
      "Amuse-bouches marins",
      "Playlist personnalisée possible",
    ],
    nonInclus: ["Repas complet", "Transfert port"],
  },
  {
    id: "cap-huitres-champagne",
    number: "02",
    title: "Cap Huîtres & Champagne",
    duration: "3h",
    badge: "Le plus populaire",
    price: "À partir de 65€/personne",
    capacity: "4 à 15 personnes",
    image: "https://images.unsplash.com/photo-1666803685407-009be9f0a03a?w=900&q=80",
    alt: "Dégustation d'huîtres en mer EVJF Île de Ré",
    description:
      "Notre formule signature, plébiscitée par des centaines de groupes EVJF. Cap sur les parcs ostréicoles de l'Île de Ré à bord d'un catamaran privatisé. Votre skipper vous emmène au coeur des bassins d'élevage où vous dégusterez les huîtres directement sorties de l'eau, accompagnées d'un verre de vin blanc Charentes. Une immersion authentique dans la culture maritime de l'île.",
    inclus: [
      "Catamaran privatisé",
      "Skipper professionnel",
      "12 huîtres par personne + sauce mignonette",
      "1 verre de vin blanc Charentes",
      "Visite guidée parc ostréicole",
    ],
    nonInclus: ["Repas complet", "Transfert port"],
  },
  {
    id: "chef-a-bord",
    number: "03",
    title: "Chef à Bord",
    duration: "5h",
    badge: "Premium",
    price: "À partir de 110€/personne",
    capacity: "4 à 10 personnes",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
    alt: "Repas gastronomique à bord voilier EVJF",
    description:
      "L'expérience gastronomique ultime en mer. Un chef cuisinier professionnel embarque avec vous pour une navigation de 5 heures entre l'Île de Ré et La Rochelle. Pendant que le voilier glisse sur l'Atlantique, il prépare sous vos yeux un menu 3 services avec des produits locaux : huîtres en entrée, poisson du jour en plat, tarte charentaise en dessert. Les accords mets et vins sont soigneusement sélectionnés.",
    inclus: [
      "Voilier ou catamaran privatisé",
      "Capitaine professionnel",
      "Chef cuisinier professionnel embarqué",
      "Menu 3 services (entrée / plat / dessert)",
      "Accord mets & vins",
      "Produits locaux Île de Ré",
    ],
    nonInclus: ["Transfert port", "Régimes alimentaires particuliers (sur demande préalable)"],
  },
  {
    id: "journee-complete",
    number: "04",
    title: "Journée Complète",
    duration: "8h",
    badge: "Tout inclus",
    price: "À partir de 145€/personne",
    capacity: "4 à 12 personnes",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
    alt: "Journée complète en mer EVJF Île de Ré",
    description:
      "Le summum de l'expérience EVJF nautique. Une journée entière en mer, de l'aube au coucher du soleil. On lève l'ancre tôt le matin, on fait escale dans une crique secrète pour se baigner et faire du snorkeling, on déjeune au barbecue à bord avec les produits du marché, on navigue jusqu'à l'Île de Ré pour la dégustation d'huîtres, et on rentre au port dans la lumière dorée du soir. Une journée complète, un souvenir pour la vie.",
    inclus: [
      "Journée complète 8 heures en mer",
      "Skipper professionnel",
      "Dégustation d'huîtres",
      "Baignade & masques de snorkeling",
      "Barbecue à bord avec produits locaux",
      "Coucher de soleil en mer",
      "Retour au port accompagné",
    ],
    nonInclus: ["Transfert port"],
  },
];

const tableFeatures = [
  { feature: "Bateau privatisé", v: [true, true, true, true] },
  { feature: "Capitaine professionnel", v: [true, true, true, true] },
  { feature: "Champagne inclus", v: [true, false, true, false] },
  { feature: "Huîtres incluses", v: [false, true, true, true] },
  { feature: "Chef gastronomique", v: [false, false, true, false] },
  { feature: "Repas complet", v: [false, false, true, true] },
  { feature: "Baignade / snorkeling", v: [false, false, false, true] },
  { feature: "Coucher de soleil", v: [true, false, false, true] },
];

const faqs = [
  {
    q: "Combien de temps à l'avance dois-je réserver ?",
    a: "Nous recommandons de réserver au moins 3 semaines avant votre EVJF, surtout en juillet-août. Pour les groupes de plus de 10 personnes, prévoyez 4 à 6 semaines. En basse saison (mai, juin, septembre), 2 semaines suffisent généralement.",
  },
  {
    q: "Que se passe-t-il en cas de mauvais temps ?",
    a: "La sécurité de votre groupe est notre priorité absolue. En cas de météo incompatible avec la navigation (vents >25 noeuds, houle importante), nous vous proposons un report gratuit à une date équivalente ou un remboursement intégral. Notre skipper prend la décision définitive la veille au soir après consultation météo.",
  },
  {
    q: "Peut-on personnaliser les formules ?",
    a: "Absolument ! Toutes nos formules sont personnalisables : décoration de bateau aux couleurs de la mariée, gâteau d'anniversaire à bord, playlist musicale personnalisée, ajout d'activités (wakeboard, paddle, pêche), menu sur mesure pour le Chef à Bord. Contactez-nous pour un devis adapté.",
  },
];

export default function FormulesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[340px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1755707036234-4c68bf8b69a0?w=1920&q=80"
          alt="Formules EVJF en mer Île de Ré"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--ocean)]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <nav className="text-sm text-[var(--blush)] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">Formules</span>
          </nav>
          <p className="section-label text-[var(--coral)] mb-2">Nos offres</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "var(--font-serif)" }}>
            Nos Formules EVJF
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-[var(--ocean)] leading-relaxed">
          Parce que chaque EVJF est unique, nous avons conçu des formules pensées pour les enterrements de vie de jeune fille exigeantes. De l&apos;apéro coucher de soleil en catamaran aux journées complètes avec chef gastronomique embarqué, vivez une expérience nautique inoubliable entre l&apos;Île de Ré et La Rochelle. Chaque formule peut être personnalisée selon vos envies et le nombre de personnes.
        </p>
      </section>

      {/* Package cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20 space-y-24">
        {formules.map((f, idx) => (
          <article
            key={f.id}
            id={f.id}
            className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
          >
            {/* Image */}
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src={f.image}
                  alt={f.alt}
                  fill
                  className="object-cover"
                />
                {f.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="badge-coral">{f.badge}</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--ocean)]/80 to-transparent p-6">
                  <span className="text-[var(--champagne)] font-semibold text-sm tracking-widest">{f.number}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="section-label">{f.duration}</span>
                {f.badge && (
                  <span className="badge-champagne hidden sm:inline">{f.badge}</span>
                )}
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[var(--ocean)] mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                {f.title}
              </h2>
              <p className="text-[var(--ocean)] leading-relaxed mb-8">{f.description}</p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--coral)] mb-3">Inclus</h3>
                  <ul className="space-y-2">
                    {f.inclus.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--ocean)]">
                        <span className="text-[var(--coral)] mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--champagne)] mb-3">Non inclus</h3>
                  <ul className="space-y-2">
                    {f.nonInclus.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--ocean)]/60">
                        <span className="flex-shrink-0">–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center p-5 bg-[var(--cream)] rounded-xl border border-[var(--sand)] mb-8">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--champagne)] font-semibold mb-1">Capacité</div>
                  <div className="font-semibold text-[var(--ocean)]">{f.capacity}</div>
                </div>
                <div className="w-px h-8 bg-[var(--sand)]" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--champagne)] font-semibold mb-1">Durée</div>
                  <div className="font-semibold text-[var(--ocean)]">{f.duration}</div>
                </div>
                <div className="w-px h-8 bg-[var(--sand)]" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--champagne)] font-semibold mb-1">Tarif</div>
                  <div className="font-semibold text-[var(--coral)]">{f.price}</div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-block bg-[var(--coral)] hover:bg-[#d4603b] text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Demander un devis
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Comparison table */}
      <section className="bg-[var(--ocean)] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-[var(--coral)] text-center mb-3">Comparatif</p>
          <h2 className="text-4xl font-semibold text-white text-center mb-12" style={{ fontFamily: "var(--font-serif)" }}>
            Quelle formule vous correspond ?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 pr-6 text-[var(--champagne)] font-medium w-48">Prestations</th>
                  {formules.map((f) => (
                    <th key={f.id} className="text-center py-4 px-4 text-white font-semibold" style={{ fontFamily: "var(--font-serif)" }}>
                      <div className="text-base">{f.title}</div>
                      <div className="text-[var(--champagne)] font-normal text-xs mt-1">{f.duration}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableFeatures.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-white/10 ${i % 2 === 0 ? "bg-white/5" : ""}`}>
                    <td className="py-3 pr-6 text-[var(--cream)]">{row.feature}</td>
                    {row.v.map((val, j) => (
                      <td key={j} className="text-center py-3 px-4">
                        {val ? (
                          <span className="text-[var(--coral)] text-lg">✓</span>
                        ) : (
                          <span className="text-white/30">–</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t-2 border-[var(--coral)]/40">
                  <td className="py-4 pr-6 text-[var(--champagne)] font-semibold">Tarif / pers.</td>
                  {formules.map((f) => (
                    <td key={f.id} className="text-center py-4 px-4 text-[var(--coral)] font-semibold">
                      {f.price.replace("À partir de ", "dès ")}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="section-label text-center mb-3">Questions fréquentes</p>
        <h2 className="text-4xl font-semibold text-[var(--ocean)] text-center mb-12" style={{ fontFamily: "var(--font-serif)" }}>
          Tout ce que vous devez savoir
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

      {/* CTA band */}
      <section className="bg-[var(--coral)] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
          Demandez votre devis gratuit
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          Réponse personnalisée sous 24h. Aucun acompte à la réservation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-[var(--coral)] font-semibold px-10 py-4 rounded-full hover:shadow-xl transition-all hover:-translate-y-0.5"
        >
          Contactez-nous
        </Link>
      </section>
    </main>
  );
}
