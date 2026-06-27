import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Circuits EVJF Île de Ré & La Rochelle | Itinéraires Personnalisés",
  description:
    "Découvrez nos itinéraires EVJF sur mesure : bateau jusqu'à Saint-Martin-de-Ré, soirée La Rochelle, journée vélo et mer, dégustation huîtres. Des circuits pensés pour les enterrements de vie de jeune fille.",
};

const circuits = [
  {
    slug: "visite-saint-martin-de-re",
    title: "Bateau jusqu'à Saint-Martin-de-Ré",
    duration: "Journée (8-9h)",
    badge: "Le classique",
    image: "https://images.unsplash.com/photo-1744709561340-c67e00eb73d2?w=900&q=80",
    alt: "Village de Saint-Martin-de-Ré remparts Vauban EVJF",
    desc: "Navigation jusqu'au village médiéval, dégustation d'huîtres en mer, vélo sur les remparts UNESCO. L'incontournable de l'Île de Ré.",
    price: "À partir de 75€/pers",
  },
  {
    slug: "soiree-la-rochelle",
    title: "La Rochelle by Night",
    duration: "Soirée (5-6h)",
    badge: "Soirée festive",
    image: "https://images.unsplash.com/photo-1744709561288-74517c00d17c?w=900&q=80",
    alt: "Vieux Port La Rochelle tours médiévales soirée EVJF",
    desc: "Apéro en mer face aux tours médiévales, dîner dans le Vieux-Port, bar à cocktails. Le parfait EVJF mer + ville en une soirée.",
    price: "À partir de 55€/pers (hors resto)",
  },
  {
    slug: "journee-ile-de-re-velo-bateau",
    title: "La Journée Parfaite : Vélo & Bateau",
    duration: "Journée complète",
    badge: "Le must",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80",
    alt: "Vélo côte Île de Ré journée complète EVJF",
    desc: "Bateau le matin, huîtres face aux salins, baignade, vélo à travers les villages, coucher de soleil en mer. La journée EVJF par excellence.",
    price: "À partir de 120€/pers",
  },
  {
    slug: "soiree-la-rochelle",
    title: "Apéro Sunset en Catamaran",
    duration: "2h",
    badge: "Format court",
    image: "https://images.unsplash.com/photo-1620035118505-50d949de137e?w=900&q=80",
    alt: "Coucher de soleil catamaran Île de Ré EVJF",
    desc: "Deux heures en mer au coucher du soleil, champagne inclus. Pour les groupes qui veulent une touche nautique sans y passer la journée.",
    price: "À partir de 49€/pers",
  },
  {
    slug: "visite-saint-martin-de-re",
    title: "Huîtres & Champagne à bord",
    duration: "3h",
    badge: "Le populaire",
    image: "https://images.unsplash.com/photo-1666803685407-009be9f0a03a?w=900&q=80",
    alt: "Dégustation huîtres en mer Île de Ré EVJF",
    desc: "Cap sur les parcs ostréicoles, huîtres ouvertes à bord par le skipper, verre de blanc charentais. Simple, authentique et franchement délicieux.",
    price: "À partir de 65€/pers",
  },
];

export default function CircuitsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[340px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80"
          alt="Circuits EVJF Île de Ré et La Rochelle"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--ocean)]/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <nav className="text-sm text-[var(--blush)] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">Circuits</span>
          </nav>
          <p className="section-label text-[var(--coral)] mb-2">Itinéraires</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "var(--font-serif)" }}>
            Nos Circuits EVJF
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-[var(--ocean)] leading-relaxed">
          L&apos;Île de Ré et La Rochelle offrent une combinaison rare : mer, villages médiévaux, gastronomie locale et lumière atlantique. Nous avons conçu plusieurs itinéraires qui tirent le meilleur de cet endroit, selon la durée que vous avez et l&apos;ambiance que vous cherchez.
        </p>
      </section>

      {/* Grille de circuits */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {circuits.map((circuit, idx) => (
            <Link
              key={`${circuit.slug}-${idx}`}
              href={`/circuits/${circuit.slug}`}
              className="card-editorial group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={circuit.image}
                  alt={circuit.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {circuit.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="badge-coral">{circuit.badge}</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="section-label">{circuit.duration}</span>
                </div>
                <h2 className="text-xl font-semibold text-[var(--ocean)] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                  {circuit.title}
                </h2>
                <p className="text-sm text-[var(--ocean)] leading-relaxed mb-4">{circuit.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--coral)] font-semibold text-sm">{circuit.price}</span>
                  <span className="text-[var(--champagne)] text-sm group-hover:text-[var(--coral)] transition-colors">Voir le détail →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--coral)] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
          Demandez votre devis en 24h
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          Vous avez une idée de circuit ou vous voulez qu&apos;on vous propose quelque chose sur mesure ? On répond vite.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--coral)] font-semibold px-10 py-4 rounded-full hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Nous contacter
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
