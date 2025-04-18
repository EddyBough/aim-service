"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Zap } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    // Animation des formes géométriques
    const shapes = document.querySelectorAll(".shape");
    shapes.forEach((shape) => {
      const randomDelay = Math.random() * 5;
      const randomDuration = 15 + Math.random() * 10;
      (shape as HTMLElement).style.animationDelay = `${randomDelay}s`;
      (shape as HTMLElement).style.animationDuration = `${randomDuration}s`;
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-black via-black to-[#111] overflow-hidden"
    >
      {/* Formes géométriques modernes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cercles et formes géométriques */}
        <div className="shape absolute top-[10%] right-[15%] w-[300px] h-[300px] rounded-full border border-[#FFD700]/20 opacity-30"></div>
        <div className="shape absolute top-[20%] right-[20%] w-[200px] h-[200px] rounded-full border border-[#FFD700]/30 opacity-20"></div>
        <div className="shape absolute bottom-[30%] left-[10%] w-[250px] h-[250px] rounded-full bg-gradient-to-tr from-[#FFD700]/5 to-transparent opacity-20"></div>

        {/* Lignes diagonales */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#FFD700]/20 to-transparent transform rotate-[20deg] origin-top"></div>
          <div className="absolute top-0 left-[60%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#FFD700]/10 to-transparent transform rotate-[20deg] origin-top"></div>
        </div>

        {/* Grille subtile */}
        <div className="absolute inset-0 xl:opacity-5 opacity-10">
          <svg width="100%" height="100%">
            <pattern
              id="hero-grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="50"
                height="50"
                fill="none"
                stroke="#FFD700"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 px-4 mx-auto">
        <div className="flex flex-col items-center pt-20 pb-16 md:pt-32 md:pb-24">
          {/* Badge supérieur */}
          <div className="w-full flex justify-center items-center mb-8">
            <div
              className={`flex items-center px-4 py-2 text-xs font-medium text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-full transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Zap className="w-3 h-3 mr-2" />
              <span className="text-center">
                AIM SERVICES - EXPERTS EN MOBILITÉ ÉLECTRIQUE
              </span>
            </div>
          </div>

          {/* Titre principal avec animation */}
          <h1
            className={`max-w-4xl mb-6 text-4xl font-bold text-center text-white md:text-6xl transition-all duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Transformez votre{" "}
            <span className="relative inline-block">
              <span className="relative z-10">mobilité</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#FFD700]/20 -skew-x-6"></span>
            </span>{" "}
            avec nos bornes de recharge
          </h1>

          {/* Sous-titre */}
          <p
            className={`max-w-2xl mb-10 text-lg text-center text-gray-300 md:text-xl transition-all duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            Solutions professionnelles d&apos;installation de bornes de recharge
            pour particuliers et entreprises. Expertise, qualité et service
            personnalisé.
          </p>

          {/* Boutons d'action */}
          <div
            className={`flex flex-col items-center gap-4 mb-16 sm:flex-row transition-all duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <Link href="#formulaire">
              <Button className="px-8 py-6 text-lg font-bold text-black transition-all bg-[#FFD700] hover:bg-[#E6C200] hover:scale-105">
                Demander un devis
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link
              href="/services"
              className="flex items-center px-6 py-3 text-[#FFD700] hover:text-white transition-colors"
            >
              Découvrir nos services
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Image et statistiques */}
        <div
          className={`relative flex flex-col items-center mb-16 xl:flex-row transition-all duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          {/* Image avec effet de lueur */}
          <div className="relative w-full md:w-1/2 md:pl-0 -ml-4 sm:-ml-8">
            {/* Effet de glow */}
            <div className="absolute top-1/2 left-1/2 w-[80%] h-[80%] bg-[#FFD700]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0" />

            {/* Image de la voiture */}
            <div className="relative w-screen h-[250px] sm:h-[300px] md:h-[400px]">
              <Image
                src="/img/newcar.png"
                alt="Borne de recharge"
                fill
                className="object-contain md:object-left"
                priority
              />
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid w-full grid-cols-2 gap-6 mt-8 md:w-1/2 md:mt-0 md:grid-cols-2">
            <StatCard number="500" text="Installations réalisées" />
            <StatCard number="100%" text="Clients satisfaits" />
            <StatCard number="24/7" text="Support technique" />
            <StatCard number="5 ans" text="Garantie sur nos installations" />
          </div>
        </div>

        {/* Questionnaire Filter avec style modernisé */}
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1s" }}
        ></div>
      </div>

      {/* Séparateur de section */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#FFD700] to-transparent opacity-10"></div>
    </section>
  );
}

interface StatCardProps {
  number: string;
  text: string;
}

function StatCard({ number, text }: StatCardProps) {
  return (
    <div className="p-6 transition-all bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10">
      <div className="text-3xl font-bold text-[#FFD700]">{number}</div>
      <div className="mt-2 text-sm text-gray-300">{text}</div>
    </div>
  );
}
