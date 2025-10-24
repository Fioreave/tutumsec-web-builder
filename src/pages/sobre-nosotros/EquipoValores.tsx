import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOMetaTags from "@/components/SEOMetaTags";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";

const EquipoValores: React.FC = () => {
  const { t } = useTranslations(["equipo"]);

  const steps = [
    {
      number: "1",
      description: t("team.steps.0"),
      gradient: "from-blue-500 to-blue-950",
    },
    {
      number: "2",
      description: t("team.steps.1"),
      gradient: "from-blue-950 to-blue-800",
    },
    {
      number: "3",
      description: t("team.steps.2"),
      gradient: "from-blue-900 to-black",
    },
    {
      number: "4",
      description: t("team.steps.3"),
      gradient: "from-blue-900 to-black",
    },
    {
      number: "5",
      description: t("team.steps.4"),
      gradient: "from-blue-900 to-black",
    },
  ] as const;

  const workflow = [
    {
      step: "1",
      title: t("workflow.items.0.title"),
      desc: t("workflow.items.0.desc"),
    },
    {
      step: "2",
      title: t("workflow.items.1.title"),
      desc: t("workflow.items.1.desc"),
    },
    {
      step: "3",
      title: t("workflow.items.2.title"),
      desc: t("workflow.items.2.desc"),
    },
    {
      step: "4",
      title: t("workflow.items.3.title"),
      desc: t("workflow.items.3.desc"),
    },
    {
      step: "5",
      title: t("workflow.items.4.title"),
      desc: t("workflow.items.4.desc"),
    },
    {
      step: "6",
      title: t("workflow.items.5.title"),
      desc: t("workflow.items.5.desc"),
    },
    {
      step: "7",
      title: t("workflow.items.6.title"),
      desc: t("workflow.items.6.desc"),
    },
  ] as const;

  const purposeBlocks = [
    {
      title: t("purpose.blocks.0.title"),
      description: t("purpose.blocks.0.desc"),
    },
    {
      title: t("purpose.blocks.1.title"),
      description: t("purpose.blocks.1.desc"),
    },
  ] as const;

  const values = [
    t("values.items.0"),
    t("values.items.1"),
    t("values.items.2"),
    t("values.items.3"),
    t("values.items.4"),
  ];

  return (
    <>
      <SEOMetaTags
        title={t("seo.title")}
        description={t("seo.description")}
        canonical={t("seo.canonical")}
      />

      <Navbar />
      <main className="min-h-screen ">
        <section className="relative overflow-hidden flex items-center pt-20">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/uploads/background/background2.png')",
            }}
          />
          <div className="absolute inset-0 bg-black/50 -z-10" />
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-3 leading-tight animate-slide-up">
                {t("hero.title")}
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-6 leading-snug animate-slide-up">
                {t("hero.subtitle")}
              </h2>
            </div>
          </div>
        </section>

        {/* TEAM BLOCK */}
        <section className="pb-6 px-4 bg-white mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                {t("team.title")}
              </h2>
            </div>

            <div className="items-stretch">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className={`mb-6 bg-gradient-to-r ${step.gradient} rounded-2xl text-white relative group shadow-lg p-8 flex`}
                >
                  <div className="text-5xl font-extrabold leading-none mr-6 opacity-90 w-20 shrink-0 flex items-center justify-center">
                    {step.number}
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="ml-4 self-start text-white/70" aria-hidden>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-5 text-center text-gray-600 font-itallic max-w-5xl mx-auto">
            <p className="text-sm">{t("team.experienceNote")}</p>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="py-20 px-6 bg-tutumsec-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                {t("workflow.title")}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {workflow.map((item, index) => (
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
                    <div className="w-10 h-10 font-medium text-xl bg-primary/10 rounded-full text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-relaxed">
                        {item.title}
                      </h3>
                      <h2 className="text-md text-gray-600 mb-3 transition-colors duration-300 group-hover:text-primary leading-relaxed">
                        {item.desc}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PURPOSE */}
        <section className="relative isolate overflow-hidden px-6 flex items-center pt-20 pb-20">
          <div className="absolute inset-0 z-0 bg-[#0a0f1c]" aria-hidden />
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(120deg, rgba(14,24,46,0) 0%, rgba(89,116,189,0.35) 45%, rgba(182,185,193,0) 100%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -top-24 -left-24 w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-3xl z-10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-40 top-10 w-[50vw] h-[50vw] bg-blue-400/20 rounded-full blur-3xl z-10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-[-20%] left-[20%] w-[45vw] h-[45vw] bg-indigo-500/20 rounded-full blur-3xl z-10"
            aria-hidden
          />
          <img
            src="/uploads/hilo.png"
            alt=""
            aria-hidden
            className="pointer-events-none select-none absolute left-0 -top-20 w-[1200px] max-w-none opacity-60 mix-blend-screen z-20"
          />

          <div className="max-w-4xl mx-auto text-center relative z-30">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t("purpose.title")}
            </h1>
            <h2 className="text-white/80 text-center pb-6 font-medium">
              {t("purpose.subtitle")}
            </h2>

            <div className="container pt-6 max-w-3xl space-y-8">
              {purposeBlocks.map((block, i) => (
                <div key={i} className="border-l-4 border-blue-400 pl-6">
                  <h3 className="text-xl text-left font-semibold mb-2 text-blue-300">
                    {block.title}
                  </h3>
                  <p className="text-white text-left leading-relaxed">
                    {block.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="bg-muted/50 py-16 sm:py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid items-start gap-8 md:grid-cols-6">
              {/* Título */}
              <div className="md:col-span-2 md:mr-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2 text-center md:text-left">
                  {t("values.title")}
                </h2>
              </div>

              {/* Lista */}
              <div className="md:col-span-4 md:ml-12">
                <div className="space-y-4 sm:space-y-6 md:pt-6">
                  {values.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <p className="text-foreground text-sm sm:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <div className="bg-muted/50 text-center py-12 pb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {t("closing.title")}
          </h2>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EquipoValores;
