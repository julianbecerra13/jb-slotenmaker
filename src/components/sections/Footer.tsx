"use client";

import Image from "next/image";
import { Phone, Clock, MapPin, DoorClosed, Lock, Shield, AlertTriangle } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const services = [
  { icon: AlertTriangle, label: "Buitengesloten" },
  { icon: DoorClosed, label: "Deur openen" },
  { icon: Lock, label: "Slot vervangen" },
  { icon: Shield, label: "Beveiliging" },
];

const contactInfo = [
  { icon: Phone, label: "06 29 19 46 73", href: "tel:+31629194673" },
  { icon: Clock, label: "24/7 Beschikbaar" },
  { icon: MapPin, label: "Almere en omgeving" },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <StaggerItem className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-xl overflow-hidden border-2 border-yellow-400/30">
                <Image
                  src="/logo-jb.jpeg"
                  alt="JB Slotenmaker Logo"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-[family-name:var(--font-poppins)]">
                  JB Slotenmaker
                </h3>
                <p className="text-xs text-gray-500">Noodslotendraaier</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Uw betrouwbare slotenmaker in Almere voor spoedgevallen en regulier
              slotenwerk. 24/7 beschikbaar.
            </p>
            <a
              href="tel:+31629194673"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-5 py-3 rounded-xl hover:bg-yellow-300 transition-all hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              Nu Bellen
            </a>
          </StaggerItem>

          <StaggerItem>
            <h4 className="text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-6">
              Diensten
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href="#diensten"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                  >
                    <service.icon className="h-4 w-4 text-yellow-400/60 group-hover:text-yellow-400 transition-colors" />
                    <span className="text-sm">{service.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h4 className="text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <item.icon className="h-4 w-4 text-yellow-400/60 group-hover:text-yellow-400 transition-colors" />
                      <span className="text-sm">{item.label}</span>
                    </a>
                  ) : (
                    <span className="flex items-center gap-3 text-gray-400">
                      <item.icon className="h-4 w-4 text-yellow-400/60" />
                      <span className="text-sm">{item.label}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h4 className="text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-6">
              Openingstijden
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Maandag - Vrijdag</span>
                <span className="text-white">24 uur</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Zaterdag - Zondag</span>
                <span className="text-white">24 uur</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Feestdagen</span>
                <span className="text-white">24 uur</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Nu beschikbaar</span>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <FadeInUp delay={0.3} className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              {new Date().getFullYear()} JB Slotenmaker. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-6">
              <a href="#prijzen" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
                Tarieven
              </a>
              <a href="#diensten" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
                Diensten
              </a>
              <a href="#over-ons" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
                Over Ons
              </a>
            </div>
          </div>
        </FadeInUp>
      </div>
    </footer>
  );
}
