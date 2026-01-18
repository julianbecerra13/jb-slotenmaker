"use client";

import { Phone, Clock, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  { icon: Clock, text: "24/7 Beschikbaar" },
  { icon: MapPin, text: "Almere & Omgeving" },
  { icon: Shield, text: "Gecertificeerd" },
];

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-yellow-400 via-yellow-400 to-yellow-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-96 h-96 bg-black rounded-full -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black rounded-full translate-x-1/3 translate-y-1/3"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-black/10 text-black text-sm font-semibold px-4 py-2 rounded-full mb-6"
          >
            Noodhulp nodig?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-black mb-6 font-[family-name:var(--font-poppins)] leading-tight"
          >
            Buitengesloten?
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block"
            >
              Wij helpen direct!
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-black/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Bel nu en onze slotenmaker is binnen 30 minuten bij u.
            Geen voorrijkosten, transparante prijzen en garantie op al ons werk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              asChild
              size="lg"
              className="btn-call-ring bg-black hover:bg-gray-900 text-yellow-400 text-xl px-10 py-7 shadow-2xl shadow-black/30"
            >
              <a href="tel:+31629194673">
                <Phone className="mr-3 h-6 w-6 phone-icon-animated" />
                06 29 19 46 73
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="p-2 bg-black/10 rounded-lg">
                  <feature.icon className="h-5 w-5 text-black" />
                </div>
                <span className="text-black font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
