"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:py-24 py-12">
        {/* TEXTE PRINCIPAL EN MOBILE / TABLETTE */}
        <div className="block lg:hidden w-full px-4 text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            <span className="text-[#FFD700]">Expert</span> en <br />
            installation de bornes de <br />
            recharge
          </h1>
        </div>

        {/* IMAGE VOITURE */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <Image
            src="/img/car-picture.svg"
            alt="Voiture électrique branchée à une borne de recharge installée par AIM Services"
            width={900}
            height={500}
            className="w-full h-auto max-w-[900px] object-contain lg:object-left"
            priority
          />
        </div>

        {/* TEXTE DESCRIPTION + BOUTON */}
        <div className="w-full lg:w-1/2 px-4 lg:pr-24 text-center lg:text-left mt-12 lg:mt-0">
          {/* TEXTE PRINCIPAL EN DESKTOP */}
          <div className="hidden lg:block">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              <span className="text-[#FFD700]">Expert</span> en <br />
              installation de bornes de <br />
              recharge
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p className="text-white text-m md:text-base mb-6 max-w-lg mx-auto lg:mx-0 font-bold">
            Solutions professionnelles pour particuliers et entreprises.{" "}
            <br className="lg:block hidden" />
            Transformez votre mobilité avec nos bornes de recharge fiables{" "}
            <br />
            et performantes.
            <br />
            <br />
            Obtenez votre devis gratuit en quelques clics !
          </p>

          {/* BOUTON */}
          <Link href="/devis">
            <Button className="bg-[#FFD700] hover:bg-[#e6c200] text-black font-bold px-6 py-3 text-sm md:text-base cursor-pointer">
              Devis précis en ligne
            </Button>
          </Link>
        </div>
      </div>

      {/* Ligne fine en bas */}
      <div className="border-t border-[#FFD700] w-full" />
    </section>
  );
}
