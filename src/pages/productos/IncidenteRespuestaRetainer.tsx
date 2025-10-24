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
  AlarmClock,
  Zap,
  ShieldCheck,
  LineChart,
  ArrowRight,
} from "lucide-react";
import PartnersSection from "../PartnersSection";
import { Link } from "react-router-dom";
import { useTranslations } from "@/i18n/useTranslations";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

  const crossSellServices = [
    {
      title: "Consultoría CISO (vCISO)",
      description: "Gobierno, KPIs y cultura",
      href: "/es/servicios/consultoria-ciso",
      icon: LineChart,
    },
    {
      title: "Transformación Digital Segura",
      description: "Automatizacion & IA alineada al negocio",
      href: "/es/servicios/auditoria-compliance-nis2",
      icon: Zap,
    },
    {
      title: "Auditoría & Compliance NIS2",
      description: "Pentesting ofensivo + Gap-Analysis + plan de adecuación ",
      href: "/es/servicios/auditoria-compliance-nis2",
      icon: ShieldCheck,
    },
    {
      title: "SOC / MDR 24×7",
      description: "Vigilancia y respuesta gestionada",
      href: "/es/productos/deteccion-24x7",
      icon: AlarmClock,
    },
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
            {/* BG hilo decorativo: oculto en móvil para evitar overflow */}
            <img
              src="/uploads/hilo.png"
              alt=""
              aria-hidden
              className="hidden md:block pointer-events-none select-none absolute left-1/2 -translate-x-1/2 md:left-80 md:translate-x-0 top-12 w-[1200px] max-w-none opacity-60 mix-blend-screen z-20"
            />

            <div className="relative min-h-[50vh] z-30 px-4 sm:px-6 py-16 md:py-20 mt-20 mb-16 md:mb-20 text-center">
              <div className="max-w-5xl mx-auto">
                <h1
                  className="text-primary font-bold mb-4 leading-tight"
                  style={{
                    fontSize: "clamp(30px,5.2vw,46px)",
                    lineHeight: "1.05",
                  }}
                >
                  {t("hero.title.line1")} <br /> {t("hero.title.line2")}
                </h1>
                <h2
                  className="text-blue/85 mb-6 leading-relaxed"
                  style={{ fontSize: "clamp(16px,2.1vw,20px)" }}
                >
                  {t("hero.subtitle")}
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link
                  to={t("cta.proposal.href")}
                  className="bg-primary rounded-full py-2.5 text-white text-base sm:text-medium text-center px-6 sm:px-8"
                >
                  {t("hero.ctaHelp.label")}
                </Link>
                <Link
                  to={t("hero.ctaTalk.href")}
                  className="bg-white border py-2.5 border-primary rounded-full text-primary text-base sm:text-medium text-center px-6 sm:px-8"
                >
                  {t("hero.ctaTalk.label")}
                </Link>
              </div>

              <div className="mt-8 md:mt-12 text-center px-4">
                <p className="text-xs sm:text-sm text-gray-500 italic">
                  {t("hero.note")}
                </p>
              </div>
            </div>
          </section>

          {/* PAIN → VISIÓN */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-500/5 text-blue">
            <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3 lg:items-center">
              <div className="transition-all duration-700 hover:translate-x-1">
                <h2 className="text-2xl sm:text-3xl font-bold leading-snug sm:leading-relaxed hover:text-primary-light transition-colors">
                  {t("pain.title")}
                </h2>
              </div>
              {/* Borde top en mobile, left en desktop */}
              <div className="lg:col-span-2 lg:ml-6 text-left prose prose-base sm:prose-lg max-w-none border-t lg:border-t-0 lg:border-l-4 border-blue-400 pt-4 lg:pt-0 lg:pl-6">
                <p className="m-0">{t("pain.text")}</p>
              </div>
            </div>
          </section>

          {/* QUÉ HAREMOS POR TI */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug sm:leading-relaxed">
                  {t("steps.title")}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {steps.map((item, index) => (
                  <div
                    key={index}
                    className="m-2 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: "forwards",
                      opacity: 0,
                    }}
                  >
                    <div className="m-1 sm:m-2">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="pt-2 text-lg sm:text-xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-relaxed">
                          {item.title}
                        </h3>
                        {item.desc ? (
                          <ul className="list-disc pl-4 sm:pl-5 space-y-2">
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

              <div className="mt-8 sm:mt-10 flex justify-center items-center">
                <Link
                  to={t("cta.proposal.href")}
                  className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-full"
                >
                  {t("cta.proposal.label")}
                </Link>
              </div>
            </div>
          </section>

          {/* CO-GESTIÓN */}
          <section className="bg-muted/50 py-16 sm:py-20">
            <div className="container max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-6 md:items-start">
              <div className="md:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {t("cogestion.title")}
                </h2>
              </div>

              <div className="md:col-span-4">
                <div className="space-y-4 sm:space-y-6">
                  {cogestion.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ¿DÓNDE INTERVENIMOS? */}
          <section className="relative isolate overflow-hidden px-4 sm:px-6 flex items-center pt-16 sm:pt-20 pb-16 sm:pb-20">
            <div className="absolute inset-0 z-0 bg-[#0a0f1c]" />
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(120deg, rgba(14,24,46,0) 0%, rgba(89,116,189,0.35) 45%, rgba(182,185,193,0) 100%)",
              }}
            />
            {/* blobs decorativos: reducidos u ocultos en móvil */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-[70vw] h-[70vw] bg-blue-600/20 rounded-full blur-3xl z-10 hidden md:block" />
            <div className="pointer-events-none absolute -right-40 top-10 w-[60vw] h-[60vw] bg-blue-400/20 rounded-full blur-3xl z-10 hidden md:block" />
            <div className="pointer-events-none absolute bottom-[-20%] left-[20%] w-[55vw] h-[55vw] bg-indigo-500/20 rounded-full blur-3xl z-10 hidden md:block" />
            <img
              src="/uploads/hilo.png"
              alt=""
              aria-hidden
              className="hidden md:block pointer-events-none select-none absolute left-0 -top-20 w-[1200px] max-w-none opacity-60 mix-blend-screen z-20"
            />
            <div className="max-w-5xl mx-auto text-center relative z-30">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                {t("where.title")}
              </h1>
              <h2 className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 mx-auto max-w-4xl">
                {t("where.text")}
              </h2>
            </div>
          </section>

          {/* ENTREGABLES */}
          <section className="py-16 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 grid gap-8 lg:grid-cols-2 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-8 leading-snug">
                  {t("deliverables.title.line1")} <br />{" "}
                  {t("deliverables.title.line2")}
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6">
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
                      className={`relative w-full rounded-2xl p-5 sm:p-6 md:p-8 text-white bg-gradient-to-r ${g} shadow-lg`}
                    >
                      <div className="flex items-start gap-4 sm:gap-6">
                        <div className="shrink-0">
                          <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none opacity-90">
                            {i + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-base sm:text-lg md:text-xl font-semibold">
                            {title}
                            {desc && ":"}
                          </div>
                          {desc && (
                            <p className="mt-2 text-sm md:text-base text-white/85 leading-relaxed">
                              {desc}
                            </p>
                          )}
                        </div>
                        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 opacity-70 mt-1" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CULTURA + CROSS SELL */}
          <section className="py-16 sm:py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-4xl text-center font-bold text-primary">
                Servicios
              </h2>
              <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {crossSellServices.map((s, i) => {
                  const Icon = s.icon;
                  const url = s.href ?? "#";
                  return (
                    <Card
                      key={i}
                      className="h-full rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col"
                    >
                      <CardHeader className="items-center text-center">
                        <div className="mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-50">
                          {Icon ? (
                            <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
                          ) : null}
                        </div>
                        <CardTitle className="text-lg sm:text-xl font-semibold text-slate-900">
                          {s.title}
                        </CardTitle>
                        <CardDescription className="mt-3 text-slate-600 leading-relaxed">
                          {s.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="mt-auto px-6 pb-6">
                        <Button
                          asChild
                          variant="secondary"
                          className="w-full group"
                          aria-label={`${t("cross.cta")} ${s.title}`}
                        >
                          <Link to={url}>
                            {t("cross.cta")}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ + CTA */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-100 relative overflow-hidden bg-[url('/uploads/background.png')] bg-cover bg-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug sm:leading-relaxed">
                  {t("faq.title")}
                </h2>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-200/80 rounded-2xl border border-gray-300 px-4 sm:px-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <details>
                      <summary className="cursor-pointer py-5 sm:py-6 font-semibold text-gray-800 hover:text-primary">
                        {faq.q}
                      </summary>
                      <div className="py-4 sm:py-6 text-gray-800">{faq.a}</div>
                    </details>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mt-14 sm:mt-20 mx-auto relative px-4">
              <div className="bg-gradient-to-r from-black via-blue-900 to-blue-800 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden mx-auto">
                <div className="relative z-10 max-w-3xl text-center mx-auto">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                    {t("cta.title")}
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-2 sm:mb-4">
                    <Link
                      to={t("cta.proposal.href")}
                      className="flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full"
                    >
                      {t("hero.ctaHelp.label")}
                    </Link>
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
                  className="absolute -right-6 -bottom-6 w-32 sm:w-40 lg:w-48 opacity-50"
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
