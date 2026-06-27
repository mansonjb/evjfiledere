import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pourquoi choisir l'Île de Ré pour votre EVJF | Guide Complet 2025",
  description:
    "L'Île de Ré est la destination EVJF idéale : eaux translucides, huîtres, villages de charme, gastronomie, skippers professionnels. Découvrez pourquoi des centaines de groupes choisissent l'Île de Ré pour leur enterrement de vie de jeune fille.",
  keywords: [
    "enterrement vie jeune fille île de ré",
    "evjf île de ré",
    "sortie evjf charente-maritime",
    "evjf bateau île de ré",
    "pourquoi île de ré evjf",
    "destination evjf originale",
  ],
  openGraph: {
    title: "Pourquoi choisir l'Île de Ré pour votre EVJF | Guide Complet 2025",
    description:
      "L'Île de Ré est la destination EVJF idéale : eaux translucides, huîtres, villages de charme, gastronomie. Guide complet pour organiser votre enterrement de vie de jeune fille.",
    locale: "fr_FR",
    type: "article",
  },
};

const stats = [
  { value: "85 km²", label: "Superficie de l'île" },
  { value: "1 pont", label: "Accès unique depuis La Rochelle" },
  { value: "9 communes", label: "Villages authentiques" },
  { value: "2 400 h", label: "Soleil par an" },
  { value: "30 km", label: "Véloroutes aménagées" },
  { value: "Depuis 1988", label: "Pont classé patrimoine" },
];

const reasons = [
  {
    icon: "🌊",
    title: "Eaux translucides de l'Atlantique",
    description:
      "Les eaux de l'Île de Ré sont parmi les plus claires du littoral atlantique français. La visibilité sous-marine, les teintes bleu-vert en été, les plages sauvages accessibles uniquement par bateau : un cadre de rêve pour une sortie EVJF en mer.",
  },
  {
    icon: "🦪",
    title: "Les huîtres : une expérience unique",
    description:
      "L'Île de Ré est réputée pour la qualité de ses huîtres, élevées dans des parcs ostréicoles ancestraux. Déguster des huîtres directement dans les parcs, bord à bord avec votre catamaran, est une expérience que vous ne trouverez nulle part ailleurs.",
  },
  {
    icon: "⚓",
    title: "Des skippers professionnels passionnés",
    description:
      "Notre flotte est pilotée par des skippers certifiés, originaires de Charente-Maritime, qui connaissent ces eaux comme leur poche. Ils parlent huîtres, couchers de soleil et cachettes secrètes avec la même passion que vous parlerez de votre EVJF.",
  },
  {
    icon: "🏘️",
    title: "Des villages d'une beauté intemporelle",
    description:
      "Saint-Martin-de-Ré, La Flotte, Ars-en-Ré : les villages de l'Île de Ré sont d'une beauté que les mots peinent à décrire. Ruelles fleuries, maisons à volets bleus, marchés provençaux : l'ambiance est unique en France.",
  },
  {
    icon: "🍽️",
    title: "Gastronomie et produits locaux d'exception",
    description:
      "Sel de Ré AOP, huîtres, moules, pommes de terre primeurs, pineau des Charentes, cognac... La Charente-Maritime est une terre gastronomique riche. Nos chefs embarqués ne cuisinent qu'avec des producteurs locaux.",
  },
  {
    icon: "🚆",
    title: "Accessible depuis toute la France",
    description:
      "La Rochelle est à 3h de Paris en TGV, à moins de 5h de Lyon ou Bordeaux. L'aéroport de La Rochelle accueille des vols directs depuis 15 villes françaises et européennes. Et le pont de l'Île de Ré n'est qu'à 3 km du centre de La Rochelle.",
  },
];

const villages = [
  {
    name: "Saint-Martin-de-Ré",
    description:
      "Le chef-lieu de l'île, protégé par des fortifications Vauban inscrites au patrimoine UNESCO. Ses quais animés, ses restaurants de poisson et sa citadelle en font la porte d'entrée idéale de l'Île de Ré.",
  },
  {
    name: "La Flotte",
    description:
      "Village de pêcheurs aux maisons fleuries de roses trémières, classé parmi les Plus Beaux Villages de France. Son marché du matin et ses huîtres directement du producteur en font un arrêt incontournable.",
  },
  {
    name: "Ars-en-Ré",
    description:
      "À la pointe nord de l'île, Ars-en-Ré est un bijou architectural avec son clocher noir et blanc visible de la mer. Entouré de marais salants et de vignes, c'est le village le plus authentique de l'île.",
  },
  {
    name: "Le Bois-Plage",
    description:
      "Le village des surfeurs et des familles, avec ses kilomètres de plages et ses pistes cyclables. Le bois de pins qui borde la côte offre une ombre bienvenue pour une halte après la baignade.",
  },
];

