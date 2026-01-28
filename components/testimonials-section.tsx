"use client";

import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Directora de Logística, TechCorp",
    content:
      "Tandem Servicios ha sido fundamental para optimizar nuestra cadena de suministro. Su profesionalismo y puntualidad son excepcionales.",
    rating: 5,
  },
  {
    name: "Carlos Ramírez",
    role: "Propietario, Mueblería El Roble",
    content:
      "Realizaron mi mudanza empresarial sin ningún problema. Todo llegó en perfectas condiciones y a tiempo. Altamente recomendados.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Gerente de Operaciones, ImportEx",
    content:
      "Llevamos 3 años trabajando con Tandem y siempre nos sorprenden con su calidad de servicio. Son un socio estratégico para nosotros.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            testimonials.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
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

  return (
    <section id="testimonios" className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            La satisfacción de nuestros clientes es nuestra mejor carta de
            presentación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`p-8 transition-all duration-700 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-bold text-card-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
