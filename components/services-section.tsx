"use client";

import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { HardHat, Factory, Users, Car } from "lucide-react";

const services = [
  {
    icon: HardHat,
    title: "Transporte Minero",
    description:
      "Soluciones integrales para faenas y turnos mineros: transporte externo desde comunas hasta faenas (con buses, taxibuses y minibuses), transporte interno dentro de faenas con vehículos completamente acreditados, y conexiones interurbanas con buses de uno o dos pisos.",
    image: "/images/2TRANSPORTEMINERO.jpg",
    objectPosition: "center center",
  },
  {
    icon: Factory,
    title: "Transporte Industrial",
    description:
      "Movilidad para complejos logísticos y plantas industriales. Incluye servicios interurbanos para conectar ciudades con buses de uno o dos pisos, y urbanos para desplazamientos dentro de la ciudad con opciones variadas de buses.",
    image: "/images/3INDUSTRIAL.jpg",
    objectPosition: "center 70%",
  },
  {
    icon: Users,
    title: "Transporte Particular",
    description:
      "Servicios ejecutivos y grupales para ocasiones especiales: excursiones turísticas, eventos escolares, universitarios, empresariales o celebraciones. Disponible 24/7 para garantizar estilo, seguridad y adaptabilidad.",
    image: "/images/4TRPARTICULAR.jpg",
    objectPosition: "center 30%",
  },
  {
    icon: Car,
    title: "Radio Taxis",
    description:
      "Traslados seguros y eficientes para necesidades temporales o específicas. Ofrecemos servicios confiables y personalizados, incluyendo transporte ejecutivo para empresas o individuos, con profesionalismo y comodidad.",
    image: "/images/5RADIOTAXI.jpg",
    objectPosition: "center 30%",
  },
];

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
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

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="py-20 bg-muted/30 scroll-mt-18"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Soluciones de Transporte para cada{" "}
            <span className="text-accent">Sector</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Servicios de transporte especializados diseñados a la medida de tus
            necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`overflow-hidden py-0 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: service.objectPosition }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3
                      className="text-xl font-bold text-card-foreground"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
