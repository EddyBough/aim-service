"use client";

import { useState, useRef } from "react";

export default function ClientVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="py-20 bg-black text-white px-4" id="demo">
      <div className="container mx-auto max-w-4xl text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Découvrez <span className="text-[#FFD700]">notre</span> savoir-faire
          en vidéo
        </h3>
        <p className="text-gray-400 mb-10">
          Dans cette vidéo, nous vous présentons une installation de borne de
          recharge. Transparence, expertise et proximité.
        </p>

        <div className="relative rounded-xl overflow-hidden shadow-lg group">
          <video
            ref={videoRef}
            controls
            className="w-full h-auto max-h-[800px] object-cover xl:scale-[0.95] md:scale-[0.9]"
            poster="/video/video-demonstration.mp4"
          >
            <source src="/video/video-demonstration.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>

          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm text-[#FFD700] text-xl font-bold hover:bg-black/60 transition-all"
            >
              ▶ Lancer la vidéo
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
