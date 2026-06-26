import Image from "next/image";
import Link from "next/link";

const bullets = [
  "Cadre unique entre dunes et océan",
  "Huîtres de Ré parmi les meilleures de France",
  "50+ skippers professionnels partenaires",
  "Météo clémente de mai à septembre",
  "Hôtels & hébergements disponibles sur Île de Ré",
];

export default function WhySection() {
  return (
    <section id="pourquoi-ile-de-re" className="py-24 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: photo collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Top photo */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] col-span-1">
                <Image
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80"
                  alt="Bateau au large de l'Île de Ré"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              {/* Bottom photo */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] col-span-1 mt-10">
                <Image
                  src="https://images.unsplash.com/photo-1566895733044-d2bdda8b6234?w=600&q=80"
                  alt="Dégustation d'huîtres en mer Île de Ré"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[var(--ocean)] text-white rounded-2xl px-6 py-4 shadow-xl text-center whitespace-nowrap">
              <span
                className="text-3xl font-bold block text-[var(--champagne)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                1 450h
              </span>
              <span className="text-xs font-medium tracking-wider uppercase opacity-80">
                de soleil par an
              </span>
            </div>
          </div>

          {/* Right: content */}
          <div className="md:pl-4">
            <p className="section-label mb-4">✦ POURQUOI CHOISIR L&apos;ÎLE DE RÉ ? ✦</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[var(--ocean)] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Le cadre idéal pour votre EVJF en mer
            </h2>

            <p className="text-[var(--teal)] leading-relaxed mb-8">
              Nichée dans le Pertuis Charentais, l&apos;Île de Ré offre des eaux turquoises d&apos;une
              clarté exceptionnelle. Capitale française de l&apos;huître, elle bénéficie de plus de
              1 450 heures de soleil par an — un record en France. Accessible depuis Paris en TGV
              en seulement 3h, l&apos;île allie douceur de vivre, gastronomie maritime et paysages
              à couper le souffle : le décor parfait pour votre enterrement de vie de jeune fille
              en bateau sur l&apos;Île de Ré.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 mb-10">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="text-[var(--coral)] font-bold text-lg leading-none mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-[var(--teal)] leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/pourquoi-ile-de-re"
              className="inline-block bg-[var(--ocean)] hover:bg-[var(--teal)] text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg"
            >
              Voir le guide complet →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
