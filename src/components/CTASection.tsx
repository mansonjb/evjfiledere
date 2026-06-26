import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden" id="contact">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&q=80"
          alt="Coucher de soleil en mer pour EVJF Île de Ré"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(232,113,74,0.88) 0%, rgba(13,43,69,0.82) 100%)",
          }}
        />
      </div>

      {/* Decorative wave top */}
      <div
        className="absolute top-0 left-0 right-0 h-14 overflow-hidden"
        aria-hidden="true"
        style={{ color: "var(--cream)" }}
      >
        <svg
          viewBox="0 0 1440 56"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path d="M0,56 C360,0 1080,0 1440,56 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Decorative anchor */}
        <div className="text-4xl mb-4 select-none" aria-hidden="true">
          ⚓
        </div>

        <p
          className="section-label mb-4"
          style={{ color: "rgba(251,248,243,0.7)" }}
        >
          ✦ ENTERREMENT DE VIE DE JEUNE FILLE ✦
        </p>

        <h2
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Prête à larguer les amarres ?
        </h2>

        <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          Votre EVJF en mer sur l&apos;Île de Ré vous attend. Places limitées — réservez maintenant
          pour votre sortie en bateau, catamaran ou voilier privatisé.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-block bg-[var(--cream)] text-[var(--ocean)] font-semibold text-base px-10 py-4 rounded-full hover:bg-white transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5"
          >
            Demander un devis gratuit
          </a>
          <a
            href="tel:+33600000000"
            className="inline-block border-2 border-white text-white font-semibold text-base px-10 py-4 rounded-full hover:bg-white hover:text-[var(--ocean)] transition-all duration-200"
          >
            Appeler maintenant
          </a>
        </div>

        <p className="text-white/40 text-xs mt-8 tracking-wide">
          Réponse sous 24h · Devis gratuit · Sans engagement · EVJF La Rochelle &amp; Île de Ré
        </p>
      </div>

      {/* Decorative wave bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-14 overflow-hidden"
        aria-hidden="true"
        style={{ color: "var(--cream)" }}
      >
        <svg
          viewBox="0 0 1440 56"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path d="M0,0 C360,56 1080,56 1440,0 L1440,56 L0,56 Z" />
        </svg>
      </div>
    </section>
  );
}
