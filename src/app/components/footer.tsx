"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function FooterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-gradient-to-br from-black via-black to-[#111]"
    >
      {/* Motifs en arrière-plan améliorés */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grille avec meilleure visibilité */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern
              id="footer-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="40"
                height="40"
                fill="none"
                stroke="#FFD700"
                strokeWidth="0.8"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#footer-grid)" />
          </svg>
        </div>

        {/* Lignes diagonales pour plus de dynamisme */}
        <div className="absolute top-0 left-0 w-full h-full opacity-15">
          <div className="absolute top-0 left-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#FFD700]/30 to-transparent transform rotate-[20deg] origin-top"></div>
          <div className="absolute top-0 left-[70%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#FFD700]/20 to-transparent transform rotate-[20deg] origin-top"></div>
        </div>

        {/* Cercles avec meilleure visibilité */}
        <div className="footer-shape absolute top-[10%] right-[15%] w-[300px] h-[300px] rounded-full border-2 border-[#FFD700]/20 opacity-40"></div>
        <div className="footer-shape absolute top-[20%] right-[20%] w-[200px] h-[200px] rounded-full border border-[#FFD700]/40 opacity-30"></div>
        <div className="footer-shape absolute bottom-[30%] left-[10%] w-[250px] h-[250px] rounded-full bg-gradient-to-tr from-[#FFD700]/10 to-transparent opacity-30"></div>

        {/* Éclairs en zigzag */}
        <div
          className="lightning-bolt absolute top-[15%] left-[20%]"
          style={{ animationDelay: "0s" }}
        >
          <svg
            width="24"
            height="60"
            viewBox="0 0 24 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0L0 25H10L5 60L24 28H12L14 0Z" fill="#FFD700" />
          </svg>
        </div>

        <div
          className="lightning-bolt absolute top-[45%] right-[30%]"
          style={{ animationDelay: "2.5s" }}
        >
          <svg
            width="30"
            height="70"
            viewBox="0 0 24 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0L0 25H10L5 60L24 28H12L14 0Z" fill="#FFD700" />
          </svg>
        </div>

        <div
          className="lightning-bolt absolute bottom-[25%] left-[40%]"
          style={{ animationDelay: "1.2s", transform: "scaleX(-1)" }}
        >
          <svg
            width="20"
            height="50"
            viewBox="0 0 24 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0L0 25H10L5 60L24 28H12L14 0Z" fill="#FFD700" />
          </svg>
        </div>

        <div
          className="lightning-bolt absolute top-[30%] left-[60%]"
          style={{ animationDelay: "3.7s", transform: "scaleX(-1)" }}
        >
          <svg
            width="28"
            height="65"
            viewBox="0 0 24 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0L0 25H10L5 60L24 28H12L14 0Z" fill="#FFD700" />
          </svg>
        </div>

        <div
          className="lightning-bolt absolute bottom-[40%] right-[20%]"
          style={{ animationDelay: "0.8s" }}
        >
          <svg
            width="22"
            height="55"
            viewBox="0 0 24 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0L0 25H10L5 60L24 28H12L14 0Z" fill="#FFD700" />
          </svg>
        </div>

        <div
          className="lightning-bolt absolute top-[60%] right-[50%]"
          style={{ animationDelay: "4.2s", transform: "rotate(15deg)" }}
        >
          <svg
            width="26"
            height="62"
            viewBox="0 0 24 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0L0 25H10L5 60L24 28H12L14 0Z" fill="#FFD700" />
          </svg>
        </div>

        {/* Éclairs supplémentaires plus petits */}
        <div
          className="lightning-bolt absolute top-[25%] left-[35%]"
          style={{ animationDelay: "5.3s", transform: "scale(0.7)" }}
        >
          <svg
            width="20"
            height="45"
            viewBox="0 0 24 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0L0 25H10L5 60L24 28H12L14 0Z" fill="#FFD700" />
          </svg>
        </div>

        <div
          className="lightning-bolt absolute bottom-[15%] right-[35%]"
          style={{
            animationDelay: "1.9s",
            transform: "scale(0.6) rotate(-10deg)",
          }}
        >
          <svg
            width="18"
            height="40"
            viewBox="0 0 24 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0L0 25H10L5 60L24 28H12L14 0Z" fill="#FFD700" />
          </svg>
        </div>
      </div>

      {/* Contenu */}
      <div className="container relative z-10 px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 text-center md:text-left">
          {/* Colonne 1 : logo et réseaux */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } flex flex-col items-center md:items-start`}
          >
            <div className="flex items-center mb-6">
              <Image
                src="/img/logo-aim-services.svg"
                alt="AIM SERVICES Logo"
                width={48}
                height={48}
                className="object-contain mr-3"
              />
              <div className="flex flex-col text-[#FFD700]">
                <span className="text-xl font-bold">AIM</span>
                <span className="text-sm">SERVICES</span>
              </div>
            </div>
            <p className="mb-6 text-gray-400 max-w-sm">
              Spécialiste en installation de bornes de recharge pour véhicules
              électriques. Notre expertise au service de votre mobilité
              électrique.
            </p>
            <div className="flex space-x-3 justify-center md:justify-start">
              <a
                href="#"
                aria-label="Facebook"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-[#FFD700]/20"
              >
                <Facebook className="w-4 h-4 text-[#FFD700]" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-[#FFD700]/20"
              >
                <Instagram className="w-4 h-4 text-[#FFD700]" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-[#FFD700]/20"
              >
                <Linkedin className="w-4 h-4 text-[#FFD700]" />
              </a>
            </div>
          </div>

          {/* Colonne 2 : navigation */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } flex flex-col items-center md:items-start`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h4 className="relative inline-block mb-6 text-lg font-bold text-white">
              Navigation
              <span className="absolute left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-0.5 -bottom-2 bg-[#FFD700]"></span>
            </h4>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <FooterLink href="/borne-de-recharge" label="Borne de recharge" />
              <FooterLink href="/nos-services" label="Nos services" />
              <FooterLink
                href="/installation-client"
                label="Installation client"
              />
              <FooterLink href="/a-propos" label="À propos" />
              <FooterLink href="/contact" label="Contact" />
            </ul>
          </div>

          {/* Colonne 3 : contact */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } flex flex-col items-center md:items-start`}
            style={{ transitionDelay: "0.3s" }}
          >
            <h4 className="relative inline-block mb-6 text-lg font-bold text-white">
              Contact
              <span className="absolute left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-0.5 -bottom-2 bg-[#FFD700]"></span>
            </h4>
            <ul className="space-y-4 text-center md:text-left">
              <li className="flex justify-center md:justify-start items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#FFD700]" />
                <span className="text-gray-300">
                  16, Rue Gaston Berger, 13010 Marseille
                </span>
              </li>
              <li className="flex justify-center md:justify-start items-center">
                <Phone className="w-5 h-5 mr-3 text-[#FFD700]" />
                <a
                  href="tel:+33612345678"
                  className="text-gray-300 hover:text-white"
                >
                  06 34 42 65 45
                </a>
              </li>
              <li className="flex justify-center md:justify-start items-center">
                <Mail className="w-5 h-5 mr-3 text-[#FFD700]" />
                <a
                  href="mailto:aim_service@hotmail.com"
                  className="text-gray-300 hover:text-white"
                >
                  aim_service@hotmail.com
                </a>
              </li>
              <li className="flex justify-center md:justify-start items-center">
                <Clock className="w-5 h-5 mr-3 text-[#FFD700]" />
                <span className="text-gray-300">Lun-Sam: 8h-18h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright avec séparation en dégradé améliorée */}
      <div className="relative mt-8">
        {/* Effet de dégradé amélioré au lieu d'une bordure sèche */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent"></div>

        {/* Lueur douce qui émane de la ligne */}
        <div className="absolute -top-6 left-0 right-0 h-8 bg-gradient-to-t from-[#FFD700]/10 to-transparent blur-sm"></div>
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#FFD700]/10 to-transparent blur-sm"></div>

        <div className="relative z-10 py-6">
          <div className="container px-4 mx-auto text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} AIM Services. Tous droits
              réservés.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Site réalisé par{" "}
              <a
                href="https://www.innov8digital.fr/"
                className="text-[#FFD700] hover:underline"
              >
                INNOV8 Digital
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Composant lien Footer sans icône (centrage nickel)
function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li className="text-center md:text-left">
      <Link
        href={href}
        className="text-gray-300 hover:text-[#FFD700] transition-colors block"
      >
        {label}
      </Link>
    </li>
  );
}
