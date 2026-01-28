"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* CONTENEDOR PRINCIPAL */}
      <div className="container mx-auto px-4 h-20 flex items-center">
        <div className="flex w-full items-center justify-between">
          {/* LOGO PRINCIPAL */}
          <div className="flex items-center gap-3 shrink-0">
            <svg
              className="h-10 w-10"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="40"
                height="40"
                rx="8"
                fill="currentColor"
                className="text-primary"
              />
              <path
                d="M12 20L20 12L28 20M12 24L20 16L28 24"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="flex flex-col leading-none">
              <span
                className="text-xl font-bold text-primary"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                TANDEM
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Servicios
              </span>
            </div>
          </div>

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("flota")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Nuestra Flota
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Preguntas
            </button>
          </nav>

          {/* DERECHA: BOTÓN + LOGO WIT + MOBILE */}
          <div className="flex items-center gap-4 shrink-0">
            <Button
              onClick={() => scrollToSection("cotizacion")}
              className="hidden lg:inline-flex bg-accent px-6 h-11 hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Cotizar Ahora
            </Button>

            {/* LOGO WIT (VISIBLE HASTA QUE APARECE HAMBURGUESA) */}
            <div className="hidden lg:flex items-center ml-auto pl-6 2xl:pl-10">
              <Image
                src="/logo-wit-dark.png"
                alt="WIT Logo"
                width={50}
                height={50}
                className="opacity-80"
              />
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background shadow-lg animate-fade-in">
          <nav className="flex flex-col gap-4 p-6">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("flota")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              Nuestra Flota
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              Preguntas
            </button>

            <Button
              onClick={() => scrollToSection("cotizacion")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full font-semibold"
            >
              Cotizar Ahora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