const seasons = [
  {
    period: "Mai – Juin",
    rating: 4,
    weather: "Doux, soleil fréquent",
    crowds: "Peu de monde",
    price: "Tarifs bas saison",
    note: "Idéal pour les groupes qui veulent l'île pour elles seules.",
  },
  {
    period: "Juillet – Août",
    rating: 5,
    weather: "Chaud, 28°C en mer",
    crowds: "Haute saison",
    price: "Réservation tôt conseillée",
    note: "La météo est garantie, l'ambiance est festive, mais réservez 2 mois à l'avance.",
  },
  {
    period: "Septembre",
    rating: 5,
    weather: "Parfait, mer 22°C",
    crowds: "Calme retrouvé",
    price: "Tarifs intermédiaires",
    note: "Notre mois préféré : eau chaude, lumière de fin d'été, peu de monde, meilleure gastronomie.",
  },
  {
    period: "Octobre – Novembre",
    rating: 3,
    weather: "Variable, plus venteux",
    crowds: "Très calme",
    price: "Tarifs basse saison",
    note: "Navigation possible mais navigation plus sportive. Recommandé pour les aventurières.",
  },
];

const faqs = [
  {
    q: "L'Île de Ré est-elle vraiment accessible pour un EVJF ?",
    a: "Oui ! L'Île de Ré est à 3 km de La Rochelle via le pont. La Rochelle est elle-même à 3h de Paris en TGV. Depuis le continent, vous pouvez rejoindre les ports en taxi, en bus ou avec votre voiture (parking disponible à Saint-Martin-de-Ré et La Flotte). Nous pouvons également organiser le transfert depuis La Rochelle.",
  },
  {
    q: "Faut-il savoir naviguer pour un EVJF en mer ?",
    a: "Absolument pas ! Tous nos bateaux sont pilotés par des skippers professionnels certifiés. Vous n'avez rien à faire si vous ne le souhaitez pas, ou vous pouvez participer à la barre si l'envie vous prend. Nos skippers s'occupent de tout.",
  },
  {
    q: "Combien coûte en moyenne un EVJF sur l'Île de Ré ?",
    a: "Le budget moyen pour un EVJF en mer sur l'Île de Ré varie de 65€ à 145€ par personne pour la formule nautique, auxquels s'ajoutent l'hébergement (50-120€/nuit/pers sur l'île) et les repas en dehors de la formule. Comptez un budget total de 200€ à 400€ par personne pour un week-end complet.",
  },
  {
    q: "Peut-on dormir sur l'Île de Ré pendant l'EVJF ?",
    a: "Oui, et c'est vivement recommandé ! L'île compte des hôtels, des maisons de vacances et des gîtes de charme dans tous les villages. Réservez bien à l'avance pour juillet-août. Notre équipe peut vous suggérer des hébergements en fonction de votre budget et du nombre de personnes.",
  },
  {
    q: "Quelle est la meilleure période pour un EVJF en mer sur l'Île de Ré ?",
    a: "De mai à septembre, la météo est favorable à la navigation. Notre coup de coeur est septembre : l'eau est encore chaude (22°C), les touristes sont partis, les huîtres sont excellentes et la lumière de fin d'été est magnifique. En juillet-août, la météo est garantie mais réservez 2 mois à l'avance.",
  },
  {
    q: "Que faire si certaines filles ont le mal de mer ?",
    a: "Nos catamarans sont particulièrement stables et peu sujets au roulis. Pour les profils sensibles, nous recommandons les formules en eaux calmes (côté intérieur de l'île) et des médicaments préventifs disponibles en pharmacie. En cas de doute, précisez-le lors de votre réservation et nous adaptons le trajet.",
  },
  {
    q: "Peut-on personnaliser la décoration du bateau pour l'EVJF ?",
    a: "Oui ! Ballons, banderoles, voile de mariée, ruban champagne : nous pouvons décorer le catamaran selon vos souhaits. Précisez vos envies lors de votre demande de devis et nous vous enverrons les options disponibles avec tarifs.",
  },
  {
    q: "L'Île de Ré est-elle meilleure que Biarritz ou Paris pour un EVJF ?",
    a: "La question est légitime ! Biarritz est magnifique mais l'accès en mer y est plus sportif (houle atlantique plus forte). Paris est fantastique pour les musées et les restaurants mais n'offre pas l'expérience nautique. L'Île de Ré combine le meilleur des deux : l'authenticité d'une île sauvage avec une gastronomie française d'exception, une mer calme et accessible, et une logistique simple depuis La Rochelle.",
  },
];

