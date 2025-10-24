// src/pages/servicios/TransformacionDigital.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Cpu,
  Search,
  Map,
  Settings,
  AlarmClock,
  ShieldCheck,
  LineChart,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import PartnersSection from "../PartnersSection";
import { useTranslations } from "@/i18n/useTranslations";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const TransformacionDigital = () => {
  const { t } = useTranslations([
    "transformacion",
    "formacion",
    "crossSellServices",
  ]);

  const crossSellServices = [
    {
      title: t("crossSellServices.0.title"),
      description: t("crossSellServices.0.description"),
      href: t("crossSellServices.0.href"),
      icon: LineChart,
    },
    {
      title: t("crossSellServices.1.title"),
      description: t("crossSellServices.1.description"),
      href: t("crossSellServices.1.href"),
      icon: ShieldCheck,
    },
    {
      title: t("crossSellServices.3.title"),
      description: t("crossSellServices.3.description"),
      href: t("crossSellServices.3.href"),
      icon: AlarmClock,
    },
  ];

  // FAQs
  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
  ];

  // Steps (metodología)
  const steps = [
    {
      title: t("process.steps.0.title"),
      desc: t("process.steps.0.desc"),
      icon: Search,
    },
    {
      title: t("process.steps.1.title"),
      desc: t("process.steps.1.desc"),
      icon: Map,
    },
    {
      title: t("process.steps.2.title"),
      desc: t("process.steps.2.desc"),
      icon: Settings,
    },
    {
      title: t("process.steps.3.title"),
      desc: t("process.steps.3.desc"),
      icon: TrendingUp,
    },
  ];

  // Structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("schema.name"),
    description: t("schema.description"),
    provider: { "@type": "Organization", name: "TutumSec" },
    areaServed: ["ES-CT", "ES-GI", "AD", "ES"],
  };

  return (
    <>
      <Helmet>
        <title>{t("seo.title")}</title>
        <meta name="description" content={t("seo.description")} />
        <link
          rel="canonical"
          href="https://tutumsec.com/servicios/transformacion-digital"
        />
        <script type="application/ld+json">
          {JSON.stringify([faqStructuredData, serviceStructuredData])}
        </script>
        <link
          rel="alternate"
          href="https://tutumsec.com/ca/serveis/transformacio-digital"
          hrefLang="ca"
        />
        <link
          rel="alternate"
          href="https://tutumsec.com/en/services/digital-transformation"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://tutumsec.com/servicios/transformacion-digital"
          hrefLang="es"
        />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background">
        <div>
          {/* HERO */}
          <section className="relative isolate min-h-[72vh] md:min-h-screen overflow-hidden px-6 flex items-center">
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
              <h1
                className="text-2xl lg:text-6xl mt-20 font-bold text-white mb-6 leading-relaxed"
                style={{ lineHeight: "1.2" }}
              >
                {t("hero.title")}
              </h1>
              <h2 className="text-xl lg:text-2xl text-white/80 mb-8">
                {t("hero.subtitle")}
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-2">
                <div className="hidden md:grid md:grid-cols-3 gap-6 mb-2">
                  <div className="flex items-center justify-center gap-2 p-2 backdrop-blur rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-white">
                      {t("hero.bullets.0")}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-2 backdrop-blur rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-white">
                      {t("hero.bullets.1")}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-2 backdrop-blur rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-white">
                      {t("hero.bullets.2")}
                    </span>
                  </div>
                </div>{" "}
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
                style={{
                  animationDelay: "0.9s",
                  animationFillMode: "forwards",
                }}
              >
                <Link
                  to="https://calendly.com/ayub-tutumsec/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full text-lg text-white font-medium transition-transform whitespace-nowrap hover:scale-[1.03] shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
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
                  className="px-4 py-2 text-md rounded-full"
                >
                  {t("hero.cta2")}
                </Button>
              </div>
            </div>
          </section>

          {/* Pain → visión */}
          <section className=" py-20 px-6 bg-gray-500/5 text-blue">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="text-3xl lg:text-3xl mb-2 font-bold transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  {t("pain.heading")}
                </h2>
              </div>
              <div className="border-l-4 border-blue-400 text-sm pl-6 prose prose-lg max-w-none text-left">
                <p>{t("pain.body")}</p>
              </div>
            </div>
          </section>

          {/* Beneficios */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                {t("benefits.heading")}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <Cpu className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      {t("benefits.cards.0.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("benefits.cards.0.desc")}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      {t("benefits.cards.1.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("benefits.cards.1.desc")}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <CheckCircle className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      {t("benefits.cards.2.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("benefits.cards.2.desc")}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      {t("benefits.cards.3.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("benefits.cards.3.desc")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Diferencial */}
          <section className="py-12 bg-gray-500/5 pt-20 pb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-20">
                {t("edge.heading")}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {t("edge.items.0.title")}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t("edge.items.0.desc")}
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {t("edge.items.1.title")}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t("edge.items.1.desc")}
                  </p>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {t("edge.items.2.title")}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t("edge.items.2.desc")}
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* CULTURA + CROSS SELL */}
          <section className="py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl text-center font-bold text-primary">
                {t("h2.crossSell")}
              </h2>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
                            <Icon className="h-7 w-7 text-primary" />
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

          {/* Proceso */}
          <section className="py-20 px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-4xl font-bold text-blue-500 mb-6">
                  {t("process.heading")}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => {
                  const Icon = step.icon;
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
                          <Icon className="w-8 h-8 text-primary items-center" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 px-6 bg-gray-100 relative overflow-hidden bg-[url('/uploads/background.png')] bg-cover bg-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                  {t("faq.heading")}
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
                      <div className="text-gray-600 leading-relaxed pb-6">
                        {faq.a}
                      </div>
                    </details>
                  </div>
                ))}
              </div>

              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faqs.map((f) => ({
                      "@type": "Question",
                      name: f.q,
                      acceptedAnswer: { "@type": "Answer", text: f.a },
                    })),
                  }),
                }}
              />
            </div>
            <div className="max-w-6xl mt-20 mx-auto relative">
              <div className="bg-gradient-to-r from-black via-blue-900 to-blue-800 rounded-[2rem] p-12 relative overflow-hidden mx-auto max-w-5xl">
                <div className="relative z-10 max-w-3xl text-center mx-auto">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {t("cta.title")}
                  </h2>
                  <div className="space-y-4">
                    <Link
                      to="https://calendly.com/ayub-tutumsec/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 rounded-full text-lg text-white font-medium transition-transform whitespace-nowrap hover:scale-[1.03] shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
                      style={{
                        background:
                          "linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%)",
                      }}
                    >
                      {t("cta.button")}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block absolute -bottom-5 right-14 w-48 h-48 opacity-70">
                <img
                  src="/uploads/abstract.png"
                  alt=""
                  className="w-full h-full object-contain"
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

export default TransformacionDigital;
