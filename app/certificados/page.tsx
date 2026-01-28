"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import {
  Award,
  Shield,
  Leaf,
  Car,
  CheckCircle,
  ArrowUp,
  Download,
  Eye,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const certifications = [
  {
    id: 1,
    title: "ISO 9001",
    subtitle: "Sistema de Gestión de Calidad",
    description:
      "Certificación en el sistema de gestión de calidad, enfocado en la mejora constante y en la plena satisfacción de los clientes.",
    icon: Award,
    pdfUrl: "/pdf/certificado-iso9001.pdf",
  },
  {
    id: 2,
    title: "ISO 14001",
    subtitle: "Sistema de Gestión Ambiental",
    description:
      "Certificación en gestión ambiental, que asegura prácticas sostenibles con el entorno y el cumplimiento de las regulaciones vigentes.",
    icon: Leaf,
    pdfUrl: "/pdf/certificado-iso14001.pdf",
  },
  {
    id: 3,
    title: "ISO 45001",
    subtitle: "Seguridad y Salud Ocupacional",
    description:
      "Certificación en seguridad y salud ocupacional, diseñada para proteger al personal y fomentar entornos de trabajo seguros.",
    icon: Shield,
    pdfUrl: "/pdf/certificado-iso45001.pdf",
  },
  {
    id: 4,
    title: "ISO 39001",
    subtitle: "Gestión de la Seguridad Vial",
    description:
      "Sistema de gestión de la seguridad vial, dirigido a minimizar los riesgos de accidentes viales y promover una movilidad más segura.",
    icon: Car,
    pdfUrl: "/pdf/certificado-iso39001.pdf",
  },
];

export default function CertificadosPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Mostrar/ocultar botón de volver arriba
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Simple */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Volver al sitio</span>
            </Link>
            <div className="text-sm text-muted-foreground">
              TANDEM S.A. - Transporte Industrial
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section Minimalista */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Certificaciones ISO
            </h1>
            <p className="text-primary-foreground/80">
              Normas internacionales que respaldan nuestros compromisos con la
              calidad, seguridad y excelencia en todos nuestros servicios de
              transporte.
            </p>
          </div>
        </div>
      </section>

      {/* Certificaciones Grid */}
      <section className="py-12 md:py-16" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="text-muted-foreground max-w-3xl">
              En TANDEM S.A., contamos con certificaciones que avalan nuestra
              dedicación a la calidad, la seguridad, la salud en el trabajo, el
              cuidado ambiental y la seguridad vial. Por eso, nos acreditamos
              con los estándares internacionales establecidos por la
              Organización Internacional de Normalización (ISO).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <Card
                  key={cert.id}
                  className="overflow-hidden border border-border hover:border-primary/30 transition-colors flex flex-col"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {cert.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">
                      {cert.description}
                    </p>

                    {/* Botones siempre al fondo de la card */}
                    <div className="mt-auto pt-4 border-t border-border">
                      <div className="flex gap-2">
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-sm rounded hover:bg-primary/90 transition-colors min-h-10.5"
                        >
                          <Eye className="h-4 w-4 shrink-0" />
                          <span>Ver Certificado</span>
                        </a>
                        <a
                          href={cert.pdfUrl}
                          download
                          className="flex items-center justify-center gap-2 px-3 py-2.5 border border-input bg-background text-foreground text-sm rounded hover:bg-accent hover:text-accent-foreground transition-colors min-h-10.5 min-w-10.5"
                          title="Descargar PDF"
                        >
                          <Download className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Información Adicional */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Compromiso con los estándares internacionales
                </h3>
                <p className="text-muted-foreground mb-4">
                  Estas certificaciones ISO demuestran nuestro compromiso con la
                  excelencia operacional y la mejora continua en todos nuestros
                  procesos de transporte industrial.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Auditorías periódicas de renovación</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Cumplimiento normativo verificado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Procesos documentados y trazables</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Información</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Los certificados aquí presentados son copias digitales de los
                  documentos originales. Para verificar la validez o solicitar
                  información adicional, contactar a nuestro departamento de
                  gestión de calidad.
                </p>
                <div className="text-xs text-muted-foreground/70">
                  <p>TANDEM S.A. - Transporte Terrestre Industrial</p>
                  <p>Todos los derechos reservados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botón de volver arriba */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
