"use client";

import { Phone, Check, Clock, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const pricingPlans = [
  {
    title: "Dagtarief",
    subtitle: "Maandag - Vrijdag",
    price: "100",
    schedule: "06:00 - 18:00",
    icon: Sun,
    popular: true,
    features: [
      "Snelle service overdag",
      "Garantie op werk",
      "Geen voorrijkosten",
    ],
  },
  {
    title: "Avondtarief",
    subtitle: "Maandag - Vrijdag",
    price: "120",
    schedule: "18:00 - 00:00",
    icon: Moon,
    popular: false,
    features: [
      "Avond beschikbaar",
      "Spoedservice",
      "Garantie op werk",
    ],
  },
  {
    title: "Nachttarief",
    subtitle: "Maandag - Vrijdag",
    price: "150",
    schedule: "00:00 - 06:00",
    icon: Moon,
    popular: false,
    features: [
      "Nacht spoedservice",
      "Altijd bereikbaar",
      "Garantie op werk",
    ],
  },
  {
    title: "Weekend Dag",
    subtitle: "Za, Zo & Feestdagen",
    price: "120",
    schedule: "06:00 - 18:00",
    icon: Sun,
    popular: false,
    features: [
      "Weekend service",
      "Snelle hulp",
      "Garantie op werk",
    ],
  },
  {
    title: "Weekend Avond",
    subtitle: "Za, Zo & Feestdagen",
    price: "150",
    schedule: "18:00 - 00:00",
    icon: Moon,
    popular: false,
    features: [
      "Weekend avondservice",
      "Spoedservice",
      "Garantie op werk",
    ],
  },
  {
    title: "Weekend Nacht",
    subtitle: "Za, Zo & Feestdagen",
    price: "200",
    schedule: "00:00 - 06:00",
    icon: Moon,
    popular: false,
    features: [
      "24/7 spoedservice",
      "Altijd bereikbaar",
      "Garantie op werk",
    ],
  },
];

export function Pricing() {
  return (
    <section id="prijzen" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Tarieven</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-[family-name:var(--font-poppins)]">
            Transparante Prijzen
          </h2>
          <p className="text-gray-600 mb-4">
            Alle prijzen zijn inclusief BTW en voorrijkosten.
          </p>
          <div className="relative bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 text-sm text-gray-700 animate-pulse-border">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
              Belangrijk
            </div>
            <p className="font-semibold text-yellow-800 mb-1 mt-1">Dit zijn prijzen voor het openen van de deur.</p>
            <p>Moet het slot vervangen worden? Neem contact op voor de exacte prijs bij extra werkzaamheden.</p>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <StaggerItem
              key={plan.title + plan.subtitle}
              className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "ring-2 ring-yellow-400 shadow-xl shadow-yellow-400/10"
                  : "border border-gray-200 hover:border-yellow-400 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Populair
                </div>
              )}

              <div className="bg-black p-6 text-center">
                <plan.icon className="h-8 w-8 mx-auto mb-3 text-yellow-400" />
                <h3 className="text-lg font-bold text-white">{plan.title}</h3>
                <p className="text-gray-400 text-sm">{plan.subtitle}</p>
              </div>

              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold text-gray-500">€</span>
                    <span className="text-5xl font-bold">{plan.price}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    {plan.schedule}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? "btn-call-yellow bg-yellow-400 text-black hover:bg-yellow-300"
                      : "bg-black text-white hover:bg-gray-800 hover:scale-105 transition-transform"
                  }`}
                >
                  <a href="tel:+31629194673">
                    <Phone className={`mr-2 h-4 w-4 ${plan.popular ? "phone-icon-animated" : ""}`} />
                    Nu Bellen
                  </a>
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.4} className="text-center text-sm text-gray-500 mt-8">
          * Prijzen kunnen variëren bij complexe werkzaamheden. Vraag altijd eerst om een offerte.
        </FadeInUp>
      </div>
    </section>
  );
}
