"use client";

import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function CotizadorSection() {
  const cotizadorRef = useRef<HTMLDivElement>(null);

  const [passengers, setPassengers] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [convenio, setConvenio] = useState("");

  const recommendedVehicle =
    passengers && Number(passengers) > 30
      ? "Bus"
      : passengers
        ? "Van Ejecutiva"
        : null;

  return (
    <section
      id="cotizacion"
      ref={cotizadorRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-16 lg:py-24 scroll-mt-8"
    >
      {/* Wave Background */}
      <div className="absolute inset-0 bg-[#3d6aff] shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
        <span className="wave-span wave-1" />
        <span className="wave-span wave-2" />
        <span className="wave-span wave-3" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4">
        {/* Title */}
        <motion.div
          className="text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Cotizador Dinámico
          </h2>
        </motion.div>

        {/* Form */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Card className="mx-auto mt-10 max-w-3xl">
            <CardContent className="p-6 lg:p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Número de pasajeros</Label>
                  <Input
                    type="number"
                    placeholder="Ej: 25"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Tipo de servicio</Label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="
                      w-full h-9 rounded-md border border-input bg-background
                      px-3 py-2 text-sm
                      focus:outline-none focus:ring-2 focus:ring-ring
                    "
                  >
                    <option value="" disabled>
                      Selecciona un tipo
                    </option>
                    <option value="economico">Económico</option>
                    <option value="salon-cama">Salón Cama</option>
                    <option value="rapido">Rápido</option>
                    <option value="ejecutivo">Ejecutivo</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label>Origen</Label>
                  <Input
                    placeholder="Ciudad o dirección de inicio"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Destino</Label>
                  <Input
                    placeholder="Ciudad o dirección final"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Correo electrónico</Label>
                  <Input
                    type="email"
                    placeholder="ejemplo@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Convenio</Label>
                  <select
                    value={convenio}
                    onChange={(e) => setConvenio(e.target.value)}
                    className="
                      w-full h-9 rounded-md border border-input bg-background
                      px-3 py-2 text-sm
                      focus:outline-none focus:ring-2 focus:ring-ring
                    "
                  >
                    <option value="">Sin convenio</option>
                    <option value="los-andes">Caja Los Andes</option>
                    <option value="la-araucana">Caja La Araucana</option>
                    <option value="18-septiembre">Caja 18 de Septiembre</option>
                    <option value="los-heroes">Caja Los Héroes</option>
                    <option value="ips">IPS</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label>Fecha del servicio</Label>
                  <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 space-y-2">
                <Label>Descripción del servicio requerido</Label>
                <textarea
                  className="w-full min-h-22.5 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Describe aquí los detalles adicionales como: necesidades especiales, horarios específicos, paradas intermedias, equipaje especial, requerimientos específicos del vehículo, etc."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* Recommendation */}
              {recommendedVehicle && (
                <motion.div
                  className="mt-3 rounded-lg bg-accent/10 p-6 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-sm text-muted-foreground">
                    Opción recomendada
                  </p>
                  <p className="mt-2 text-2xl font-bold text-primary">
                    {recommendedVehicle}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Para {passengers} pasajeros
                  </p>
                </motion.div>
              )}

              <Button className="mt-8 w-full bg-orange-500 hover:bg-orange-600">
                Solicitar Cotización
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
