import { useState, useEffect } from "react";

type Language = "es" | "ca" | "en" | "fr";

interface Translations {
  [key: string]: {
    es: string;
    ca: string;
    en: string;
    fr: string;
  };
}

const translations: Translations = {
  // Hero Section
  heroTitle: {
    es: "¿Y si mañana un ciberataque paraliza tu empresa?",
    ca: "I si demà un ciberatac paralitza la teva empresa?",
    en: "What if tomorrow a cyberattack paralyzes your company?",
    fr: "Et si demain une cyberattaque paralyse votre entreprise?",
  },
  heroSubtitle: {
    es: "El 60 % de las PYMEs que sufren un incidente crítico, cierran en menos de 6 meses.",
    ca: "El 60% de les PMEs que pateixen un incident crític, tanquen en menys de 6 mesos.",
    en: "60% of SMEs that suffer a critical incident close within 6 months.",
    fr: "60% des PME qui subissent un incident critique ferment en moins de 6 mois.",
  },
  heroDescription: {
    es: "En TutumSec convertimos la ciberseguridad en un motor de crecimiento: consultoría estratégica 360°, CISO as a Service y vigilancia MDR/XDR 24×7 que te permiten dormir tranquilo y centrarte en el negocio.",
    ca: "A TutumSec convertim la ciberseguretat en un motor de creixement: consultoria estratègica 360°, CISO as a Service i vigilància MDR/XDR 24×7 que et permeten dormir tranquil i centrar-te en el negoci.",
    en: "At TutumSec we turn cybersecurity into a growth engine: 360° strategic consulting, CISO as a Service and 24×7 MDR/XDR monitoring that allow you to sleep peacefully and focus on business.",
    fr: "Chez TutumSec, nous transformons la cybersécurité en moteur de croissance : conseil stratégique 360°, CISO as a Service et surveillance MDR/XDR 24×7 qui vous permettent de dormir tranquille et de vous concentrer sur l'entreprise.",
  },
  reserveConsultation: {
    es: "Reserva tu consultoría gratuita →",
    ca: "Reserva la teva consultoria gratuïta →",
    en: "Book your free consultation →",
    fr: "Réservez votre consultation gratuite →",
  },
  requestAudit: {
    es: "Solicita una auditoría",
    ca: "Sol·licita una auditoria",
    en: "Request an audit",
    fr: "Demander un audit",
  },
  freeAudit: {
    es: "Auditoría Gratuita",
    ca: "Auditoria Gratuïta",
    en: "Free Audit",
    fr: "Audit Gratuit",
  },
  // Services Section
  servicesTitle: {
    es: "Ciberseguridad premium que crece contigo",
    ca: "Ciberseguretat premium que creix amb tu",
    en: "Premium cybersecurity that grows with you",
    fr: "Cybersécurité premium qui grandit avec vous",
  },
  // Success Stories
  successStoriesTitle: {
    es: "Casos de éxito",
    ca: "Casos d'èxit",
    en: "Success stories",
    fr: "Histoires de succès",
  },
  successStoriesSubtitle: {
    es: "Descubre cómo hemos transformado la ciberseguridad de empresas como la tuya",
    ca: "Descobreix com hem transformat la ciberseguretat d'empreses com la teva",
    en: "Discover how we have transformed cybersecurity for companies like yours",
    fr: "Découvrez comment nous avons transformé la cybersécurité d'entreprises comme la vôtre",
  },
  partners: {
    es: "partners",
    ca: "partners",
    en: "partners",
    fr: "partenaires",
  },
  certificates: {
    es: "certificados",
    ca: "certificats",
    en: "certificates",
    fr: "certificats",
  },
  organizations: {
    es: "organizaciones",
    ca: "organitzacions",
    en: "organizations",
    fr: "organisations",
  },
  // Testimonials
  testimonialsTitle: {
    es: "Qué dicen nuestros Clientes",
    ca: "Què diuen els nostres Clients",
    en: "What our Clients say",
    fr: "Ce que disent nos Clients",
  },
  testimonialsSubtitle: {
    es: "La confianza de nuestros clientes es el mejor aval de nuestra calidad y compromiso",
    ca: "La confiança dels nostres clients és el millor aval de la nostra qualitat i compromís",
    en: "The trust of our clients is the best guarantee of our quality and commitment",
    fr: "La confiance de nos clients est la meilleure garantie de notre qualité et engagement",
  },
  // FAQ
  faqTitle: {
    es: "Preguntas frecuentes",
    ca: "Preguntes freqüents",
    en: "Frequently asked questions",
    fr: "Questions fréquemment posées",
  },
  faqSubtitle: {
    es: "Resolvemos tus dudas sobre ciberseguridad",
    ca: "Resolem els teus dubtes sobre ciberseguretat",
    en: "We resolve your doubts about cybersecurity",
    fr: "Nous résolvons vos doutes sur la cybersécurité",
  },
  // CTA Section
  ctaTitle: {
    es: "Protege tu empresa HOY.",
    ca: "Protegeix la teva empresa AVUI, no demà.",
    en: "Protect your company TODAY, not tomorrow.",
    fr: "Protégez votre entreprise AUJOURD'HUI, pas demain.",
  },
  ctaSubtitle: {
    es: "Descubre los quick-wins que puedes implantar este mes.",
    ca: "Obtén la teva auditoria inicial sense cost* i descobreix els quick-wins que pots implantar aquest mes.",
    en: "Get your initial audit at no cost* and discover the quick-wins you can implement this month.",
    fr: "Obtenez votre audit initial sans coût* et découvrez les quick-wins que vous pouvez implémenter ce mois-ci.",
  },
  cisoConsultancyTitle: {
    es: "Consultoría CISO estratégica que impulsa tu ciberseguridad",
    ca: "Protegeix la teva empresa AVUI, no demà.",
    en: "Protect your company TODAY, not tomorrow.",
    fr: "Protégez votre entreprise AUJOURD'HUI, pas demain.",
  },
  cisoConsultancySubtitle: {
    es: "Convertimos el riesgo en ventaja competitiva con un Servicio vCISO que reduce riesgos y garantiza normativas para PYMEs con alta exigencia digital de Barcelona, Girona, Andorra y resto de España. ",
    ca: "Protegeix la teva empresa AVUI, no demà.",
    en: "Protect your company TODAY, not tomorrow.",
    fr: "Protégez votre entreprise AUJOURD'HUI, pas demain.",
  },
};

const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith("ca")) return "ca";
  if (browserLang.startsWith("en")) return "en";
  if (browserLang.startsWith("fr")) return "fr";

  // Default to Spanish
  return "es";
};

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("es");

  useEffect(() => {
    const detectedLanguage = detectBrowserLanguage();
    setCurrentLanguage(detectedLanguage);
  }, []);

  const t = (key: string): string => {
    return translations[key]?.[currentLanguage] || key;
  };

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return {
    t,
    currentLanguage,
    changeLanguage,
    availableLanguages: ["es", "ca", "en", "fr"] as Language[],
  };
};
