import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOMetaTags from "@/components/SEOMetaTags";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CheckCircle,
  Settings,
  BarChart3,
  Clock,
} from "lucide-react";
import PartnersSection from "../PartnersSection";
import { Link } from "react-router-dom";
import { useTranslations } from "@/i18n/useTranslations";

const RespuestaIncidentes: React.FC = () => {
  const { t } = useTranslations(["respuesta"]);

  const deliverables = [
    t("deliverables.0"),
    t("deliverables.1"),
    t("deliverables.2"),
  ];

  const cogestion = [
    t("cogestion.0"),
    t("cogestion.1"),
    t("cogestion.2"),
    t("cogestion.3"),
    t("cogestion.4"),
    t("cogestion.5"),
  ];

  const steps = [
    { title: t("steps.0.title"), desc: t("steps.0.desc"), icon: Clock },
    { title: t("steps.1.title"), desc: t("steps.1.desc"), icon: Settings },
    { title: t("steps.2.title"), desc: t("steps.2.desc"), icon: BarChart3 },
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
                <h1 className="text-primary leading-tight mt-12 font-bold mb-4 text-[clamp(32px,5vw,46px)] leading-[1.05]">
                  {t("hero.title.line1")} <br /> {t("hero.title.line2")}
                </h1>
                <h2 className="text-blue/85 mb-6 text-[clamp(18px,2.1vw,20px)] leading-relaxed">
                  {t("hero.subtitle")}
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={t("hero.ctaHelp.href")}
                  className="bg-primary rounded-full text-white text-medium content-center text-center justify-center px-8"
                >
                  {t("hero.ctaHelp.label")}
                </Link>
                <Link
                  to={t("hero.ctaTalk.href")}
                  className="bg-white border py-2 border-primary rounded-full text-primary text-medium content-center text-center justify-center px-8"
                >
                  {t("hero.ctaTalk.label")}
                </Link>
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm text-gray-500 italic">{t("hero.note")}</p>
              </div>
            </div>
          </section>

          {/* PAIN → VISIÓN */}
          <section className="py-20 px-6 bg-gray-500/5 text-blue">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center">
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="text-3xl lg:text-3xl mb-2 font-bold transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  {t("pain.title")}
                </h2>
              </div>
              <div className="border-l-4 border-blue-400 col-span-2 text-md pl-6 prose prose-lg max-w-none text-left">
                <p>{t("pain.text")}</p>
              </div>
            </div>
          </section>

          {/* QUÉ HAREMOS POR TI */}
          <section className="py-20 px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                  {t("steps.title")}
                </h2>
              </div>

              <div className="grid grid-cols-3">
                {steps.map((item, index) => (
                  <div
                    key={index}
                    className="m-2 bg-white p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in"
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
                        <h3 className="pt-2 text-xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-relaxed">
                          {item.title}
                        </h3>
                        {item.desc ? (
                          <ul className="list-disc pl-5 space-y-2">
                            {item.desc.split("\n").map((p, i) => (
                              <li
                                key={i}
                                className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700"
                              >
                                {p}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-center items-center">
              <Link
                to={t("cta.proposal.href")}
                className="flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full"
              >
                {t("cta.proposal.label")}
              </Link>
            </div>
          </section>

          {/* CO-GESTIÓN */}
          <section className="bg-muted/50 pt-20 pb-20">
            <div className="pb-6 flex justify-center content-center container max-w-6xl grid md:grid-cols-6">
              <div className="col-span-2 mr-20">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {t("cogestion.title")}
                </h2>
              </div>

              <div className="ml-24 col-span-4">
                <div className="space-y-6">
                  {cogestion.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ¿DÓNDE INTERVENIMOS? */}
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
                {t("where.title")}
              </h1>
              <h2 className="text-xl max-w-4xl lg:text-xl text-white/80 mb-8">
                {t("where.text")}
              </h2>
            </div>
          </section>

          {/* ENTREGABLES */}
          <section className="mt-20 py-20">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
              <div className="px-2">
                <h2 className="leading-tight text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  {t("deliverables.title.line1")} <br />{" "}
                  {t("deliverables.title.line2")}
                </h2>
              </div>
              <div className="space-y-6">
                {deliverables.map((raw, i) => {
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
                    <Button className="rounded-full" size="lg">
                      {t("hero.ctaHelp.label")}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 text-white rounded-full border-white/20 hover:bg-white/20"
                    >
                      {t("hero.ctaTalk.label")}
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

export default RespuestaIncidentes;
