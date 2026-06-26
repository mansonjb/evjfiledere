const testimonials = [
  {
    name: "Laura P.",
    initials: "LP",
    text: "On a passé la journée la plus incroyable de nos vies. Le skipper était génial, les huîtres délicieuses, et le coucher de soleil... inoubliable. Merci !",
    context: "EVJF groupe 12 personnes",
    date: "Juillet 2025",
    stars: 5,
  },
  {
    name: "Marie & ses filles",
    initials: "MF",
    text: "Formule Chef à bord complètement folle. On avait l'impression d'être sur un yacht de luxe. À refaire absolument !",
    context: "Bordeaux",
    date: "Août 2025",
    stars: 5,
  },
  {
    name: "Camille O.",
    initials: "CO",
    text: "Parfait de A à Z. L'organisation, la communication, le capitaine... Toutes nos copines en ont encore parlé 6 mois après. 10/10",
    context: "Paris",
    date: "Juin 2025",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-24"
      style={{ backgroundColor: "#0D2B45" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-4" style={{ color: "var(--champagne)" }}>
            ✦ ELLES SONT VENUES ✦
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-serif)", color: "var(--champagne)" }}
          >
            Elles en parlent mieux que nous
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-8 flex flex-col"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(200,169,110,0.3)",
              }}
            >
              {/* Decorative quote mark */}
              <span
                className="text-7xl leading-none mb-2 select-none"
                style={{ fontFamily: "var(--font-serif)", color: "var(--coral)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} style={{ color: "var(--champagne)" }}>
                    ★
                  </span>
                ))}
              </div>

              {/* Text */}
              <p
                className="leading-relaxed flex-1 mb-6 text-sm"
                style={{ color: "rgba(251,248,243,0.85)" }}
              >
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                  style={{ background: "var(--coral)", color: "#fff" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--champagne)" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(251,248,243,0.5)" }}>
                    {t.context} &middot; {t.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
