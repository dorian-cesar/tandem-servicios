"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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
          <Link href="/" className="flex items-center shrink-0 mt-1.5">
            <Image
              src="/logo-tandem-servicios.png"
              alt="Logo Tandem Servicios"
              width={150}
              height={40}
              className="h-12 w-auto object-contain hover:scale-105 transition-transform"
              priority
            />
          </Link>

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
