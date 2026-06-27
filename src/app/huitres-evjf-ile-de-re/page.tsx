import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dégustation Huîtres EVJF Île de Ré | En Mer avec Skipper | Champagne",
  description:
    "Dégustez les huîtres de l'Île de Ré en mer pour votre EVJF : skipper qui ouvre les huîtres à bord, mignonette maison, accord vin blanc parfait. Une expérience unique et photogénique. Devis gratuit.",
};

const faqs = [
  {
    q: "Doit-on aimer les huîtres pour profiter de la sortie ?",
    a: "Non. Même celles qui ne mangent pas d'huîtres apprécient l'expérience. L'atmosphère en mer, les parcs ostréicoles, le skipper qui raconte l'histoire de l'île... c'est une sortie complète. Et pour celles qui veulent goûter, nos huîtres de l'Île de Ré ont souvent convaincu des sceptiques.",
  },
  {
    q: "Peut-on avoir du champagne plutôt que du vin blanc ?",
    a: "Oui, moyennant un petit supplément. Mais honnêtement, un bon vin blanc des Charentes ou un Muscadet sur lie se marie mieux avec les huîtres que le champagne. L'iode et les bulles se disputent un peu. On peut prévoir les deux.",
  },
  {
    q: "Combien d'huîtres par personne ?",
    a: "12 huîtres par personne dans notre formule Cap Huîtres standard. On peut ajuster selon les appétits. Pour des grandes mangeuses, on peut prévoir 18 par personne sur demande.",
  },
  {
    q: "Les huîtres sont-elles fraîches ?",
    a: "Absolument. On les commande chez un producteur local de l'Île de Ré le matin même ou la veille. Elles arrivent en caisse sur le bateau et le skipper les ouvre à bord au moment de la dégustation.",
  },
  {
    q: "Peut-on visiter un parc ostréicole de près ?",
    a: "Sur demande, on peut organiser une escale avec rencontre d'un ostréiculteur local. Il vous explique l'élevage, les bassins, et vous donne les huîtres directement. Une expérience authentique à part entière.",
  },
];

const accords = [
  {
    vin: "Muscadet sur Lie",
    region: "Loire Atlantique",
    notes: "Minéral, léger, légèrement salin. L'accord classique et parfait avec les huîtres. On ne se trompe jamais.",
    recommend: true,
  },
  {
    vin: "Chablis",
    region: "Bourgogne",
    notes: "Très minéral, notes de silex. Élève l'huître sans la masquer. Un accord plus élégant pour les groupes qui veulent faire les choses bien.",
    recommend: true,
  },
  {
    vin: "Vin blanc des Charentes",
    region: "Charente-Maritime",
    notes: "Notre choix local par défaut. Léger, fruité, sec. S'accorde naturellement avec les huîtres de l'île voisine.",
    recommend: true,
  },
  {
    vin: "Champagne",
    region: "Champagne",
    notes: "Fêtif et festif, mais l'accord est moins précis. Les bulles et l'iode se battent un peu en bouche. On peut le prévoir pour l'apéro avant les huîtres.",
    recommend: false,
  },
];

export default function HuitresEvjfIleDeRePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[360px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1666803685407-009be9f0a03a?w=1920&q=80"
          alt="Dégustation huîtres EVJF Île de Ré en mer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--ocean)]/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <nav className="text-sm text-[var(--blush)] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">Huîtres EVJF</span>
          </nav>
          <p className="section-label text-[var(--coral)] mb-2">Expérience signature</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "var(--font-serif)" }}>
            Huîtres de l&apos;Île de Ré<br />pour votre EVJF
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-[var(--ocean)] leading-relaxed mb-6">
          Déguster des huîtres, c&apos;est une chose. Les déguster en mer, à bord d&apos;un voilier privatisé, face aux parcs où elles ont été élevées, avec un skipper qui les ouvre une à une devant vous : c&apos;est autre chose.
        </p>
        <p className="text-lg text-[var(--ocean)] leading-relaxed">
          Les huîtres de l&apos;Île de Ré sont parmi les meilleures de France. Et l&apos;endroit pour les manger, c&apos;est ici, sur l&apos;eau, avec la lumière atlantique et un verre de blanc à la main.
        </p>
      </section>

      {/* Histoire */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Le terroir</p>
              <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                Les huîtres de l&apos;Île de Ré : pourquoi elles sont différentes
              </h2>
              <p className="text-[var(--ocean)] leading-relaxed mb-4">
                L&apos;Île de Ré est entourée du Pertuis Charentais et du Pertuis Breton, deux bras de mer peu profonds et riches en plancton. C&apos;est dans ces eaux que les huîtres creuses de l&apos;Île de Ré sont élevées depuis des siècles.
              </p>
              <p className="text-[var(--ocean)] leading-relaxed mb-4">
                Le terroir leur donne un goût iodé prononcé, une chair ferme et une saveur légèrement noisettée en fin de bouche. Elles sont classées en catégorie &quot;fines de claires&quot; : élevées en pleine mer, puis affinées en bassins (les claires) pour une texture et un goût plus fins.
              </p>
              <p className="text-[var(--ocean)] leading-relaxed">
                On les consomme nature, avec simplement une mignonette maison (vinaigre d&apos;échalote, poivre concassé) ou un filet de citron. Les surcharger de sauce, c&apos;est gâcher quelque chose de rare.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1666803685407-009be9f0a03a?w=900&q=80"
                alt="Huîtres fraîches de l'Île de Ré dégustation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça se passe */}
      <section className="bg-[var(--ocean)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-[var(--coral)] mb-3">À bord</p>
          <h2 className="text-4xl font-semibold text-white mb-12" style={{ fontFamily: "var(--font-serif)" }}>
            Comment se passe la dégustation en mer
          </h2>
          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "Le skipper prépare tout",
                desc: "Les huîtres arrivent à bord dans leur caisse, fraîches du matin. Votre skipper pose le plan de travail sur le pont, sort les outils et commence à ouvrir pendant que vous naviguez.",
              },
              {
                num: "02",
                title: "Ouverture devant vous",
                desc: "Il ouvre les huîtres une à une, les vérifie, retire les éclats éventuels. Chacune est posée sur un plateau avec la mignonette maison et les rondelles de citron.",
              },
              {
                num: "03",
                title: "Le verre de blanc",
                desc: "Un vin blanc des Charentes, un Muscadet ou un Chablis selon votre commande. Servi frais, pas glacé. La température idéale pour ne pas tuer les arômes.",
              },
              {
                num: "04",
                title: "Le moment",
                desc: "On mange lentement, on regarde la mer, on parle. C'est souvent l'un des moments les plus calmes et les plus beaux d'un EVJF. Les photos sont magnifiques.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--coral)] flex items-center justify-center text-white font-bold">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-[var(--cream)]/80 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accords */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Ce qu&apos;on boit avec</p>
        <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-4" style={{ fontFamily: "var(--font-serif)" }}>
          Accords vins et huîtres
        </h2>
        <p className="text-[var(--ocean)] mb-10">
          La question revient souvent : champagne ou vin blanc avec les huîtres ? La réponse honnête : le vin blanc, puis le champagne pour fêter après.
        </p>
        <div className="space-y-4">
          {accords.map((a) => (
            <div
              key={a.vin}
              className={`flex flex-col sm:flex-row gap-4 p-6 rounded-2xl border ${
                a.recommend
                  ? "bg-white border-[var(--sand)]"
                  : "bg-[var(--cream)]/50 border-[var(--sand)] opacity-70"
              }`}
            >
              <div className="sm:w-40 flex-shrink-0">
                <div className="font-semibold text-[var(--ocean)]" style={{ fontFamily: "var(--font-serif)" }}>
                  {a.vin}
                </div>
                <div className="text-xs text-[var(--champagne)]">{a.region}</div>
                {a.recommend && <span className="badge-coral mt-2 inline-block">Recommandé</span>}
              </div>
              <div className="text-sm text-[var(--ocean)] leading-relaxed">{a.notes}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Option visite parc */}
      <section className="bg-[var(--blush)]/30 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label mb-3">Pour aller plus loin</p>
          <h2 className="text-3xl font-semibold text-[var(--ocean)] mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            Option : visite d&apos;un parc ostréicole avec producteur
          </h2>
          <p className="text-[var(--ocean)] leading-relaxed max-w-2xl mx-auto mb-6">
            Sur demande, on peut organiser une escale et une rencontre avec un ostréiculteur local. Il vous reçoit au bord de ses bassins, vous explique l&apos;élevage et vous donne les huîtres directement sorties de l&apos;eau. Une version encore plus authentique de l&apos;expérience. Idéal pour les groupes curieux et gourmands.
          </p>
          <Link href="/contact" className="inline-block text-[var(--coral)] font-semibold hover:underline">
            Me renseigner sur cette option →
          </Link>
        </div>
      </section>

      {/* Formules */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Où les retrouver</p>
        <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-10" style={{ fontFamily: "var(--font-serif)" }}>
          Les formules qui incluent les huîtres
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Cap Huîtres & Champagne",
              duration: "3h",
              price: "À partir de 65€/pers",
              badge: "Le plus populaire",
              desc: "La formule dédiée : cap sur les parcs ostréicoles, dégustation à bord, vin blanc charentais inclus.",
            },
            {
              title: "Chef à Bord",
              duration: "5h",
              price: "À partir de 110€/pers",
              badge: "Premium",
              desc: "Huîtres en entrée, poisson du jour en plat, dessert charentais. Cuisinées en direct par le chef.",
            },
            {
              title: "Journée Complète",
              duration: "8h",
              price: "À partir de 145€/pers",
              badge: "Tout inclus",
              desc: "La dégustation d'huîtres est intégrée à une journée entière : baignade, vélo, coucher de soleil.",
            },
          ].map((f) => (
            <div key={f.title} className="card-editorial p-6">
              <div className="flex items-start justify-between gap-2 mb-4">
                <h3 className="text-xl font-semibold text-[var(--ocean)]" style={{ fontFamily: "var(--font-serif)" }}>
                  {f.title}
                </h3>
                <span className="badge-coral flex-shrink-0">{f.badge}</span>
              </div>
              <p className="text-sm text-[var(--ocean)] leading-relaxed mb-4">{f.desc}</p>
              <div className="flex items-center justify-between">
                <span className="badge-champagne">{f.duration}</span>
                <span className="text-[var(--coral)] font-semibold text-sm">{f.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/formules" className="text-[var(--coral)] hover:underline font-medium">
            Voir toutes les formules →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label mb-3">Vos questions</p>
          <h2 className="text-4xl font-semibold text-[var(--ocean)] mb-10" style={{ fontFamily: "var(--font-serif)" }}>
            Huîtres à bord : on répond à tout
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
          Une dégustation d&apos;huîtres en mer pour votre EVJF sur l&apos;Île de Ré. Dites-nous votre date et votre groupe, on s&apos;occupe du reste.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--coral)] font-semibold px-10 py-4 rounded-full hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Réserver les huîtres à bord
          </Link>
          <Link
            href="/formules"
            className="inline-block border-2 border-white text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all"
          >
            Voir toutes les formules
          </Link>
        </div>
      </section>
    </main>
  );
}
