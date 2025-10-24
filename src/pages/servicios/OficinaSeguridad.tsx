import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  Shield,
  Clock,
  FileText,
  Users,
  Settings,
  Map,
  Search,
  TrendingUp,
  ArrowUpRight,
  Bug,
  AlarmClock,
  ShieldCheck,
  LineChart,
  ArrowRight,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import PartnersSection from "../PartnersSection";
import { useTranslations } from "@/i18n/useTranslations";

const OficinaSeguridad = () => {
  const { t } = useTranslations(["oficina"]); // namespace del JSON que pasaste

  // cross-sell (iconos iguales; textos y href desde tus keys `cross.*`)
  const crossSellServices = [
    {
      title: t("cross.vciso.title"),
      description: t("cross.vciso.desc"),
      href: t("cross.vciso.href"),
      icon: LineChart,
    },
    {
      title: t("cross.audit.title"),
      description: t("cross.audit.desc"),
      href: t("cross.audit.href"),
      icon: ShieldCheck,
    },
    {
      title: t("cross.pentest.title"),
      description: t("cross.pentest.desc"),
      href: t("cross.pentest.href"),
      icon: Zap,
    },
    {
      title: t("cross.mdr.title"),
      description: t("cross.mdr.desc"),
      href: t("cross.mdr.href"),
      icon: AlarmClock,
    },
  ];

  // FAQ
  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
  ];

  // para JSON-LD (mismas preguntas/respuestas)
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  // quick wins del hero
  const quickWins = [
    t("hero.quickWins.0"),
    t("hero.quickWins.1"),
    t("hero.quickWins.2"),
  ];

  // pasos metodología
  const steps = [
    {
      title: t("method.steps.0.title"),
      description: t("method.steps.0.desc"),
      number: "1",
    },
    {
      title: t("method.steps.1.title"),
      description: t("method.steps.1.desc"),
      number: "2",
    },
    {
      title: t("method.steps.2.title"),
      description: t("method.steps.2.desc"),
      number: "3",
    },
    {
      title: t("method.steps.3.title"),
      description: t("method.steps.3.desc"),
      number: "4",
    },
  ];

  // entregables
  const deliverables = [
    t("deliverables.0"),
    t("deliverables.1"),
    t("deliverables.2"),
    t("deliverables.3"),
    t("deliverables.4"),
    t("deliverables.5"),
  ];

  // por qué nos eligen (tarjetas gradiente)
  const why = [t("why.0"), t("why.1"), t("why.2")];

  // schema service
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
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
        <link rel="canonical" href={t("seo.canonical")} />
        <script type="application/ld+json">
          {JSON.stringify([faqStructuredData, serviceStructuredData])}
        </script>
        <link rel="alternate" href={t("seo.alt.ca")} hrefLang="ca" />
        <link rel="alternate" href={t("seo.alt.en")} hrefLang="en" />
        <link rel="alternate" href={t("seo.alt.es")} hrefLang="es" />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background">
        <div>
          <section className="relative isolate overflow-hidden mt-6 lg:mt-20">
            {/* base */}
            <div className="absolute inset-0 z-0 bg-[#0a0f1c]" />

            {/* gradiente */}
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(120deg, rgba(14,24,46,0.08) 0%, rgba(89,116,189,0.35) 45%, rgba(182,185,193,0.05) 100%)",
              }}
            />

            {/* glows responsive */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] bg-blue-600/20 rounded-full blur-xl sm:blur-3xl z-10" />
            <div className="pointer-events-none absolute -right-40 top-10 w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] bg-blue-400/20 rounded-full blur-xl sm:blur-3xl z-10" />

            {/* hilo: oculto en móvil */}
            <img
              src="/uploads/hilo.png"
              alt=""
              aria-hidden
              className="hidden sm:block pointer-events-none select-none absolute left-0 -top-12 w-[1200px] max-w-none opacity-60 mix-blend-screen z-20"
            />

            {/* contenedor full-screen en desktop */}
            <div className="relative z-30 w-full">
              <div className="min-h-[70vh] lg:min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                  <h1 className="font-bold text-white mb-4 leading-tight text-[clamp(28px,5vw,48px)]">
                    {t("hero.title")}
                  </h1>

                  <h2 className="text-white/80 mb-8 leading-relaxed text-[clamp(16px,2.6vw,24px)]">
                    {t("hero.subtitle")}
                  </h2>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
                    <Link
                      to="https://calendly.com/ayub-tutumsec/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-full text-base sm:text-lg text-white font-medium transition-transform whitespace-nowrap hover:scale-[1.02] shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
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
                      className="w-full sm:w-auto text-base sm:text-lg rounded-full px-6 sm:px-8 bg-white/10 text-white border-white/20 hover:bg-white/20"
                    >
                      {t("hero.cta2")}
                    </Button>
                  </div>
                </div>

                {/* QUICK WINS: ocultos en mobile, visibles y anclados abajo en md+ */}
                <div className="hidden md:block absolute bottom-6 left-0 w-full z-30">
                  <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-6 items-center text-left">
                    {quickWins.map((win, i) => (
                      <li key={i} className="flex items-start text-white">
                        <CheckCircle className="w-5 h-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{win}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* BLOQUE 3 · QUÉ ES UNA OSI */}
          <section className="py-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                {t("osi.heading")}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <Settings className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      {t("osi.cards.0.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("osi.cards.0.desc")}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      {t("osi.cards.1.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("osi.cards.1.desc")}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      {t("osi.cards.2.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("osi.cards.2.desc")}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      {t("osi.cards.3.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("osi.cards.3.desc")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* BLOQUE 2 · DOLOR */}
          <section className=" py-20 px-6 text-blue">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="text-3xl lg:text-4xl mb-2 font-bold transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  {t("pain.heading")}
                </h2>
              </div>
              <div className="border-l-4 border-blue-400 text-sm pl-6 prose prose-lg max-w-none text-left">
                <p>{t("pain.body")}</p>
              </div>
            </div>
          </section>

          {/* METODOLOGÍA */}
          <section className="py-20 px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-500 mb-6">
                  {t("method.heading")}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
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
                        <span className="w-8 h-8 text-primary text-2xl font-bold items-center">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ENTREGABLES */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                {t("deliverables.heading")}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHY */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
              <div className="px-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  {t("why.heading")}
                </h2>
              </div>

              <div className="space-y-6">
                {why.map((raw, i) => {
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

          {/* SERVICIOS (cross-sell) */}
          <section className="py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl text-center font-bold text-primary">
                {t("cross.heading")}
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

          {/* FAQ */}
          <section className="py-20 px-6 bg-gray-100 relative overflow-hidden bg-[url('/uploads/background.png')] bg-cover bg-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
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
                        {faq.question}
                      </summary>
                      <div className="cursor-pointer py-6 font-semibold text-gray-800 hover:text-primary">
                        {faq.answer}
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
                      className="px-6 py-2 rounded-full text-sm lg:text-lg text-white font-medium transition-transform whitespace-nowrap hover:scale-[1.03] shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
                      style={{
                        background:
                          "linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%)",
                      }}
                    >
                      {t("cta.primary")}
                    </Link>
                    <Button
                      variant="outline"
                      className="text-sm lg:text-lg bg-white/10 text-white  rounded-full border-white/20 hover:bg-white/20"
                    >
                      {t("cta.secondary")}
                    </Button>
                  </div>
                  {/*<Button variant="link" className="text-sm">
                    {t("cta.secondary")}
                  </Button>*/}
                </div>
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

export default OficinaSeguridad;
