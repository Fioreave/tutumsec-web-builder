import React from "react";
import { Users, Shield, CheckCircle, Eye, GraduationCap } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";

const ServicesSection = () => {
  const { t } = useTranslations(["home"]);

  const services = [
    {
      title: t("services.card1.title"),
      benefit: t("services.card1.benefit"),
      icon: Shield,
      href: "/es/servicios/consultoria-ciso",
    },
    {
      title: t("services.card2.title"),
      benefit: t("services.card2.benefit"),
      icon: Users,
      href: "/es/servicios/transformacion-digital-estrategica",
    },
    {
      title: t("services.card3.title"),
      benefit: t("services.card3.benefit"),
      icon: CheckCircle,
      href: "/es/servicios/auditoria-compliance-nis2",
    },
    {
      title: t("services.card4.title"),
      benefit: t("services.card4.benefit"),
      icon: Eye,
      href: "/es/servicios/formacion-concienciacion",
    },
    {
      title: t("services.card5.title"),
      benefit: t("services.card5.benefit"),
      icon: GraduationCap,
      href: "/es/servicios/oficina-seguridad-informacion-nis2",
    },
  ];

  const images = [
    "/uploads/dispersion-05.jpg",
    "/uploads/dispersion-04.jpg",
    "/uploads/dispersion-06.jpg",
    "/uploads/dispersion-07.jpg",
  ];
  const getImage = (i: number) => images[i % images.length];

  const Card = ({ item, idx, className = "" }) => {
    const Wrapper = ({ children }) =>
      item.href ? (
        <a
          href={item.href}
          className={`relative rounded-2xl overflow-hidden shadow-lg group min-h-[220px] block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${className}`}
          aria-label={`${t("services.goto")} ${item.title}`}
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
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${getImage(idx)})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 group-hover:from-black/80 transition-colors" />
        <div className="relative p-8 text-white flex items-start gap-5 h-full">
          <div className="flex-1">
            <h4 className="text-xl font-semibold leading-relaxed mb-2">
              {item.title}
            </h4>
            <p className="text-white/90 leading-relaxed">{item.benefit}</p>
          </div>
          <div className="ml-auto text-white/80">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
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

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-10">
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-relaxed">
            {t("services.heading")}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 items-stretch">
          <Card item={services[0]} idx={0} className="md:col-span-1" />
          <Card item={services[1]} idx={1} className="md:col-span-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <Card item={services[2]} idx={2} />
          <Card item={services[3]} idx={3} />
          <Card item={services[4]} idx={4} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
