"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionEl) observer.observe(sectionEl);
    return () => {
      if (sectionEl) observer.unobserve(sectionEl);
    };
  }, []);

  const faqItems = [
    {
      question: "Quels types de bornes de recharge proposez-vous ?",
      answer:
        "Nous proposons une gamme complète de bornes de recharge adaptées à tous les besoins : bornes domestiques (3,7 à 22 kW), bornes pour entreprises et copropriétés (jusqu'à 22 kW), et solutions de recharge rapide (50 kW et plus). Nous travaillons avec les meilleures marques du marché comme Wallbox, Schneider, ABB, et Legrand pour garantir qualité et fiabilité.",
    },
    {
      question:
        "Quelles sont les aides financières disponibles pour l'installation d'une borne ?",
      answer:
        "Plusieurs aides sont disponibles : le crédit d'impôt pour les particuliers (75% du coût dans la limite de 300€), la prime ADVENIR (jusqu'à 960€ pour les copropriétés et entreprises), et des aides locales proposées par certaines collectivités. En tant qu'installateur certifié, nous vous accompagnons dans toutes vos démarches administratives pour obtenir ces aides.",
    },
    {
      question:
        "Combien de temps prend l'installation d'une borne de recharge ?",
      answer:
        "Pour une installation standard chez un particulier, comptez généralement une demi-journée à une journée complète. Pour les installations en copropriété ou en entreprise, le délai varie selon la complexité du projet et le nombre de bornes à installer. Nous établissons un planning précis lors de l'étude technique préalable pour minimiser les perturbations.",
    },
    {
      question:
        "Ma maison est-elle compatible avec l'installation d'une borne de recharge ?",
      answer:
        "La plupart des habitations sont compatibles avec l'installation d'une borne de recharge. Nous réalisons systématiquement une étude technique préalable pour vérifier la capacité de votre installation électrique et déterminer les éventuels travaux d'adaptation nécessaires. Dans certains cas, une augmentation de la puissance du compteur peut être recommandée.",
    },
    {
      question:
        "Proposez-vous un service de maintenance pour les bornes installées ?",
      answer:
        "Oui, nous proposons plusieurs formules de contrats de maintenance adaptées à vos besoins. Ces contrats incluent la vérification périodique de votre installation, les mises à jour logicielles, et une intervention rapide en cas de panne. Nous garantissons également toutes nos installations pendant 2 ans minimum, avec possibilité d'extension de garantie.",
    },
    {
      question: "Comment choisir la puissance de ma borne de recharge ?",
      answer:
        "Le choix de la puissance dépend de plusieurs facteurs : le type de véhicule électrique, votre installation électrique, et vos habitudes d'utilisation. Pour un usage domestique standard, une borne de 7,4 kW est généralement suffisante. Pour les entreprises ou les utilisateurs intensifs, des puissances supérieures (11 kW ou 22 kW) peuvent être recommandées. Nous vous conseillons personnellement pour trouver la solution optimale.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-[#111] to-black overflow-hidden"
    >
      {/* Éléments décoratifs en arrière-plan (sans éclairs) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Lignes diagonales */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#FFD700]/20 to-transparent transform rotate-[20deg] origin-top"></div>
          <div className="absolute top-0 left-[70%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#FFD700]/10 to-transparent transform rotate-[20deg] origin-top"></div>
        </div>

        {/* Cercles et formes géométriques */}
        <div className="shape absolute top-[10%] right-[10%] w-[200px] h-[200px] rounded-full border border-[#FFD700]/20 opacity-20"></div>
        <div className="shape absolute bottom-[15%] left-[10%] w-[150px] h-[150px] rounded-full bg-gradient-to-tr from-[#FFD700]/5 to-transparent opacity-10"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* En-tête de section */}
        <div
          className={`flex flex-col items-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Questions <span className="text-[#FFD700]">fréquentes</span>
          </h2>
          <div className="w-24 h-1 bg-[#FFD700]/30 rounded-full mb-6"></div>
          <p className="text-gray-300 text-center max-w-3xl">
            Retrouvez les réponses aux questions les plus fréquemment posées sur
            l&apos;installation de bornes de recharge pour véhicules
            électriques.
          </p>
        </div>

        {/* Accordéon FAQ personnalisé */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <CustomAccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>

        {/* CTA en bas de la FAQ */}
        <div
          className={`mt-12 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <p className="text-gray-300 mb-6">
            Vous avez d&apos;autres questions ? N&apos;hésitez pas à nous
            contacter directement.
          </p>
          <div className="inline-block bg-gradient-to-r from-[#FFD700] to-[#E6C200] p-[1px] rounded-full">
            <a
              href="#formulaire"
              className="inline-block bg-black hover:bg-black/80 text-[#FFD700] font-medium px-8 py-3 rounded-full transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Composant d'accordéon personnalisé sans Radix
function CustomAccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-[#FFD700]/20 rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm">
      {/* En-tête de l'accordéon */}
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`content-${question.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <span
          className={`font-medium transition-colors ${
            isOpen ? "text-[#FFD700]" : "text-white hover:text-[#FFD700]"
          }`}
        >
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-[#FFD700] shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Contenu de l'accordéon avec animation */}
      <div
        id={`content-${question.replace(/\s+/g, "-").toLowerCase()}`}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: contentHeight }}
        aria-hidden={!isOpen}
      >
        <div ref={contentRef} className="px-6 pb-4 text-gray-300">
          {answer}
        </div>
      </div>
    </div>
  );
}
