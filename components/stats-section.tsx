"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 40, suffix: "+", label: "Años de Experiencia" },
  { value: 400, suffix: "+", label: "Vehículos en Flota" },
  { value: 80, suffix: " MM", label: "Kilómetros Recorridos" },
  { value: 31, suffix: "", label: "Contratos Activos" },
];

function AnimatedNumber({
  value,
  suffix,
  isVisible,
}: {
  value: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < value) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>

              <div className="text-lg text-secondary/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
