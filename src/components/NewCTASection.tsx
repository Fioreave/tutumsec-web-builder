import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const NewCTASection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-20 px-6"
      style={{
        background: "linear-gradient(to bottom, #5eb9f0, #3886f4)",
      }}
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="bg-gradient-to-r from-black via-blue-900 to-blue-800 rounded-[2rem] p-12 relative overflow-hidden mx-auto max-w-5xl">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t("ctaTitle")}
            </h2>
            <p className="text-xl text-gray-200 mb-8">{t("ctaSubtitle")}</p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button
                size="lg"
                className="px-8 py-4 text-lg rounded-full text-white font-medium transition-colors"
                style={{
                  background: "linear-gradient(to bottom, #5eb9f0, #3886f4)",
                }}
              >
                {t("reserveConsultation")}
              </Button>
              <div className="flex items-center space-x-4 text-white">
                <Phone className="w-6 h-6" />
                <div className="w-px h-8 bg-gray-400"></div>
                <MessageCircle className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Graphic element positioned below and to the right, moved up 10px */}
        <div className="absolute -bottom-5 right-16 w-48 h-48 opacity-70">
          <img
            src="/uploads/abstract.png"
            alt="Graphic element"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default NewCTASection;