export default function PourquoiIleDeRePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1744709561340-c67e00eb73d2?w=1920&q=80"
          alt="Île de Ré vue du ciel - destination EVJF idéale"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <nav className="text-sm text-[var(--blush)] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">Pourquoi l&apos;Île de Ré</span>
          </nav>
          <p className="section-label text-[var(--coral)] mb-3">Guide EVJF 2025</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white max-w-4xl leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
            Pourquoi choisir l&apos;Île de Ré pour votre EVJF ?
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-[var(--ocean)] leading-relaxed">
              L&apos;enterrement de vie de jeune fille est un moment unique, et le lieu que vous choisissez fait toute la différence. L&apos;Île de Ré n&apos;est pas seulement une destination de vacances : c&apos;est une île à l&apos;identité forte, préservée, authentique, qui vous offre un cadre naturel exceptionnel pour vivre votre EVJF en dehors des sentiers battus.
            </p>
            <p className="text-[var(--ocean)] leading-relaxed">
              Chaque année, des centaines de groupes EVJF choisissent l&apos;Île de Ré et la Charente-Maritime pour leur sortie en mer. La raison est simple : ici, on combine en une seule journée ce que d&apos;autres destinations n&apos;offrent qu&apos;en plusieurs : la mer, la gastronomie, le patrimoine et la fête.
            </p>
            <p className="text-[var(--ocean)] leading-relaxed">
              Que vous souhaitiez un EVJF bateau intimiste à 4 amies ou une grande fête nautique à 15 personnes, l&apos;Île de Ré s&apos;adapte à tous les styles et tous les budgets. Et La Rochelle, à 3 km seulement, complète le programme avec ses restaurants, ses bars et sa vie nocturne.
            </p>
          </div>
          <div className="space-y-4">
            <div className="p-5 bg-[var(--blush)]/30 rounded-2xl border border-[var(--blush)]">
              <p className="text-sm font-semibold text-[var(--coral)] uppercase tracking-widest mb-2">Notre coup de coeur</p>
              <p className="text-[var(--ocean)] text-sm leading-relaxed">
                Un EVJF en septembre sur l&apos;Île de Ré : eau chaude, lumière dorée, huîtres au top, peu de touristes. Le mois parfait.
              </p>
            </div>
            <div className="p-5 bg-[var(--cream)] rounded-2xl border border-[var(--sand)]">
              <Link href="/formules" className="text-[var(--coral)] font-semibold text-sm hover:underline">
                Voir nos formules EVJF →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[var(--ocean)] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="section-label text-[var(--coral)] text-center mb-10">L&apos;Île de Ré en chiffres</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-3xl md:text-4xl font-semibold text-[var(--coral)] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  {stat.value}
                </div>
                <div className="text-[var(--cream)]/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 reasons */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="section-label text-center mb-3">Pourquoi l&apos;Île de Ré</p>
        <h2 className="text-4xl md:text-5xl font-semibold text-[var(--ocean)] text-center mb-16" style={{ fontFamily: "var(--font-serif)" }}>
          6 raisons d&apos;en tomber amoureuses
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="p-8 bg-white rounded-2xl shadow-sm border border-[var(--sand)] hover:border-[var(--coral)] transition-colors">
              <div className="text-4xl mb-4" role="img" aria-hidden="true">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--ocean)] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                {reason.title}
              </h3>
              <p className="text-[var(--ocean)] text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparatif destinations */}
      <section className="bg-[var(--cream)] py-20 px-6 border-y border-[var(--sand)]">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-center mb-3">Comparatif</p>
          <h2 className="text-4xl font-semibold text-[var(--ocean)] text-center mb-12" style={{ fontFamily: "var(--font-serif)" }}>
            Île de Ré vs autres destinations EVJF
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--ocean)] text-white">
                  <th className="text-left py-4 px-5 rounded-tl-xl font-medium">Critère</th>
                  <th className="text-center py-4 px-4 font-semibold text-[var(--coral)]">Île de Ré</th>
                  <th className="text-center py-4 px-4 font-medium opacity-80">Paris</th>
                  <th className="text-center py-4 px-4 font-medium opacity-80">Barcelone</th>
                  <th className="text-center py-4 px-4 rounded-tr-xl font-medium opacity-80">Biarritz</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { crit: "Originalité de l'expérience", re: "⭐⭐⭐⭐⭐", paris: "⭐⭐⭐", bcn: "⭐⭐⭐⭐", biarritz: "⭐⭐⭐⭐" },
                  { crit: "Cadre naturel", re: "⭐⭐⭐⭐⭐", paris: "⭐⭐", bcn: "⭐⭐⭐", biarritz: "⭐⭐⭐⭐⭐" },
                  { crit: "Gastronomie locale", re: "⭐⭐⭐⭐⭐", paris: "⭐⭐⭐⭐⭐", bcn: "⭐⭐⭐⭐", biarritz: "⭐⭐⭐⭐" },
                  { crit: "Rapport qualité / prix", re: "⭐⭐⭐⭐", paris: "⭐⭐", bcn: "⭐⭐⭐", biarritz: "⭐⭐⭐" },
                  { crit: "Accessibilité", re: "⭐⭐⭐⭐", paris: "⭐⭐⭐⭐⭐", bcn: "⭐⭐⭐", biarritz: "⭐⭐⭐" },
                  { crit: "Météo juin-septembre", re: "⭐⭐⭐⭐⭐", paris: "⭐⭐⭐", bcn: "⭐⭐⭐⭐⭐", biarritz: "⭐⭐⭐⭐" },
                ].map((row, i) => (
                  <tr key={row.crit} className={`border-b border-[var(--sand)] ${i % 2 === 0 ? "bg-white" : "bg-[var(--cream)]"}`}>
                    <td className="py-4 px-5 font-medium text-[var(--ocean)]">{row.crit}</td>
                    <td className="text-center py-4 px-4 text-lg">{row.re}</td>
                    <td className="text-center py-4 px-4 text-lg">{row.paris}</td>
                    <td className="text-center py-4 px-4 text-lg">{row.bcn}</td>
                    <td className="text-center py-4 px-4 text-lg">{row.biarritz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-[var(--ocean)]/50 mt-4">Évaluation subjective basée sur l&apos;expérience de nos groupes EVJF.</p>
        </div>
      </section>

      {/* Villages */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2">
            <p className="section-label mb-3">L&apos;île à explorer</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--ocean)] mb-8" style={{ fontFamily: "var(--font-serif)" }}>
              Les villages à découvrir
            </h2>
            <div className="space-y-8">
              {villages.map((village) => (
                <div key={village.name} className="border-l-4 border-[var(--coral)] pl-6">
                  <h3 className="text-xl font-semibold text-[var(--ocean)] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                    {village.name}
                  </h3>
                  <p className="text-[var(--ocean)] text-sm leading-relaxed">{village.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&q=80"
                alt="Saint-Martin-de-Ré vieille ville"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mt-8">
              <Image
                src="https://images.unsplash.com/photo-1620035118505-50d949de137e?w=600&q=80"
                alt="Navigation coucher de soleil Île de Ré"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quand partir */}
      <section className="bg-[var(--ocean)] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-[var(--coral)] text-center mb-3">Calendrier</p>
          <h2 className="text-4xl font-semibold text-white text-center mb-12" style={{ fontFamily: "var(--font-serif)" }}>
            Quand partir pour votre EVJF en mer ?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasons.map((s) => (
              <div key={s.period} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-[var(--coral)] font-semibold text-lg mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                  {s.period}
                </h3>
                <div className="text-yellow-400 text-lg mb-3">
                  {"⭐".repeat(s.rating)}
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex gap-2 text-sm text-[var(--cream)]/80">
                    <span className="flex-shrink-0">☀️</span>
                    <span>{s.weather}</span>
                  </div>
                  <div className="flex gap-2 text-sm text-[var(--cream)]/80">
                    <span className="flex-shrink-0">👥</span>
                    <span>{s.crowds}</span>
                  </div>
                  <div className="flex gap-2 text-sm text-[var(--cream)]/80">
                    <span className="flex-shrink-0">💶</span>
                    <span>{s.price}</span>
                  </div>
                </div>
                <p className="text-xs text-[var(--cream)]/60 italic">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="section-label text-center mb-3">Questions fréquentes</p>
        <h2 className="text-4xl font-semibold text-[var(--ocean)] text-center mb-12" style={{ fontFamily: "var(--font-serif)" }}>
          FAQ : EVJF sur l&apos;Île de Ré
        </h2>
        <div className="space-y-5">
          {faqs.map((faq) => (
            <div key={faq.q} className="border border-[var(--sand)] rounded-2xl p-7 bg-white">
              <h3 className="text-lg font-semibold text-[var(--ocean)] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                {faq.q}
              </h3>
              <p className="text-[var(--ocean)] leading-relaxed text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--coral)] py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
          Convaincues ? Passons aux choses sérieuses.
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          Découvrez nos formules EVJF en mer et demandez votre devis gratuit. Réponse sous 24h.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/formules"
            className="inline-block bg-white text-[var(--coral)] font-semibold px-10 py-4 rounded-full hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Voir les formules
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-transparent border-2 border-white text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </main>
  );
}
