"use client";

import Image from "next/image";
import { Clock, Shield, Car, CheckCircle2 } from "lucide-react";
import { FadeInLeft, FadeInRight, FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const features = [
  {
    icon: Clock,
    title: "24/7 Bereikbaar",
    description: "Altijd beschikbaar, ook 's nachts en in het weekend.",
  },
  {
    icon: Shield,
    title: "Gecertificeerd",
    description: "Professionele slotenmakers met de nieuwste technieken.",
  },
  {
    icon: Car,
    title: "Snel ter Plaats",
    description: "Binnen 30 minuten op locatie in Almere.",
  },
];

const stats = [
  { value: "24/7", label: "Beschikbaar" },
  { value: "30", label: "Minuten responstijd" },
  { value: "100%", label: "Klanttevredenheid" },
];

export function About() {
  return (
    <section id="over-ons" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeInLeft className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/vehiculo-empresa.jpeg"
                alt="JB Slotenmaker servicewagen"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <FadeInUp delay={0.3} className="absolute -bottom-8 -right-8 z-20 bg-black rounded-2xl p-6 shadow-xl hidden md:block">
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeInUp>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-yellow-400 rounded-2xl -z-10 hidden md:block" />
          </FadeInLeft>

          <FadeInRight>
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Over Ons</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 font-[family-name:var(--font-poppins)]">
              Uw Betrouwbare Slotenmaker in Almere
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Met jarenlange ervaring bieden wij een betrouwbare en snelle
              slotenmakersdienst in Almere en omgeving. Of het nu dag of nacht
              is, weekend of feestdag, wij staan altijd voor je klaar met de beste service.
            </p>

            <StaggerContainer className="space-y-6 mb-8">
              {features.map((feature) => (
                <StaggerItem key={feature.title} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                    <feature.icon className="h-6 w-6 text-yellow-500 group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeInUp delay={0.4} className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                Waarom kiezen voor JB Slotenmaker?
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Geen voorrijkosten",
                  "Transparante prijzen",
                  "Garantie op werk",
                  "Gecertificeerde experts",
                  "Spoedservice beschikbaar",
                  "24/7 bereikbaar",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeInUp>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
}
