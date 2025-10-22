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
  Cog,
  Network,
  AlertTriangle,
} from "lucide-react";
import PartnersSection from "../PartnersSection";
import { Link } from "react-router-dom";
import { useTranslations } from "@/i18n/useTranslations";

const Deteccion24x7: React.FC = () => {
  const { t } = useTranslations(["deteccion"]);

  const diferencial = [
    `${t("process.0.title")}: ${t("process.0.desc")}`,
    `${t("process.1.title")}: ${t("process.1.desc")}`,
    `${t("process.2.title")}: ${t("process.2.desc")}`,
  ];

  const reporte = [
    { title: t("report.0.title"), description: t("report.0.desc") },
    { title: t("report.1.title"), description: t("report.1.desc") },
    { title: t("report.2.title"), description: t("report.2.desc") },
  ];

  const faqs = [
    { question: t("faq.0.q"), answer: t("faq.0.a") },
    { question: t("faq.1.q"), answer: t("faq.1.a") },
    { question: t("faq.2.q"), answer: t("faq.2.a") },
    { question: t("faq.3.q"), answer: t("faq.3.a") },
    { question: t("faq.4.q"), answer: t("faq.4.a") },
  ];

  const coverage = [
    {
      category: t("coverage.0.title"),
      items: t("coverage.0.items"),
      icon: Monitor,
    },
    {
      category: t("coverage.1.title"),
      items: t("coverage.1.items"),
      icon: Shield,
    },
    {
      category: t("coverage.2.title"),
      items: t("coverage.2.items"),
      icon: Globe,
    },
    {
      category: t("coverage.3.title"),
      items: t("coverage.3.items"),
      icon: Cloud,
    },
    {
      category: t("coverage.4.title"),
      items: t("coverage.4.items"),
      icon: Cog,
    },
  ];

  const pipeline = [
    {
      step: "1",
      title: t("pipeline.0.title"),
      description: t("pipeline.0.desc"),
    },
    {
      step: "2",
      title: t("pipeline.1.title"),
      description: t("pipeline.1.desc"),
    },
    {
      step: "3",
      title: t("pipeline.2.title"),
      description: t("pipeline.2.desc"),
    },
    {
      step: "4",
      title: t("pipeline.3.title"),
      description: t("pipeline.3.desc"),
    },
    {
      step: "5",
      title: t("pipeline.4.title"),
      description: t("pipeline.4.desc"),
    },
  ];

  const differentiators = [
    {
      title: t("differs.0.title"),
      description: t("differs.0.desc"),
      icon: Users,
    },
    {
      title: t("differs.1.title"),
      description: t("differs.1.desc"),
      icon: Settings,
    },
    {
      title: t("differs.2.title"),
      description: t("differs.2.desc"),
      icon: BarChart3,
    },
    {
      title: t("differs.3.title"),
      description: t("differs.3.desc"),
      icon: Zap,
    },
    {
      title: t("differs.4.title"),
      description: t("differs.4.desc"),
      icon: RotateCcw,
    },
  ];

  const responseScope = [
    {
      title: t("response.0.title"),
      description: t("response.0.desc"),
      icon: Shield,
    },
    {
      title: t("response.1.title"),
      description: t("response.1.desc"),
      icon: AlertTriangle,
    },
    {
      title: t("response.2.title"),
      description: t("response.2.desc"),
      icon: Users,
    },
    {
      title: t("response.3.title"),
      description: t("response.3.desc"),
      icon: Network,
    },
    {
      title: t("response.4.title"),
      description: t("response.4.desc"),
      icon: Globe,
    },
    {
      title: t("response.5.title"),
      description: t("response.5.desc"),
      icon: RotateCcw,
    },
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
              <div className="max-w-4xl mx-auto">
                <h1 className="text-primary mt-12 font-bold mb-4 text-[clamp(32px,5vw,56px)] leading-[1.05]">
                  {t("hero.title")}
                </h1>
                <h2 className="text-blue/85 text-[clamp(18px,2.1vw,20px)] leading-relaxed mb-2">
                  {t("hero.subtitle")}
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
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
                  to={"/es/contacto"}
                  className="bg-white border py-2 border-primary rounded-full text-primary text-medium content-center text-center justify-center px-8"
                >
                  {t("hero.cta2.label")}
                </Link>
              </div>
            </div>
          </section>

          {/* PAIN → VISIÓN */}
          <section className="py-20 px-6 bg-gray-500/5 text-blue">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="text-3xl lg:text-3xl mb-2 font-bold transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  {t("pain.title")}
                </h2>
              </div>
              <div className="border-l-4 border-blue-400 text-sm pl-6 prose prose-lg max-w-none text-left">
                <p>{t("pain.text")}</p>
              </div>
            </div>
          </section>

          {/* PROCESO */}
          <section className="py-20">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
              <div className="px-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  {t("process.title")}
                </h2>
              </div>
              <div className="space-y-6">
                {diferencial.map((raw, i) => {
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

          {/* DIFERENCIALES */}
          <section className="py-20 px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                  {t("differs.title")}
                </h2>
              </div>

              <div className="space-y-8">
                {differentiators.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: "forwards",
                      opacity: 0,
                    }}
                  >
                    <div className="flex items-start space-x-6">
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

              <div className="mt-12 text-center">
                <p className="text-sm text-gray-500 italic">
                  {t("differs.note")}
                </p>
              </div>
            </div>
          </section>

          {/* COBERTURA */}
          <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
                  {t("coverage.title")}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coverage.map((item, index) => (
                  <div
                    key={index}
                    className="bg-tutumsec-gray-50 p-6 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
                        {item.category}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                        {item.items}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm text-gray-500 italic">
                  {t("coverage.note")}
                </p>
              </div>
            </div>
          </section>

          {/* PIPELINE */}
          <section className="py-40 px-6 bg-tutumsec-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-relaxed">
                  {t("pipeline.title")}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                {pipeline.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-2 relative"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/80 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ONBOARDING */}
          <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
                  {t("onboarding.title")}
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    period: t("onboarding.0.period"),
                    title: t("onboarding.0.title"),
                    description: t("onboarding.0.desc"),
                    gradient: "from-blue-900 to-black",
                  },
                  {
                    period: t("onboarding.1.period"),
                    title: t("onboarding.1.title"),
                    description: t("onboarding.1.desc"),
                    gradient: "from-blue-950 to-blue-800",
                  },
                  {
                    period: t("onboarding.2.period"),
                    title: t("onboarding.2.title"),
                    description: t("onboarding.2.desc"),
                    gradient: "from-blue-500 to-blue-950",
                  },
                  {
                    period: t("onboarding.3.period"),
                    title: t("onboarding.3.title"),
                    description: t("onboarding.3.desc"),
                    gradient: "from-blue-600 to-blue-900",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${item.gradient} p-8 rounded-2xl text-white relative group`}
                  >
                    <div className="flex items-start gap-6">
                      <div className="text-4xl font-bold opacity-80 min-w-[6ch]">
                        {item.period}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-200 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-white opacity-60">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ALCANCE DE RESPUESTA */}
          <section className="py-20 px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
                  {t("response.title")}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {responseScope.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-700 font-medium">
                  {t("response.note")}
                </p>
              </div>
            </div>
          </section>

          {/* HUNTING */}
          <section className="py-20 px-6 bg-gray-500/5 text-blue">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12 items-center">
              <div className="transform col-span-1 transition-all duration-700 hover:translate-x-2">
                <h2 className="text-3xl lg:text-3xl mb-2 font-bold transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  {t("hunting.title")}
                </h2>
              </div>
              <div className="border-l-4 col-span-2 ml-20 border-blue-400 text-sm pl-6 prose prose-lg max-w-none text-left">
                <p>{t("hunting.text")}</p>
              </div>
            </div>
          </section>

          {/* REPORTING & KPIs */}
          <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 lex-start gap-12 items-center">
                <div>
                  <h2 className="text-4xl lg:text-4xl font-bold mb-2">
                    {t("report.titleLine1")} <br />
                    <span className="relative">
                      {t("report.titleLine2")}
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
                  </h2>
                </div>

                <div className="space-y-8">
                  {reporte.map((risk, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-400 pl-6"
                    >
                      <h3 className="text-xl font-semibold mb-2 text-blue-300">
                        {risk.title}
                      </h3>
                      <p className="leading-relaxed">{risk.description}</p>
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
                        {faq.question}
                      </summary>
                      <div className="cursor-pointer py-6 font-semibold text-gray-800">
                        {faq.answer}
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

export default Deteccion24x7;
