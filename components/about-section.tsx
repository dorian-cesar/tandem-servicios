"use client";

import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import {
  Shield,
  Clock,
  Award,
  Headphones,
  MapPin,
  ThumbsUp,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description:
      "Conductores certificados, GPS tracking en tiempo real y seguro completo.",
  },
  {
    icon: Clock,
    title: "Puntualidad Absoluta",
    description:
      "Cumplimos con los horarios establecidos. Tu tiempo es valioso.",
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description:
      "Más de 40 años brindando servicios de transporte de excelencia.",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description:
      "Atención al cliente disponible en todo momento para asistirte.",
  },
  {
    icon: MapPin,
    title: "Amplia Cobertura",
    description: "Servicios en todos los destinos a nivel nacional.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfacción Garantizada",
    description: "Clientes y empresas nos recomiendan por nuestra calidad.",
  },
];

export function AboutSection() {
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
      id="nosotros"
      className="py-20 bg-muted/30 scroll-mt-18"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              // src="/professional-bus-driver-smiling-uniform-steering-w.jpg"
              src="/images/7EXCELENCIA.jpg"
              alt="Conductor Profesional"
              className="w-full rounded-lg shadow-xl"
            />
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h2
              className="text-3xl md:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Tu Servicio de Confianza en{" "}
              <span className="text-accent">Excelencia</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Tándem Servicios, parte del Grupo Pullman, es líder en transporte
              especializado de personas para la gran minería en Chile. Con más
              de 40 años de experiencia, ofrecemos soluciones de movilidad
              segura, eficiente y sustentable para trabajadores de faenas
              mineras. Nuestra flota moderna y en constante renovación se
              compromete a alcanzar el 100% de buses eléctricos para 2030,
              reduciendo nuestro impacto ambiental y garantizando un transporte
              más limpio y seguro.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestros servicios cumplen con los más altos estándares de calidad
              y seguridad, apoyando las operaciones de las principales compañías
              mineras del país, como SQM, BHP, Codelco y Antofagasta Minerals,
              entre otras. Nos enfocamos en brindar una experiencia de viaje
              cómoda y segura para los trabajadores, contribuyendo al éxito de
              las operaciones mineras y al desarrollo sostenible de la
              industria.
            </p>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className={`p-6 hover:shadow-lg transition-all duration-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3
                  className="text-lg font-bold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}
