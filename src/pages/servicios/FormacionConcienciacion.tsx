// src/pages/servicios/FormacionConcienciacion.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOMetaTags from "@/components/SEOMetaTags";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  AlertTriangle,
  Shield,
  Clock,
  TrendingUp,
  ArrowUpRight,
  LineChart,
  ShieldCheck,
  Bug,
  AlarmClock,
  ArrowRight,
  Zap,
} from "lucide-react";
import RoleItinerariesCarousel from "./RoleItinerariesGrid";
import { Link } from "react-router-dom";
import PartnersSection from "../PartnersSection";
import { useTranslations } from "@/i18n/useTranslations";

const FormacionConcienciacion = () => {
  const { t } = useTranslations(["formacion", "crossSellServices"]);

  const badges = [
    t("hero.badges.0"),
    t("hero.badges.1"),
    t("hero.badges.2"),
    t("hero.badges.3"),
  ];

  const quickWins = [
    t("hero.quickWins.0"),
    t("hero.quickWins.1"),
    t("hero.quickWins.2"),
  ];

  const solucion = [
    {
      title: t("solution.items.0.title"),
      description: t("solution.items.0.desc"),
      icon: AlertTriangle,
    },
    {
      title: t("solution.items.1.title"),
      description: t("solution.items.1.desc"),
      icon: Shield,
    },
    {
      title: t("solution.items.2.title"),
      description: t("solution.items.2.desc"),
      icon: Clock,
    },
    {
      title: t("solution.items.3.title"),
      description: t("solution.items.3.desc"),
      icon: TrendingUp,
    },
  ];

  const ritm = [
    { title: t("rhythm.items.0.title"), description: t("rhythm.items.0.desc") },
    { title: t("rhythm.items.1.title"), description: t("rhythm.items.1.desc") },
    { title: t("rhythm.items.2.title"), description: t("rhythm.items.2.desc") },
    { title: t("rhythm.items.3.title"), description: t("rhythm.items.3.desc") },
    { title: t("rhythm.items.4.title"), description: t("rhythm.items.4.desc") },
    { title: t("rhythm.items.5.title"), description: t("rhythm.items.5.desc") },
  ];

  const expectedResults = [
    t("results.items.0"),
    t("results.items.1"),
    t("results.items.2"),
  ];

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
  ];

  const crossSellServices = [
    {
      title: t("cross.vciso.title"),
      description: t("cross.vciso.desc"),
      href: t("cross.vciso.href"),
      icon: LineChart,
    },
    {
      title: "Transformación Digital Segura",
      description: "Automatizacion & IA alineada al negocio",
      href: "/servicios/auditoria-compliance-nis2",
      icon: Zap,
    },
    {
      title: t("cross.audit.title"),
      description: t("cross.audit.desc"),
      href: "Pentesting ofensivo + Gap-Analysis + plan de adecuación",
      icon: ShieldCheck,
    },
    {
      title: t("cross.mdr.title"),
      description: t("cross.mdr.desc"),
      href: t("cross.mdr.href"),
      icon: AlarmClock,
    },
  ];

  return (
    <>
      <SEOMetaTags title={t("seo.title")} description={t("seo.description")} />

      <Navbar />
      <main className="min-h-screen bg-background">
        <div>
          {/* HERO */}
          <section className="relative lg:min-h-screen lg:mt-20 isolate overflow-hidden mt-6 ">
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
            <img
              src="/uploads/hilo.png"
              alt=""
              aria-hidden
              className="pointer-events-none select-none absolute left-0 -top-12 w-[1200px] max-w-none opacity-60 mix-blend-screen z-20"
            />

            <div>
              <div className="relative z-30 px-6 md:pt-16 text-center mb-12 mt-20">
                <h1 className=" max-w-7xl text-3xl md:text-5xl font-bold text-white mb-4 mt-20 ">
                  {t("hero.title")}
                </h1>
                <h2 className="container max-w-5xl sm:text-md md:text-2xl text-white/80 mb-8">
                  {t("hero.subtitle")}
                </h2>
                <div className="hidden md:grid md:grid-cols-3 gap-6 mb-2">
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {badges.map((badge, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-sm bg-white/10 border-white/20 text-white"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>{" "}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="https://calendly.com/ayub-tutumsec/30min"
                    className="px-6 py-2 rounded-full text-lg text-white font-medium transition-transform whitespace-nowrap hover:scale-[1.03] shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background:
                        "linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%)",
                    }}
                  >
                    {t("hero.cta1")}
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg rounded-full px-8 bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    {t("hero.cta2")}
                  </Button>
                </div>
              </div>
              <div className="hidden md:grid md:grid-cols-3 gap-6 mb-2">
                <div className="absolute bottom-8 left-0 w-full">
                  <div className="grid lg:grid-cols-3 gap-12 px-6 py-6 items-center text-left space-y-2">
                    {quickWins.map((win, i) => (
                      <li key={i} className="flex items-start text-white">
                        <CheckCircle className="w-5 h-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{win}</span>
                      </li>
                    ))}
                  </div>
                </div>{" "}
              </div>
            </div>
          </section>

          <section className="bg-white pb-6 pt-12"></section>

          {/* PROBLEMA */}
          <section className=" py-2 px-6 text-blue">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="text-2xl lg:text-4xl mb-2 font-bold transition-colors duration-500 hover:text-primary-light leading-tight">
                  {t("problem.heading")}
                </h2>
              </div>
              <div className="border-l-4 border-blue-400 text-sm pl-6 prose prose-lg max-w-none text-left">
                <p>{t("problem.body")}</p>
              </div>
            </div>
          </section>

          {/* SOLUCIÓN */}
          <section className="container py-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-4xl mt-20 font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                {t("solution.heading")}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {solucion.map((s, index) => {
                const Icon = s.icon;
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
                        <Icon className="w-14 h-14 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-relaxed">
                          {s.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                          {s.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-20 p-5 bg-muted rounded-2xl border border-gray-200 max-w-5xl mx-auto">
              <p className="text-sm">
                <strong>{t("solution.note.strong")} </strong>
                {t("solution.note.text")}
              </p>
            </div>
          </section>

          <RoleItinerariesCarousel />

          {/* RITMO */}
          <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="transform transition-all duration-700 hover:translate-x-2">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-8 transition-colors duration-500 hover:text-primary-light leading-relaxed">
                    {t("rhythm.heading.1")}
                    <span className="relative group p-2">
                      {t("rhythm.heading.2")}
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
                  </h2>
                </div>

                <div className="space-y-8">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        <div className="space-y-8">
                          {ritm.map((r, index) => (
                            <div
                              key={index}
                              className="border-l-4 border-blue-400 pl-6"
                            >
                              <h3 className="text-xl font-semibold mb-2 text-blue-300">
                                {r.title}
                              </h3>
                              <p className="text-gray-200 leading-relaxed">
                                {r.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RESULTADOS */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-extrabold text-foreground mb-8">
                {t("results.heading")}
              </h2>
              <div className="grid md:grid-cols-3  gap-6">
                {expectedResults.map((text, i) => {
                  const gradients = [
                    "from-[#3B82F6] to-[#1E3A8A]",
                    "from-[#1E3A8A] to-[#1D4ED8]",
                    "from-[#1E3A8A] to-[#00040B]",
                  ];
                  return (
                    <div
                      key={i}
                      className={`rounded-2xl p-6 md:p-8 text-white bg-gradient-to-r ${
                        gradients[i % gradients.length]
                      } shadow-[0_10px_30px_rgba(2,6,23,0.15)]`}
                    >
                      <div className="flex items-start gap-6">
                        <div className="text-5xl md:text-6xl font-extrabold leading-none opacity-95">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-lg leading-relaxed">{text}</p>
                        </div>
                        <ArrowUpRight className="w-6 h-6 opacity-70 mt-1" />
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-6 text-sm text-muted-foreground italic">
                {t("results.note")}
              </p>
            </div>
          </section>

          {/* CULTURA + CROSS SELL */}
          <section className="py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl text-center font-bold text-primary">
                {t("culture.heading")}
              </h2>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {crossSellServices.map((s, i) => {
                  const Icon = s.icon;
                  const url = s.href ?? "#";
                  return (
                    <Card
                      key={i}
                      className="h-full rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col"
                    >
                      <CardHeader className="items-center text-center">
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                          {Icon ? (
                            <Icon className="h-7 w-7 text-blue-600" />
                          ) : null}
                        </div>
                        <CardTitle className="text-xl font-semibold text-slate-900">
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
          <section className="py-20 px-6 bg-gray-100 relative overflow-hidden bg-[url('/uploads/background.png')] bg-cover bg-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                  {t("faq.heading")}
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.map((f, index) => (
                  <div
                    key={index}
                    className="bg-gray-200/80 rounded-2xl border border-gray-300 px-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <details>
                      <summary className="cursor-pointer py-6 font-semibold text-gray-800 hover:text-primary">
                        {f.q}
                      </summary>
                      <div className="cursor-pointer py-6 font-semibold text-gray-800 hover:text-primary">
                        {f.a}
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-6xl mt-20 mx-auto relative">
              <div className="bg-gradient-to-r from-black via-blue-900 to-blue-800 rounded-[2rem] p-12 relative overflow-hidden mx-auto max-w-5xl">
                <div className="relative z-10 max-w-3xl text-center mx-auto">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {t("cta.title")}
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                    <Link
                      to="https://calendly.com/ayub-tutumsec/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 text-sm rounded-full md:text-lg lg:text-lg text-white font-medium transition-transform whitespace-nowrap hover:scale-[1.03] shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
                      style={{
                        background:
                          "linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%)",
                      }}
                    >
                      {t("cta.primary")}
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

          <PartnersSection />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FormacionConcienciacion;
