import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * SuccessStoriesSection
 * Estilo inspirado en el ejemplo: gran titular, CTA a la derecha y 3 tarjetas en grid
 * - Centro: tarjeta destacada con imagen + overlay y cita
 * - Derecha: tarjeta secundaria con imagen + overlay y cita
 * - Izquierda: apoyo visual (foto simple / imagen de contexto)
 *
 * Si no pasas imágenes, se usa un degradado azul elegante por defecto.
 */
const SuccessStoriesSection = () => {
  const [index, setIndex] = useState(0);

  // Puedes reemplazar images/logos por los tuyos en /uploads
  const stories = [
    {
      brand: "Industria",
      quote: "Modernizamos y segmentamos su red logrando resiliencia real.",
      author: "CTO — Grupo industrial",
      image: "/uploads/dispersion-02.jpeg", // reemplaza por tu foto real si la tienes
      //logo: "/uploads/fortinet.png", // opcional
    },
    {
      brand: "Norwegian Airlines",
      quote: "Ha cambiado nuestra forma de hacer ciberseguridad.",
      author: "Tony Tufte — Soporte IT",
      image: "/uploads/fusion-05.jpeg",
      //logo: "/uploads/fortinet.png",
    },
    {
      brand: "Aston Martin",
      quote: "Del ‘apagar fuegos’ a una defensa proactiva basada en datos.",
      author: "Steve O’Connor — Director de IT",
      image: "/uploads/dispersion-04.jpeg",
      //logo: "/uploads/fortinet.png",
    },
  ];

  const next = () => setIndex((p) => (p + 1) % stories.length);
  const prev = () => setIndex((p) => (p - 1 + stories.length) % stories.length);

  const LeftImage = () => (
    <div className="relative rounded-2xl overflow-hidden h-full min-h-[260px]">
      {/* Fondo */}
      {stories[0]?.image ? (
        <img
          src={stories[0].image}
          alt="case"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
      )}
    </div>
  );

  const Card = ({ story, highlight = false }) => (
    <div
      className={`relative rounded-2xl overflow-hidden min-h-[460px] ${
        highlight ? "lg:min-h-[460px]" : ""
      }`}
    >
      {/* Imagen de fondo */}
      {story.image ? (
        <img
          src={story.image}
          alt={story.brand}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
      )}
      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />

      <div className="relative h-full p-8 text-white flex flex-col justify-center">
        {/* Logo opcional */}
        {story.logo && (
          <img
            src={story.logo}
            alt={story.brand}
            className="h-8 w-auto mb-6 opacity-90"
          />
        )}
        <blockquote className="text-2xl lg:text-3xl font-semibold leading-snug max-w-xl">
          “{story.quote}”
        </blockquote>
        <p className="mt-4 text-white/80 font-medium">{story.author}</p>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Casos de éxito
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              En TutumSec, los clientes son lo primero. Líderes de múltiples
              sectores nos eligen como su socio de ciberseguridad de confianza.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
            {/*<a
              href="#"
              className="ml-4 px-5 py-2.5 rounded-full bg-gray-900 text-white font-medium hover:bg-black transition hidden lg:inline-flex"
            >
              Historias de clientes →
            </a>*/}
          </div>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Izquierda: imagen/visual */}
          <div className="lg:col-span-4">
            <LeftImage />
          </div>

          {/* Centro: destacada (controlada con index) */}
          <div className="lg:col-span-5">
            <Card story={stories[index]} highlight />
          </div>

          {/* Derecha: la siguiente */}
          <div className="lg:col-span-3">
            <Card story={stories[(index + 1) % stories.length]} />
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8 gap-2">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir al caso ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === index ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
