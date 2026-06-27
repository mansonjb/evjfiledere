import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EVJF Grand Groupe 8 à 15 Personnes | Île de Ré | Plusieurs Bateaux",
  description:
    "EVJF pour 8 à 15 personnes sur l'Île de Ré : deux catamarans qui naviguent ensemble, logistique clé en main, photos incroyables. Devis grand groupe gratuit en 24h.",
};

const faqs = [
  {
    q: "Tout le monde peut-il être sur le même bateau ?",
    a: "Au-delà de 10-12 personnes, nous recommandons deux bateaux. Chaque catamaran accueille confortablement 6 à 8 personnes. Les deux navires naviguent côte à côte, restent en contact radio et font les mêmes escales : vous êtes séparées physiquement mais ensemble dans l'expérience.",
  },
  {
    q: "On est 12 personnes, est-ce que ça coûte vraiment plus cher que 2 bateaux ?",
    a: "Oui, deux bateaux représentent deux locations. Mais ramenée au prix par personne, la différence est souvent minime. Et visuellement, deux voiliers côte à côte en mer pour un EVJF, c'est quelque chose. Les photos valent l'investissement.",
  },
  {
    q: "Comment on gère la logistique avec autant de personnes ?",
    a: "On s'occupe de tout. Vous nous donnez les informations de votre groupe et on coordonne : heure de rendez-vous unique au port, briefing sécurité groupé, attribution des bateaux. La wifeille et ses amies n'ont qu'à arriver.",
  },
  {
    q: "Peut-on prévoir des hébergements proches du port ?",
    a: "Oui, et on peut vous recommander des options à Saint-Martin-de-Ré ou La Rochelle selon votre budget et vos envies. Des maisons de vacances pour groupe existent à 10-15 minutes du port et permettent de prolonger le weekend.",
  },
  {
    q: "Peut-on privatiser un restaurant après ?",
    a: "On peut vous orienter vers des restaurants partenaires à La Rochelle ou sur l'Île de Ré habitués aux grands groupes. La privatisation se fait directement avec eux, et on facilite la mise en contact.",
  },
];

export default function EvjfGrandGroupePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[360px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1620035118505-50d949de137e?w=1920&q=80"
          alt="EVJF grand groupe plusieurs bateaux Île de Ré"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--ocean)]/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <nav className="text-sm text-[var(--blush)] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">EVJF Grand Groupe</span>
          </nav>
          <p className="section-label text-[var(--coral)] mb-2">8 à 15 personnes</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "var(--font-serif)" }}>
            Un EVJF festif pour<br />8 à 15 personnes
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-[var(--ocean)] leading-relaxed mb-6">
          Les grands groupes, c&apos;est une logistique à part. Mais c&apos;est aussi une ambiance unique que seuls les grands groupes peuvent créer. Pour les EVJF de 8 à 15 personnes, on a une solution qui fonctionne vraiment bien : deux bateaux qui naviguent ensemble.
        </p>
        <p className="text-lg text-[var(--ocean)] leading-relaxed">
          Les deux catamarans restent côte à côte pendant toute la sortie, font les mêmes escales, les skippers communiquent en radio. Tout le monde vit la même expérience, et les photos depuis l&apos;un vers l&apos;autre sont franchement incroyables.
        </p>
      </section>

      {/* Option 2 bateaux */}
      <section className="bg-[var(--ocean)] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-[var(--coral)] mb-3">L&apos;option signature</p>
          <h2 className="text-4xl font-semibold text-white mb-10" style={{ fontFamily: "var(--font-serif)" }}>
            Deux catamarans côte à côte
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Tout le monde ensemble",
                  desc: "Deux bateaux, une seule expérience. On navigue en convoi, on mouille au même endroit, on partage les mêmes moments.",
                },
                {
                  title: "Des photos époustouflantes",
                  desc: "Depuis un bateau vers l'autre, avec les deux voiliers en arrière-plan de l'Île de Ré : ce sont des photos qu'on ne fait pas autrement.",
                },
                {
                  title: "Ambiance démultipliée",
                  desc: "Deux groupes qui s'agitent, qui s'interpellent d'un bord à l'autre, qui se lancent des défis : l'EVJF prend une autre dimension.",
                },
                {
                  title: "Chef sur chaque bateau (option)",
                  desc: "Si vous optez pour la formule Chef à Bord, on peut embarquer un cuisinier sur chaque catamaran. Même menu, même moment.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-[var(--coral)] text-xl mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <div className="text-white font-semibold mb-1">{item.title}</div>
                    <div className="text-[var(--cream)]/80 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                Comment ça se passe ?
              </h3>
              <div className="space-y-4 text-[var(--cream)]/90 text-sm">
                <p>Un point de rendez-vous unique pour tout le groupe au port. On divise naturellement en deux sous-groupes selon les affinités.</p>
                <p>Briefing sécurité commun avec les deux skippers. Chacune sait sur quel bateau elle monte.</p>
                <p>Les bateaux larguent les amarres ensemble et naviguent côte à côte pour toute la sortie.</p>
                <p>Les skippers restent en contact radio et synchronisent les escales et les moments forts.</p>
                <p>Retour au port en même temps. Soirée ensemble ensuite, si vous le souhaitez.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formules recommandées */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Ce qui marche le mieux</p>
        <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-10" style={{ fontFamily: "var(--font-serif)" }}>
          Formules pour grands groupes
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Journée Complète",
              duration: "8h",
              badge: "Idéal grand groupe",
              price: "À partir de 145€/pers",
              desc: "La formule qui tire le meilleur des deux bateaux. Baignade, huîtres, barbecue, coucher de soleil : une journée entière de souvenirs.",
            },
            {
              title: "Cap Huîtres & Champagne",
              duration: "3h",
              badge: "Option courte",
              price: "À partir de 65€/pers",
              desc: "Idéal si le grand groupe préfère une sortie courte et festive avant une soirée à La Rochelle. Efficace et vraiment sympa.",
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

      {/* Logistique */}
      <section className="bg-[var(--cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label mb-3">On pense à tout</p>
          <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-10" style={{ fontFamily: "var(--font-serif)" }}>
            Logistique grand groupe : on s&apos;en charge
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Point de rendez-vous unique",
                desc: "Tout le monde se retrouve au même endroit au même moment. Pas de confusion, pas de retardataires qui cherchent.",
              },
              {
                title: "Hébergements à proximité",
                desc: "Maisons de vacances pour groupe, gîtes ou hôtels à Saint-Martin-de-Ré ou La Rochelle. On peut vous orienter selon votre budget.",
              },
              {
                title: "Transferts depuis La Rochelle",
                desc: "Si votre groupe arrive par le train ou l'avion, des navettes existent depuis La Rochelle centre vers les ports. On vous donne les options.",
              },
              {
                title: "Programme clé en main",
                desc: "Matin bateau, après-midi vélo ou plage, soirée restaurant : on peut vous proposer un programme complet pour tout le weekend.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white border border-[var(--sand)]">
                <h3 className="text-lg font-semibold text-[var(--ocean)] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--ocean)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Questions grand groupe</p>
        <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-10" style={{ fontFamily: "var(--font-serif)" }}>
          Ce qu&apos;on nous demande souvent
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

      {/* CTA */}
      <section className="bg-[var(--coral)] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
          Votre EVJF grand groupe commence ici
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          Dites-nous votre nombre de personnes et votre date, et on vous propose une organisation sur mesure avec devis en 24h.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--coral)] font-semibold px-10 py-4 rounded-full hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Devis grand groupe
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
