"use client";

import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { MapPin, Zap, ShieldCheck } from "lucide-react";

export function WhyChooseSection() {
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
    <section
      className="py-20 bg-primary text-primary-foreground"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ¡Elígenos!
          </h2>
          <p className="text-xl md:text-2xl font-light">
            Renovamos el transporte empresarial de la minería
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <Card className="p-6 bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-lg p-3 mt-1">
                  <Zap className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-foreground">
                    Flexibilidad en rutas y horarios
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Diseñamos itinerarios personalizados, con horarios flexibles
                    y paradas estratégicas según tu agenda.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-lg p-3 mt-1">
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-foreground">
                    Amplia cobertura nacional
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Operamos en todo el territorio nacional, conectando
                    aeropuertos, hoteles, eventos y viajes de negocios.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-lg p-3 mt-1">
                  <ShieldCheck className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-foreground">
                    Seguridad y puntualidad garantizada
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Conductores profesionales, flota certificada y cumplimiento
                    estricto de horarios para asegurar traslados confiables y
                    sin contratiempos.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <img
              // src="/map-of-chile-showing-coverage-areas-routes-highway.jpg"
              src="/images/6ELIGENOS.jpg"
              alt="Cobertura Nacional"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
