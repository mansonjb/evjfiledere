import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Devis EVJF | Île de Ré & La Rochelle | La Dernière Escale",
  description:
    "Demandez votre devis EVJF gratuit en 24h. Navigation privatisée, huîtres en mer, chef à bord sur l'Île de Ré et La Rochelle. Personnalisez votre enterrement de vie de jeune fille.",
  openGraph: {
    title: "Contact & Devis EVJF Île de Ré | La Dernière Escale",
    description:
      "Demandez votre devis EVJF gratuit. Réponse sous 24h. Navigation privatisée, huîtres en mer, chef gastronomique embarqué.",
    locale: "fr_FR",
    type: "website",
  },
};

const formules = [
  "Apéro Sunset (2h)",
  "Cap Huîtres & Champagne (3h)",
  "Chef à Bord (5h)",
  "Journée Complète (8h)",
  "Expériences à la carte",
  "Programme personnalisé",
];

const reassurances = [
  {
    icon: "🎯",
    title: "100% personnalisé",
    desc: "Chaque EVJF est unique, chaque devis l'est aussi.",
  },
  {
    icon: "💬",
    title: "Devis gratuit",
    desc: "Sans engagement, sans frais, sans prise de tête.",
  },
  {
    icon: "⚓",
    title: "Skipper professionnel",
    desc: "Certifié, local, passionné. Votre sécurité d'abord.",
  },
  {
    icon: "🔄",
    title: "Annulation flexible",
    desc: "Météo capricieuse ? Report gratuit garanti.",
  },
];

