import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOMetaTags from "@/components/SEOMetaTags";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CheckCircle,
  Users,
  Settings,
  BarChart3,
  Zap,
  RotateCcw,
  Monitor,
  Shield,
  Globe,
  Cloud,
} from "lucide-react";
import PartnersSection from "../PartnersSection";
import { Link } from "react-router-dom";
import { useTranslations } from "@/i18n/useTranslations";

const PrevencionBackup: React.FC = () => {
  const { t } = useTranslations(["prevencion"]);

  const forWho = [
    t("forWho.0"),
    t("forWho.1"),
    t("forWho.2"),
    t("forWho.3"),
    t("forWho.4"),
  ];

  const basePackLeft = [
    t("base.left.0"),
    t("base.left.1"),
    t("base.left.2"),
    t("base.left.3"),
    t("base.left.4"),
  ];

  const basePackRight = [
    t("base.right.0"),
    t("base.right.1"),
    t("base.right.2"),
    t("base.right.3"),
    t("base.right.4"),
  ];

  const outcomes = [
    {
      title: t("outcomes.0.title"),
      description: t("outcomes.0.desc"),
      icon: Users,
    },
    {
      title: t("outcomes.1.title"),
      description: t("outcomes.1.desc"),
      icon: Settings,
    },
    {
      title: t("outcomes.2.title"),
      description: t("outcomes.2.desc"),
      icon: BarChart3,
    },
    {
      title: t("outcomes.3.title"),
      description: t("outcomes.3.desc"),
      icon: Zap,
    },
    {
      title: t("outcomes.4.title"),
      description: t("outcomes.4.desc"),
      icon: RotateCcw,
    },
  ];

  const solution = [
    {
      category: t("solution.0.title"),
      items: t("solution.0.desc"),
      icon: Monitor,
    },
    {
      category: t("solution.1.title"),
      items: t("solution.1.desc"),
      icon: Shield,
    },
    {
      category: t("solution.2.title"),
      items: t("solution.2.desc"),
      icon: Globe,
    },
    {
      category: t("solution.3.title"),
      items: t("solution.3.desc"),
      icon: Cloud,
    },
    {
      category: t("solution.4.title"),
      items: t("solution.4.desc"),
      icon: Monitor,
    },
  ];

  const reasons = [
    t("reasons.0"),
    t("reasons.1"),
    t("reasons.2"),
    t("reasons.3"),
    t("reasons.4"),
  ];

  const faqs = [
    { q: t("faq.0.q"), a: t("faq.0.a") },
    { q: t("faq.1.q"), a: t("faq.1.a") },
    { q: t("faq.2.q"), a: t("faq.2.a") },
    { q: t("faq.3.q"), a: t("faq.3.a") },
    { q: t("faq.4.q"), a: t("faq.4.a") },
  ];

  return (
    <>
      <SEOMetaTags title={t("seo.title")} description={t("seo.description")} />

      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="mx-auto">
          {/* HERO */}
          <section className="relative isolate overflow-hidden mt-4">
            <img
              src="/uploads/hilo.png"
              alt=""
              aria-hidden
              className="pointer-events-none select-none absolute left-80 top-12 w-full opacity-60 mix-blend-screen z-20"
            />

            <div className="relative min-h-[50vh] z-30 px-6 py-16 md:py-20 mt-20 mb-20 text-center">
              <div className="max-w-5xl mx-auto">
                <h1 className="text-primary mt-12 font-bold mb-4 text-[clamp(32px,5vw,46px)] leading-[1.05]">
                  {t("hero.title.line1")} <br /> {t("hero.title.line2")}
                </h1>
                <h2 className="text-blue/85 text-[clamp(18px,2.1vw,20px)] leading-relaxed mb-2">
                  {t("hero.subtitle")}
                </h2>
              </div>
              <div className="container max-w-6xl mt-6 grid md:grid-cols-3 gap-6 mb-8">
                {[t("hero.badge1"), t("hero.badge2"), t("hero.badge3")].map(
                  (b, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center gap-2 p-4 backdrop-blur rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-blue/85">
                        {b}
                      </span>
                    </div>
                  )
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={t("hero.cta1.href")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full text-lg text-white font-medium transition-transform whitespace-nowrap hover:scale-[1.03] shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
                  style={{
                    background:
                      "linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%)",
                  }}
                >
                  {t("hero.cta1.label")}
                </Link>
                <Link
                  to={t("hero.cta2.href")}
                  className="bg-white border py-2 border-primary rounded-full text-primary text-medium content-center text-center justify-center px-8"
                >
                  {t("hero.cta2.label")}
                </Link>
              </div>
            </div>
          </section>

          {/* PAIN → VISIÓN */}
          <section className="py-20 px-6 bg-gray-500/5 text-blue">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12 items-center">
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="text-3xl lg:text-3xl mb-2 font-bold transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  {t("pain.title")}
                </h2>
              </div>
              <div className="border-l-4 border-blue-400 col-span-2 text-sm pl-6 prose prose-lg max-w-none text-left">
                <p>{t("pain.text")}</p>
              </div>
            </div>
          </section>

          {/* ¿PARA QUIÉN ES? */}
          <section className="py-20">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
              <div className="px-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  {t("forWho.title")}
                </h2>
              </div>
              <div className="space-y-6">
                {forWho.map((raw, i) => {
                  const [titlePart, ...rest] = raw.split(":");
                  const title = titlePart.trim();
                  const desc = rest.join(":").trim();
                  const gradients = [
                    "from-[#2563eb] via-[#1e3a8a] to-[#0b1220]",
                    "from-[#1f3b8a] via-[#1d3fa7] to-[#1b2b59]",
                    "from-[#3b82f6] via-[#2450b2] to-[#0f1b37]",
                    "from-[#1e40af] via-[#1d4ed8] to-[#0b1220]",
                    "from-[#2563eb] via-[#1e3a8a] to-[#0b1220]",
                  ];
                  const g = gradients[i % gradients.length];

                  return (
                    <div
                      key={i}
                      className={`relative w-full rounded-2xl p-6 md:p-8 text-white bg-gradient-to-r ${g} shadow-lg`}
                    >
                      <div className="flex items-start gap-6">
                        <div className="shrink-0">
                          <div className="text-5xl md:text-6xl font-extrabold leading-none opacity-90">
                            {i + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-lg md:text-xl font-semibold">
                            {title}
                            {desc && ":"}
                          </div>
                          {desc && (
                            <p className="mt-2 text-sm md:text-base text-white/85 leading-relaxed">
                              {desc}
                            </p>
                          )}
                        </div>
                        <ArrowUpRight className="w-6 h-6 opacity-70 mt-1" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ¿POR QUÉ AHORA? */}
          <section className="relative isolate overflow-hidden px-6 flex items-center pt-20 pb-20">
            <div className="absolute inset-0 z-0 bg-[#0a0f1c]" />
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(120deg, rgba(14,24,46,0) 0%, rgba(89,116,189,0.35) 45%, rgba(182,185,193,0) 100%)",
              }}
            />
            <div className="pointer-events-none absolute -top-24 -left-24 w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-3xl z-10" />
            <div className="pointer-events-none absolute -right-40 top-10 w-[50vw] h-[50vw] bg-blue-400/20 rounded-full blur-3xl z-10" />
            <div className="pointer-events-none absolute bottom-[-20%] left-[20%] w-[45vw] h-[45vw] bg-indigo-500/20 rounded-full blur-3xl z-10" />
            <img
              src="/uploads/hilo.png"
              alt=""
              aria-hidden
              className="pointer-events-none select-none absolute left-0 -top-20 w-[1200px] max-w-none opacity-60 mix-blend-screen z-20"
            />
            <div className="max-w-5xl mx-auto text-center relative z-30">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {t("whyNow.title")}
              </h1>
              <h2 className="text-xl max-w-4xl lg:text-xl text-white/80 mb-8">
                {t("whyNow.text")}
              </h2>
            </div>
          </section>

          {/* LO QUE VAS A CONSEGUIR */}
          <section className="py-20 px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                  {t("outcomes.title")}
                </h2>
              </div>

              <div className="grid grid-cols-3">
                {outcomes.map((item, index) => (
                  <div
                    key={index}
                    className="m-6 bg-white p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: "forwards",
                      opacity: 0,
                    }}
                  >
                    <div className="m-2">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-relaxed">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ¿QUÉ INCLUYE? (PAQUETE BASE) */}
          <section className="bg-muted/50 pt-20 pb-20">
            <div className="container max-w-7xl grid md:grid-cols-11">
              <div className="col-span-3 mr-20">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {t("base.title")}
                </h2>
                <p className="text-xl text-gray-500">{t("base.subtitle")}</p>
              </div>

              <div className="col-span-4">
                <div className="space-y-6">
                  {basePackLeft.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-4">
                <div className="space-y-6">
                  {basePackRight.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* NUESTRA SOLUCIÓN */}
          <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
                  {t("solution.title")}
                </h2>
              </div>

              <div className="grid md:grid-cols-3 m-2 lg:grid-cols-3 gap-8">
                {solution.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-tutumsec-gray-50 p-2 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="p-2 items-center justify-center text-center min-h-[25vh] max-h-[30vh]">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
                        {item.category}
                      </h3>
                      <p className="text-gray-600 text-md leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                        {item.items}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm text-gray-500 italic">
                  {t("solution.note")}
                </p>
              </div>
            </div>
          </section>

          {/* DIFERENCIAS DE TUTUMSEC */}
          <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 lex-start gap-12 items-center">
                <div className="col-span-2">
                  <h2 className="text-4xl lg:text-4xl font-bold mb-2">
                    {t("reasons.title1")}
                  </h2>
                  <h3 className="font-medium text-2xl">
                    <span className="relative">
                      {t("reasons.title2")}
                      <svg
                        className="absolute -bottom-4 left-0 w-full h-3"
                        viewBox="0 0 300 12"
                        fill="none"
                      >
                        <path
                          d="M5 6 Q150 1 295 6"
                          stroke="#3B82F6"
                          strokeWidth="3"
                          fill="none"
                        />
                      </svg>
                    </span>
                  </h3>
                </div>

                <div className="col-span-3 space-y-8">
                  {reasons.map((r, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-400 pl-6"
                    >
                      <h3 className="text-xl font-semibold mb-2 text-blue-300">
                        {r}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ + CTA */}
          <section className="py-20 px-6 bg-gray-100 relative overflow-hidden bg-[url('/uploads/background.png')] bg-cover bg-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                  {t("faq.title")}
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-200/80 rounded-2xl border border-gray-300 px-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <details>
                      <summary className="cursor-pointer py-6 font-semibold text-gray-800 hover:text-primary">
                        {faq.q}
                      </summary>
                      <div className="cursor-pointer py-6 font-semibold text-gray-800">
                        {faq.a}
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mt-20 mx-auto relative">
              <div className="bg-gradient-to-r from-black via-blue-900 to-blue-800 rounded-[2rem] p-12 relative overflow-hidden mx-auto max-w-5xl">
                <div className="relative z-10 max-w-3xl text-center mx-auto">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {t("cta.title")}
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                    <Link
                      to={t("hero.cta1.href")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 rounded-full text-lg text-white font-medium transition-transform whitespace-nowrap hover:scale-[1.03] shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
                      style={{
                        background:
                          "linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%)",
                      }}
                    >
                      {t("hero.cta1.label")}
                    </Link>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 text-white rounded-full border-white/20 hover:bg-white/20"
                    >
                      {t("cta.secondary")}
                    </Button>
                  </div>
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
        </div>
      </main>

      <PartnersSection />
      <Footer />
    </>
  );
};

export default PrevencionBackup;
