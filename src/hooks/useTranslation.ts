import { useState, useEffect } from 'react';

type Language = 'es' | 'ca' | 'en' | 'fr';

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
    es: '¿Y si mañana un ciberataque paraliza tu empresa?',
    ca: 'I si demà un ciberatac paralitza la teva empresa?',
    en: 'What if tomorrow a cyberattack paralyzes your company?',
    fr: 'Et si demain une cyberattaque paralyse votre entreprise?'
  },
  heroSubtitle: {
    es: 'El 60 % de las PYMEs que sufren un incidente crítico, cierran en menos de 6 meses.',
    ca: 'El 60% de les PMEs que pateixen un incident crític, tanquen en menys de 6 mesos.',
    en: '60% of SMEs that suffer a critical incident close within 6 months.',
    fr: '60% des PME qui subissent un incident critique ferment en moins de 6 mois.'
  },
  heroDescription: {
    es: 'En TutumSec convertimos la ciberseguridad en un motor de crecimiento: consultoría estratégica 360°, CISO as a Service y vigilancia MDR/XDR 24×7 que te permiten dormir tranquilo y centrarte en el negocio.',
    ca: 'A TutumSec convertim la ciberseguretat en un motor de creixement: consultoria estratègica 360°, CISO as a Service i vigilància MDR/XDR 24×7 que et permeten dormir tranquil i centrar-te en el negoci.',
    en: 'At TutumSec we turn cybersecurity into a growth engine: 360° strategic consulting, CISO as a Service and 24×7 MDR/XDR monitoring that allow you to sleep peacefully and focus on business.',
    fr: 'Chez TutumSec, nous transformons la cybersécurité en moteur de croissance : conseil stratégique 360°, CISO as a Service et surveillance MDR/XDR 24×7 qui vous permettent de dormir tranquille et de vous concentrer sur l\'entreprise.'
  },
  reserveConsultation: {
    es: 'Reserva tu consultoría gratuita →',
    ca: 'Reserva la teva consultoria gratuïta →',
    en: 'Book your free consultation →',
    fr: 'Réservez votre consultation gratuite →'
  },
  requestAudit: {
    es: 'Solicita una auditoría',
    ca: 'Sol·licita una auditoria',
    en: 'Request an audit',
    fr: 'Demander un audit'
  },
  freeAudit: {
    es: 'Auditoría Gratuita',
    ca: 'Auditoria Gratuïta',
    en: 'Free Audit',
    fr: 'Audit Gratuit'
  },
  // Services Section
  servicesTitle: {
    es: 'Ciberseguridad premium que crece contigo',
    ca: 'Ciberseguretat premium que creix amb tu',
    en: 'Premium cybersecurity that grows with you',
    fr: 'Cybersécurité premium qui grandit avec vous'
  },
  // Success Stories
  successStoriesTitle: {
    es: 'Casos de éxito',
    ca: 'Casos d\'èxit',
    en: 'Success stories',
    fr: 'Histoires de succès'
  },
  successStoriesSubtitle: {
    es: 'Descubre cómo hemos transformado la ciberseguridad de empresas como la tuya',
    ca: 'Descobreix com hem transformat la ciberseguretat d\'empreses com la teva',
    en: 'Discover how we have transformed cybersecurity for companies like yours',
    fr: 'Découvrez comment nous avons transformé la cybersécurité d\'entreprises comme la vôtre'
  },
  partners: {
    es: 'partners',
    ca: 'partners',
    en: 'partners',
    fr: 'partenaires'
  },
  certificates: {
    es: 'certificados',
    ca: 'certificats',
    en: 'certificates',
    fr: 'certificats'
  },
  organizations: {
    es: 'organizaciones',
    ca: 'organitzacions',
    en: 'organizations',
    fr: 'organisations'
  },
  // Testimonials
  testimonialsTitle: {
    es: 'Qué dicen nuestros Clientes',
    ca: 'Què diuen els nostres Clients',
    en: 'What our Clients say',
    fr: 'Ce que disent nos Clients'
  },
  testimonialsSubtitle: {
    es: 'La confianza de nuestros clientes es el mejor aval de nuestra calidad y compromiso',
    ca: 'La confiança dels nostres clients és el millor aval de la nostra qualitat i compromís',
    en: 'The trust of our clients is the best guarantee of our quality and commitment',
    fr: 'La confiance de nos clients est la meilleure garantie de notre qualité et engagement'
  },
  // FAQ
  faqTitle: {
    es: 'Preguntas frecuentes',
    ca: 'Preguntes freqüents',
    en: 'Frequently asked questions',
    fr: 'Questions fréquemment posées'
  },
  faqSubtitle: {
    es: 'Resolvemos tus dudas sobre ciberseguridad',
    ca: 'Resolem els teus dubtes sobre ciberseguretat',
    en: 'We resolve your doubts about cybersecurity',
    fr: 'Nous résolvons vos doutes sur la cybersécurité'
  },
  // CTA Section
  ctaTitle: {
    es: 'Protege tu empresa HOY, no mañana.',
    ca: 'Protegeix la teva empresa AVUI, no demà.',
    en: 'Protect your company TODAY, not tomorrow.',
    fr: 'Protégez votre entreprise AUJOURD\'HUI, pas demain.'
  },
  ctaSubtitle: {
    es: 'Obtén tu auditoría inicial sin coste* y descubre los quick-wins que puedes implantar este mes.',
    ca: 'Obtén la teva auditoria inicial sense cost* i descobreix els quick-wins que pots implantar aquest mes.',
    en: 'Get your initial audit at no cost* and discover the quick-wins you can implement this month.',
    fr: 'Obtenez votre audit initial sans coût* et découvrez les quick-wins que vous pouvez implémenter ce mois-ci.'
  },
  // Service Pages Translations
  // Consultoría CISO
  cisoConsultancyTitle: {
    es: 'Consultoría CISO estratégica que impulsa tu ciberseguridad',
    ca: 'Consultoria CISO estratègica que impulsa la teva ciberseguretat',
    en: 'Strategic CISO consultancy that boosts your cybersecurity',
    fr: 'Conseil CISO stratégique qui stimule votre cybersécurité'
  },
  cisoConsultancySubtitle: {
    es: 'Convertimos el riesgo en ventaja competitiva con un Servicio vCISO que reduce riesgos y garantiza normativas para PYMEs con alta exigencia digital de Barcelona, Girona, Andorra y resto de España.',
    ca: 'Convertim el risc en avantatge competitiu amb un Servei vCISO que redueix riscos i garanteix normatives per a PMEs amb alta exigència digital de Barcelona, Girona, Andorra i resta d\'Espanya.',
    en: 'We turn risk into competitive advantage with a vCISO Service that reduces risks and ensures compliance for SMEs with high digital demands from Barcelona, Girona, Andorra and the rest of Spain.',
    fr: 'Nous transformons le risque en avantage concurrentiel avec un Service vCISO qui réduit les risques et garantit la conformité pour les PME à forte demande numérique de Barcelone, Gérone, Andorre et le reste de l\'Espagne.'
  },
  // Auditoría NIS2
  auditTitle: {
    es: 'Auditoría técnica + Compliance NIS2 para blindar tu empresa en Barcelona, Girona, Cataluña y Andorra',
    ca: 'Auditoria tècnica + Compliance NIS2 per blindar la teva empresa a Barcelona, Girona, Catalunya i Andorra',
    en: 'Technical Audit + NIS2 Compliance to secure your company in Barcelona, Girona, Catalonia and Andorra',
    fr: 'Audit technique + Conformité NIS2 pour sécuriser votre entreprise à Barcelone, Gérone, Catalogne et Andorre'
  },
  auditSubtitle: {
    es: 'Pentesting profundo + Gap-Analysis NIS 2: el camino rápido y seguro hacia el cumplimiento total.',
    ca: 'Pentesting profund + Gap-Analysis NIS 2: el camí ràpid i segur cap al compliment total.',
    en: 'Deep Pentesting + NIS 2 Gap-Analysis: the fast and secure path to total compliance.',
    fr: 'Pentesting approfondi + Gap-Analysis NIS 2 : le chemin rapide et sûr vers la conformité totale.'
  },
  // Transformación Digital
  digitalTransformationTitle: {
    es: '¿Tu empresa está preparada para la próxima ola digital?',
    ca: 'La teva empresa està preparada per a la propera onada digital?',
    en: 'Is your company ready for the next digital wave?',
    fr: 'Votre entreprise est-elle prête pour la prochaine vague numérique?'
  },
  digitalTransformationSubtitle: {
    es: 'Convertimos la transformación digital estratégica en resultados medibles: +22 % de eficiencia y 0 sorpresas en ciberseguridad.',
    ca: 'Convertim la transformació digital estratègica en resultats mesurables: +22% d\'eficiència i 0 sorpreses en ciberseguretat.',
    en: 'We turn strategic digital transformation into measurable results: +22% efficiency and 0 cybersecurity surprises.',
    fr: 'Nous transformons la transformation numérique stratégique en résultats mesurables : +22% d\'efficacité et 0 surprise en cybersécurité.'
  },
  // Formación
  trainingTitle: {
    es: 'Formación y concienciación en ciberseguridad que cambian hábitos',
    ca: 'Formació i conscienciació en ciberseguretat que canvien hàbits',
    en: 'Cybersecurity training and awareness that change habits',
    fr: 'Formation et sensibilisation à la cybersécurité qui changent les habitudes'
  },
  trainingSubtitle: {
    es: 'De los clics por costumbre a una cultura de seguridad real: microlearning mensual, phishing simulado y talleres por rol con reportes para auditorías.',
    ca: 'Dels clics per costum a una cultura de seguretat real: microlearning mensual, phishing simulat i tallers per rol amb informes per a auditories.',
    en: 'From habitual clicks to a real security culture: monthly microlearning, simulated phishing and role-based workshops with audit reports.',
    fr: 'Des clics habituels à une vraie culture de sécurité : micro-apprentissage mensuel, phishing simulé et ateliers par rôle avec rapports d\'audit.'
  },
  // OSI
  osiTitle: {
    es: 'Oficina de Seguridad de la Información (OSI) para cumplir NIS2',
    ca: 'Oficina de Seguretat de la Informació (OSI) per complir NIS2',
    en: 'Information Security Office (ISO) to comply with NIS2',
    fr: 'Bureau de Sécurité de l\'Information (BSI) pour se conformer à NIS2'
  },
  osiSubtitle: {
    es: 'Gobernanza, riesgo y cumplimiento activados desde el día uno: políticas, métricas y respuesta en 24/72 h.',
    ca: 'Governança, risc i compliment activats des del dia u: polítiques, mètriques i resposta en 24/72 h.',
    en: 'Governance, risk and compliance activated from day one: policies, metrics and response in 24/72 h.',
    fr: 'Gouvernance, risque et conformité activés dès le premier jour : politiques, métriques et réponse en 24/72 h.'
  },
  // Common CTAs
  bookFreeConsultation: {
    es: 'Reserva consultoría gratis 15 min',
    ca: 'Reserva consultoria gratis 15 min',
    en: 'Book free 15 min consultation',
    fr: 'Réservez une consultation gratuite de 15 min'
  },
  downloadGuide: {
    es: 'Descarga la guía',
    ca: 'Descarrega la guia',
    en: 'Download the guide',
    fr: 'Télécharger le guide'
  },
  requestQuote: {
    es: 'Solicitar presupuesto',
    ca: 'Sol·licitar pressupost',
    en: 'Request quote',
    fr: 'Demander un devis'
  },
  // Auth Pages
  loginTitle: {
    es: 'Acceso al Panel de Blog',
    ca: 'Accés al Panell de Blog',
    en: 'Blog Panel Access',
    fr: 'Accès au Panneau de Blog'
  },
  loginDescription: {
    es: 'Ingresa tus credenciales para acceder al panel administrativo',
    ca: 'Introdueix les teves credencials per accedir al panell administratiu',
    en: 'Enter your credentials to access the administrative panel',
    fr: 'Entrez vos identifiants pour accéder au panneau administratif'
  },
  email: {
    es: 'Usuario',
    ca: 'Usuari',
    en: 'User',
    fr: 'Utilisateur'
  },
  password: {
    es: 'Contraseña',
    ca: 'Contrasenya',
    en: 'Password',
    fr: 'Mot de passe'
  },
  login: {
    es: 'Acceder al Panel',
    ca: 'Accedir al Panell',
    en: 'Access Panel',
    fr: 'Accéder au Panneau'
  },
  forgotPassword: {
    es: '¿Olvidaste tu contraseña?',
    ca: 'Has oblidat la contrasenya?',
    en: 'Forgot your password?',
    fr: 'Mot de passe oublié?'
  },
  resetPassword: {
    es: 'Restablecer contraseña',
    ca: 'Restablir contrasenya',
    en: 'Reset password',
    fr: 'Réinitialiser le mot de passe'
  },
  newPassword: {
    es: 'Nueva contraseña',
    ca: 'Nova contrasenya',
    en: 'New password',
    fr: 'Nouveau mot de passe'
  },
  confirmPassword: {
    es: 'Confirmar contraseña',
    ca: 'Confirmar contrasenya',
    en: 'Confirm password',
    fr: 'Confirmer le mot de passe'
  },
  updatePassword: {
    es: 'Actualizar contraseña',
    ca: 'Actualitzar contrasenya',
    en: 'Update password',
    fr: 'Mettre à jour le mot de passe'
  },
  sendResetLink: {
    es: 'Enviar enlace de restablecimiento',
    ca: 'Enviar enllaç de restabliment',
    en: 'Send reset link',
    fr: 'Envoyer le lien de réinitialisation'
  },
  resetLinkSent: {
    es: 'Se ha enviado un enlace de restablecimiento a tu correo electrónico',
    ca: 'S\'ha enviat un enllaç de restabliment al teu correu electrònic',
    en: 'A reset link has been sent to your email',
    fr: 'Un lien de réinitialisation a été envoyé à votre email'
  },
  passwordUpdated: {
    es: 'Contraseña actualizada correctamente',
    ca: 'Contrasenya actualitzada correctament',
    en: 'Password updated successfully',
    fr: 'Mot de passe mis à jour avec succès'
  }
};

const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('ca')) return 'ca';
  if (browserLang.startsWith('en')) return 'en';
  if (browserLang.startsWith('fr')) return 'fr';
  
  // Default to Spanish
  return 'es';
};

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Try to get saved language from localStorage first
    const savedLanguage = localStorage.getItem('tutumsec_language');
    if (savedLanguage && ['es', 'ca', 'en', 'fr'].includes(savedLanguage)) {
      return savedLanguage as Language;
    }
    // Otherwise, detect from browser
    return detectBrowserLanguage();
  });

  useEffect(() => {
    // Save language preference to localStorage whenever it changes
    localStorage.setItem('tutumsec_language', currentLanguage);
  }, [currentLanguage]);

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
    availableLanguages: ['es', 'ca', 'en', 'fr'] as Language[]
  };
};
