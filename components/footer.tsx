"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  // Función para manejar el scroll smooth a secciones internas
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    e.preventDefault();

    // Si estamos en la página principal
    if (window.location.pathname === "/") {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Actualizar la URL sin recargar la página
        window.history.pushState(null, "", hash);
      }
    } else {
      // Si estamos en otra página, ir a la página principal con el hash
      window.location.href = `/${hash}`;
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Marca */}
          <div>
            <Link href="/" className="flex items-center shrink-0 mt-1.5">
              <Image
                src="/logo-tandem-servicios-blanco.png"
                alt="Logo Tandem Servicios"
                width={150}
                height={40}
                className="h-12 w-auto object-contain hover:scale-105 transition-transform"
                priority
              />
            </Link>

            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              Tu socio estratégico en transporte especializado de personas para
              la industria minera en Chile.
            </p>

            {/* Redes Sociales */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.instagram.com/tandem.industrial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Tandem"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.facebook.com/tandemindustrial.cl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Tandem"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/tandem-industrial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Tandem"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/56999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Tandem"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-bold text-base mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="/#servicios"
                  onClick={(e) => handleSmoothScroll(e, "#servicios")}
                  className="hover:text-accent transition-colors"
                >
                  Transporte Minero
                </a>
              </li>
              <li>
                <a
                  href="/#servicios"
                  onClick={(e) => handleSmoothScroll(e, "#servicios")}
                  className="hover:text-accent transition-colors"
                >
                  Transporte Industrial
                </a>
              </li>
              <li>
                <a
                  href="/#servicios"
                  onClick={(e) => handleSmoothScroll(e, "#servicios")}
                  className="hover:text-accent transition-colors"
                >
                  Transporte Particular
                </a>
              </li>
              <li>
                <a
                  href="/#servicios"
                  onClick={(e) => handleSmoothScroll(e, "#servicios")}
                  className="hover:text-accent transition-colors"
                >
                  Radio Taxis
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-bold text-base mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="/#nosotros"
                  onClick={(e) => handleSmoothScroll(e, "#nosotros")}
                  className="hover:text-accent transition-colors"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="/#flota"
                  onClick={(e) => handleSmoothScroll(e, "#flota")}
                  className="hover:text-accent transition-colors"
                >
                  Nuestra Flota
                </a>
              </li>
              <li>
                <Link
                  href="/certificados"
                  className="hover:text-accent transition-colors"
                >
                  Certificados
                </Link>
              </li>
              <li>
                <a
                  href="/pdf/politica-de-calidad-tandem.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Política de Calidad
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-base mb-4">Contacto</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              {/* <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Casa Matriz:</strong> San Francisco de Borja 1251,
                  Estación Central – Santiago
                </span>
              </li>
              <li className="flex items-center gap-2 ml-6">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+56 2 2505 5119</span>
              </li>

              <li className="flex items-start gap-2 mt-3">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Antofagasta:</strong> Pedro Aguirre Cerda 12160,
                  Sector La Chimba
                </span>
              </li> */}
              {/* <li className="flex items-center gap-2 ml-6">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+55 221 5954</span>
              </li> */}

              {/* Email */}
              <li className="flex items-center gap-2 mt-3">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contacto@tandemservicios.cl</span>
              </li>
              <li className="flex items-center gap-2 mt-3">
                <Phone className="h-4 w-4 shrink-0" />
                <span>99999999</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Tandem Servicios. Todos los
            derechos reservados.
          </p>
          <p className="pt-1">
            Página Web desarrollada por{" "}
            <a
              href="https://wit.la"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline hover:text-secondary"
            >
              WIT.la
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
