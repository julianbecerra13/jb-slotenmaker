"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Over Ons", href: "#over-ons" },
  { label: "Diensten", href: "#diensten" },
  { label: "Prijzen", href: "#prijzen" },
  { label: "Galerij", href: "#galerij" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-xl" : "bg-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-xl border-2 border-yellow-400/50 group-hover:border-yellow-400 transition-colors">
              <Image
                src="/logo-jb.jpeg"
                alt="JB Slotenmaker Logo"
                width={52}
                height={52}
                className="rounded-lg"
                priority
              />
            </div>
            <div>
              <h1 className="text-base sm:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors font-[family-name:var(--font-poppins)]">
                JB Slotenmaker
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-400">24/7 Noodslotendraaier</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-300 hover:text-yellow-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden lg:flex items-center gap-3 border-r border-gray-700 pr-4">
              <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1">
                <Clock className="h-3.5 w-3.5 text-green-400" />
                <span className="text-xs text-green-400 font-semibold">30 min garantie</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-400 font-medium">24/7</span>
              </div>
            </div>
            <a href="tel:+31629194673" className="hidden md:flex items-center gap-2 text-white hover:text-yellow-400 transition-colors">
              <Phone className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-bold">06 29 19 46 73</span>
            </a>
            <Button
              asChild
              className="btn-call-yellow bg-yellow-400 text-black hover:bg-yellow-300 font-semibold shadow-lg shadow-yellow-400/20"
            >
              <a href="tel:+31629194673" className="flex items-center gap-2">
                <Phone className="h-4 w-4 phone-icon-animated" />
                <span className="hidden sm:inline">Bel Nu!</span>
                <span className="sm:hidden">Bellen</span>
              </a>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-yellow-400 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-gray-900 rounded-lg transition-all text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
