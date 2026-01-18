"use client";

import { DoorClosed, Lock, Shield, AlertTriangle, ArrowRight } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const services = [
  {
    icon: AlertTriangle,
    title: "Buitengesloten?",
    description:
      "Staat u voor een dichte deur? Wij zijn er binnen 30 minuten! 24/7 spoedservice voor noodgevallen.",
    highlight: "SPOED 24/7",
    featured: true,
  },
  {
    icon: DoorClosed,
    title: "Deur Openen",
    description:
      "Professioneel en schadevrij uw deur openen met gespecialiseerd gereedschap.",
    highlight: "Schadevrij",
    featured: false,
  },
  {
    icon: Lock,
    title: "Slot Vervangen",
    description:
      "Upgrade naar veiligere sloten. SKG gecertificeerde sloten voor maximale beveiliging.",
    highlight: "SKG sloten",
    featured: false,
  },
  {
    icon: Shield,
    title: "Beveiliging",
    description:
      "Advies en installatie van beveiligingssystemen voor uw woning.",
    highlight: "Gratis advies",
    featured: false,
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
            Professionele slotenmakersdiensten voor particulieren in Almere en omgeving.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <StaggerItem
              key={service.title}
              className={`group relative rounded-2xl p-8 transition-all duration-300 ${
                service.featured
                  ? "bg-black text-white ring-2 ring-yellow-400 shadow-xl shadow-yellow-400/20"
                  : "bg-white border border-gray-100 hover:border-yellow-400 hover:shadow-xl"
              }`}
            >
              <div className="absolute top-6 right-6">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  service.featured
                    ? "text-black bg-yellow-400 animate-pulse"
                    : "text-yellow-600 bg-yellow-50"
                }`}>
                  {service.highlight}
                </span>
              </div>

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transform duration-300 ${
                service.featured
                  ? "bg-yellow-400"
                  : "bg-black group-hover:bg-yellow-400"
              }`}>
                <service.icon className={`h-7 w-7 transition-colors ${
                  service.featured
                    ? "text-black"
                    : "text-yellow-400 group-hover:text-black"
                }`} />
              </div>

              <h3 className={`text-xl font-bold mb-3 font-[family-name:var(--font-poppins)] ${
                service.featured ? "text-yellow-400" : ""
              }`}>
                {service.title}
              </h3>

              <p className={`mb-6 leading-relaxed ${
                service.featured ? "text-gray-300" : "text-gray-600"
              }`}>
                {service.description}
              </p>

              <a
                href="tel:+31629194673"
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                  service.featured
                    ? "text-yellow-400 hover:text-yellow-300"
                    : "text-black hover:text-yellow-600"
                }`}
              >
                {service.featured ? "Bel Nu!" : "Meer informatie"}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
