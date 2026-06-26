"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function AnchorIcon() {
  return (
    <svg
      width="18"
      height="18"
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

const navLinks = [
  { href: "/formules", label: "Formules" },
  { href: "/experiences", label: "Expériences" },
  { href: "/pourquoi-ile-de-re", label: "Pourquoi l'Île de Ré" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-[var(--cream)] shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <div className="flex items-center gap-2">
              <span className="text-[var(--coral)] group-hover:scale-110 transition-transform">
                <AnchorIcon />
              </span>
              <span
                className={`font-[var(--font-cormorant)] text-2xl font-semibold tracking-tight leading-none transition-colors ${
                  scrolled ? "text-[var(--ocean)]" : "text-[var(--cream)]"
                }`}
                style={{ fontFamily: "var(--font-serif)" }}
              >
                La Dernière Escale
              </span>
            </div>
            <span
              className={`text-[0.6rem] font-[var(--font-dm-sans)] font-medium tracking-[0.22em] uppercase mt-0.5 ml-7 transition-colors ${
                scrolled ? "text-[var(--champagne)]" : "text-[var(--blush)]"
              }`}
            >
              EVJF · Île de Ré · La Rochelle
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[var(--coral)] ${
                  scrolled ? "text-[var(--ocean)]" : "text-[var(--cream)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 bg-[var(--coral)] hover:bg-[#d4603b] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Réserver votre EVJF
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors ${
              scrolled ? "text-[var(--ocean)]" : "text-[var(--cream)]"
            }`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--ocean)] flex flex-col items-center justify-center gap-8 transition-all duration-400 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[var(--coral)]">
            <AnchorIcon />
          </span>
          <span
            className="text-[var(--cream)] text-3xl font-semibold"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            La Dernière Escale
          </span>
        </div>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[var(--cream)] text-2xl font-light hover:text-[var(--coral)] transition-colors"
            style={{ fontFamily: "var(--font-serif)" }}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-4 bg-[var(--coral)] text-white text-base font-semibold px-8 py-3.5 rounded-full hover:bg-[#d4603b] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Réserver votre EVJF
        </Link>
      </div>
    </>
  );
}
