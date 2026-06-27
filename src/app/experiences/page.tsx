import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expériences EVJF en Mer | Huîtres, Chef, Coucher de Soleil | Île de Ré",
  description:
    "Huîtres en mer, yoga sur l'eau, chef gastronomique embarqué, baignade, coucher de soleil en catamaran... Découvrez toutes les expériences EVJF uniques sur l'Île de Ré.",
  openGraph: {
    title: "Expériences EVJF en Mer | Huîtres, Chef, Coucher de Soleil | Île de Ré",
    description:
      "Huîtres en mer, yoga sur l'eau, chef gastronomique embarqué, baignade, coucher de soleil en catamaran... Découvrez toutes les expériences EVJF uniques sur l'Île de Ré.",
    locale: "fr_FR",
    type: "website",
  },
};

const experiences = [
  {
    slug: "degustation-huitres",
    title: "Dégustation d'Huîtres",
    emoji: "🦪",
    duration: "1h30",
    minPersons: 4,
    priceFrom: "25€/pers",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=900&q=80",
    alt: "Dégustation d'huîtres en mer Île de Ré EVJF",
    description:
      "Directement sur l'eau, à quelques encablures des parcs ostréicoles de l'Île de Ré. Votre skipper vous emmène à l'endroit précis où les huîtres de Ré sont élevées depuis des siècles. Dégustez, les pieds dans l'eau, accompagnées d'un verre de vin blanc Charentais. Une expérience sensorielle et conviviale au coeur du patrimoine maritime local.",
  },
  {
    slug: "navigation-coucher-soleil",
    title: "Navigation Coucher de Soleil",
    emoji: "🌅",
    duration: "2h",
    minPersons: 4,
    priceFrom: "40€/pers",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
    alt: "Coucher de soleil en voilier Île de Ré EVJF",
    description:
      "Le ciel de l'Atlantique se teinte d'orange et de rose pendant que votre catamaran glisse silencieusement sur l'eau. Les 2 heures les plus romantiques et festives de votre EVJF. Champagne à la main, vos amies et vous à la proue du bateau : une image qui restera dans vos albums photo pour toujours.",
  },
  {
    slug: "chef-gastronomique",
    title: "Chef Gastronomique Embarqué",
    emoji: "👨‍🍳",
    duration: "5h",
    minPersons: 4,
    priceFrom: "95€/pers",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
    alt: "Chef gastronomique repas à bord voilier EVJF",
    description:
      "Un chef professionnel monte à bord de votre bateau et prépare sous vos yeux un repas gastronomique avec les produits du terroir charentais. Entrées, plat, dessert : tout est cuisiné en direct pendant que vous naviguez. L'accord mets et vins est soigné, le service est raffiné. Une table étoilée au milieu de l'Atlantique.",
  },
  {
    slug: "yoga-sur-l-eau",
    title: "Yoga sur l'Eau",
    emoji: "🧘",
    duration: "1h",
    minPersons: 4,
    priceFrom: "30€/pers",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80",
    alt: "Yoga sur paddle en mer Île de Ré EVJF",
    description:
      "Une instructrice de yoga certifiée vous accueille pour une séance de pleine conscience au milieu de l'Atlantique. Soit sur le pont du catamaran, soit sur des paddles ancrés dans une crique calme, cette expérience mêle équilibre, sérénité et fous rires garantis. Idéale en début de journée pour bien démarrer votre EVJF.",
  },
  {
    slug: "brunch-marin",
    title: "Brunch Marin",
    emoji: "🥂",
    duration: "3h",
    minPersons: 6,
    priceFrom: "55€/pers",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
    alt: "Brunch à bord catamaran EVJF Île de Ré",
    description:
      "Départ le matin pour un brunch gourmand sur l'eau : viennoiseries charentaises, jus de fruits frais, oeufs brouillés, plateau de fromages locaux et, bien sûr, une coupe de champagne pour commencer l'EVJF du bon pied. Le tout servi à bord d'un catamaran qui navigue vers les criques de l'Île de Ré.",
  },
  {
    slug: "baignade-snorkeling",
    title: "Baignade & Snorkeling",
    emoji: "🤿",
    duration: "2h",
    minPersons: 4,
    priceFrom: "35€/pers",
    image: "https://images.unsplash.com/photo-1506939890471-05f34fa6648d?w=900&q=80",
    alt: "Baignade et snorkeling en mer Île de Ré EVJF",
    description:
      "Direction les eaux cristallines au large de la côte sauvage de l'Île de Ré. Le catamaran mouille l'ancre dans une crique accessible uniquement par la mer, et le groupe plonge pour explorer les fonds marins. Poissons, méduses (inoffensives !), végétation sous-marine : le masque et le tuba sont fournis, la curiosité est à vous.",
  },
  {
    slug: "aperitif-en-mer",
    title: "Apéritif en Mer",
    emoji: "🍾",
    duration: "2h",
    minPersons: 4,
    priceFrom: "45€/pers",
    image: "https://images.unsplash.com/photo-1620035118505-50d949de137e?w=900&q=80",
    alt: "Apéritif champagne en catamaran EVJF Île de Ré",
    description:
      "Champagne, rosé de Ré, planches de charcuterie et fromages locaux : l'apéritif EVJF version nautique. Montez à bord, installez-vous dans le filet du catamaran et laissez le vent atlantique porter vos rires. Ambiance détendue, musique en fond, soleil ou étoiles selon l'horaire choisi. La mise en bouche parfaite avant une soirée en ville.",
  },
  {
    slug: "visite-nocturne",
    title: "Visite Nocturne (Crépuscule & Étoiles)",
    emoji: "🌙",
    duration: "2h30",
    minPersons: 4,
    priceFrom: "55€/pers",
    image: "https://images.unsplash.com/photo-1605472075294-4c73b9909d08?w=900&q=80",
    alt: "Navigation nocturne étoiles crépuscule Île de Ré EVJF",
    description:
      "Partez au crépuscule et revenez sous les étoiles. La navigation nocturne a quelque chose de magique : les lumières de La Rochelle et de l'Île de Ré qui scintillent sur l'eau, le ciel qui vire du rouge au noir en une heure, la Voie Lactée si les conditions s'y prêtent. Votre skipper vous apprend à lire les étoiles. Une expérience EVJF hors du commun.",
  },
];

