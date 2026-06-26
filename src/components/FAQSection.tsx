"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Combien de personnes pour une sortie EVJF en bateau ?",
    answer:
      "Nos bateaux accueillent de 4 à 15 personnes. Les groupes idéaux tournent autour de 8 à 12 personnes pour une expérience conviviale. Pour les grands groupes, nous pouvons privatiser plusieurs bateaux.",
  },
  {
    question: "Quelle est la meilleure période pour un EVJF en mer à l'Île de Ré ?",
    answer:
      "De mai à septembre, l'Île de Ré offre un ensoleillement exceptionnel (plus de 2400h/an). Juin et juillet sont idéaux avec des températures de l'eau autour de 20°C.",
  },
  {
    question: "Peut-on privatiser un bateau pour un EVJF avec chef cuisinier ?",
    answer:
      "Oui ! Notre formule 'Chef à Bord' permet de disposer d'un chef gastronomique professionnel qui prépare des plats à base de produits locaux (huîtres de Ré, gambas, homard) directement sur le bateau.",
  },
  {
    question: "Peut-on faire une dégustation d'huîtres en mer ?",
    answer:
      "C'est notre spécialité ! Les huîtres de l'Île de Ré sont parmi les plus réputées de France. Notre skipper vous emmène directement aux parcs ostréicoles pour une dégustation unique.",
  },
  {
    question: "Comment réserver un EVJF en bateau à La Rochelle ou l'Île de Ré ?",
    answer:
      "Contactez-nous via notre formulaire ou par téléphone. Nous vous proposons un devis personnalisé sous 24h et vous accompagnons de A à Z dans l'organisation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 bg-[var(--cream)]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-4">✦ FAQ ✦</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[var(--ocean)] leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Vos questions sur votre EVJF en bateau
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden border transition-all duration-200 ${
                  isOpen
                    ? "border-[var(--coral)] shadow-md"
                    : "border-[var(--sand)]"
                }`}
              >
                <button
                  className={`w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors duration-200 ${
                    isOpen
                      ? "bg-[var(--coral)] text-white"
                      : "bg-white text-[var(--ocean)] hover:bg-[var(--blush)]/30"
                  }`}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-semibold text-base leading-snug"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`text-xl flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 bg-white border-l-4 border-[var(--coral)]">
                    <p className="text-[var(--teal)] leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
