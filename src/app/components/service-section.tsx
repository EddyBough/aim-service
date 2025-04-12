"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, Shield, Clock } from "lucide-react";

export default function ServicesSection() {
  return (
    <section
      className="bg-[#FFD700] py-20 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Motif de fond décoratif */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-10 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="border border-black"
            style={{ opacity: Math.random() * 0.5 + 0.1 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Titre décoré */}
        <div className="flex justify-center mb-6">
          <div className="p-2 bg-black/10 rounded-full">
            <h2
              id="services-heading"
              className="px-6 py-2 text-sm font-bold text-black bg-white/80 rounded-full tracking-wider"
            >
              NOS SERVICES
            </h2>
          </div>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-center text-black mb-3">
          Solutions de recharge complètes
        </h3>
        <div className="w-24 h-1 bg-black/30 mx-auto rounded-full mb-4" />
        <p className="max-w-2xl text-center text-black/80 mx-auto mb-12 px-4 md:px-0">
          Nous proposons une gamme complète de services pour répondre à tous vos
          besoins en matière de recharge de véhicules électriques.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2">
          <ServiceCard
            icon={<Zap className="h-8 w-8 text-black" />}
            title="Installation de Bornes"
            description="Installation professionnelle de bornes de recharge pour particuliers et entreprises."
          />
          <ServiceCard
            icon={<Shield className="h-8 w-8 text-black" />}
            title="Maintenance IRVE & SAV"
            description="Service de maintenance et dépannage pour assurer la fiabilité de vos équipements."
          />
          <ServiceCard
            icon={<Clock className="h-8 w-8 text-black" />}
            title="Dépannage & Autres travaux électriques"
            description="Travaux divers, accompagnement personnalisé, étude technique et dépannage sur vos installations électriques."
          />
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`bg-black rounded-lg p-8 text-white shadow-xl group relative overflow-hidden transition-all duration-700 ease-in-out transform 
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Décor animé */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-[#FFD700] rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>

      <div className="bg-[#FFD700] rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
        {icon}
      </div>

      <h4 className="text-xl font-bold mb-4">{title}</h4>
      <p className="text-sm text-white/90">{description}</p>
    </article>
  );
}
