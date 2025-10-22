import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
// import { Card as UiCard, CardContent } from "@/components/ui/card";
import { TrendingUp, Search, Settings, Map } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PartnersSection from "../PartnersSection";

/* ----------------------------- Tipos auxiliares ---------------------------- */
type BenefitItem = { title: string; benefit: string; href?: string };
type FaqItem = { question: string; answer: string };
type StepItem = {
  title: string;
  description: string;
  icon: "search" | "map" | "settings" | "trending";
};
type StatItem = { number: string; description: string; gradient?: string };

/* ----------------------------- Mapa de iconos ------------------------------ */
const iconMap = {
  search: Search,
  map: Map,
  settings: Settings,
  trending: TrendingUp,
} as const;

/* ------------------------------- Utilidades -------------------------------- */
const handleCalendlyClick = () => {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/ayub-tutumsec/30min";
  window.open(calendlyUrl, "_blank");
};

const images = [
  "/uploads/dispersion-05.jpg",
  "/uploads/dispersion-04.jpg",
  "/uploads/dispersion-06.jpg",
  "/uploads/dispersion-07.jpg",
];
const getImage = (i: number) => images[i % images.length];

/* ------------------------------- Tarjeta UI -------------------------------- */
const BenefitCard = ({
  item,
  idx,
  className = "",
  ariaGoToLabel,
}: {
  item: BenefitItem;
  idx: number;
  className?: string;
  ariaGoToLabel: (title: string) => string;
}) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    item.href ? (
      <a
        href={item.href}
        className={`relative rounded-2xl overflow-hidden shadow-lg group min-h-[220px] block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${className}`}
        aria-label={ariaGoToLabel(item.title)}
      >
        {children}
      </a>
    ) : (
      <div
        className={`relative rounded-2xl overflow-hidden shadow-lg group min-h-[220px] ${className}`}
      >
        {children}
      </div>
    );

  return (
    <Wrapper>
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${getImage(idx)})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 group-hover:from-black/80 transition-colors" />
      {/* Contenido */}
      <div className="relative p-8 text-white flex items-start gap-5 h-full">
        <div className="flex-1">
          <h4 className="text-xl font-semibold leading-relaxed mb-2">
            {item.title}
          </h4>
          <p className="text-white/90 leading-relaxed">{item.benefit}</p>
        </div>
        <div className="ml-auto text-white/80" aria-hidden>
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
    </Wrapper>
  );
};

