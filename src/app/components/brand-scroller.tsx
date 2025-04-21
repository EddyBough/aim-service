"use client";

import Image from "next/image";

export default function BrandScroller() {
  const logos = [
    "/img/Logo_TotalEnergies.svg",
    "/img/Logo_IZI_by_EDF.svg",
    "/img/SNEF_Logo.svg",
    "/img/Logo_Dalkia.svg",
    "/img/WALLBOX-logo.png",
    "/img/schneider-electric-vector-logo.svg",
    "/img/hager-elektro-ab-vector-logo.svg",
    "/img/Logo_Legrand.svg",
    "/img/logo-chargeguru.svg",
  ];

  return (
    <section className="py-10 overflow-hidden" id="borne-de-recharge">
      <div className="text-center text-white mb-6">
        <h3 className="text-xl md:text-2xl font-semibold">
          Ils nous font confiance
        </h3>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex w-max gap-10">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-36 h-20 relative">
              <Image
                src={logo}
                alt={`Logo marque ${index}`}
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
