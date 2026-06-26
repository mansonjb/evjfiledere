import Link from "next/link";

function AnchorIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="8" x2="12" y2="22" />
      <path d="M5 15H2a10 10 0 0 0 20 0h-3" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.68a8.17 8.17 0 004.78 1.52V6.72a4.85 4.85 0 01-1.01-.03z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

const columns = [
  {
    title: "Navigation",
    links: [
      { href: "#formules", label: "Nos formules" },
      { href: "#experiences", label: "Expériences" },
      { href: "#pourquoi-nous", label: "Pourquoi nous" },
      { href: "#blog", label: "Blog & Inspirations" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Expériences",
    links: [
      { href: "#experiences", label: "Croisière au coucher de soleil" },
      { href: "#experiences", label: "Dégustation d'huîtres en mer" },
      { href: "#experiences", label: "Bateau & Champagne" },
      { href: "#experiences", label: "Tour de l'Île de Ré" },
      { href: "#experiences", label: "Pique-nique nautique" },
    ],
  },
  {
    title: "Villes",
    links: [
      { href: "#formules", label: "EVJF Île de Ré" },
      { href: "#formules", label: "EVJF La Rochelle" },
      { href: "#formules", label: "EVJF Charente-Maritime" },
      { href: "#formules", label: "EVJF Fouras" },
      { href: "#formules", label: "EVJF Rochefort" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "mailto:bonjour@evjfiledere.fr", label: "bonjour@evjfiledere.fr" },
      { href: "tel:+33612345678", label: "+33 6 12 34 56 78" },
      { href: "#contact", label: "Devis gratuit en 24h" },
      { href: "#contact", label: "FAQ" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Wave into footer */}
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
              d="M0,20 C360,60 1080,0 1440,40 L1440,60 L0,60 Z"
              fill="#0D2B45"
            />
          </svg>
        </div>
      </div>

      <footer className="bg-[var(--ocean)] text-[var(--cream)]" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          {/* Logo + tagline */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-14">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[var(--coral)]">
                  <AnchorIcon />
                </span>
                <span
                  className="text-2xl font-semibold text-[var(--cream)]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  La Dernière Escale
                </span>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--champagne)] mb-4">
                EVJF · Île de Ré · La Rochelle
              </p>
              <p className="text-sm text-[var(--cream)] opacity-70 leading-relaxed">
                Nous créons des expériences EVJF en mer inoubliables en Charente-Maritime. Chaque sortie est organisée avec soin, passion et une touche de luxe nautique.
              </p>

              {/* Social icons */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[var(--cream)] opacity-60 hover:opacity-100 hover:text-[var(--coral)] transition-all"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-[var(--cream)] opacity-60 hover:opacity-100 hover:text-[var(--coral)] transition-all"
                >
                  <TikTokIcon />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="text-[var(--cream)] opacity-60 hover:opacity-100 hover:text-[var(--coral)] transition-all"
                >
                  <PinterestIcon />
                </a>
              </div>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 flex-1 md:max-w-3xl">
              {columns.map((col) => (
                <div key={col.title}>
                  <h3 className="text-[var(--champagne)] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
                    {col.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[var(--cream)] opacity-65 hover:opacity-100 hover:text-[var(--coral)] text-sm transition-all"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--cream)] opacity-40">
              © {year} La Dernière Escale. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              {["Mentions légales", "Politique de confidentialité", "CGV", "Cookies"].map(
                (label) => (
                  <Link
                    key={label}
                    href="#"
                    className="text-xs text-[var(--cream)] opacity-40 hover:opacity-70 transition-opacity"
                  >
                    {label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
