import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Circuit EVJF Saint-Martin-de-Ré | Bateau + Vélo + Village",
  description:
    "Circuit EVJF incontournable : navigation jusqu'à Saint-Martin-de-Ré, dégustation d'huîtres en mer, vélo sur les remparts Vauban classés UNESCO. À partir de 75€/personne.",
};

const itineraire = [
  {
    time: "9h00",
    lieu: "Port des Minimes, La Rochelle",
    desc: "Embarquement à bord du catamaran ou voilier privatisé. Briefing sécurité, café et viennoiseries à bord pour bien démarrer la journée.",
  },
  {
    time: "10h30",
    lieu: "Rade de Saint-Martin-de-Ré",
    desc: "Arrivée en vue de Saint-Martin-de-Ré. Ancrage dans la rade avec vue directe sur les remparts Vauban classés au patrimoine UNESCO. Le village au loin, la mer tout autour : un moment à part.",
  },
  {
    time: "11h00",
    lieu: "À bord, face aux parcs ostréicoles",
    desc: "Dégustation d'huîtres de l'Île de Ré à bord : le skipper ouvre les huîtres, sauce mignonette maison, rondelles de citron et un verre de vin blanc des Charentes. 12 huîtres par personne minimum.",
  },
  {
    time: "12h30",
    lieu: "Port de Saint-Martin-de-Ré",
    desc: "Débarquement au port. Location de vélos à deux pas du quai (plusieurs loueurs, comptez 8€ pour 2h environ). C'est le meilleur moyen de découvrir le village.",
  },
  {
    time: "13h00",
    lieu: "Remparts et village",
    desc: "Tour des remparts Vauban à vélo : la vue sur la mer et sur le village est magnifique. Pause glace ou pique-nique chez les artisans du port. Ne pas manquer la Martinière, salon de thé local typique au coeur du village.",
  },
  {
    time: "14h30",
    lieu: "Centre de Saint-Martin-de-Ré",
    desc: "Visite libre du village : boutiques de créateurs locaux, galeries, épiceries fines avec produits de l'île. Le marché artisanal est ouvert en saison.",
  },
  {
    time: "16h00",
    lieu: "Retour à bord",
    desc: "Rembarquement au port, retour en mer. Navigation coucher de soleil : la lumière chaude de l'Atlantique transforme les voiles et les visages. C'est souvent là que les plus belles photos sont prises.",
  },
  {
    time: "18h00",
    lieu: "Retour au port de départ",
    desc: "Retour au port des Minimes ou à La Rochelle. Fin de la sortie, souvenirs en poche et dans les téléphones.",
  },
];

const inclus = [
  "Bateau privatisé (catamaran ou voilier)",
  "Skipper professionnel pour toute la journée",
  "12 huîtres par personne + sauce mignonette",
  "1 verre de vin blanc des Charentes",
  "Eau et softs à bord",
];

const nonInclus = [
  "Location de vélos (8€/2h environ)",
  "Repas à terre (nombreuses options sur place)",
  "Transfert jusqu'au port de départ",
];

const faqs = [
  {
    q: "Faut-il réserver les vélos à l'avance ?",
    a: "En juillet-août, on recommande de réserver 1 à 2 jours à l'avance auprès des loueurs du port. En dehors de la haute saison, vous trouvez toujours des vélos disponibles sur place.",
  },
  {
    q: "Peut-on déjeuner à bord plutôt qu'au restaurant ?",
    a: "Oui, on peut prévoir un plateau apéro-déjeuner à bord en lieu et place de la pause village. Dites-le nous au moment de la réservation et on adapte le programme.",
  },
  {
    q: "Le circuit peut-il se faire en sens inverse ?",
    a: "Tout à fait. On peut débarquer à Saint-Martin en début de matinée, visiter le village et repartir en mer l'après-midi. Les horaires sont flexibles selon les marées et le vent.",
  },
];

