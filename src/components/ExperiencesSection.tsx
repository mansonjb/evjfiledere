import Image from "next/image";

const experiences = [
  {
    icon: "🦪",
    title: "Huîtres & Vins",
    description: "Dégustation d'huîtres fraîches de l'Île de Ré directement au parc ostréicole, accompagnées de vins blancs locaux.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    span: "row-span-2",
  },
  {
    icon: "⛵",
    title: "Navigation au Coucher du Soleil",
    description: "Voguez sur le Pertuis Charentais sous des ciels enflammés depuis le voilier privatisé.",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&q=80",
    span: "",
  },
  {
    icon: "👨‍🍳",
    title: "Chef Gastronomique Embarqué",
    description: "Un chef professionnel prépare des plats raffinés avec les produits de la mer locale à bord.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    span: "",
  },
  {
    icon: "🤿",
    title: "Baignade & Snorkeling",
    description: "Pause en crique secrète pour une baignade dans les eaux turquoises du pertuis.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    span: "row-span-2",
  },
  {
    icon: "🥂",
    title: "Brunch Marin sur l'Eau",
    description: "Brunch festif avec viennoiseries, fruits frais, champagne et jus de fruits face à l'horizon.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
    span: "",
  },
  {
    icon: "🧘‍♀️",
    title: "Yoga sur l'Eau",
    description: "Séance de yoga sur le pont du catamaran amarré, pour commencer votre EVJF en douceur.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    span: "",
  },
];

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="py-24 bg-[var(--blush)]/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-4">✦ LES EXPÉRIENCES ✦</p>
          <h2
            className="text-4xl md:text-6xl font-bold text-[var(--ocean)] leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Ce qu&apos;on vit{" "}
            <span className="underline-coral">ensemble</span>
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${exp.span}`}
            >
              {/* Background image */}
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,43,69,0.9)] via-[rgba(13,43,69,0.4)] to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-2xl mb-2">{exp.icon}</span>
                <h3
                  className="text-white text-xl font-bold leading-tight mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {exp.title}
                </h3>
                {/* Description appears on hover */}
                <p className="text-white/80 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-300">
                  {exp.description}
                </p>
              </div>

              {/* Number badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[var(--coral)] flex items-center justify-center text-white text-xs font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
