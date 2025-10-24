import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersSection from "../PartnersSection";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CheckCircle,
  Settings,
  BarChart3,
  Shield,
  Globe,
  Cloud,
  Cog,
  AlertTriangle,
  Clock,
  Euro,
  TrendingUp,
  AlertTriangle as AlertTriangleIcon,
  LineChart,
  ShieldCheck,
  Zap,
  AlarmClock,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslations } from "@/i18n/useTranslations";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RecuperacionBackup: React.FC = () => {
  const { t } = useTranslations(["recuperacion"]);

  const howItems = [
    t("how.items.0"),
    t("how.items.1"),
    t("how.items.2"),
    t("how.items.3"),
    t("how.items.4"),
  ];

  const outcomes = [
    t("outcomes.items.0"),
    t("outcomes.items.1"),
    t("outcomes.items.2"),
    t("outcomes.items.3"),
    t("outcomes.items.4"),
  ];

  const problems = [
    {
      title: t("includes.primary.0.title"),
      desc: t("includes.primary.0.desc"),
      icon: AlertTriangle,
    },
    {
      title: t("includes.primary.1.title"),
      desc: t("includes.primary.1.desc"),
      icon: Shield,
    },
    {
      title: t("includes.primary.2.title"),
      desc: t("includes.primary.2.desc"),
      icon: Clock,
    },
    {
      title: t("includes.primary.3.title"),
      desc: t("includes.primary.3.desc"),
      icon: TrendingUp,
    },
    {
      title: t("includes.primary.4.title"),
      desc: t("includes.primary.4.desc"),
      icon: TrendingUp,
    },
  ];

  const audience = [
    {
      category: t("audience.cards.0.category"),
      items: t("audience.cards.0.items"),
      icon: Euro,
      href: t("audience.cards.0.href"),
    },
    {
      category: t("audience.cards.1.category"),
      items: t("audience.cards.1.items"),
      icon: Shield,
      href: t("audience.cards.1.href"),
    },
    {
      category: t("audience.cards.2.category"),
      items: t("audience.cards.2.items"),
      icon: Globe,
      href: t("audience.cards.2.href"),
    },
    {
      category: t("audience.cards.3.category"),
      items: t("audience.cards.3.items"),
      icon: Cloud,
      href: t("audience.cards.3.href"),
    },
    {
      category: t("audience.cards.4.category"),
      items: t("audience.cards.4.items"),
      icon: Cog,
      href: t("audience.cards.4.href"),
    },
  ];

  const problemReal = [
    t("problemReal.items.0"),
    t("problemReal.items.1"),
    t("problemReal.items.2"),
  ];

  const coverage = [
    {
      title: t("coverage.0.title"),
      description: t("coverage.0.desc"),
      icon: TrendingUp,
    },
    {
      title: t("coverage.1.title"),
      description: t("coverage.1.desc"),
      icon: AlertTriangleIcon,
    },
  ];

  const diffReasons = [
    t("diff.list.0"),
    t("diff.list.1"),
    t("diff.list.2"),
    t("diff.list.3"),
    t("diff.list.4"),
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
  const steps = [
    { title: t("steps.0.title"), desc: t("steps.0.desc"), icon: Clock },
    { title: t("steps.1.title"), desc: t("steps.1.desc"), icon: Settings },
    { title: t("steps.2.title"), desc: t("steps.2.desc"), icon: BarChart3 },
  ];

  const deliverables = [t("deliverables.0"), t("deliverables.1")];

  const faqs = [
    { q: t("faq.0.q"), a: t("faq.0.a") },
    { q: t("faq.1.q"), a: t("faq.1.a") },
    { q: t("faq.2.q"), a: t("faq.2.a") },
    { q: t("faq.3.q"), a: t("faq.3.a") },
    { q: t("faq.4.q"), a: t("faq.4.a") },
  ];

  return (
    <>
      <Helmet>
        <title>{t("seo.title")}</title>
        <meta name="description" content={t("seo.description")} />
        <link rel="canonical" href={t("seo.canonical")} />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="mx-auto">
          {/* HERO */}
          <section className="relative isolate overflow-hidden mt-4">
            <img
              src="/uploads/hilo.png"
              alt=""
              aria-hidden
              className="hidden md:block pointer-events-none select-none absolute left-1/2 -translate-x-1/2 md:left-80 md:translate-x-0 top-12 w-[1200px] max-w-none opacity-60 mix-blend-screen z-20"
            />
            <div className="relative min-h-[50vh] z-30 px-4 sm:px-6 py-16 md:py-20 mt-20 mb-16 md:mb-20 text-center">
              <div className="max-w-5xl mx-auto">
                <h1
                  className="text-primary font-bold mb-4"
                  style={{
                    fontSize: "clamp(30px,5.2vw,46px)",
                    lineHeight: "1.05",
                  }}
                >
                  {t("hero.title.line1")} <br /> {t("hero.title.line2")}
                </h1>
                <h2
                  className="text-dark-600 mb-6 leading-relaxed"
                  style={{ fontSize: "clamp(16px,2.1vw,20px)" }}
                >
                  {t("hero.subtitle")}
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link
                  to={t("hero.ctaHelp.href")}
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

          {/* AUDIENCE */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug sm:leading-relaxed">
                  {t("audience.title")}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {audience.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="group block focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-2xl"
                  >
                    <div className="bg-tutumsec-gray-50 p-5 sm:p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                      <div className="text-center">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 group-hover:text-primary leading-tight">
                          {item.category}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700">
                          {item.items}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* WHY NOW */}
          <section className="relative isolate overflow-hidden px-4 sm:px-6 flex items-center pt-16 sm:pt-20 pb-16 sm:pb-20">
            <div className="absolute inset-0 z-0 bg-[#0a0f1c]" />
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(120deg, rgba(14,24,46,0) 0%, rgba(89,116,189,0.35) 45%, rgba(182,185,193,0) 100%)",
              }}
            />
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
                {t("whyNow.title")}
              </h1>
              <h2 className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto">
                {t("whyNow.text")}
              </h2>
            </div>
          </section>

          {/* HOW WE WORK */}
          <section className="py-16 sm:py-20 px-4">
            <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3 items-start">
              <div className="lg:col-span-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-8">
                  {t("how.title")}
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                {howItems.map((raw, i) => {
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

          {/* PROBLEM REAL */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug sm:leading-relaxed">
                  {t("problemReal.title")}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {problemReal.map((title, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/80 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-base sm:text-lg font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 group-hover:text-primary leading-tight">
                        {title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* OUTCOMES */}
          <section className="bg-muted/50 py-16 sm:py-20">
            <div className="container max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-6 md:items-start">
              <div className="md:col-span-2">
                <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-2">
                  {t("outcomes.title")}
                </h2>
              </div>
              <div className="md:col-span-4">
                <div className="space-y-4 sm:space-y-6">
                  {outcomes.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* INCLUDES (primary) */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug sm:leading-relaxed">
                  {t("includes.title")}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {problems.map((p, index) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-4 sm:gap-5">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-10 h-10 sm:w-14 sm:h-14 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 group-hover:text-primary leading-relaxed">
                            {p.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* DIFFERENTIAL */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8 lg:grid-cols-5">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl sm:text-4xl font-bold mb-2">
                    {t("diff.title")}
                  </h2>
                  <h3 className="font-medium text-xl sm:text-2xl relative inline-block">
                    {t("diff.subtitle")}
                    <svg
                      className="absolute -bottom-3 left-0 w-full h-2 sm:h-3"
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
                  </h3>
                </div>
                <div className="lg:col-span-3 space-y-5 sm:space-y-8">
                  {diffReasons.map((txt, i) => (
                    <div
                      key={i}
                      className="border-l-4 border-blue-400 pl-4 sm:pl-6"
                    >
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-blue-300">
                        {txt}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* PAIN COPY */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-500/5 text-blue">
            <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3 lg:items-center">
              <div className="transition-all duration-700 hover:translate-x-1">
                <h2 className="text-2xl sm:text-3xl font-bold leading-snug sm:leading-relaxed hover:text-primary-light transition-colors">
                  {t("pain.title")}
                </h2>
              </div>
              <div className="lg:col-span-2 lg:ml-6 text-left prose prose-base sm:prose-lg max-w-none border-t lg:border-t-0 lg:border-l-4 border-blue-400 pt-4 lg:pt-0 lg:pl-6">
                <p className="m-0">{t("pain.text")}</p>
              </div>
            </div>
          </section>

          {/* WHAT WE'LL DO FOR YOU */}
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
                    className="m-2 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="m-1 sm:m-2">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="pt-2 text-lg sm:text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary leading-relaxed">
                          {item.title}
                        </h3>
                        {item.desc ? (
                          <ul className="list-disc pl-4 sm:pl-5 space-y-2">
                            {item.desc.split("\n").map((p, i) => (
                              <li
                                key={i}
                                className="text-gray-600 leading-relaxed group-hover:text-gray-700"
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

          {/* COVERAGE (secondary includes) */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {t("deliverablesBand.title")}
                </h2>
              </div>

              <div className="max-w-5xl mx-auto text-gray-600">
                {deliverables.map((d, i) => (
                  <div key={i} className="flex items-start mb-3 sm:mb-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-base sm:text-lg">{d}</p>
                  </div>
                ))}
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
                    className="bg-gray-200/80 rounded-2xl border border-gray-300 px-4 sm:px-6 hover:shadow-md transition-shadow"
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
                    <Button className="rounded-full px-6 py-3">
                      {t("hero.ctaHelp.label")}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 text-white rounded-full border-white/20 hover:bg白/20"
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

export default RecuperacionBackup;