/* -------------------------------- Componente ------------------------------- */
const ConsultoriaCiso = () => {
  // Usa el namespace plano "ciso"
  const { t } = useTranslations(["ciso"]);

  // Stats (las 3 “píldoras” azules) desde keys planas benefits.step1..3
  const stats: StatItem[] = [
    {
      number: "1",
      description: t("benefits.step1"),
      gradient: "from-blue-500 to-blue-950",
    },
    {
      number: "2",
      description: t("benefits.step2"),
      gradient: "from-blue-950 to-blue-800",
    },
    {
      number: "3",
      description: t("benefits.step3"),
      gradient: "from-blue-900 to-black",
    },
  ];

  // Ventajas (tarjetas)
  const ventajas: BenefitItem[] = [
    {
      title: t("benefits.card1.title"),
      benefit: t("benefits.card1.desc"),
      href: "/es/servicios/transformacion-digital-estrategica",
    },
    {
      title: t("benefits.card2.title"),
      benefit: t("benefits.card2.desc"),
      href: "/es/servicios/transformacion-digital-estrategica",
    },
    {
      title: t("benefits.card3.title"),
      benefit: t("benefits.card3.desc"),
      href: "/es/servicios/transformacion-digital-estrategica",
    },
    {
      title: t("benefits.card4.title"),
      benefit: t("benefits.card4.desc"),
      href: "/es/servicios/transformacion-digital-estrategica",
    },
    {
      title: t("benefits.card5.title"),
      benefit: t("benefits.card5.desc"),
      href: "/es/servicios/transformacion-digital-estrategica",
    },
  ];

  // Pasos del proceso
  const steps: StepItem[] = [
    {
      title: t("process.step1.title"),
      description: t("process.step1.desc"),
      icon: "search",
    },
    {
      title: t("process.step2.title"),
      description: t("process.step2.desc"),
      icon: "map",
    },
    {
      title: t("process.step3.title"),
      description: t("process.step3.desc"),
      icon: "settings",
    },
    {
      title: t("process.step4.title"),
      description: t("process.step4.desc"),
      icon: "trending",
    },
  ];

  // FAQs
  const faqs: FaqItem[] = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
  ];

  // JSON-LD (opcionalmente también puedes i18n-izar estas keys con meta.* y schema.*)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("meta.title"),
    description: t("meta.description"),
    provider: {
      "@type": "Organization",
      name: "TutumSec",
      url: "https://tutumsec.com",
    },
    areaServed: ["ES-CT", "ES-GI", "AD", "ES"],
    serviceType: "CISO as a Service",
  };

  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <link
          rel="canonical"
          href="https://tutumsec.io/es/servicios/consultoria-ciso/"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <link
          rel="alternate"
          href="https://tutumsec.io/es/servicios/consultoria-ciso/"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/ca/serveis/consultoria-ciso/"
          hrefLang="ca"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/en/services/ciso-advisory/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/es/servicios/consultoria-ciso/"
          hrefLang="x-default"
        />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background">
        <div>
          {/* HERO */}
          <section className="relative min-h-screen overflow-hidden px-6 flex items-center">
            {/* Capas */}
            <div className="absolute inset-0 z-0 bg-[#0a0f1c]" />
            <div
              className="absolute inset-0 z-0"
              style={{
                background:
                  "linear-gradient(120deg, rgba(14, 24, 46, 0.0) 0%, rgba(89, 116, 189, 0.35) 45%, rgba(182, 185, 193, 0) 100%)",
              }}
            />
            <div className="pointer-events-none absolute -top-24 -left-24 w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-3xl z-5" />
            <div className="pointer-events-none absolute -right-40 top-10 w-[50vw] h-[50vw] bg-blue-400/20 rounded-full blur-3xl z-10" />
            <div className="pointer-events-none absolute bottom-[-20%] left-[20%] w-[45vw] h-[45vw] bg-indigo-500/20 rounded-full blur-3xl z-5" />
            <img
              src="/uploads/hilo.png"
              alt=""
              aria-hidden
              className="pointer-events-none select-none absolute left-0 top-[-80px] w-[1200px] max-w-none opacity-60 mix-blend-screen z-1"
            />

            <div className="max-w-4xl mx-auto text-center relative">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {t("hero.title")}
              </h1>
              <h2 className="text-xl lg:text-xl text-muted mb-8">
                {t("hero.subtitle")}
              </h2>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
                style={{
                  animationDelay: "0.9s",
                  animationFillMode: "forwards",
                }}
              >
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
                  {t("hero.cta")}
                </Link>

                <Button
                  variant="outline"
                  size="lg"
                  className="px-4 py-2 text-md rounded-full"
                  onClick={handleCalendlyClick}
                >
                  {t("cta.subtitle")}
                </Button>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="pt-20 pb-20">
            <div className="container max-w-7xl grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-6 items-stretch">
              {stats.map((s, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-r ${s.gradient} rounded-2xl text-white relative group shadow-lg p-8 flex`}
                >
                  <div className="text-5xl font-extrabold leading-none mr-6 opacity-90 w-12 shrink-0 flex items-center justify-center">
                    {s.number}
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-lg leading-relaxed">{s.description}</p>
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
          </section>

          {/* BENEFICIOS */}
          <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto relative">
              <div className="text-left mb-10">
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-relaxed">
                  {t("benefits.heading")}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 items-stretch">
                <BenefitCard
                  item={ventajas[0]}
                  idx={0}
                  className="md:col-span-1"
                  ariaGoToLabel={(title) => `Ir a ${title}`}
                />
                <BenefitCard
                  item={ventajas[1]}
                  idx={1}
                  className="md:col-span-2"
                  ariaGoToLabel={(title) => `Ir a ${title}`}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {ventajas.slice(2).map((v, i) => (
                  <BenefitCard
                    key={i}
                    item={v}
                    idx={i + 2}
                    ariaGoToLabel={(title) => `Ir a ${title}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* PROBLEMAS / LEAD */}
          <section className=" py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
            <div className="max-w-6xl mx-auto">
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="text-3xl lg:text-4xl mb-2 font-bold transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  {t("problems.heading")}
                </h2>
              </div>
              <div className="border-l-4 border-blue-400 pl-6 prose prose-lg max-w-none text-left">
                <p>{t("problems.lead")}</p>
              </div>
            </div>
          </section>

          {/* PROCESO */}
          <section className="py-20 px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-4xl font-bold text-blue-500 mb-2">
                  {t("process.heading")}
                </h2>
                <p className="text-lg text-gray-600">
                  {t("process.subheading")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => {
                  const IconComponent = iconMap[step.icon] || Search;
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
                          <IconComponent className="w-8 h-8 text-primary items-center" />
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

          {/* FAQ */}
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

              {/* FAQ schema.org */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faqs.map((faq) => ({
                      "@type": "Question",
                      name: faq.question,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                      },
                    })),
                  }),
                }}
              />
            </div>

            <div className="w-full pt-20 text-center max-w-6xl mt-10 mx-auto relative">
              <h2 className="text-4xl font-bold mb-10 px-20 ">
                {t("cta.title")}
              </h2>
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
                {t("hero.cta")}
              </Link>
              <p className="mt-4 text-sm text-gray-600">{t("cta.footnote")}</p>
            </div>
          </section>
        </div>
      </main>
      <PartnersSection />
      <Footer />
    </>
  );
};

export default ConsultoriaCiso;
