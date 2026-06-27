import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journée Complète Île de Ré EVJF | Vélo + Bateau + Huîtres + Villages",
  description:
    "La journée EVJF idéale sur l'Île de Ré : bateau privatisé le matin, dégustation d'huîtres, baignade, vélo de Rivedoux à Saint-Martin, coucher de soleil en mer. À partir de 120€/personne.",
};

const itineraire = [
  {
    time: "9h00",
    label: "Départ en mer",
    desc: "Embarquement au Port des Minimes à La Rochelle. Café, viennoiseries, et on lève l'ancre. La traversée vers l'Île de Ré prend environ 45 minutes selon le vent.",
  },
  {
    time: "9h45",
    label: "Mouillage face aux salins",
    desc: "On jette l'ancre face aux salins de l'Île de Ré, au large de Rivedoux. La vue sur les marais salants et les marais d'Ars est magnifique à cette heure-là.",
  },
  {
    time: "10h30",
    label: "Dégustation d'huîtres",
    desc: "Le skipper sort les huîtres de l'Île de Ré, directement de chez le producteur. Il les ouvre à bord, sauce mignonette maison, citron frais, verre de vin blanc charentais. 12 huîtres par personne minimum.",
  },
  {
    time: "12h00",
    label: "Baignade dans le Pertuis Charentais",
    desc: "Mouillage dans une zone protégée. Baignade dans les eaux turquoises du Pertuis Charentais. L'eau est claire, peu profonde et chaude en été. Masques et tubas disponibles à bord.",
  },
  {
    time: "13h30",
    label: "Location de vélos à Rivedoux",
    desc: "Débarquement sur l'île. Location de vélos à Rivedoux-Plage (plusieurs loueurs). Départ du circuit vélo en direction de La Flotte puis Saint-Martin.",
  },
  {
    time: "14h30",
    label: "La Flotte et ses ruelles",
    desc: "Premier arrêt à La Flotte, village classé parmi les Plus Beaux Villages de France. Ruelles fleuries, port de pêche, marché artisanal en saison.",
  },
  {
    time: "15h30",
    label: "Saint-Martin-de-Ré",
    desc: "Arrivée à Saint-Martin par les pistes cyclables. Glace artisanale chez l'artisan glacier local. Tour des remparts à vélo, boutiques, vue sur le port.",
  },
  {
    time: "17h00",
    label: "Retour à bord",
    desc: "Retour aux vélos, trajet vers le port de débarquement. Rembarquement pour la navigation coucher de soleil. C'est souvent là que les plus belles photos de la journée sont prises.",
  },
  {
    time: "19h00",
    label: "Retour à La Rochelle",
    desc: "Navigation retour avec la lumière chaude du soir. Cocktails de fin de journée à bord. Retour au port des Minimes vers 19h-19h30.",
  },
];

const pourquoi = [
  {
    icon: "🌊",
    title: "La mer + la terre",
    desc: "Ce circuit donne les deux faces de l'Île de Ré : la vue depuis la mer et la découverte des villages à vélo. On ne choisit pas.",
  },
  {
    icon: "🦪",
    title: "Gastronomie locale",
    desc: "Huîtres directement du producteur, glace artisanale, produits des boutiques insulaires. Une journée qui régale.",
  },
  {
    icon: "📸",
    title: "Une journée photogénique",
    desc: "Les salins, les villages, la baignade, le coucher de soleil en mer : chaque heure donne des photos différentes et magnifiques.",
  },
  {
    icon: "🚴",
    title: "L'île comme les locaux",
    desc: "Sur l'Île de Ré, le vélo est le moyen de transport. 350km de pistes cyclables, peu de dénivelé, paysages qui changent à chaque virage.",
  },
];

export default function JourneeIleDeReVeloBateauPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80"
          alt="Journée EVJF Île de Ré vélo et bateau"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--ocean)]/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <nav className="text-sm text-[var(--blush)] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2 opacity-50">/</span>
            <Link href="/circuits" className="hover:text-white transition-colors">Circuits</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">Journée Île de Ré</span>
          </nav>
          <p className="section-label text-[var(--coral)] mb-2">Golden Day</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "var(--font-serif)" }}>
            La Journée Parfaite :<br />Vélo et Bateau sur l&apos;Île de Ré
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-[var(--ocean)] leading-relaxed mb-6">
          Celle-là, c&apos;est notre journée préférée. Une journée entière qui combine tout ce que l&apos;Île de Ré a de meilleur : la mer tôt le matin, les huîtres à bord, la baignade dans les eaux claires, les villages à vélo, la glace artisanale, et le coucher de soleil depuis le pont au retour.
        </p>
        <p className="text-lg text-[var(--ocean)] leading-relaxed">
          On appelle ça le Golden Day. Et franchement, c&apos;est difficile de faire mieux pour un EVJF.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="bg-white border border-[var(--sand)] rounded-xl px-5 py-3">
            <div className="text-xs text-[var(--champagne)] font-semibold uppercase tracking-widest mb-1">Durée totale</div>
            <div className="font-semibold text-[var(--ocean)]">10-11 heures</div>
          </div>
          <div className="bg-white border border-[var(--sand)] rounded-xl px-5 py-3">
            <div className="text-xs text-[var(--champagne)] font-semibold uppercase tracking-widest mb-1">Groupe</div>
            <div className="font-semibold text-[var(--ocean)]">2 à 15 personnes</div>
          </div>
          <div className="bg-white border border-[var(--sand)] rounded-xl px-5 py-3">
            <div className="text-xs text-[var(--champagne)] font-semibold uppercase tracking-widest mb-1">Prix</div>
            <div className="font-semibold text-[var(--coral)]">À partir de 120€/pers</div>
          </div>
        </div>
      </section>

      {/* Pourquoi c'est idéal */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-center mb-3">Pourquoi cette journée</p>
          <h2 className="text-4xl font-semibold text-[var(--ocean)] text-center mb-12" style={{ fontFamily: "var(--font-serif)" }}>
            Ce qui en fait la journée EVJF par excellence
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pourquoi.map((p) => (
              <div key={p.title} className="text-center">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold text-[var(--ocean)] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--ocean)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinéraire */}
      <section className="bg-[var(--ocean)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-[var(--coral)] mb-3">Le programme</p>
          <h2 className="text-4xl font-semibold text-white mb-12" style={{ fontFamily: "var(--font-serif)" }}>
            La journée heure par heure
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
                  <div className="text-white font-semibold mb-1">{step.label}</div>
                  <div className="text-[var(--cream)]/80 text-sm leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80"
              alt="Piste cyclable Île de Ré EVJF"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg md:translate-y-8">
            <Image
              src="https://images.unsplash.com/photo-1744709561340-c67e00eb73d2?w=800&q=80"
              alt="Village Saint-Martin-de-Ré depuis la mer"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=800&q=80"
              alt="Bateau coucher de soleil Île de Ré"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--coral)] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
          Demandez votre devis en 24h
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          Cette journée se réserve tôt en saison. Dites-nous votre date et votre groupe, on vous donne une disponibilité et un tarif rapidement.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--coral)] font-semibold px-10 py-4 rounded-full hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Réserver le Golden Day
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
