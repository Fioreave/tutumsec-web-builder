import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/old.useTranslation";

const NewCTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="pb-20 sm:px-6 bg-gray-50">
      <div className="max-w-screen-xl mt-20 mx-auto relative">
        <div className="bg-gradient-to-r from-black via-blue-900 to-blue-800 rounded-[2rem] p-12 relative overflow-hidden mx-auto max-w-5xl">
          <div className="max-w-5xl">
            <h2
              className="
                font-bold text-white mb-2
                text-[clamp(28px,4.2vw,56px)] leading-[1.05]
              "
            >
              {t("ctaTitle")}
            </h2>

            <p
              className="
                text-gray-200
                text-[clamp(16px,2.1vw,22px)] leading-relaxed py-6
              "
            >
              {t("ctaSubtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-left mb-4">
              <Link
                to="https://calendly.com/ayub-tutumsec/30min"
                aria-label={t("reserveConsultation")}
                target="_blank"
                rel="noopener noreferrer"
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
            <p className="text-gray-500 pl-2">
              * Primera consultoría 30min sin coste.
            </p>
          </div>
          <img
            src="/uploads/abstract.png"
            alt=""
            className="absolute -right-8 -bottom-8 w-48 opacity-50"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
};

export default NewCTASection;