const whyUs = [
  "Plus de 200 groupes EVJF depuis 2019",
  "Flotte de 3 bateaux (catamarans + voilier)",
  "Skippers certifiés et passionnés",
  "Partenaires locaux (ostréiculteurs, chefs, photographes)",
  "Réponse personnalisée sous 24h",
  "Devis sur mesure sans engagement",
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[300px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1755707036234-4c68bf8b69a0?w=1920&q=80"
          alt="Demandez votre devis EVJF en mer Île de Ré"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--ocean)]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <nav className="text-sm text-[var(--blush)] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <p className="section-label text-[var(--coral)] mb-2">Parlons de votre EVJF</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "var(--font-serif)" }}>
            Demandez votre devis EVJF
          </h1>
        </div>
      </section>

      {/* Réponse badge */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="inline-flex items-center gap-3 bg-[var(--blush)]/40 border border-[var(--blush)] rounded-full px-6 py-3">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-semibold text-[var(--ocean)]">Réponse garantie sous 24h · Du lundi au samedi, 9h-19h</span>
        </div>
      </div>

      {/* Two columns */}
      <section className="max-w-7xl mx-auto px-6 py-12 pb-24">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left: Form */}
          <div>
            <h2 className="text-3xl font-semibold text-[var(--ocean)] mb-8" style={{ fontFamily: "var(--font-serif)" }}>
              Votre demande
            </h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[var(--ocean)] mb-2 tracking-wide">
                    Votre nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Marie Dupont"
                    className="w-full px-4 py-3.5 rounded-xl border border-[var(--sand)] bg-white focus:outline-none focus:border-[var(--coral)] transition-colors text-[var(--ocean)] placeholder-[var(--ocean)]/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[var(--ocean)] mb-2 tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="marie@email.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-[var(--sand)] bg-white focus:outline-none focus:border-[var(--coral)] transition-colors text-[var(--ocean)] placeholder-[var(--ocean)]/30"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[var(--ocean)] mb-2 tracking-wide">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3.5 rounded-xl border border-[var(--sand)] bg-white focus:outline-none focus:border-[var(--coral)] transition-colors text-[var(--ocean)] placeholder-[var(--ocean)]/30"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-[var(--ocean)] mb-2 tracking-wide">
                    Date de l&apos;EVJF *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-[var(--sand)] bg-white focus:outline-none focus:border-[var(--coral)] transition-colors text-[var(--ocean)]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="persons" className="block text-sm font-semibold text-[var(--ocean)] mb-2 tracking-wide">
                    Nombre de personnes *
                  </label>
                  <select
                    id="persons"
                    name="persons"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-[var(--sand)] bg-white focus:outline-none focus:border-[var(--coral)] transition-colors text-[var(--ocean)]"
                  >
                    <option value="">Sélectionner</option>
                    <option value="4-6">4 à 6 personnes</option>
                    <option value="7-10">7 à 10 personnes</option>
                    <option value="11-15">11 à 15 personnes</option>
                    <option value="15+">Plus de 15 personnes</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="formule" className="block text-sm font-semibold text-[var(--ocean)] mb-2 tracking-wide">
                    Formule souhaitée
                  </label>
                  <select
                    id="formule"
                    name="formule"
                    className="w-full px-4 py-3.5 rounded-xl border border-[var(--sand)] bg-white focus:outline-none focus:border-[var(--coral)] transition-colors text-[var(--ocean)]"
                  >
                    <option value="">Je ne sais pas encore</option>
                    {formules.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[var(--ocean)] mb-2 tracking-wide">
                  Votre message & envies
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Parlez-nous de votre EVJF : thème souhaité, envies particulières, allergies alimentaires, ambiance recherchée..."
                  className="w-full px-4 py-3.5 rounded-xl border border-[var(--sand)] bg-white focus:outline-none focus:border-[var(--coral)] transition-colors text-[var(--ocean)] placeholder-[var(--ocean)]/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--coral)] hover:bg-[#d4603b] text-white font-semibold py-4 px-8 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 text-base"
              >
                Envoyer ma demande de devis
              </button>

              <p className="text-xs text-[var(--ocean)]/50 text-center mt-3">
                En envoyant ce formulaire, vous acceptez que nous vous recontactions par email ou téléphone concernant votre EVJF. Aucun spam, promis.
              </p>
            </form>
          </div>

          {/* Right: Infos */}
          <div className="space-y-10">
            {/* Response badge */}
            <div className="bg-[var(--blush)]/30 border border-[var(--blush)] rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--coral)] flex items-center justify-center text-white text-xl">⚡</div>
                <div>
                  <div className="font-semibold text-[var(--ocean)]">Réponse sous 24h</div>
                  <div className="text-sm text-[var(--ocean)]/60">Lun-Sam, 9h-19h</div>
                </div>
              </div>
              <p className="text-[var(--ocean)] text-sm leading-relaxed">
                Nous étudions chaque demande personnellement. Votre devis est préparé sur mesure en fonction de votre date, votre groupe et vos envies.
              </p>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-xl font-semibold text-[var(--ocean)] mb-5" style={{ fontFamily: "var(--font-serif)" }}>
                Nous contacter directement
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--ocean)] flex items-center justify-center text-[var(--coral)] flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[var(--champagne)] font-semibold mb-0.5">Téléphone</div>
                    <a href="tel:+33612345678" className="text-[var(--ocean)] font-semibold hover:text-[var(--coral)] transition-colors">
                      06 12 34 56 78
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--ocean)] flex items-center justify-center text-[var(--coral)] flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[var(--champagne)] font-semibold mb-0.5">Email</div>
                    <a href="mailto:contact@laderniere-escale.fr" className="text-[var(--ocean)] font-semibold hover:text-[var(--coral)] transition-colors">
                      contact@laderniere-escale.fr
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--ocean)] flex items-center justify-center text-[var(--coral)] flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[var(--champagne)] font-semibold mb-0.5">Port de départ</div>
                    <div className="text-[var(--ocean)] font-semibold">Port de Saint-Martin-de-Ré<br />
                    <span className="text-sm font-normal text-[var(--ocean)]/60">& Port des Minimes, La Rochelle</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why us */}
            <div>
              <h3 className="text-xl font-semibold text-[var(--ocean)] mb-5" style={{ fontFamily: "var(--font-serif)" }}>
                Pourquoi choisir La Dernière Escale ?
              </h3>
              <ul className="space-y-3">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[var(--coral)] font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-[var(--ocean)] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links to pages */}
            <div className="p-6 bg-[var(--cream)] border border-[var(--sand)] rounded-2xl">
              <p className="text-sm font-semibold text-[var(--ocean)] mb-4">Avant de nous contacter, découvrez :</p>
              <div className="space-y-2">
                <Link href="/formules" className="flex items-center justify-between group text-sm text-[var(--ocean)] hover:text-[var(--coral)] transition-colors py-1.5 border-b border-[var(--sand)]">
                  Nos 4 formules EVJF
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link href="/experiences" className="flex items-center justify-between group text-sm text-[var(--ocean)] hover:text-[var(--coral)] transition-colors py-1.5 border-b border-[var(--sand)]">
                  Expériences à la carte
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link href="/pourquoi-ile-de-re" className="flex items-center justify-between group text-sm text-[var(--ocean)] hover:text-[var(--coral)] transition-colors py-1.5">
                  Pourquoi l&apos;Île de Ré ?
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="rounded-2xl overflow-hidden border border-[var(--sand)]">
          <div className="bg-[var(--ocean)] p-6 flex items-center gap-4">
            <span className="text-2xl">📍</span>
            <div>
              <div className="text-white font-semibold">Nos ports de départ</div>
              <div className="text-[var(--cream)]/60 text-sm">Saint-Martin-de-Ré & Port des Minimes, La Rochelle</div>
            </div>
          </div>
          <div
            className="relative h-72 md:h-96 bg-[var(--sand)] flex items-center justify-center"
            aria-label="Carte : Saint-Martin-de-Ré et La Rochelle"
          >
            <div className="text-center">
              <div className="text-5xl mb-4">🗺️</div>
              <p className="text-[var(--ocean)] font-semibold mb-2">Île de Ré & La Rochelle</p>
              <p className="text-[var(--ocean)]/60 text-sm max-w-xs">
                Port de Saint-Martin-de-Ré (Île de Ré, 17410)<br />
                Port des Minimes (La Rochelle, 17000)
              </p>
              <a
                href="https://maps.google.com/?q=Saint-Martin-de-Re"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-[var(--coral)] underline underline-offset-4 hover:text-[#d4603b]"
              >
                Ouvrir dans Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="bg-[var(--ocean)] py-12 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reassurances.map((r) => (
            <div key={r.title} className="text-center">
              <div className="text-3xl mb-3" role="img" aria-hidden="true">{r.icon}</div>
              <div className="text-white font-semibold mb-1" style={{ fontFamily: "var(--font-serif)" }}>{r.title}</div>
              <div className="text-[var(--cream)]/60 text-sm">{r.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
