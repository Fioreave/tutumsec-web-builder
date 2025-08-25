import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LanguageTest = () => {
  const { t, currentLanguage } = useTranslation();

  return (
    <Card className="m-4 p-4">
      <CardHeader>
        <CardTitle>Prueba de Idiomas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p><strong>Idioma actual:</strong> {currentLanguage}</p>
          <p><strong>Título Hero:</strong> {t('heroTitle')}</p>
          <p><strong>Consultoría CISO:</strong> {t('cisoConsultancyTitle')}</p>
          <p><strong>Email:</strong> {t('email')}</p>
          <p><strong>Contraseña:</strong> {t('password')}</p>
          <p><strong>Servicios:</strong> {t('servicesTitle')}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LanguageTest;