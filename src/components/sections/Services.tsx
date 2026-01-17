"use client";

import { DoorClosed, Lock, Shield, Building, ArrowRight } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const services = [
  {
    icon: DoorClosed,
    title: "Deur Openen",
    description:
      "Buitengesloten? Wij openen snel en schadevrij uw deur met professioneel gereedschap.",
    highlight: "Spoedservice",
  },
  {
    icon: Lock,
    title: "Slot Vervangen",
    description:
      "Upgrade naar veiligere sloten. SKG gecertificeerde sloten voor maximale beveiliging.",
    highlight: "SKG sloten",
  },
  {
    icon: Shield,
    title: "Beveiliging",
    description:
      "Advies en installatie van beveiligingssystemen voor uw woning of bedrijf.",
    highlight: "Gratis advies",
  },
  {
    icon: Building,
    title: "Zakelijke Diensten",
    description:
      "Complete slotenmakeroplossingen voor bedrijven, winkels en kantoorpanden.",
    highlight: "24/7 service",
  },
];

export function Services() {
  return (
    <section id="diensten" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Diensten</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-[family-name:var(--font-poppins)]">
            Onze Expertise
          </h2>
          <p className="text-gray-600">
            Professionele slotenmakersdiensten voor particulieren en bedrijven in Almere en omgeving.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <StaggerItem
              key={service.title}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-yellow-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-6 right-6">
                <span className="text-xs font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                  {service.highlight}
                </span>
              </div>

              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors group-hover:scale-110 transform duration-300">
                <service.icon className="h-7 w-7 text-yellow-400 group-hover:text-black transition-colors" />
              </div>

              <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-poppins)]">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <a
                href="tel:+31629194673"
                className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-yellow-600 transition-colors"
              >
                Meer informatie
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
