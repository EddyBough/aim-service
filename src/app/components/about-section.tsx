"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, Award, Shield, CheckCircle } from "lucide-react";

export default function AboutSection() {
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

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-black to-[#111] text-white py-24 relative overflow-hidden"
    >
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#FFD700]/20 to-transparent transform -rotate-[20deg] origin-top"></div>
          <div className="absolute top-0 right-[60%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#FFD700]/10 to-transparent transform -rotate-[20deg] origin-top"></div>
        </div>
        <div className="shape absolute top-[20%] left-[10%] w-[200px] h-[200px] rounded-full border border-[#FFD700]/20 opacity-20"></div>
        <div className="shape absolute bottom-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#FFD700]/5 to-transparent opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Badge supérieur */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 text-xs font-medium text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-full">
            <Award className="w-3 h-3 mr-2" />
            <span>EXPERTISE & CERTIFICATIONS</span>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Texte */}
          <div
            className={`w-full md:w-1/2 md:pl-12 text-center md:text-left transition-all duration-1000 order-2 md:order-1 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block">
              <span className="text-[#FFD700]">À propos</span> de nous
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFD700]/30"></span>
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-gray-300">
              <p>
                Artisan électricien certifié, je suis spécialisé dans
                l&apos;installation de bornes de recharge pour véhicules
                électriques. Fort de plusieurs années d&apos;expérience dans les
                domaines résidentiel, tertiaire, industriel et IRVE, je vous
                accompagne dans la transition vers une mobilité plus propre et
                durable.
              </p>
              <p>
                Formé au sein de l&apos;entreprise familiale BV Elec à
                Marseille, j&apos;ai acquis les bases solides de
                l&apos;électricité du bâtiment avant de me spécialiser dans les
                énergies renouvelables. Diplômé IRVE P1 & P2 depuis 2022,
                j&apos;ai perfectionné mon expertise chez Tokheim Services Group
                (TSG), multinationale reconnue, en installant tous types de
                bornes — du modèle 7,4kW monophasé à la borne rapide DC de
                300kW.
              </p>
              <p>
                Aujourd&apos;hui, je mets mes compétences au service des
                particuliers, professionnels et collectivités. Je suis certifié
                Qualifelec IRVE et installateur agréé Advenir, ce qui permet à
                mes clients de bénéficier d&apos;aides de l&apos;État.
              </p>
            </div>

            {/* Bloc Engagements & Certifs */}
            <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="flex items-center text-[#FFD700] font-semibold mb-3">
                    <Shield className="w-4 h-4 mr-2" /> Nos engagements
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#FFD700] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm">Conseil personnalisé</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#FFD700] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm">
                        Installation professionnelle et conforme
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#FFD700] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm">
                        Accompagnement administratif
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="flex items-center text-[#FFD700] font-semibold mb-3">
                    <Award className="w-4 h-4 mr-2" /> Marques & clients
                  </h3>
                  <p className="text-sm text-gray-300">
                    Wallbox, Schneider, Hager, ABB, Legrand, BEEV, DAZE,
                    Autel... TotalEnergies, Izivia, IZI by EDF, SNEF, Dalkia,
                    ChargeGuru, WAAT...
                  </p>
                </div>
              </div>
              <p className="mt-4 italic text-center text-white">
                👉 Besoin d&apos;une expertise ? Contactez-moi pour un devis ou
                une étude personnalisée.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link href="#formulaire">
                <Button className="group px-6 py-3 font-bold text-black transition-all bg-[#FFD700] hover:bg-[#E6C200] hover:scale-105">
                  Devis gratuit
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Bloc image & logos */}
          <div
            className={`w-full md:w-1/2 transition-all duration-1000 order-1 md:order-2 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 w-[80%] h-[80%] bg-[#FFD700]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

              {/* Logo */}
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/img/logo-aim-services.svg"
                  alt="Notre équipe"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>

            {/* Logos certifs */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
              <div className="relative w-[120px] h-[60px]">
                <Image
                  src="/img/logo-advenir.png"
                  alt="Certification Advenir"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[220px] h-[120px]">
                <Image
                  src="/img/logo-qualifelec.png"
                  alt="Certification Qualifelec IRVE"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
