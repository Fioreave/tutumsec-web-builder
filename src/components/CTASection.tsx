import React from "react";
import { Link } from "react-router-dom";
import { useTranslations } from "@/i18n/useTranslations";

const CTASection = () => {
  const { t } = useTranslations(["home"]);

  return (
    <section className="pb-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-screen-xl mt-16 sm:mt-20 mx-auto relative">
        <div className="bg-gradient-to-r from-black via-blue-900 to-blue-800 rounded-[2rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden mx-auto max-w-5xl">
          <div className="max-w-5xl">
            <h2 className="font-bold text-white mb-2 text-[clamp(28px,4.2vw,56px)] leading-[1.05]">
              {t("cta.title")}
            </h2>

            <p className="text-gray-200 text-[clamp(16px,2.1vw,22px)] leading-relaxed py-4 sm:py-6">
              {t("cta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-left mb-4">
              <Link
                to="https://calendly.com/ayub-tutumsec/30min"
                aria-label={t("hero.cta")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-4 text-base sm:text-lg text-white font-medium shadow-sm transition hover:opacity-95 active:opacity-90"
                style={{
                  background: "linear-gradient(to bottom, #5eb9f0, #3886f4)",
                }}
              >
                {t("hero.cta")}
              </Link>
            </div>

            <p className="text-gray-500 text-sm sm:text-base pl-2">
              {t("cta.footnote")}
            </p>
          </div>

          {/* Decorative image: smaller & adjusted on mobile to avoid overlap */}
          <img
            src="/uploads/abstract.png"
            alt=""
            className="absolute pointer-events-none -right-4 -bottom-6 w-32 opacity-50 sm:-right-8 sm:-bottom-8 sm:w-48"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
