"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
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
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors font-[family-name:var(--font-poppins)]">
                JB Slotenmaker
              </h1>
              <p className="text-xs text-gray-400">24/7 Noodslotendraaier</p>
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

          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col items-end">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-400 font-medium">Beschikbaar</span>
              </div>
            </div>
            <Button
              asChild
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold shadow-lg shadow-yellow-400/20"
            >
              <a href="tel:+31629194673" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">06 29 19 46 73</span>
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
