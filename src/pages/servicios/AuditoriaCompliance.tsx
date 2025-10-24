// src/pages/servicios/AuditoriaCompliance.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card as UICard, CardContent } from "@/components/ui/card";
import {
  Search,
  Settings,
  Map,
  TrendingUp,
  Shield,
  Clock,
  ShieldCheck,
  Zap,
  AlarmClock,
  ArrowRight,
  LineChart,
} from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";
import { Link } from "react-router-dom";
import PartnersSection from "../PartnersSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const handleCalendlyClick = () => {
  const calendlyUrl =
    import.meta.env.VITE_CALENDLY_URL ||
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/ayub-tutumsec/30min";
  window.open(calendlyUrl, "_blank");
};

const AuditoriaCompliance = () => {
  const { t } = useTranslations(["audit", "crossSellServices"]);

  const highlights = [
    {
      description: t("highlights.0"),
      gradient: "from-blue-500 to-blue-950",
    },
    {
      description: t("highlights.1"),
      gradient: "from-blue-950 to-blue-800",
    },
    {
      description: t("highlights.2"),
      gradient: "from-blue-900 to-black",
    },
    {
      description: t("highlights.3"),
      gradient: "from-blue-600 to-black",
    },
  ];

  // Proceso (4 pasos)
  const steps = [
    {
      title: t("process.steps.0.title"),
      description: t("process.steps.0.desc"),
      icon: Search,
    },
    {
      title: t("process.steps.1.title"),
      description: t("process.steps.1.desc"),
      icon: Map,
    },
    {
      title: t("process.steps.2.title"),
      description: t("process.steps.2.desc"),
      icon: Settings,
    },
    {
      title: t("process.steps.3.title"),
      description: t("process.steps.3.desc"),
      icon: TrendingUp,
    },
  ];

  const crossSellServices = [
    {
      title: t("crossSellServices.0.title"),
      description: t("crossSellServices.0.description"),
      href: t("crossSellServices.0.href"),
      icon: LineChart,
    },
    {
      title: t("crossSellServices.2.title"),
      description: t("crossSellServices.2.description"),
      href: t("crossSellServices.2.href"),
      icon: Zap,
    },
    {
      title: t("crossSellServices.3.title"),
      description: t("crossSellServices.3.description"),
      href: t("crossSellServices.3.href"),
      icon: AlarmClock,
    },
  ];

  // FAQ
  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
  ];

  // Structured data (usa los dos primeros FAQs como ejemplo)
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, 3).map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
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
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <link
          rel="canonical"
          href="https://tutumsec.io/es/servicios/auditoria-compliance-nis2/"
        />
        <script type="application/ld+json">
          {JSON.stringify([faqStructuredData, serviceStructuredData])}
        </script>
        <link
          rel="alternate"
          href="https://tutumsec.io/es/servicios/auditoria-compliance-nis2/"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/ca/serveis/auditoria-compliance-nis2/"
          hrefLang="ca"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/en/services/nis2-audit-compliance/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/es/servicios/auditoria-compliance-nis2/"
          hrefLang="x-default"
        />
      </Helmet>

      <Navbar />
      <main className="min-h-screen ">
        {/* HERO */}
        <section className="relative min-h-screen overflow-hidden px-6 flex items-center">
          <div className="absolute inset-0 -z-20 bg-[#0a0f1c]" />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(120deg, rgba(14,24,46,0) 0%, rgba(89,116,189,.35) 45%, rgba(182,185,193,0) 100%)",
            }}
          />
          <img
            src="/uploads/hilo.png"
            alt=""
            aria-hidden
            className="pointer-events-none select-none absolute left-0 top-[-80px] w-[1200px] max-w-none opacity-60 mix-blend-screen z-1"
          />
          <div className="max-w-6xl mx-auto text-center relative">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t("hero.title")}
            </h1>
            <h2 className="text-xl lg:text-xl text-muted mb-8">
              {t("hero.subtitle")}
            </h2>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
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
                {t("hero.cta")}
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="px-4 py-2 text-md rounded-full"
                onClick={handleCalendlyClick}
              >
                {t("hero.secondaryCta")}
              </Button>
            </div>
          </div>
        </section>

        {/* ¿Por qué somos diferentes? */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl pt-20 font-bold text-center mb-12">
              {t("why.heading")}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <UICard>
                <CardContent className="p-6">
                  <Search className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    {t("why.cards.0.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("why.cards.0.desc")}
                  </p>
                </CardContent>
              </UICard>

              <UICard>
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    {t("why.cards.1.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("why.cards.1.desc")}
                  </p>
                </CardContent>
              </UICard>

              <UICard>
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    {t("why.cards.2.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("why.cards.2.desc")}
                  </p>
                </CardContent>
              </UICard>

              <UICard>
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    {t("why.cards.3.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("why.cards.3.desc")}
                  </p>
                </CardContent>
              </UICard>
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
              <p className="text-xl text-gray-600 mb-4">
                {t("process.subheading")}
              </p>
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
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ¿Cómo lo hacemos? (pastillas) */}
        <section className="pb-20 pt-20 bg-tutumsec-gray-50">
          <h2 className="container text-5xl lg:text-5xl font-bold text-blue-950 mb-10">
            {t("how.heading")}
          </h2>
          <div className="container grid grid-cols-1 lg:grid-cols-4 lg:grid-cols-4 gap-6 items-stretch">
            {highlights.map((h, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-r ${h.gradient} rounded-2xl text-white relative group shadow-lg p-8 flex`}
              >
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-lg leading-relaxed">{h.description}</p>
                </div>
                <div className="ml-4 self-start text-white/70">
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
        </section>

        {/* BLOQUE 10 · Enlaces internos */}
        <section className="py-20 ">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl text-center font-bold text-primary">
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
                      {/* Icono */}
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                        {Icon ? (
                          <Icon className="h-7 w-7 text-primary" />
                        ) : (
                          <svg
                            className="h-7 w-7 text-blue-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                          </svg>
                        )}
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
                        aria-label={`Saber más sobre ${s.title}`}
                      >
                        <Link to={url}>
                          Saber más
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

        {/* Pain → visión */}
        <section className="py-20 px-6 bg-gray-500/5 text-blue">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="transform transition-all duration-700 hover:translate-x-2">
              <h2 className="text-3xl lg:text-4xl mb-2 font-bold leading-relaxed">
                {t("pain.heading1")}
              </h2>
              <h3 className="text-2xl lg:text-3xl font-bold mb-8 leading-relaxed">
                {t("pain.heading2")}
              </h3>
            </div>
            <div className="border-l-4 border-blue-400 text-sm pl-6 prose prose-lg max-w-none text-left">
              <p>{t("pain.body")}</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-6 bg-gray-100 relative overflow-hidden bg-[url('/uploads/background.png')] bg-cover bg-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                {t("faq.heading")}
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-200/80 rounded-2xl border border-gray-300 px-6 hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="w-full pt-20 text-center max-w-6xl mt-10 mx-auto relative">
            <h2 className="text-xl md:text-4xl font-bold mb-10  ">
              {t("ctaFinal.title")}
            </h2>
            <Link
              to="https://calendly.com/ayub-tutumsec/30min"
              className="px-6 py-2 rounded-full text-lg text-white font-medium transition-transform whitespace-nowrap hover:scale-[1.03] shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%)",
              }}
            >
              {t("hero.cta")}
            </Link>
          </div>
        </section>

        <PartnersSection />
      </main>
      <Footer />
    </>
  );
};

export default AuditoriaCompliance;
