import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations"; // 👈 tu hook

export default function PoliticaPrivacidadPage() {
  // Carga del namespace de privacidad (igual que en tu ejemplo de Cookies)
  const { t } = useTranslations(["privacidad"]);

  // El copy legal viene del JSON (texto EXACTO)
  const COPY = t("copy");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <Navbar />

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 pt-12 pb-6">
          <div className="rounded-3xl border bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 p-6 md:p-10 shadow-md">
            <div className="flex mt-6 items-center gap-3 mb-3">
              <Shield className="h-5 w-5 text-indigo-600" />
              <span className="text-sm text-gray-500">{t("hero.label")}</span>
              <Badge variant="secondary" className="rounded-full">
                {t("hero.badge")}
              </Badge>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="mt-3 text-gray-600 max-w-3xl">{t("hero.lead")}</p>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <main className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 pb-16">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 md:p-10">
            {/* COPY EXACTO, sin modificaciones */}
            <div className="prose prose-gray max-w-none whitespace-pre-wrap leading-relaxed text-gray-800">
              {COPY}
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />

      <style>{`html { scroll-behavior: smooth; }`}</style>
    </div>
  );
}
