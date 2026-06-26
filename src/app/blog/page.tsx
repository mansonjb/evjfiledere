import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog EVJF Île de Ré | Conseils, idées & inspirations nautiques",
  description:
    "Le blog de La Dernière Escale : idées EVJF, conseils pour organiser votre enterrement de vie de jeune fille sur l'Île de Ré, guide des huîtres, récits de bord et inspirations.",
  openGraph: {
    title: "Blog EVJF Île de Ré | Conseils, idées & inspirations nautiques",
    description:
      "Le blog de La Dernière Escale : idées EVJF, conseils pour organiser votre enterrement de vie de jeune fille sur l'Île de Ré, guide des huîtres, récits de bord et inspirations.",
    locale: "fr_FR",
    type: "website",
  },
};

const articles = [
  {
    slug: "10-idees-evjf-incontournables-ile-de-re",
    title: "10 idées EVJF incontournables sur l'Île de Ré",
    excerpt:
      "Dégustation d'huîtres en mer, yoga au coucher du soleil, chef gastronomique à bord, baignade dans une crique secrète... Voici les 10 expériences que chaque groupe EVJF devrait vivre sur l'Île de Ré au moins une fois.",
    category: "Inspirations",
    readTime: "6 min",
    date: "15 mai 2025",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&q=80",
    alt: "Idées EVJF en catamaran Île de Ré",
    featured: true,
  },
  {
    slug: "evjf-en-bateau-conseils-journee-parfaite",
    title: "EVJF en bateau : nos conseils pour une journée parfaite",
    excerpt:
      "Comment choisir le bon bateau, quoi emporter à bord, comment gérer le mal de mer, quel programme pour une journée réussie ? Tous nos conseils pratiques pour que votre EVJF nautique soit inoubliable.",
    category: "Conseils pratiques",
    readTime: "8 min",
    date: "2 juin 2025",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    alt: "Conseils EVJF en bateau voilier",
    featured: false,
  },
  {
    slug: "huitres-ile-de-re-tout-savoir-avant-degustation",
    title: "Huîtres de l'Île de Ré : tout savoir avant votre dégustation",
    excerpt:
      "Fine de Ré, huître sauvage ou d'élevage, comment la déguster, avec quoi l'accompagner ? Notre guide complet pour devenir une experte des huîtres charentaises avant votre EVJF en mer.",
    category: "Gastronomie",
    readTime: "5 min",
    date: "20 juin 2025",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80",
    alt: "Huîtres de l'Île de Ré dégustation",
    featured: false,
  },
  {
    slug: "la-rochelle-point-depart-evjf-nautique",
    title: "La Rochelle, point de départ idéal pour votre EVJF nautique",
    excerpt:
      "Vieux-Port, Tour de la Lanterne, marché des Minimes, restaurants de fruits de mer... La Rochelle est la ville parfaite pour commencer ou terminer votre EVJF en mer. Notre guide de la cité corsaire.",
    category: "Destinations",
    readTime: "7 min",
    date: "5 juillet 2025",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    alt: "La Rochelle port point de départ EVJF",
    featured: false,
  },
];

const categories = ["Tous", "Inspirations", "Conseils pratiques", "Gastronomie", "Destinations"];

export default function BlogPage() {
  const [featured, ...rest] = articles;

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[300px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&q=80"
          alt="Blog EVJF Île de Ré La Dernière Escale"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--ocean)]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <nav className="text-sm text-[var(--blush)] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">Blog</span>
          </nav>
          <p className="section-label text-[var(--coral)] mb-2">Inspirations & conseils</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "var(--font-serif)" }}>
            Le Journal de Bord
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-lg text-[var(--ocean)] leading-relaxed">
          Idées pour votre EVJF, guide des huîtres de l&apos;Île de Ré, récits de navigation, bonnes adresses à La Rochelle... Bienvenue dans notre journal de bord. Chaque article est écrit par notre équipe de passionnés de la mer charentaise.
        </p>
      </section>

      {/* Category filter (visual only) */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                i === 0
                  ? "bg-[var(--coral)] text-white"
                  : "bg-white border border-[var(--sand)] text-[var(--ocean)] hover:border-[var(--coral)] hover:text-[var(--coral)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured article */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <article className="relative rounded-3xl overflow-hidden bg-white shadow-xl group">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[460px]">
              <Image
                src={featured.image}
                alt={featured.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 lg:hidden bg-gradient-to-t from-[var(--ocean)]/60 to-transparent" />
            </div>
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="badge-coral">{featured.category}</span>
                <span className="text-sm text-[var(--ocean)]/50">{featured.date}</span>
                <span className="text-sm text-[var(--ocean)]/50">· {featured.readTime} de lecture</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--ocean)] mb-5" style={{ fontFamily: "var(--font-serif)" }}>
                {featured.title}
              </h2>
              <p className="text-[var(--ocean)] leading-relaxed mb-8">
                {featured.excerpt}
              </p>
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-2 text-[var(--coral)] font-semibold hover:gap-4 transition-all"
              >
                Lire l&apos;article
                <span>→</span>
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* Rest of articles */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {rest.map((article) => (
            <article key={article.slug} className="card-editorial group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="badge-champagne">{article.category}</span>
                  <span className="text-xs text-[var(--ocean)]/50">{article.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-[var(--ocean)] mb-3 leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
                  {article.title}
                </h2>
                <p className="text-sm text-[var(--ocean)] leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--sand)]">
                  <span className="text-xs text-[var(--ocean)]/50">{article.date}</span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-sm text-[var(--coral)] font-semibold hover:underline underline-offset-4"
                  >
                    Lire →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter mini */}
      <section className="bg-[var(--ocean)] py-20 px-6 text-center">
        <p className="section-label text-[var(--coral)] mb-3">Ne rien manquer</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
          Restez dans la boucle
        </h2>
        <p className="text-[var(--cream)]/70 mb-8 max-w-md mx-auto">
          Nouveaux articles, idées EVJF de saison, offres exclusives : rejoignez les amateurs de mer charentaise.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="votre@email.com"
            className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-[var(--coral)] transition-colors"
          />
          <button className="bg-[var(--coral)] hover:bg-[#d4603b] text-white font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap">
            S&apos;abonner
          </button>
        </div>
      </section>

      {/* Cross-link */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="section-label mb-3">Prêtes à réserver ?</p>
        <h2 className="text-3xl font-semibold text-[var(--ocean)] mb-6" style={{ fontFamily: "var(--font-serif)" }}>
          Passez de l&apos;inspiration à l&apos;action
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/formules"
            className="inline-block bg-[var(--coral)] hover:bg-[#d4603b] text-white font-semibold px-8 py-3.5 rounded-full transition-all"
          >
            Voir les formules EVJF
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-white border border-[var(--sand)] text-[var(--ocean)] font-semibold px-8 py-3.5 rounded-full hover:border-[var(--coral)] transition-all"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </main>
  );
}
