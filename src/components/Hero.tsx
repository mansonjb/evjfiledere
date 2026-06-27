"use client";

import Link from "next/link";

function AnchorDivider() {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-[var(--coral)] opacity-60" />
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E8714A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="5" r="3" />
        <line x1="12" y1="8" x2="12" y2="22" />
        <path d="M5 15H2a10 10 0 0 0 20 0h-3" />
      </svg>
      <div className="flex-1 h-px bg-[var(--coral)] opacity-60" />
    </div>
  );
}

const stats = [
  { value: "200+", label: "EVJF organisés" },
  { value: "50+", label: "skippers partenaires" },
  { value: "12", label: "expériences" },
  { value: "5★", label: "noté" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col"
      aria-label="Héro – EVJF en mer"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1620035118505-50d949de137e?w=1920&q=80')",
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient" aria-hidden="true" />

      {/* Corner badge */}
      <div className="absolute top-24 right-6 lg:top-28 lg:right-12 z-20 rotate-3 hidden sm:block">
        <div className="bg-[var(--coral)] text-white text-xs font-semibold rounded-2xl px-4 py-3 shadow-xl leading-snug text-center max-w-[130px]">
          <span className="text-lg block mb-0.5">⚓</span>
          <span className="tracking-wide">#1 EVJF en mer Charente-Maritime</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-28 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <p className="section-label text-[var(--blush)] mb-6 tracking-[0.25em]">
            ✦ Île de Ré · La Rochelle · Charente-Maritime ✦
          </p>

          {/* Main heading */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-semibold text-[var(--cream)] leading-[1.05] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Votre EVJF en mer,
            <br />
            <em className="text-[var(--coral)] not-italic font-light italic">
              inoubliable.
            </em>
          </h1>

          {/* Anchor divider */}
          <AnchorDivider />

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[var(--cream)] opacity-90 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Croisières privées · Huîtres &amp; Champagne · Coucher de soleil ·{" "}
            <br className="hidden md:block" />
            Île de Ré &amp; La Rochelle
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/formules"
              className="bg-[var(--coral)] hover:bg-[#d4603b] text-white font-semibold text-base px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:-translate-y-1 inline-block"
            >
              Découvrir nos formules
            </Link>
            <Link
              href="/experiences"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--ocean)] font-semibold text-base px-8 py-4 rounded-full transition-all hover:shadow-xl hover:-translate-y-1 inline-block"
            >
              Voir les expériences
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 w-full bg-[rgba(13,43,69,0.75)] backdrop-blur-sm border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span
                className="text-[var(--coral)] text-3xl md:text-4xl font-semibold leading-none"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {s.value}
              </span>
              <span className="text-[var(--cream)] text-xs font-medium tracking-widest uppercase opacity-80">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-6">
        <div className="flex flex-col items-center gap-2 animate-scroll-bounce">
          <span className="text-[var(--cream)] text-xs tracking-widest uppercase opacity-60">
            Défiler
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[var(--cream)] opacity-60"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
