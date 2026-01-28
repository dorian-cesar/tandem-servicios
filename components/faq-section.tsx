"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Qué es Tándem Servicios?",
    answer:
      "Tándem Servicios es una empresa líder en transporte especializado de personas para la gran minería en Chile, parte del Grupo Pullman. Se enfoca en proporcionar soluciones de movilidad segura, eficiente y sustentable para trabajadores de faenas mineras.",
  },
  {
    question: "¿Cuál es la misión de Tándem Servicios?",
    answer:
      "La misión de Tándem Servicios es llevar a miles de trabajadores directamente al epicentro de la industria minera nacional, garantizando una movilidad confiable que impulsa la productividad de las faenas más exigentes del país.",
  },
  {
    question: "¿Cuántos años de experiencia tiene Tándem Servicios?",
    answer:
      "Tándem Servicios cuenta con más de 40 años de experiencia en el transporte especializado para la minería.",
  },
  {
    question: "¿Qué compromisos ambientales tiene la empresa?",
    answer:
      "Tándem Servicios se compromete a alcanzar el 100% de buses eléctricos para 2030, reduciendo su impacto ambiental y garantizando un transporte más limpio y seguro. Además, se enfoca en soluciones de movilidad sustentable.",
  },
  {
    question: "¿Cuáles son los estándares que cumple Tándem Servicios?",
    answer:
      "Los servicios de Tándem Servicios cumplen con los más altos estándares de calidad y seguridad, apoyando las operaciones de las principales compañías mineras del país.",
  },
  {
    question: "¿Quiénes son algunos de los clientes de Tándem Servicios?",
    answer:
      "Entre sus clientes se encuentran las principales compañías mineras como SQM, BHP, Codelco y Antofagasta Minerals, entre otras.",
  },
  {
    question: "¿Qué tipo de flota utiliza Tándem Servicios?",
    answer:
      "La empresa cuenta con una flota moderna y en constante renovación, orientada hacia la sustentabilidad con el objetivo de ser 100% eléctrica para 2030.",
  },
  {
    question:
      "¿Cómo contribuye Tándem Servicios al desarrollo de la industria minera?",
    answer:
      "Tándem Servicios contribuye al éxito de las operaciones mineras y al desarrollo sostenible de la industria al brindar una experiencia de viaje cómoda y segura para los trabajadores, impulsando la productividad en las faenas mineras.",
  },
];

// dividir FAQs en dos columnas
const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

export function FAQSection() {
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const renderColumn = (
    items: typeof faqs,
    openIndex: number | null,
    setOpen: (i: number | null) => void
  ) =>
    items.map((faq, index) => {
      const isOpen = openIndex === index;

      return (
        <Card
          key={index}
          className={`transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            onClick={() => setOpen(isOpen ? null : index)}
            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-muted/50"
          >
            <h3 className="text-sm md:text-base font-semibold text-foreground pr-3">
              {faq.question}
            </h3>
            <ChevronDown
              className={`h-4 w-4 text-muted-foreground transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 pb-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </Card>
      );
    });

  return (
    <section
      id="faq"
      className="py-20 bg-background scroll-mt-15"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 max-w-8xl items-center">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Preguntas Frecuentes sobre{" "}
            <span className="text-accent">Tándem Servicios</span>
          </h2>
          <p className="text-muted-foreground">
            Preguntas y respuestas con información clave sobre nuestro rol en la
            industria minera.
          </p>
        </div>

        {/* 2 columnas realmente independientes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            {renderColumn(leftFaqs, openLeft, setOpenLeft)}
          </div>

          <div className="space-y-4">
            {renderColumn(rightFaqs, openRight, setOpenRight)}
          </div>
        </div>

        {/* CTA */}
        <Card className="mt-12 p-8 bg-muted/50 text-center items-center max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ¿Necesitas más información?
          </h3>
          <p className="text-muted-foreground mb-6">
            Nuestro equipo especializado está disponible para asesorarte.
          </p>
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("cotizacion")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contactar a un Ejecutivo
          </Button>
        </Card>
      </div>
    </section>
  );
}
