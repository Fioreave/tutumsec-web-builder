import React from "react";
import { AlertTriangle, Shield, Clock, TrendingUp } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";

const ProblemsSection = () => {
  const { t } = useTranslations(["home"]);

  const problems = [
    {
      title: t("problems.item1.title"),
      description: t("problems.item1.desc"),
      icon: AlertTriangle,
    },
    {
      title: t("problems.item2.title"),
      description: t("problems.item2.desc"),
      icon: Shield,
    },
    {
      title: t("problems.item3.title"),
      description: t("problems.item3.desc"),
      icon: Clock,
    },
    {
      title: t("problems.item4.title"),
      description: t("problems.item4.desc"),
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 px-6 bg-tutumsec-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="px-4 pt-10 pb-6">
          <h2 className="text-3xl md:text-4xl mx-6 font-semibold text-[#0b1f36] tracking-tight ">
            {t("problems.heading")}
          </h2>
          <p className="mt-3 max-w-4xl mx-6 text-lg text-[#0b1f36] pt-2 pb-6">
            {t("problems.lead")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: "forwards",
                  opacity: 0,
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-14 h-14 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-relaxed">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
