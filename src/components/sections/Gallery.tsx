"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { FadeInUp, ScaleIn } from "@/components/ui/motion";
import { motion } from "framer-motion";

const photos = [
  { src: "/cilindro-puerta.jpeg", alt: "Cilinder slot vervanging" },
  { src: "/cerradura-nueva.jpeg", alt: "Nieuwe slot installatie" },
  { src: "/puerta-mecanismo.jpeg", alt: "Deur mechanisme" },
  { src: "/cerradura-instalada.jpeg", alt: "Geïnstalleerd slot" },
];

export function Gallery() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="galerij" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white font-[family-name:var(--font-poppins)]">
            Ons Werk in Beeld
          </h2>
          <p className="text-gray-400">
            Bekijk enkele voorbeelden van onze recente projecten en vakmanschap.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {photos.slice(0, 2).map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-white text-sm font-medium">{photo.alt}</p>
              </div>
            </motion.div>
          ))}

          <ScaleIn delay={0.2} className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/video-trabajo.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Play className="h-8 w-8 text-black ml-1" />
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-2">
                Video
              </span>
              <p className="text-white font-medium">Slot vervanging in actie</p>
            </div>
          </ScaleIn>

          {photos.slice(2, 4).map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-white text-sm font-medium">{photo.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