export default function ExperiencesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[340px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&q=80"
          alt="Expériences EVJF en mer Île de Ré"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--ocean)]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <nav className="text-sm text-[var(--blush)] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">Expériences</span>
          </nav>
          <p className="section-label text-[var(--coral)] mb-2">À la carte</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "var(--font-serif)" }}>
            Nos Expériences EVJF
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-[var(--ocean)] leading-relaxed">
          Des expériences à la carte pour composer l&apos;EVJF de vos rêves. Chaque activité peut être réservée seule ou combinée à l&apos;une de nos <Link href="/formules" className="text-[var(--coral)] underline underline-offset-4 hover:text-[#d4603b]">formules packagées</Link>. Huîtres en pleine mer, yoga sur paddle, chef gastronomique embarqué ou navigation sous les étoiles : l&apos;Île de Ré vous offre un cadre naturel exceptionnel pour vivre des moments uniques entre amies.
        </p>
      </section>

      {/* Experience grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {experiences.map((exp) => (
            <article key={exp.slug} className="card-editorial group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" role="img" aria-hidden="true">{exp.emoji}</span>
                  <span className="section-label">{exp.duration}</span>
                </div>
                <h2 className="text-xl font-semibold text-[var(--ocean)] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                  {exp.title}
                </h2>
                <p className="text-sm text-[var(--ocean)] leading-relaxed mb-5 line-clamp-4">
                  {exp.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--sand)]">
                  <div>
                    <div className="text-xs text-[var(--champagne)] uppercase tracking-widest font-semibold mb-0.5">Dès</div>
                    <div className="text-[var(--coral)] font-bold text-lg">{exp.priceFrom}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[var(--champagne)] uppercase tracking-widest font-semibold mb-0.5">Min.</div>
                    <div className="text-[var(--ocean)] font-semibold">{exp.minPersons} pers.</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Description longue */}
      <section className="bg-[var(--ocean)] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label text-[var(--coral)] mb-3">À savoir</p>
            <h2 className="text-4xl font-semibold text-white mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Combinez les expériences librement
            </h2>
            <p className="text-[var(--cream)]/80 leading-relaxed mb-6">
              Nos expériences à la carte sont modulables selon la taille de votre groupe, vos envies du moment et votre budget. Vous pouvez composer votre propre programme EVJF en combinant plusieurs activités sur une demi-journée ou une journée entière.
            </p>
            <p className="text-[var(--cream)]/80 leading-relaxed mb-8">
              Notre équipe vous aide à construire le planning idéal. Par exemple : yoga le matin + brunch marin + dégustation d&apos;huîtres + coucher de soleil = une journée EVJF parfaite pour une dizaine de personnes.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[var(--coral)] hover:bg-[#d4603b] text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Composer mon programme
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1755707036234-4c68bf8b69a0?w=900&q=80"
              alt="Programme EVJF personnalisé Île de Ré"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Cross-link formules */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="section-label mb-3">Envie d&apos;un package complet ?</p>
        <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-6" style={{ fontFamily: "var(--font-serif)" }}>
          Découvrez nos formules tout compris
        </h2>
        <p className="text-[var(--ocean)] mb-8 max-w-2xl mx-auto">
          Nos <Link href="/formules" className="text-[var(--coral)] underline underline-offset-4">4 formules EVJF</Link> regroupent les meilleures expériences dans des packages thématiques à tarif préférentiel. De 2h à 8h, de 49€ à 145€ par personne.
        </p>
        <Link
          href="/formules"
          className="inline-block bg-[var(--ocean)] hover:bg-[var(--teal)] text-white font-semibold px-10 py-4 rounded-full transition-all hover:shadow-lg"
        >
          Voir les formules
        </Link>
      </section>
    </main>
  );
}
