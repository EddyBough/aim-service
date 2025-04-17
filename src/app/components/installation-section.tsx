"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";

type Installation = {
  id: number;
  image: string;
};

export default function InstallationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<Installation | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const installations: Installation[] = [
    { id: 1, image: "/img/picture-first.png" },
    { id: 2, image: "/img/picture-second.png" },
    { id: 3, image: "/img/picture-third.png" },
    { id: 4, image: "/img/picture-one.png" },
    { id: 5, image: "/img/picture-two.png" },
    { id: 6, image: "/img/picture-three.png" },
    { id: 7, image: "/img/picture-four.png" },
    { id: 8, image: "/img/picture-five.png" },
    { id: 9, image: "/img/picture-six.png" },
  ];

  useEffect(() => {
    const ref = sectionRef.current;
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

    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === installations.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? installations.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount =
        activeIndex * (carouselRef.current.scrollWidth / installations.length);
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [activeIndex, installations.length]);

  const openFullscreen = (installation: Installation) => {
    setSelectedImage(installation);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-[#111] to-[#111]/90"
    >
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#FFD700]/20 to-transparent rotate-[20deg] origin-top"></div>
          <div className="absolute top-0 left-[70%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#FFD700]/10 to-transparent rotate-[20deg] origin-top"></div>
        </div>
        <div className="shape absolute top-[10%] right-[10%] w-[200px] h-[200px] rounded-full border border-[#FFD700]/20 opacity-20"></div>
        <div className="shape absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#FFD700]/5 to-transparent opacity-10"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div
          className={`flex flex-col items-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold text-center text-white md:text-4xl">
            Nos <span className="text-[#FFD700]">réalisations</span>
          </h2>
          <p className="max-w-2xl mb-8 text-center text-gray-300">
            Découvrez nos installations de bornes de recharge pour véhicules
            électriques déjà installées chez nos clients.
          </p>
        </div>

        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden snap-x snap-mandatory"
          >
            {installations.map((installation) => (
              <div
                key={installation.id}
                className="min-w-full px-4 snap-center"
              >
                <div className="relative overflow-hidden rounded-xl group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-[400px] md:h-[600px] w-full">
                    <Image
                      src={installation.image}
                      alt="Installation"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <button
                      onClick={() => openFullscreen(installation)}
                      className="absolute z-10 p-2 bg-black/50 rounded-full top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label="Voir en plein écran"
                    >
                      <Plus className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {installations.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeIndex === i
                    ? "bg-[#FFD700]"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Voir l'image ${i + 1}`}
              />
            ))}
          </div>

          {installations.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 z-10 p-3 -translate-y-1/2 bg-black/50 rounded-full backdrop-blur-sm top-1/2 text-[#FFD700] hover:bg-black/80 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 z-10 p-3 -translate-y-1/2 bg-black/50 rounded-full backdrop-blur-sm top-1/2 text-[#FFD700] hover:bg-black/80 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-6xl p-4">
            <div className="relative h-[85vh] w-full">
              <Image
                src={selectedImage.image}
                alt="Installation"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
