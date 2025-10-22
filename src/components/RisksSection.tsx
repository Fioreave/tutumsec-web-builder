import React from "react";
import { useTranslations } from "@/i18n/useTranslations";

const RisksSection = () => {
  const { t } = useTranslations(["home"]);

  const risks = [
    { problem: t("risks.item1.problem"), consequence: t("risks.item1.cons") },
    { problem: t("risks.item2.problem"), consequence: t("risks.item2.cons") },
    { problem: t("risks.item3.problem"), consequence: t("risks.item3.cons") },
    { problem: t("risks.item4.problem"), consequence: t("risks.item4.cons") },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="transform transition-all duration-700 hover:translate-x-2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 transition-colors duration-500 hover:text-primary-light leading-relaxed">
              {t("risks.heading")}
              <span className="relative group p-2">
                {t("risks.highlight")}
                <svg
                  className="absolute -bottom-1 left-0 w-full h-3 transition-all duration-500 group-hover:scale-105"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M5 8 Q150 3 295 8"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
              ?
            </h2>
          </div>

          <div className="space-y-8">
            <table className="w-full">
              <tbody>
                {risks.map((risk, index) => (
                  <tr key={index}>
                    <td className="pl-6 border-l-4 border-blue-400 py-4 align-top">
                      <h3 className="text-xl font-semibold mb-2 text-blue-300">
                        {risk.problem}
                      </h3>
                      <p className="text-gray-200 leading-relaxed">
                        {risk.consequence}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RisksSection;
