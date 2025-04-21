"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Emmanuelle Tournay",
      avatar: "/img/avatar.svg",
      rating: 5,
      testimonial:
        "Je suis très satisfait de l’installation de ma borne de recharge électrique. AIM SERVICE a été ponctuel, efficace et très soigneux dans son travail. Il a pris le temps de bien m’expliquer le fonctionnement de la borne et a laissé un chantier propre. Un service sérieux et de qualité, je recommande vivement !",
    },
    {
      name: "Hania Zbidi",
      avatar: "/img/avatar.svg",
      rating: 5,
      testimonial:
        "Très fort dans son domaine, excellent rapport qualité/prix, il a su analyser, diagnostiquer et trouver la solution la plus adaptée. Rapide et efficace, merci beaucoup. Je recommande+++",
    },
    {
      name: "Pro Tech",
      avatar: "/img/avatar.svg",
      rating: 5,
      testimonial:
        "Très bon électricien, professionnel et réactif travail soigné je recommande sans hésité !",
    },
    {
      name: "Amyne MOUHOUBI",
      avatar: "/img/avatar.svg",
      rating: 5,
      testimonial:
        "Nous avons fait appel à AIM Service pour l’installation d’une borne de recharge IRVE, et nous sommes entièrement satisfaits ! Baptiste, s’est montré disponible, pédagogue et très professionnel. L’installation a été réalisée rapidement, dans les règles de l’art, avec un suivi irréprochable du début à la fin. AIM Service est une entreprise sérieuse et réactive. Un service 5 étoiles que je recommande sans hésiter !",
    },
    {
      name: "Gerard Panneau",
      avatar: "/img/avatar.svg",
      rating: 5,
      testimonial:
        "Nous avons fait appel à cette société et avons pu apprécier le professionnalisme et la grande disponibilité des intervenants. Nous ferons appel à eux si nécessaire.",
    },
  ];

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to active testimonial
  useEffect(() => {
    if (testimonialsRef.current) {
      const scrollAmount =
        activeIndex *
        (testimonialsRef.current.scrollWidth / testimonials.length);
      testimonialsRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [activeIndex, testimonials.length]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-[#FFD700] to-[#E6C200]"
    >
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Motif géométrique */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern
              id="testimonial-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="black"
                strokeWidth="1"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#testimonial-pattern)" />
          </svg>
        </div>

        {/* Cercles décoratifs - masqués sur mobile pour économiser des ressources */}
        <div className="hidden md:block shape absolute top-[10%] left-[5%] w-[200px] h-[200px] rounded-full border border-black/10 opacity-20"></div>
        <div className="hidden md:block shape absolute bottom-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-black/5 to-transparent opacity-10"></div>

        {/* Grandes guillemets décoratifs - masqués sur mobile */}
        <div className="hidden md:block absolute top-[10%] left-[10%] text-black/10 text-[150px] font-serif">
          ❝
        </div>
        <div className="hidden md:block absolute bottom-[10%] right-[10%] text-black/10 text-[150px] font-serif">
          ❞
        </div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* En-tête de section */}
        <div
          className={`flex flex-col items-center mb-8 md:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block text-black">
            <span className="text-black">Témoignage</span>
            <span className="absolute -bottom-3 left-0 w-20 h-1 bg-gradient-to-r from-black to-black/30"></span>
          </h2>

          <div className="flex items-center p-2 mt-4 rounded-lg">
            <Link
              href="https://www.google.com/search?q=AIM%20services%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDK3sDAxNDewNLM0NjE2MDG1NN3AyPiKUdDR01ehOLWoLDM5tVjBsSyzeBErphgA11Zt8UMAAAA&rldimm=12788417096934304595&tbm=lcl&client=firefox-b-d&hl=fr&sa=X&ved=0CB8Q9fQKKABqFwoTCODEouqw34wDFQAAAAAdAAAAABAG&biw=1719&bih=1223&dpr=1#lkt=LocalPoiReviews"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2 mt-4 bg-white rounded-lg shadow-lg no-underline"
              aria-label="Voir les avis Google sur AIM Services"
            >
              <Image
                src="/img/Google.svg"
                alt="Google"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="mr-2 text-sm font-medium text-gray-800">
                Google Avis
              </span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-800">
                5/5
              </span>
            </Link>
          </div>
        </div>

        {/* Carrousel de témoignages */}
        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          {/* Conteneur de témoignages avec défilement horizontal */}
          <div
            ref={testimonialsRef}
            className="flex overflow-x-hidden snap-x snap-mandatory pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full px-2 md:px-4 snap-center">
                <div className="max-w-3xl p-0.5 mx-auto bg-gradient-to-r from-black/20 via-black/10 to-black/20 rounded-2xl">
                  <div className="p-4 md:p-8 bg-white rounded-xl shadow-xl">
                    {/* Contenu du témoignage */}
                    <div className="relative">
                      <p className="mb-4 md:mb-6 text-base md:text-lg italic text-gray-700">
                        {testimonial.testimonial}
                      </p>
                    </div>

                    {/* Informations sur le client */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center mb-4 sm:mb-0">
                        <div className="relative w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 overflow-hidden rounded-full bg-[#FFD700]/20">
                          <Image
                            src={testimonial.avatar || "/img/avatar.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">
                            {testimonial.name}
                          </h4>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:flex-col sm:items-end">
                        <div className="flex mb-0 sm:mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 md:w-4 md:h-4 ${
                                i < testimonial.rating
                                  ? "text-[#FFD700] fill-[#FFD700]"
                                  : "text-gray-400"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contrôles de navigation */}
          <div className="flex justify-center mt-4 md:mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${
                  activeIndex === index
                    ? "bg-black"
                    : "bg-black/30 hover:bg-black/50"
                }`}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
          </div>

          {/* Boutons précédent/suivant */}
          <button
            onClick={prevTestimonial}
            className="absolute left-1 md:left-4 z-10 p-2 md:p-3 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:bg-gray-100 transition-all hidden xl:block"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-1 md:right-4 z-10 p-2 md:p-3 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:bg-gray-100 transition-all hidden xl:block"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Statistiques en ligne */}
        <div
          className={`flex flex-wrap justify-center gap-4 md:gap-8 mt-8 md:mt-12 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="flex items-center">
            <div className="p-1.5 md:p-2 mr-2 md:mr-3 bg-black/10 rounded-full">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-black fill-black" />
            </div>
            <div>
              <div className="text-lg md:text-xl font-bold text-black">5/5</div>
              <div className="text-[10px] md:text-xs text-black/70">
                Note moyenne
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="p-1.5 md:p-2 mr-2 md:mr-3 bg-black/10 rounded-full">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <div>
              <div className="text-lg md:text-xl font-bold text-black">
                100+
              </div>
              <div className="text-[10px] md:text-xs text-black/70">
                Clients satisfaits
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="p-1.5 md:p-2 mr-2 md:mr-3 bg-black/10 rounded-full">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className="text-lg md:text-xl font-bold text-black">
                99,99%
              </div>
              <div className="text-[10px] md:text-xs text-black/70">
                Recommandation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