export default function VisiteSaintMartinPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[360px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
          alt="Saint-Martin-de-Ré remparts Vauban depuis la mer EVJF"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--ocean)]/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <nav className="text-sm text-[var(--blush)] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2 opacity-50">/</span>
            <Link href="/circuits" className="hover:text-white transition-colors">Circuits</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">Saint-Martin-de-Ré</span>
          </nav>
          <p className="section-label text-[var(--coral)] mb-2">Circuit signature</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "var(--font-serif)" }}>
            L&apos;Incontournable : Bateau<br />jusqu&apos;à Saint-Martin-de-Ré
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-[var(--ocean)] leading-relaxed mb-6">
          Si vous ne devez faire qu&apos;une chose sur l&apos;Île de Ré pour votre EVJF, c&apos;est celle-là. Arriver par la mer dans la rade de Saint-Martin-de-Ré, avec les remparts Vauban en face et les huîtres qui refroidissent à bord : c&apos;est un moment qu&apos;on ne fait pas en voiture.
        </p>
        <p className="text-lg text-[var(--ocean)] leading-relaxed">
          Ce circuit combine le meilleur de l&apos;Île de Ré : la navigation, la gastronomie locale, le patrimoine et la liberté à vélo dans un village qui mérite qu&apos;on y passe du temps.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="bg-white border border-[var(--sand)] rounded-xl px-5 py-3">
            <div className="text-xs text-[var(--champagne)] font-semibold uppercase tracking-widest mb-1">Durée</div>
            <div className="font-semibold text-[var(--ocean)]">8-9 heures</div>
          </div>
          <div className="bg-white border border-[var(--sand)] rounded-xl px-5 py-3">
            <div className="text-xs text-[var(--champagne)] font-semibold uppercase tracking-widest mb-1">Groupe</div>
            <div className="font-semibold text-[var(--ocean)]">2 à 15 personnes</div>
          </div>
          <div className="bg-white border border-[var(--sand)] rounded-xl px-5 py-3">
            <div className="text-xs text-[var(--champagne)] font-semibold uppercase tracking-widest mb-1">Prix</div>
            <div className="font-semibold text-[var(--coral)]">À partir de 75€/pers</div>
          </div>
        </div>
      </section>

      {/* Itinéraire */}
      <section className="bg-[var(--ocean)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-[var(--coral)] mb-3">Le programme</p>
          <h2 className="text-4xl font-semibold text-white mb-12" style={{ fontFamily: "var(--font-serif)" }}>
            Itinéraire pas à pas
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
                  <div className="text-white font-semibold mb-1">{step.lieu}</div>
                  <div className="text-[var(--cream)]/80 text-sm leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos + tip local */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
              alt="Remparts de Saint-Martin-de-Ré vus depuis la mer"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80"
              alt="Vélo sur la côte de l'Île de Ré EVJF"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Tip local */}
        <div className="bg-[var(--blush)]/40 border-l-4 border-[var(--coral)] rounded-r-2xl p-6">
          <p className="section-label text-[var(--coral)] mb-2">Tip local</p>
          <p className="text-[var(--ocean)] leading-relaxed">
            <strong>La Martinière</strong>, salon de thé niché dans le coeur de Saint-Martin, est l&apos;endroit idéal pour une pause entre la visite des remparts et les boutiques. Glaces artisanales, thés locaux, terrasse ombragée : un vrai moment de douceur insulaire. On y vient souvent finir l&apos;après-midi avant de rentrer à bord.
          </p>
        </div>
      </section>

      {/* Inclus / non inclus */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-[var(--ocean)] mb-10" style={{ fontFamily: "var(--font-serif)" }}>
            Ce que comprend ce circuit
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--coral)] mb-4">Inclus</h3>
              <ul className="space-y-3">
                {inclus.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--ocean)]">
                    <span className="text-[var(--coral)] flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--champagne)] mb-4">Non inclus</h3>
              <ul className="space-y-3">
                {nonInclus.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--ocean)]/60">
                    <span className="flex-shrink-0">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Questions pratiques</p>
        <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-10" style={{ fontFamily: "var(--font-serif)" }}>
          Avant de réserver
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
      </section>

      {/* CTA */}
      <section className="bg-[var(--coral)] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
          Demandez votre devis en 24h
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          Ce circuit, c&apos;est notre signature. Dites-nous votre date et votre groupe, on vous propose quelque chose de concret rapidement.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--coral)] font-semibold px-10 py-4 rounded-full hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Réserver ce circuit
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
