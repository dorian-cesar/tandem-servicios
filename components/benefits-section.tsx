"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, Clock, Headphones, Award } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description:
      "Tu carga está protegida con seguros y sistemas de rastreo avanzados",
  },
  {
    icon: Clock,
    title: "Entregas Puntuales",
    description: "Cumplimos con los tiempos de entrega prometidos, sin excusas",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description:
      "Equipo disponible las 24 horas para resolver cualquier inquietud",
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "Más de 40 años brindando servicios de transporte de calidad",
  },
];

export function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
    <section id="beneficios" className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Nos destacamos por nuestro compromiso con la excelencia y la
            satisfacción del cliente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon className="h-10 w-10 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
