"use client";

import AccordionItem from "./ui/accordion-item";

const faqItems = [
  {
    question: "Combien coûte l’installation d’une borne ?",
    answer:
      "Le tarif démarre à 900€ TTC, ce qui inclut la borne + la main d’œuvre. Ce prix peut varier selon les spécificités de votre installation (longueur du câblage, configuration du tableau électrique, etc.).",
  },
  {
    question:
      "Existe-t-il des aides financières pour l’installation de bornes de recharge ?",
    answer:
      "Oui ! 500€ d’aide de l’État pour les particuliers via le crédit d’impôt (même si vous ne payez pas d’impôt, un chèque vous est envoyé). En copropriété, l’aide Advenir peut aller jusqu’à 600€. Des subventions supplémentaires sont aussi disponibles pour les professionnels du tourisme, les hôtels, campings, restaurants, etc. On vous accompagne dans la constitution du dossier !",
  },
  {
    question: "Pourquoi choisir AIM Services ?",
    answer:
      "Nous mettons l’humain au centre de chaque projet. Une équipe réactive, à l’écoute, avec plus de 3 ans d’expérience dans l’installation de bornes de recharge. Notre priorité : votre satisfaction et une relation de confiance.",
  },
  {
    question: "Proposez-vous un service de maintenance ?",
    answer:
      "Oui ! Toutes nos installations sont garanties pendant toute la durée de vie de la borne. Nous assurons un suivi régulier, avec 2 visites par an incluses pour la vérification technique de votre borne. Vous êtes sereins, toute l’année.",
  },
  {
    question: "Quels types de services proposez-vous ?",
    answer:
      "Nous intervenons pour : Installation de bornes de recharge, Dépannage électrique, Maintenance préventive ou corrective, Autres travaux en électricité générale : habitat, tertiaire, industrie. Que vous soyez un particulier, une entreprise, une copropriété ou une collectivité, on s’adapte à vos besoins.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#111] to-black">
      <div className="container px-4 mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Questions <span className="text-[#FFD700]">fréquentes</span>
        </h2>
        <div className="w-24 h-1 bg-[#FFD700]/30 rounded-full mx-auto mb-6"></div>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
          Retrouvez les réponses aux questions les plus fréquemment posées sur
          l&apos;installation de bornes de recharge pour véhicules électriques.
        </p>

        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <AccordionItem key={idx} {...item} />
          ))}
        </div>

        <div className="mt-12 text-center">
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
