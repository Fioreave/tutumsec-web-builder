import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslations } from "@/i18n/useTranslations";

const HeroSection = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const { t } = useTranslations(["home"]);

  const handleCalendlyClick = () => {
    const calendlyUrl =
      import.meta.env.VITE_CALENDLY_URL ||
      "https://calendly.com/ayub-tutumsec/30min";
    window.open(calendlyUrl, "_blank");
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-6 flex items-center">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/uploads/background/background1.svg')",
        }}
      />
      <div className="absolute inset-0 bg-black/50 -z-10" />

      <div className="max-w-5xl mx-auto text-center relative">
        <h1
          className="md:text-6xl text-4xl font-bold text-white mb-8 leading-tight animate-slide-up pb-2"
          style={{ whiteSpace: "pre-line" }} /* para \n */
        >
          {t("hero.title")}
        </h1>

        <h2 className="text-lg lg:text-xl font-medium text-white mb-8 leading-tight animate-slide-up pb-2 hidden sm:block">
          {t("hero.subtitle")}
        </h2>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
        >
          <Link
            to="https://calendly.com/ayub-tutumsec/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full text-lg text-white font-medium transition-transform whitespace-nowrap hover:scale-[1.03] shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
            style={{
              background:
                "linear-gradient(250deg, #1a34c8ff 0%, #0062ffff 100%)",
            }}
          >
            {t("hero.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
