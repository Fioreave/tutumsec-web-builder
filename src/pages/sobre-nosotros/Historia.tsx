import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOMetaTags from "@/components/SEOMetaTags";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Book,
  Building,
  Headphones,
  MapPin,
  Monitor,
  Phone,
  Search,
  Shield,
  Cog,
  TrendingUp,
  Users,
  Star,
} from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";
import { useLangLink } from "@/i18n/useLangLink";

const Historia: React.FC = () => {
  const { t } = useTranslations(["historia"]);
  const L = useLangLink();

  const steps = [
    {
      number: "1",
      description: t("inherit.steps.0"),
      gradient: "from-blue-500 to-blue-950",
    },
    {
      number: "2",
      description: t("inherit.steps.1"),
      gradient: "from-blue-950 to-blue-800",
    },
    {
      number: "3",
      description: t("inherit.steps.2"),
      gradient: "from-blue-900 to-black",
    },
  ] as const;

  const problems = [
    { title: t("brandValue.items.0"), icon: Star },
    { title: t("brandValue.items.1"), icon: Shield },
    { title: t("brandValue.items.2"), icon: Users },
    { title: t("brandValue.items.3"), icon: TrendingUp },
  ] as const;

  const services = [
    {
      category: t("services.items.0.label"),
      icon: Shield,
      href: L(t("services.items.0.href")),
    },
    {
      category: t("services.items.1.label"),
      icon: Search,
      href: L(t("services.items.1.href")),
    },
    {
      category: t("services.items.2.label"),
      icon: Monitor,
      href: L(t("services.items.2.href")),
    },
    {
      category: t("services.items.3.label"),
      icon: Cog,
      href: L(t("services.items.3.href")),
    },
    {
      category: t("services.items.4.label"),
      icon: Building,
      href: L(t("services.items.4.href")),
    },
    {
      category: t("services.items.5.label"),
      icon: Headphones,
      href: L(t("services.items.5.href")),
    },
    {
      category: t("services.items.6.label"),
      icon: Book,
      href: L(t("services.items.6.href")),
    },
  ] as const;

  const locations = [
    {
      name: t("locations.items.0.name"),
      address1: t("locations.items.0.address1"),
      address2: t("locations.items.0.address2"),
      phone: t("locations.items.0.phone"),
      mapSrc: t("locations.items.0.mapSrc"),
    },
    {
      name: t("locations.items.1.name"),
      address1: t("locations.items.1.address1"),
      address2: t("locations.items.1.address2"),
      phone: t("locations.items.1.phone"),
      mapSrc: t("locations.items.1.mapSrc"),
    },
    {
      name: t("locations.items.2.name"),
      address1: t("locations.items.2.address1"),
      address2: t("locations.items.2.address2"),
      phone: t("locations.items.2.phone"),
      mapSrc: t("locations.items.2.mapSrc"),
    },
  ] as const;

  return (
    <>
      <SEOMetaTags
        title={t("seo.title")}
        description={t("seo.description")}
        canonical={t("seo.canonical")}
      />

      <Navbar />
      <main className="min-h-screen ">
        {/* HERO */}
        <section className="relative overflow-hidden flex items-center pt-20">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/uploads/background/background2.png')",
            }}
          />
          <div className="absolute inset-0 bg-black/50 -z-10" />
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-3 leading-tight animate-slide-up">
                {t("hero.title")}
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-6 leading-snug animate-slide-up">
                {t("hero.subtitle")}
              </h2>
            </div>
          </div>
        </section>

        {/* INHERIT */}
        <section className="pb-6 bg-white mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                {t("inherit.title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-6 items-stretch">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-r ${step.gradient} rounded-2xl text-white relative group shadow-lg p-8 flex`}
                >
                  <div className="text-5xl font-extrabold leading-none mr-6 opacity-90 w-20 shrink-0 flex items-center justify-center">
                    {step.number}
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-lg leading-relaxed">
                      {step.description}
                    </p>
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
          </div>
        </section>

        {/* BRAND VALUE */}
        <section className="py-20 px-6 bg-tutumsec-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                {t("brandValue.title")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {problems.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                    style={{
                      animationDelay: `${i * 0.2}s`,
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
                          {p.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TODAY */}
        <section className="relative isolate overflow-hidden px-6 flex items-center pt-20 pb-20">
          <div className="absolute inset-0 z-0 bg-[#0a0f1c]" aria-hidden />
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(120deg, rgba(14,24,46,0) 0%, rgba(89,116,189,0.35) 45%, rgba(182,185,193,0) 100%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -top-24 -left-24 w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-3xl z-10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-40 top-10 w-[50vw] h-[50vw] bg-blue-400/20 rounded-full blur-3xl z-10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-[-20%] left-[20%] w-[45vw] h-[45vw] bg-indigo-500/20 rounded-full blur-3xl z-10"
            aria-hidden
          />
          <img
            src="/uploads/hilo.png"
            alt=""
            aria-hidden
            className="pointer-events-none select-none absolute left-0 -top-20 w-[1200px] max-w-none opacity-60 mix-blend-screen z-20"
          />

          <div className="max-w-5xl mx-auto text-center relative z-30">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t("today.title")}
            </h1>
            <h2 className="text-xl max-w-3xl lg:text-xl text-white/80 mb-8">
              {t("today.subtitle")}
            </h2>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
                {t("services.title")}
              </h2>
            </div>

            <div className="grid md:grid-cols-4 m-2 lg:grid-cols-4 gap-8">
              {services.map((item, index) => {
                const CardInner = (
                  <div className="p-6 bg-tutumsec-gray-50 p-2 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
                    <div className="p-2 items-center justify-center text-center max-h-[30vh]">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
                        {item.category}
                      </h3>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={index} href={item.href} className="block">
                    {CardInner}
                  </a>
                ) : (
                  <div key={index}>{CardInner}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section className="mb-20 container">
          <div className="text-left mt-20 ">
            <h3 className="text-5xl font-bold text-center mb-20 text-primary">
              {t("locations.title")}
            </h3>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-20 gap-6">
            {locations.map((loc) => (
              <Card key={loc.name} className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-foreground">{loc.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="overflow-hidden border ">
                    <iframe
                      src={loc.mapSrc}
                      title={`${t("locations.mapTitlePrefix")} ${loc.name}`}
                      loading="lazy"
                      className="w-full h-[120px] filter grayscale contrast-110 brightness-95"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-start gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 mt-0.5" />
                      <span>
                        {loc.address1}
                        <br />
                        {loc.address2}
                      </span>
                    </p>
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <a
                        href={`tel:${loc.phone.replace(/\s|\+/g, "")}`}
                        className="hover:underline"
                      >
                        {loc.phone}
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CLOSING */}
        <div className="text-center py-12 pb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {t("closing.title")}
          </h2>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Historia;
