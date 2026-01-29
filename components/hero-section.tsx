"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ChevronRight } from "lucide-react";

/* Animations */
const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function HeroSection() {
  const scrollToQuote = () => {
    document
      .getElementById("cotizacion")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document
      .getElementById("servicios")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen flex-col pt-20">
      {/* <div className="flex min-h-[20vh] items-center bg-card">
        <div className="mx-auto w-full max-w-7xl px-4 py-8">
          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-around">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">
                  Encuéntranos en
                </p>
                <p className="mt-1 text-xl font-bold text-primary">
                  San Francisco de Borja 1251
                </p>
                <p className="text-muted-foreground">
                  Estación Central – Santiago
                </p>
              </div>
            </div>

            <div className="hidden h-24 w-px bg-border lg:block" />

            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">
                  Llámanos
                </p>
                <a
                  href="tel:+56225205119"
                  className="mt-1 block text-2xl font-bold text-primary hover:text-orange-600"
                >
                  +56 2 2520 5119
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* HERO PRINCIPAL */}
      <div className="relative flex min-h-screen items-center bg-primary">
        {/* Background */}
        <div className="absolute inset-0 bg-[url('/images/hero-transport.jpg')] bg-cover bg-center opacity-10" />

        <motion.div
          className="relative mx-auto w-full max-w-7xl px-4 py-12 text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* TÍTULO */}
          <motion.h1
            variants={fadeInUp}
            className="text-balance text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Tándem Servicios
          </motion.h1>

          {/* SUBTÍTULO */}
          <motion.h2
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-3xl text-2xl font-light text-white md:text-3xl"
          >
            Tu socio estratégico en transporte minero
          </motion.h2>

          {/* DESCRIPCIÓN */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-4xl text-lg text-white/90 md:text-xl leading-relaxed"
          >
            En Tándem Servicios, llevamos a miles de trabajadores directamente
            al epicentro de la industria minera nacional, garantizando una
            movilidad confiable que impulsa la productividad de las faenas más
            exigentes del país.
          </motion.p>

          {/* BOTONES */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              onClick={scrollToQuote}
              className="h-14 px-8 text-lg bg-linear-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/30 cursor-pointer"
            >
              Solicitar Cotización
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>

            <Button
              size="lg"
              onClick={scrollToServices}
              className="h-14 px-8 text-lg bg-transparent border border-white text-white hover:bg-white/10 cursor-pointer"
            >
              Ver Servicios
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
