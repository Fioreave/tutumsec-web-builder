"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  CheckCircle2,
  AlertTriangle,
  Loader2,
} from "lucide-react";

declare global {
  interface Window {
    grecaptcha?: {
      ready(cb: () => void): void;
      execute(siteKey: string, opts: { action: string }): Promise<string>;
    };
  }
}

const API_URL = "https://api.tutumsec.io/contact";
const RECAPTCHA_SITE_KEY = "6LfTSNIrAAAAACUlwWFW7FR2V2XpodcvXgpZznmz";
const POLICY_URL = "/politica-de-privacidad";

/** Sedes */
const locations = [
  {
    name: "Andorra",
    address1: "Passeig de l'Arnaldaeta de Caboet, 11, 2n 2a",
    address2: "AD700 Escaldes Engordany",
    phone: "+376 862 762",
    mapSrc:
      "https://www.google.com/maps?q=Passeig%20de%20l'Arnaldaeta%20de%20Caboet%2011%20Escaldes%20Engordany&output=embed",
  },
  {
    name: "Barcelona",
    address1: "Carrer de l'Aprestadora, 12, entlo 1",
    address2: "08902 L'Hospitalet de Llobregat — Barcelona",
    phone: "+34 93 296 48 02",
    mapSrc:
      "https://www.google.com/maps?q=Carrer%20de%20l'Aprestadora%2012%20L'Hospitalet%20de%20Llobregat&output=embed",
  },
  {
    name: "Girona",
    address1: "Carrer Pic de Peguera, 11",
    address2: "17003 — Girona",
    phone: "+34 972 462 999",
    mapSrc:
      "https://www.google.com/maps?q=Carrer%20Pic%20de%20Peguera%2011%20Girona&output=embed",
  },
];

const Contacto: React.FC = () => {
  // Form
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [privacy, setPrivacy] = useState(false);

  // UI
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentOk, setSentOk] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Cargar script reCAPTCHA v3
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return;
    const id = "recaptcha-v3";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.async = true;
    s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    document.head.appendChild(s);
  }, []);

  const getRecaptchaToken = (): Promise<string> =>
    new Promise((resolve, reject) => {
      if (!RECAPTCHA_SITE_KEY || !window.grecaptcha)
        return reject(new Error("Captcha no disponible"));
      window.grecaptcha.ready(async () => {
        try {
          const t = await window.grecaptcha!.execute(RECAPTCHA_SITE_KEY, {
            action: "contact",
          });
          resolve(t);
        } catch (err) {
          reject(err);
        }
      });
    });

  const downloadPdf = (path: string, name: string) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setCompany("");
    setMessage("");
    setPrivacy(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!privacy) {
      setErrorMsg("Debes aceptar la política de privacidad.");
      return;
    }

    setIsSubmitting(true);
    try {
      const token = await getRecaptchaToken();

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          company,
          message,
          privacy: true,
          recaptcha_token: token,
        }),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.ok) {
        const msg = json?.errors
          ? Object.values(json.errors).join(" · ")
          : json?.error || "No se pudo enviar el formulario.";
        throw new Error(msg);
      }

      setSentOk(true);
      resetForm();
      downloadPdf("/checklist-nis2.pdf", "checklist-nis2.pdf");
    } catch (err: any) {
      setErrorMsg(err?.message || "Ha ocurrido un error. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Contacto</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ponte en contacto con nosotros para discutir tus necesidades de
              ciberseguridad
            </p>
          </div>

          {/* Formulario */}
          <div className="mx-auto w-full max-w-[800px]">
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                {sentOk ? (
                  <div className="rounded-xl border p-4 bg-card">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">
                        ¡Mensaje enviado!
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Gracias por escribirnos. Un consultor se pondrá en
                      contacto contigo a la brevedad.
                    </p>
                    <div className="mt-4">
                      <Button
                        variant="secondary"
                        onClick={() => setSentOk(false)}
                      >
                        Enviar otro mensaje
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre">Nombre *</Label>
                        <Input
                          id="nombre"
                          placeholder="Tu nombre"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="apellidos">Apellidos</Label>
                        <Input
                          id="apellidos"
                          placeholder="Tus apellidos"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="empresa">Empresa</Label>
                      <Input
                        id="empresa"
                        placeholder="Tu empresa"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="mensaje">Mensaje *</Label>
                      <Textarea
                        id="mensaje"
                        placeholder="Cuéntanos sobre tu proyecto..."
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>

                    <label className="flex items-start gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={privacy}
                        onChange={(e) => setPrivacy(e.target.checked)}
                        required
                        className="mt-1"
                      />
                      <span>
                        Acepto la{" "}
                        <a
                          href={POLICY_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          política de privacidad
                        </a>
                        .
                      </span>
                    </label>

                    {errorMsg && (
                      <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm">
                        <AlertTriangle className="mt-0.5 h-4 w-4 text-destructive" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" /> Enviando…
                        </span>
                      ) : (
                        "Enviar mensaje"
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sedes */}
          <section>
            <div className="text-left mt-20">
              <h3 className="text-4xl font-bold text-primary">
                Nuestras sedes
              </h3>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-20 gap-6">
              {locations.map((loc) => {
                const telHref = `tel:${loc.phone.replace(/\s/g, "")}`;
                return (
                  <Card key={loc.name} className="h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-foreground">
                        {loc.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="overflow-hidden border">
                        <iframe
                          src={loc.mapSrc}
                          title={`Mapa ${loc.name}`}
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
                          <a href={telHref} className="hover:underline">
                            {loc.phone}
                          </a>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contacto;
