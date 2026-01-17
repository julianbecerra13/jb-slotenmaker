"use client";

import Image from "next/image";
import { Phone, Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const highlights = [
  { icon: Clock, text: "24/7 Beschikbaar" },
  { icon: Zap, text: "Binnen 30 min" },
  { icon: Shield, text: "Gecertificeerd" },
];

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      <Image
        src="/tecnico-trabajando.jpeg"
        alt="JB Slotenmaker aan het werk"
        fill
        className="object-cover object-[center_20%]"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-yellow-400 text-sm font-medium">Nu Beschikbaar in Almere</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)] leading-tight"
          >
            Noodslotendraaier
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block text-yellow-400"
            >
              24/7 Service
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Snel en professioneel slotenmakerservice aan huis. Deuren openen,
            sloten vervangen en beveiligingsadvies van gecertificeerde experts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-500 text-white text-lg px-8 py-6 shadow-xl shadow-green-600/30 transition-transform hover:scale-105"
            >
              <a href="tel:+31629194673">
                <Phone className="mr-2 h-5 w-5" />
                Bel Direct: 06 29 19 46 73
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-8 py-6 bg-transparent transition-transform hover:scale-105"
            >
              <a href="#prijzen">Bekijk Tarieven</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="p-2 bg-yellow-400/10 rounded-lg">
                  <item.icon className="h-5 w-5 text-yellow-400" />
                </div>
                <span className="text-gray-300 text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
