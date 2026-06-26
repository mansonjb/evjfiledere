"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function AnchorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="8" x2="12" y2="22" />
      <path d="M5 15H2a10 10 0 0 0 20 0h-3" />
    </svg>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
      <path d="M2 4l4 4 4-4" />
    </svg>
  );
}

const groupLinks = [
  { href: "/evjf-petit-groupe", label: "Petit groupe · 2 à 4 personnes", desc: "Intimiste & sur mesure" },
  { href: "/evjf-groupe-4-8-personnes", label: "Groupe · 4 à 8 personnes", desc: "La taille idéale en mer" },
  { href: "/evjf-grand-groupe", label: "Grand groupe · 8 à 15 personnes", desc: "2 bateaux côte à côte" },
];

const circuitLinks = [
  { href: "/circuits/visite-saint-martin-de-re", label: "Bateau → Saint-Martin-de-Ré", desc: "Remparts Vauban & huîtres" },
  { href: "/circuits/journee-ile-de-re-velo-bateau", label: "Journée Île de Ré · Vélo + Mer", desc: "Le Golden Day" },
  { href: "/circuits/soiree-la-rochelle", label: "Soirée La Rochelle", desc: "Vieux Port & cocktails" },
  { href: "/circuits", label: "Voir tous les circuits →", desc: "" },
];

function DropdownMenu({ label, links, scrolled }: {
  label: string;
  links: { href: string; label: string; desc: string }[];
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors hover:text-[var(--coral)] ${scrolled ? "text-[var(--ocean)]" : "text-[var(--cream)]"}`}
      >
        {label}
        <ChevronDown open={open} />
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-[var(--sand)] overflow-hidden z-50">
          <div className="py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex flex-col px-5 py-3 hover:bg-[var(--cream)] transition-colors group"
              >
                <span className="text-sm font-medium text-[var(--ocean)] group-hover:text-[var(--coral)] transition-colors">{l.label}</span>
                {l.desc && <span className="text-xs text-[var(--champagne)] mt-0.5">{l.desc}</span>}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const mobileGroups = [
  {
    title: "Par taille de groupe",
    links: groupLinks,
  },
  {
    title: "Circuits",
    links: circuitLinks,
  },
  {
    title: "Découvrir",
    links: [
      { href: "/formules", label: "Nos formules", desc: "" },
      { href: "/experiences", label: "Expériences à bord", desc: "" },
      { href: "/balade-privee-evjf", label: "Balades privées", desc: "" },
      { href: "/huitres-evjf-ile-de-re", label: "Huîtres en mer", desc: "" },
      { href: "/pourquoi-ile-de-re", label: "Pourquoi l'Île de Ré", desc: "" },
      { href: "/evjf-decouverte-ile-de-re", label: "Guide de l'île", desc: "" },
    ],
  },
  {
    title: "",
    links: [
      { href: "/blog", label: "Blog & Inspirations", desc: "" },
      { href: "/contact", label: "Contact", desc: "" },
    ],
  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[var(--cream)] shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-[var(--coral)] group-hover:scale-110 transition-transform"><AnchorIcon /></span>
              <span className={`text-xl font-semibold tracking-tight leading-none transition-colors ${scrolled ? "text-[var(--ocean)]" : "text-[var(--cream)]"}`} style={{ fontFamily: "var(--font-serif)" }}>
                La Dernière Escale
              </span>
            </div>
            <span className={`text-[0.6rem] font-medium tracking-[0.2em] uppercase mt-0.5 ml-7 transition-colors ${scrolled ? "text-[var(--champagne)]" : "text-[var(--blush)]"}`}>
              EVJF · Île de Ré · La Rochelle
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link href="/formules" className={`text-sm font-medium tracking-wide transition-colors hover:text-[var(--coral)] ${scrolled ? "text-[var(--ocean)]" : "text-[var(--cream)]"}`}>
              Formules
            </Link>
            <DropdownMenu label="Par groupe" links={groupLinks} scrolled={scrolled} />
            <Link href="/experiences" className={`text-sm font-medium tracking-wide transition-colors hover:text-[var(--coral)] ${scrolled ? "text-[var(--ocean)]" : "text-[var(--cream)]"}`}>
              Expériences
            </Link>
            <DropdownMenu label="Circuits" links={circuitLinks} scrolled={scrolled} />
            <Link href="/pourquoi-ile-de-re" className={`text-sm font-medium tracking-wide transition-colors hover:text-[var(--coral)] ${scrolled ? "text-[var(--ocean)]" : "text-[var(--cream)]"}`}>
              L'Île de Ré
            </Link>
            <Link href="/blog" className={`text-sm font-medium tracking-wide transition-colors hover:text-[var(--coral)] ${scrolled ? "text-[var(--ocean)]" : "text-[var(--cream)]"}`}>
              Blog
            </Link>
            <Link href="/contact" className="ml-1 bg-[var(--coral)] hover:bg-[#d4603b] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5">
              Réserver votre EVJF
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors ${scrolled ? "text-[var(--ocean)]" : "text-[var(--cream)]"}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu fullscreen */}
      <div className={`fixed inset-0 z-40 bg-[var(--ocean)] overflow-y-auto transition-all duration-300 lg:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="min-h-full flex flex-col px-6 pt-28 pb-12">

          {/* Logo repeat */}
          <div className="flex items-center gap-2 mb-10">
            <span className="text-[var(--coral)]"><AnchorIcon /></span>
            <span className="text-[var(--cream)] text-2xl font-semibold" style={{ fontFamily: "var(--font-serif)" }}>La Dernière Escale</span>
          </div>

          {/* Grouped links */}
          {mobileGroups.map((group, gi) => (
            <div key={gi} className="mb-8">
              {group.title && (
                <p className="text-[var(--champagne)] text-xs tracking-[0.2em] uppercase font-medium mb-3">{group.title}</p>
              )}
              <div className="flex flex-col gap-1">
                {group.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-[var(--cream)] text-xl font-light hover:text-[var(--coral)] transition-colors py-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link
            href="/contact"
            className="mt-auto bg-[var(--coral)] text-white text-base font-semibold px-8 py-4 rounded-full hover:bg-[#d4603b] transition-colors text-center"
            onClick={() => setMenuOpen(false)}
          >
            Réserver votre EVJF
          </Link>
        </div>
      </div>
    </>
  );
}
