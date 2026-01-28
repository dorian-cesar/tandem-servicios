"use client";

import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Wifi,
  Usb,
  Tv,
  Wind,
  Armchair,
  Users,
  Briefcase,
  Leaf,
  SlidersHorizontal,
} from "lucide-react";

const fleet = [
  {
    name: "Buses Convencionales",
    badge: "Más Demandado",
    capacity: "45–50 pasajeros",
    image: "/placeholder.svg",
    features: [
      { icon: Wind, label: "Aire Acondicionado" },
      { icon: Tv, label: "Sistema de Audio / TV" },
      { icon: Armchair, label: "Asientos Reclinables" },
      { icon: Briefcase, label: "Amplio Maletero" },
    ],
  },
  {
    name: "Buses Eléctricos",
    badge: "Sustentable",
    capacity: "40–45 pasajeros",
    image: "/placeholder.svg",
    features: [
      { icon: Wind, label: "Climatización Silenciosa" },
      { icon: Usb, label: "Puertos USB" },
      { icon: Wifi, label: "WiFi a Bordo" },
      { icon: Leaf, label: "Viaje Ecológico" },
    ],
  },
  {
    name: "Minibuses y Vans",
    badge: "Flexible",
    capacity: "10–20 pasajeros",
    image: "/placeholder.svg",
    features: [
      { icon: Wind, label: "Aire Acondicionado" },
      { icon: Usb, label: "Carga USB" },
      { icon: Armchair, label: "Asientos Ejecutivos" },
      { icon: Users, label: "Ideal para Grupos Pequeños" },
    ],
  },
  {
    name: "Buses y Minibuses",
    badge: null,
    capacity: "20–45 pasajeros",
    image: "/placeholder.svg",
    features: [
      { icon: Wind, label: "Climatización" },
      { icon: Tv, label: "Audio / Video" },
      { icon: SlidersHorizontal, label: "Configuración Mixta" },
      { icon: Users, label: "Solución Escalable" },
    ],
  },
];

export function FleetSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fleet.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) =>
                  prev.includes(index) ? prev : [...prev, index]
                );
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToQuote = () => {
    const element = document.getElementById("cotizacion");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="flota"
      className="py-20 bg-background scroll-mt-18"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Moderna, Cómoda y <span className="text-accent">Confiable</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestra flota de buses premium está equipada con la última
            tecnología para garantizar su comodidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {fleet.map((vehicle, index) => (
            <Card
              key={index}
              className={`overflow-hidden py-0 flex flex-col hover:shadow-2xl transition-all duration-300 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="w-full h-56 object-cover"
                />
                {vehicle.badge && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-semibold px-3 py-1">
                    {vehicle.badge}
                  </Badge>
                )}
              </div>

              <div className="p-6 flex flex-col h-full">
                <h3
                  className="text-2xl font-bold text-foreground mb-1 leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {vehicle.name}
                </h3>

                <p className="text-muted-foreground mb-4">{vehicle.capacity}</p>

                <div className="grid grid-cols-2 gap-3 mb-6 min-h-24">
                  {vehicle.features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-snug">
                          {feature.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <Button
                  onClick={scrollToQuote}
                  className="w-full bg-primary hover:bg-primary/90 mt-auto"
                  size="lg"
                >
                  Solicitar Cotización
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
