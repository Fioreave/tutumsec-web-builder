import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IndustrialOt = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen ">
        <section className="relative min-h-[500px] mx-36 overflow-hidden px-6 flex items-center">
          {/* CAPA BASE: azul muy oscuro 
              <div className="absolute inset-0 -z-20 bg-[#0a0f1c]" />*/}

          {/* CAPA LINEAL SUAVE (de arriba izq a abajo der) */}
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/uploads/background/background2.png')",
            }}
          />
          {/*style={{
                  background:
                    "linear-gradient(120deg, rgba(14, 24, 46, 0.0) 0%, rgba(89, 116, 189, 0.35) 45%, rgba(182, 185, 193, 0) 100%)",
                }}*/}
          {/* GLOW RADIALES (manchas de luz) 
              <div className="pointer-events-none absolute -top-24 -left-24 w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-3xl -z-10" />
              <div className="pointer-events-none absolute -right-40 top-10 w-[50vw] h-[50vw] bg-blue-400/20 rounded-full blur-3xl -z-10" />
              <div className="pointer-events-none absolute bottom-[-20%] left-[20%] w-[45vw] h-[45vw] bg-indigo-500/20 rounded-full blur-3xl -z-10" />
        */}
          <div className="absolute inset-0 bg-black/50 -z-10" />

          {/* HILO DECORATIVO 
              <img
                src="/uploads/hilo.png"
                alt=""
                aria-hidden
                className="pointer-events-none select-none absolute left-0 top-[-80px] w-[1200px] max-w-none opacity-60 mix-blend-screen -z-0"
              />*/}

          <div className="mx-20 max-w-4xl text-left relative">
            <h1 className="text-4xl lg:text-5xl font-medium text-white mb-2 leading-tight animate-slide-up pb-2">
              Ciberseguridad industrial: <br /> producción sin paradas
            </h1>
            <h2 className="text-2xl lg:text-2xl text-white mb-6 leading-tight animate-slide-up pb-2">
              Aplicamos IEC 62443 con enfoque práctico: priorizamos <br />
              seguridad de personas y continuidad de planta.
            </h2>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            ></div>
          </div>
        </section>
        <section></section>
      </main>
      <Footer />
    </>
  );
};

export default IndustrialOt;
