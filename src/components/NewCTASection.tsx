import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

const NewCTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        {/* Tarjeta CTA */}
        <div
          className="
            relative isolate overflow-hidden
            rounded-[2rem]
            bg-gradient-to-r from-black via-blue-900 to-blue-700
            px-6 py-10 sm:p-12 lg:px-16 lg:py-14
            pr-28 sm:pr-40 lg:pr-64 pb-24
          "
        >
          {/* Contenido */}
          <div className="max-w-3xl">
            <h2
              className="
                font-bold text-white mb-4
                text-[clamp(28px,4.2vw,56px)] leading-[1.05]
              "
            >
              {t("ctaTitle")}
            </h2>

            <p
              className="
                text-gray-200 mb-8
                text-[clamp(16px,2.1vw,22px)] leading-relaxed
              "
            >
              {t("ctaSubtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Link
                to="https://calendly.com/ayub-tutumsec/30min"
                aria-label={t("reserveConsultation")}
                className="
                  w-full sm:w-auto
                  rounded-full px-7 sm:px-8 py-4 text-base sm:text-lg
                  text-white font-medium
                  shadow-sm transition
                  hover:opacity-95 active:opacity-90
                "
                style={{
                  background: "linear-gradient(to bottom, #5eb9f0, #3886f4)",
                }}
              >
                {t("reserveConsultation")}
              </Link>
            </div>
          </div>

          {/* Gráfico fijo en la esquina inferior derecha */}
          <img
            src="/uploads/abstract.png"
            alt=""
            className="
              pointer-events-none select-none
              absolute right-4 bottom-4
              w-[120px] sm:w-[180px] lg:w-[260px]
              h-auto object-contain opacity-90
              max-w-[35%] sm:max-w-none
            "
          />

          {/* Glow sutil de fondo (ornamental) */}
          <div
            className="
              absolute -right-40 -bottom-40 h-[360px] w-[360px]
              rounded-full bg-blue-500/10 blur-3xl
            "
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default NewCTASection;
