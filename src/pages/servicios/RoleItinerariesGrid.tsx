import React, { useState, useEffect } from "react";

const RoleItinerariesCarousel = () => {
  const [index, setIndex] = useState(0);
  const AUTOPLAY_MS = 4200;

  const roleItineraries = [
    {
      title: "Dirección / Comité",
      objective: "Tomar decisiones y medir avance.",
      contents: [
        "Riesgo y negocio: impacto, apetito de riesgo, prioridades.",
        "Requisitos mínimos NIS2/ISO 27001 y evidencias de cultura.",
        "Gestión de crisis y reputación (mensajes, stakeholders).",
      ],
      deliverables:
        "Guía de decisiones (1 pág.), dashboard de cultura, briefing trimestral.",
    },
    {
      title: "Managers / Mandos intermedios",
      objective: "Bajar políticas a procesos y equipos.",
      contents: [
        "Políticas prácticas (accesos, datos, terceros) y reporting.",
        "Seguridad en procesos y trabajo híbrido.",
        "Cómo liderar la cultura (refuerzo positivo, hábitos).",
      ],
      deliverables:
        "Fichas de proceso, checklist de equipo, plantilla de reporte.",
    },
    {
      title: "Staff de oficina",
      objective: "Reducir clics de riesgo y fugas de información.",
      contents: [
        "Phishing real vs. simulado: señales y reacción.",
        "Contraseñas y MFA; compartición segura.",
        "Datos personales y documentos: lo que sí y lo que no.",
      ],
      deliverables: "Píldoras + cartelera de buenas prácticas, mini-quiz.",
    },
    {
      title: "OT / Planta",
      objective: "Minimizar fallos humanos en sistemas industriales.",
      contents: [
        "Uso de USB y mantenimiento; principio de mínimo privilegio.",
        "Red segregada y protocolos en planta.",
        "Qué hacer ante comportamientos anómalos.",
      ],
      deliverables: "Taller in situ, pósters por zona, checklist de turno.",
    },
    {
      title: "IT / Helpdesk",
      objective: "Convertir IT en motor de cultura.",
      contents: [
        "Hardening básico de usuario y dispositivos.",
        "Onboarding/Offboarding seguro y JML.",
        "Playbooks de respuesta de primer nivel.",
      ],
      deliverables: "Guías operativas, playbooks L1, lista de verificación.",
    },
    {
      title: "Comercial / Campo",
      objective: "Cierre seguro sin fricciones.",
      contents: [
        "Email y movilidad segura; redes públicas.",
        "Compartición con terceros y NDAs.",
        "Protección de información sensible en visitas.",
      ],
      deliverables: "Kit móvil (checklist + tips), micro-training itinerante.",
    },
  ];

  // Imágenes de fondo (se repiten en bucle)
  const bgs = [
    "/uploads/fusion-05.jpeg",
    "/uploads/dispersion-04.jpeg",
    "/uploads/dispersion-02.jpeg",
  ];

  // Autoplay continuo
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((p) => (p + 1) % roleItineraries.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [roleItineraries.length]);

  const prevIdx = (index - 1 + roleItineraries.length) % roleItineraries.length;
  const nextIdx = (index + 1) % roleItineraries.length;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl w-full mx-auto">
        <div className="mb-10">
          <h2 className="text-5xl font-bold text-gray-900">
            El contenido adecuado para cada persona
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl">
            Cada rol recibe mensajes, entrenamientos y entregables adaptados a
            su día a día.
          </p>
        </div>

        {/* Tres tarjetas, MISMO TAMAÑO en desktop */}
        <div className="grid grid-cols-12 gap-6 items-stretch">
          <div className="col-span-1 h-full">
            <Card
              role={roleItineraries[prevIdx]}
              imageUrl={bgs[prevIdx % bgs.length]}
              showContent={false}
            />
          </div>
          <div className="col-span-10  h-full">
            <Card
              role={roleItineraries[index]}
              imageUrl={bgs[index % bgs.length]}
              showContent={true}
            />
          </div>
          <div className="col-span-1 h-full">
            <Card
              role={roleItineraries[nextIdx]}
              imageUrl={bgs[nextIdx % bgs.length]}
              showContent={false}
            />
          </div>
        </div>

        {/* Dots (opcional) */}
        <div className="flex justify-center mt-8 gap-2">
          {roleItineraries.map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleItinerariesCarousel;

// Tarjeta (mismo tamaño siempre). Si showContent = false, solo imagen.
const Card = ({ role, imageUrl, showContent = true }) => {
  return (
    <div className="relative h-full rounded-2xl overflow-hidden justify-center min-h-[460px]">
      {/* Imagen de fondo */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover brightness-60"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
      )}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-black/10" />

      {showContent ? (
        <div className="relative h-full p-10 text-white flex flex-col justify-center">
          <h3 className="text-3xl lg:text-4xl font-semibold leading-tight">
            {role.title}
          </h3>
          <p className="mt-4 text-lg lg:text-xl text-white/90">
            <span className="text-white/70 font-semibold">Objetivo:</span>{" "}
            {role.objective}
          </p>

          <div className="mt-4">
            <p className="font-semibold text-white/90 text-lg lg:text-xl">
              Contenidos clave:
            </p>
            <ul className="mt-2 space-y-2 text-base lg:text-lg text-white/90">
              {role.contents.map((c, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-5 text-lg lg:text-xl text-white/90">
            <span className="text-white/70 font-semibold">Entregables:</span>{" "}
            {role.deliverables}
          </p>
        </div>
      ) : (
        <div className="relative h-full" />
      )}
    </div>
  );
};
