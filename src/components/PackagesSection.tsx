import Image from "next/image";
import Link from "next/link";

const packages = [
  {
    title: "Apéro Sunset",
    badge: "Best seller",
    description:
      "2h de navigation privatisée au coucher du soleil, champagne & amuse-bouches, 8 personnes max",
    price: "À partir de 49€/pers",
    inclus: ["Catamaran ou voilier", "Capitaine", "Champagne & grignotages"],
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&q=80",
  },
  {
    title: "Cap Huîtres & Champagne",
    badge: "Le + populaire",
    description:
      "Dégustation d'huîtres de l'Île de Ré à bord + champagne, visite d'un parc ostréicole avec le skipper, 3h",
    price: "À partir de 65€/pers",
    inclus: [],
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
  },
  {
    title: "Chef à Bord",
    badge: "Premium",
    description:
      "Chef cuisinier embarqué pour un repas gastronomique en mer, fruits de mer locaux, accord mets & vins, 5h",
    price: "À partir de 110€/pers",
    inclus: [],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    title: "Journée Complète",
    badge: "Tout inclus",
    description:
      "La totale : navigation, huîtres, baignade, barbecue à bord, coucher de soleil – une journée magique en mer, 8h",
    price: "À partir de 145€/pers",
    inclus: [],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
];

export default function PackagesSection() {
  return (
    <section id="formules" className="py-24 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-4">✦ NOS FORMULES ✦</p>
          <h2
            className="text-4xl md:text-6xl font-bold text-[var(--ocean)] leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Choisissez votre aventure en mer
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-white rounded-2xl overflow-hidden shadow-md border-t-4 border-[var(--coral)] hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              {/* Photo */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Badge */}
                <span className="absolute top-3 left-3 badge-coral">{pkg.badge}</span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="text-xl font-semibold text-[var(--ocean)] mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {pkg.title}
                </h3>
                <p className="text-[var(--teal)] text-sm leading-relaxed mb-4 flex-1">
                  {pkg.description}
                </p>

                {pkg.inclus.length > 0 && (
                  <ul className="mb-4 space-y-1">
                    {pkg.inclus.map((item) => (
                      <li key={item} className="text-xs text-[var(--teal)] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--coral)] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Price + CTA */}
                <div className="mt-auto">
                  <span className="inline-block bg-[var(--coral)] text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                    {pkg.price}
                  </span>
                  <div>
                    <Link
                      href="/formules"
                      className="text-sm font-semibold text-[var(--coral)] hover:text-[#d4603b] underline-coral transition-colors"
                    >
                      Découvrir →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/formules"
            className="inline-block border-2 border-[var(--coral)] text-[var(--coral)] hover:bg-[var(--coral)] hover:text-white font-semibold px-10 py-3 rounded-full transition-all duration-200"
          >
            Voir toutes les formules
          </Link>
        </div>
      </div>
    </section>
  );
}
