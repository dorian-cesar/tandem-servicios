export type FAQItem = {
  question: string;
  answer: string;
  keywords?: string[];
  category?: string;
};

export const chatbotFaq: FAQItem[] = [
  {
    question: "¿Qué es Tandem Servicios y a qué se dedica?",
    answer:
      "Tandem Servicios es una empresa líder en transporte especializado de personas para la gran minería en Chile, parte del Grupo Pullman. Nuestra misión es proporcionar soluciones de movilidad segura, eficiente y sustentable para los trabajadores de las faenas mineras.",
    keywords: [
      "empresa",
      "transporte",
      "minería",
      "Pullman",
      "trabajadores",
      "misión",
    ],
    category: "La Empresa",
  },
  {
    question: "¿Cuántos años de experiencia tienen en el sector minero?",
    answer:
      "Contamos con más de 40 años de experiencia en el transporte especializado para la industria minera en Chile.",
    keywords: [
      "experiencia",
      "años",
      "historia",
      "trayectoria",
      "sector minero",
    ],
    category: "La Empresa",
  },
  {
    question: "¿A qué principales empresas mineras sirven?",
    answer:
      "Apoyamos las operaciones de las principales compañías mineras del país, entre las que se encuentran SQM, BHP, Codelco y Antofagasta Minerals.",
    keywords: [
      "clientes",
      "mineras",
      "SQM",
      "BHP",
      "Codelco",
      "Antofagasta Minerals",
      "operaciones",
    ],
    category: "La Empresa",
  },
  {
    question: "¿Qué tipos de transporte ofrecen para el sector minero?",
    answer:
      "Ofrecemos soluciones integrales que incluyen: transporte externo desde comunas hasta las faenas (con buses, taxibuses y minibuses), transporte interno dentro de las faenas con vehículos acreditados, y conexiones interurbanas.",
    keywords: [
      "servicios",
      "minero",
      "externo",
      "interno",
      "interurbano",
      "faena",
      "buses",
      "minibuses",
    ],
    category: "Servicios Mineros",
  },
  {
    question: "¿Ofrecen servicios de transporte para otros sectores?",
    answer:
      "Sí. Además del sector minero, brindamos soluciones de transporte industrial para complejos logísticos y plantas, transporte particular para eventos (excursiones, escolares, empresariales) y servicios de radio taxi ejecutivo.",
    keywords: [
      "industrial",
      "particular",
      "eventos",
      "radio taxi",
      "ejecutivo",
      "otros sectores",
    ],
    category: "Otros Servicios",
  },
  {
    question: "¿Cómo está compuesta su flota de vehículos?",
    answer:
      "Contamos con una flota moderna y diversa que incluye: buses convencionales (45-50 pax), buses eléctricos (40-45 pax), minibuses y vans (10-20 pax), y taxibuses (20-45 pax). Nuestros vehículos cuentan con comodidades como aire acondicionado, WiFi y puertos USB.",
    keywords: [
      "flota",
      "buses",
      "eléctricos",
      "minibuses",
      "vans",
      "comodidades",
      "WiFi",
      "USB",
    ],
    category: "Flota y Vehículos",
  },
  {
    question: "¿Tienen buses eléctricos? ¿Cuál es su compromiso ambiental?",
    answer:
      "Sí, operamos buses eléctricos y estamos comprometidos con la sustentabilidad. Nuestro objetivo es que el 100% de nuestra flota sea eléctrica para el año 2030, reduciendo así nuestro impacto ambiental y ofreciendo un transporte más limpio y seguro.",
    keywords: [
      "eléctricos",
      "sustentabilidad",
      "compromiso ambiental",
      "2030",
      "flota limpia",
      "ecológico",
    ],
    category: "Flota y Vehículos",
  },
  {
    question: "¿Qué ventajas ofrecen respecto a la flexibilidad y cobertura?",
    answer:
      "Diseñamos itinerarios personalizados con horarios flexibles y paradas estratégicas según las necesidades del cliente. Además, operamos con amplia cobertura nacional, conectando aeropuertos, hoteles, eventos y centros de trabajo en todo Chile.",
    keywords: [
      "flexibilidad",
      "rutas",
      "horarios",
      "cobertura nacional",
      "itinerarios",
      "personalizado",
    ],
    category: "Ventajas",
  },
  {
    question: "¿Cómo garantizan la seguridad y puntualidad?",
    answer:
      "Garantizamos traslados confiables mediante el uso de conductores profesionales, una flota certificada y mantenida, y un estricto cumplimiento de los horarios establecidos para evitar contratiempos en las operaciones de nuestros clientes.",
    keywords: [
      "seguridad",
      "puntualidad",
      "conductores",
      "flota certificada",
      "confiabilidad",
      "contratiempos",
    ],
    category: "Ventajas",
  },
  {
    question: "¿Cómo puedo solicitar una cotización para mi empresa?",
    answer:
      "Puedes solicitar una cotización personalizada directamente desde nuestra web. Nuestro equipo especializado te brindará una respuesta en menos de 24 horas, con asesoría personalizada y sin compromiso.",
    keywords: [
      "cotización",
      "contacto",
      "solicitar",
      "presupuesto",
      "asesoría",
      "empresa",
      "24 horas",
    ],
    category: "Contacto y Cotización",
  },
];
