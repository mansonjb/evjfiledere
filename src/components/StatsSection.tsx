const stats = [
  {
    value: "200+",
    label: "EVJF réalisés",
    description: "Des centaines de futures mariées ont vécu l'aventure avec nous",
  },
  {
    value: "50+",
    label: "Skippers partenaires",
    description: "Des professionnels certifiés, passionnés et bienveillants",
  },
  {
    value: "100%",
    label: "Satisfaction",
    description: "Chaque EVJF est unique et personnalisé jusqu'au moindre détail",
  },
  {
    value: "12",
    label: "Expériences uniques",
    description: "Du coucher de soleil aux huîtres, une formule pour chaque groupe",
  },
];

function WaveTop() {
  return (
    <div className="overflow-hidden leading-none -mb-1" aria-hidden="true">
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        preserveAspectRatio="none"
        height="60"
      >
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,0 L0,0 Z"
          fill="#E8DDD0"
        />
      </svg>
    </div>
  );
}

export default function StatsSection() {
  return (
    <>
      {/* Wave from above section (cream → sand) */}
      <div className="bg-[var(--cream)]">
        <div className="overflow-hidden leading-none -mb-px" aria-hidden="true">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
            height="60"
          >
            <path
              d="M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z"
              fill="#E8DDD0"
            />
          </svg>
        </div>
      </div>

      <section
        className="bg-[var(--sand)] py-20 relative"
        id="chiffres"
        aria-label="Nos chiffres clés"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="section-label mb-3">✦ En chiffres ✦</p>
            <h2
              className="text-4xl md:text-5xl font-semibold text-[var(--ocean)]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              L&apos;expertise au service
              <br />
              <em className="italic font-light text-[var(--coral)]">de votre bonheur</em>
            </h2>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col items-center text-center group"
              >
                {/* Number */}
                <span
                  className="text-6xl md:text-7xl font-semibold text-[var(--coral)] leading-none mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {stat.value}
                </span>

                {/* Champagne line */}
                <div className="w-12 h-0.5 bg-[var(--champagne)] my-3" />

                {/* Label */}
                <span className="text-[var(--ocean)] font-semibold text-sm tracking-widest uppercase mb-2">
                  {stat.label}
                </span>

                {/* Description */}
                <p className="text-[var(--teal)] text-sm leading-relaxed opacity-80 max-w-[200px]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom decorative text */}
          <div className="text-center mt-16 pt-12 border-t border-[var(--champagne)]/30">
            <p
              className="text-2xl md:text-3xl font-light text-[var(--ocean)] italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              &ldquo;Parce que la dernière soirée de liberté mérite
              <br className="hidden md:block" />
              <strong className="font-semibold not-italic"> la première des aventures.</strong>&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Wave out */}
      <div className="bg-[var(--cream)]">
        <WaveTop />
      </div>
    </>
  );
}
