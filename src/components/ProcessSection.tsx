import React from "react";
import { Search, Map, Settings, TrendingUp } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";

const ProcessSection = () => {
  const { t } = useTranslations(["home"]);
  const steps = [
    {
      title: t("process.step1.title"),
      description: t("process.step1.desc"),
      icon: Search,
    },
    {
      title: t("process.step2.title"),
      description: t("process.step2.desc"),
      icon: Map,
    },
    {
      title: t("process.step3.title"),
      description: t("process.step3.desc"),
      icon: Settings,
    },
    {
      title: t("process.step4.title"),
      description: t("process.step4.desc"),
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 px-6 bg-tutumsec-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-4xl font-bold text-blue-500 mb-6">
            {t("process.heading")}
          </h2>
          <p className="text-xl">{t("process.subheading")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-in relative"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: "forwards",
                  opacity: 0,
                }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300 relative">
                    <IconComponent className="w-8 h-8 text-primary items-center" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
