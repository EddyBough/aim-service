"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X, Mail } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-32 relative xl:mr-16">
          {/* Logo seul à gauche (mobile/tablette) */}
          <Link href="/">
            <div className="xl:hidden w-20 h-20 flex-shrink-0">
              <Image
                src="/img/logo-aim-services.svg"
                alt="Logo AIM"
                width={75}
                height={75}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Texte AIM SERVICES centré (mobile/tablette) */}
          <div className="xl:hidden absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center">
            <span className="text-xl font-extrabold text-[#FFD700]">AIM</span>
            <span className="text-sm font-extralight text-[#FFD700]">
              SERVICES
            </span>
          </div>

          {/* Logo + texte (desktop uniquement) */}
          <Link href="/" className="hidden xl:flex items-center w-[200px]">
            <div className="w-24 h-24 mr-4 flex-shrink-0">
              <Image
                src="/img/logo-aim-services.svg"
                alt="AIM SERVICES Logo"
                width={96}
                height={96}
                className="object-contain xl:mr-96"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#FFD700] xl:ml-3">
                AIM
              </span>
              <span className="text-sm text-[#FFD700]">SERVICES</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-12 text-[18px]">
            <Link
              href="#nos-services"
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              Nos services
            </Link>
            <Link
              href="#demo"
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              Démonstration
            </Link>
            <Link
              href="#installation-client"
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              Installation client
            </Link>
            <Link
              href="#a-propos"
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              À propos
            </Link>
            <Link
              href="#formulaire"
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons (desktop uniquement) */}
          <div className="hidden xl:flex items-center space-x-2 justify-end w-[200px] xl:mr-7">
            <Link href="#formulaire">
              <Button className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold">
                Devis en ligne
              </Button>
            </Link>
            <Link
              href="mailto:aim_services@hotmail.com"
              className="bg-[#FFD700] p-2 rounded-md flex items-center justify-center"
            >
              <Mail className="h-5 w-5 text-black" />
            </Link>
          </div>

          {/* Menu Burger (mobile/tablette) */}
          <button
            className="xl:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-12 w-12 mr-3" />
            ) : (
              <Menu className="h-12 w-12 text-[#FFD700] mr-3" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-black">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col items-center space-y-4 text-center">
              <Link
                href="#nos-services"
                className="text-white hover:text-[#FFD700] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Nos services
              </Link>
              <Link
                href="#demo"
                className="text-white hover:text-[#FFD700] transition-colors"
              >
                Démonstration
              </Link>
              <Link
                href="#installation-client"
                className="text-white hover:text-[#FFD700] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Installation client
              </Link>
              <Link
                href="#a-propos"
                className="text-white hover:text-[#FFD700] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="#formulaire"
                className="text-white hover:text-[#FFD700] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4 w-full px-4">
                <Link href="#formulaire" className="w-full">
                  <Button className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold w-full">
                    Devis en ligne
                  </Button>
                </Link>
                <Link href="mailto:aim_services@hotmail.com" className="w-full">
                  <Button className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold w-full">
                    <Mail className="mr-2 h-4 w-4" /> Contact
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
