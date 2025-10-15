import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield,
  Cookie,
  BarChart3,
  Settings,
  Share2,
  Megaphone,
  Info,
  Database,
} from "lucide-react";

/**
 * Política de Cookies — versión embellecida
 * - Misma redacción (con reemplazos aplicados) pero con UI moderna (cards, acordeón, badges, tablas estilizadas).
 */

const SectionTitle = ({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: any;
  title: string;
  subtitle?: string;
}) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 shadow-sm">
      <Icon className="h-5 w-5 text-indigo-600" />
    </div>
    <div>
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  </div>
);

const SimpleTable = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
    <table className="w-full text-left text-sm">{children}</table>
  </div>
);

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <Navbar />

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 pt-12 pb-6">
          <div className="bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 p-6 md:p-10">
            <div className="flex mt-6 flex-col md:flex-row items-start md:items-center gap-5">
              <h1 className="text-2xl  md:text-4xl font-bold tracking-tight">
                Política de cookies
              </h1>
              <div className="inline-flex mt-2 items-center gap-2">
                <Badge variant="secondary" className="rounded-full">
                  Actualizado
                </Badge>
                <span className="text-sm text-gray-500">2024</span>
              </div>
            </div>
            <p className="mt-4 text-gray-600 max-w-3xl">
              Utilizamos cookies para prestarte un mejor servicio y
              proporcionarte una mejor experiencia de navegación, así como para
              poder mostrar publicidad en función de tus hábitos de navegación.
              Somos responsables de la instalación de las cookies que utilizamos
              y de lo que nosotros hacemos con los datos que obtenemos, ya sean
              cookies propias o de terceros.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 pb-16 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Índice lateral */}
        <aside className="lg:sticky lg:top-24 self-start order-last lg:order-first">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-4">
              <div className="text-sm text-gray-500 mb-2">Índice</div>
              <nav className="space-y-1 text-sm">
                {[
                  "Qué son las cookies",
                  "¿Son peligrosas?",
                  "Cookies técnicas",
                  "Cookies de preferencias",
                  "Cookies estadísticas",
                  "Cookies de redes sociales",
                  "Cookies de marketing",
                  "Otros elementos en el navegador",
                  "Gestionar o desactivar",
                  "Modificaciones",
                ].map((t, i) => (
                  <a
                    key={i}
                    href={`#s${i + 1}`}
                    className="group flex items-center justify-between rounded-xl px-3 py-2 hover:bg-gray-100"
                  >
                    <span>
                      {i + 1}. {t}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100">→</span>
                  </a>
                ))}
              </nav>
            </CardContent>
          </Card>
        </aside>

        {/* Contenido principal */}
        <section className="space-y-6">
          {/* 1 */}
          <Card id="s1" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle
                icon={Cookie}
                title="1. ¿Qué son las cookies y qué otras cosas se almacenan en el navegador?"
              />
              <p className="text-gray-700">
                Las cookies son pequeños archivos de texto que se almacenan en
                su navegador cuando visitas nuestro sitio web. Estos archivos
                contienen información sobre tu navegación e interacción con
                nuestra web, con el propósito de hacer más eficiente tu
                experiencia de usuario y poder mostrar publicidad en función de
                tus hábitos de navegación. Algunas cookies resultan esenciales
                para el buen funcionamiento de nuestra web, como es el caso de
                las cookies técnicas o de personalización de la interfaz de
                usuario, y otras, como las cookies de análisis o las de
                publicidad comportamental (o marketing), requieren que te
                informemos y que nos des tu consentimiento antes de poder
                utilizarlas.
              </p>
              <p className="text-gray-700 mt-3">
                LocalStorage y SessionStorage son dos espacios de almacenamiento
                de datos situados en el navegador de tu dispositivo y, como las
                cookies, pueden ser propios o de terceros. LocalStorage almacena
                la información de forma indefinida o hasta que borres los datos
                del navegador; SessionStorage conserva la información solo
                mientras la pestaña permanezca abierta. Permiten almacenar más
                información que las cookies sin impactar el rendimiento del
                sitio.
              </p>
              <p className="text-gray-700 mt-3">
                Puedes obtener más información aquí.
              </p>
            </CardContent>
          </Card>

          {/* 2 Peligros */}
          <Card id="s2" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle icon={Shield} title="2. ¿Son peligrosas?" />
              <p className="text-gray-700">
                Por lo general, el nivel de riesgo depende del tipo de cookies y
                de si son propias o de terceros. La mayoría no son peligrosas.
              </p>
              <Accordion type="single" collapsible className="mt-4">
                <AccordionItem value="a1">
                  <AccordionTrigger>
                    Cookies técnicas y de preferencias
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      El GT29 (hoy Comité Europeo de Protección de Datos) indica
                      en su Dictamen 4/2012 que están exentas de consentimiento
                      cuando:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
                      <li>
                        son necesarias para transmitir comunicaciones entre
                        usuario y servidores, y
                      </li>
                      <li>
                        son necesarias para prestar una funcionalidad solicitada
                        explícitamente por el usuario.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="a2">
                  <AccordionTrigger>Cookies estadísticas</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Aunque requieren consentimiento, el riesgo es bajo si son
                      propias, tratan datos agregados con fin estrictamente
                      estadístico, se informa de su uso y existe posibilidad de
                      oposición.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="a3">
                  <AccordionTrigger>
                    Cookies propias vs. de terceros
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Las propias las genera nuestro sitio; las de terceros las
                      generan proveedores independientes. Nuestra
                      corresponsabilidad con terceros se limita a facilitar la
                      descarga en tu dispositivo para los fines indicados.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* 3 Técnicas */}
          <Card id="s3" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle
                icon={Settings}
                title="3. ¿Qué cookies técnicas utilizamos y para qué?"
              />
              <p className="text-gray-700">
                Permiten la navegación y el uso de funciones del sitio. Son
                imprescindibles.
              </p>
              <SimpleTable>
                <thead>
                  <tr className="border-b bg-gray-50/60">
                    <th className="p-3">Cookie</th>
                    <th className="p-3">Proveedor</th>
                    <th className="p-3">Finalidad</th>
                    <th className="p-3">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">_gat</td>
                    <td className="p-3">Google</td>
                    <td className="p-3">
                      Restringe la tasa de solicitud y limita la recopilación de
                      datos en sitios de alto tráfico
                    </td>
                    <td className="p-3">1 minuto</td>
                  </tr>
                </tbody>
              </SimpleTable>
            </CardContent>
          </Card>

          {/* 4 Preferencias */}
          <Card id="s4" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle
                icon={Info}
                title="4. ¿Qué cookies de preferencias utilizamos y para qué?"
              />
              <p className="text-gray-700">
                Recuerdan parámetros como el idioma elegido. Si las eliges
                voluntariamente y su fin es solo personalización, no requieren
                autorización adicional.
              </p>
              <SimpleTable>
                <thead>
                  <tr className="border-b bg-gray-50/60">
                    <th className="p-3">Cookie</th>
                    <th className="p-3">Proveedor</th>
                    <th className="p-3">Finalidad</th>
                    <th className="p-3">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan={4}
                      className="p-6 text-center text-sm text-gray-500"
                    >
                      (Sin datos proporcionados en el copy)
                    </td>
                  </tr>
                </tbody>
              </SimpleTable>
            </CardContent>
          </Card>

          {/* 5 Estadísticas */}
          <Card id="s5" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle
                icon={BarChart3}
                title="5. ¿Qué cookies estadísticas utilizamos y para qué?"
              />
              <p className="text-gray-700">
                Se usan para analizar la interacción y medir actividad con fines
                de mejora. Solo si aceptas en el banner/panel.
              </p>
              <SimpleTable>
                <thead>
                  <tr className="border-b bg-gray-50/60">
                    <th className="p-3">Cookie</th>
                    <th className="p-3">Proveedor</th>
                    <th className="p-3">Finalidad</th>
                    <th className="p-3">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">_ga</td>
                    <td className="p-3">Google</td>
                    <td className="p-3">Almacena la ID del visitante</td>
                    <td className="p-3">2 años</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">_gid</td>
                    <td className="p-3">Google</td>
                    <td className="p-3">
                      Cuenta y realiza seguimiento de páginas vistas
                    </td>
                    <td className="p-3">1 día</td>
                  </tr>
                  <tr>
                    <td className="p-3">1P_JAR</td>
                    <td className="p-3">Google</td>
                    <td className="p-3">
                      Datos estadísticos anónimos (p. ej., reproducción de
                      vídeos de YouTube)
                    </td>
                    <td className="p-3">1 año</td>
                  </tr>
                </tbody>
              </SimpleTable>
            </CardContent>
          </Card>

          {/* 6 Redes Sociales */}
          <Card id="s6" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle
                icon={Share2}
                title="6. ¿Qué cookies de redes sociales utilizamos y para qué?"
              />
              <p className="text-gray-700">
                Permiten botones para enlazar y compartir contenidos.
              </p>
              <SimpleTable>
                <thead>
                  <tr className="border-b bg-gray-50/60">
                    <th className="p-3">Cookie</th>
                    <th className="p-3">Proveedor</th>
                    <th className="p-3">Finalidad</th>
                    <th className="p-3">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">(varias)</td>
                    <td className="p-3">Google</td>
                    <td className="p-3"></td>
                    <td className="p-3"></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">(varias)</td>
                    <td className="p-3">YouTube</td>
                    <td className="p-3"></td>
                    <td className="p-3"></td>
                  </tr>
                  <tr>
                    <td className="p-3">(varias)</td>
                    <td className="p-3">Microsoft</td>
                    <td className="p-3"></td>
                    <td className="p-3"></td>
                  </tr>
                </tbody>
              </SimpleTable>
            </CardContent>
          </Card>

          {/* 7 Marketing */}
          <Card id="s7" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle
                icon={Megaphone}
                title="7. ¿Qué cookies de marketing utilizamos y para qué?"
              />
              <p className="text-gray-700">
                Guardan información de comportamiento para anuncios relevantes.
                Solo si lo autorizas.
              </p>
              <SimpleTable>
                <thead>
                  <tr className="border-b bg-gray-50/60">
                    <th className="p-3">Cookie</th>
                    <th className="p-3">Proveedor</th>
                    <th className="p-3">Finalidad</th>
                    <th className="p-3">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">NID</td>
                    <td className="p-3">Google</td>
                    <td className="p-3">
                      Estadísticas, conversiones y personalización de anuncios
                    </td>
                    <td className="p-3">7 meses</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">(varias)</td>
                    <td className="p-3">YouTube</td>
                    <td className="p-3"></td>
                    <td className="p-3"></td>
                  </tr>
                  <tr>
                    <td className="p-3">(varias)</td>
                    <td className="p-3">Microsoft</td>
                    <td className="p-3"></td>
                    <td className="p-3"></td>
                  </tr>
                </tbody>
              </SimpleTable>
            </CardContent>
          </Card>

          {/* 8 Otros elementos */}
          <Card id="s8" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle
                icon={Database}
                title="8. ¿Qué otros elementos se almacenan en el navegador y para qué?"
              />
              <p className="text-gray-700">
                Este sitio web crea espacio en LocalStorage para los dominios
                siguientes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
                <li>
                  <strong>bdrinformatica.com</strong>: …………… (variables: …………. /
                  ……….. / ………….)
                </li>
                <li>
                  <strong>youtube.com</strong>: preferencias del reproductor (p.
                  ej., ytidb::LAST_RESULT_ENTRY_KEY, yt-remote-*)
                </li>
                <li>
                  <strong>google.com</strong>: reCAPTCHA para distinguir humanos
                  y robots (rc::a, rc::c)
                </li>
              </ul>
              <p className="text-gray-700 mt-3">
                Estos espacios son necesarios para el correcto funcionamiento
                del sitio web. Las variables almacenadas son necesarias y
                permanentes salvo indicación contraria.
              </p>
              <p className="text-gray-700 mt-2">
                La duración coincide con el tiempo que permanezcas conectado al
                sitio.
              </p>
            </CardContent>
          </Card>

          {/* 9 Gestionar */}
          <Card id="s9" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle
                icon={Settings}
                title="9. ¿Cómo puedo gestionar o desactivar las cookies?"
              />
              <p className="text-gray-700">
                Puedes administrar o desactivar las cookies desde tu navegador
                siguiendo las instrucciones del fabricante:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
                <li>Instrucciones para Microsoft Edge</li>
                <li>Instrucciones para Google Chrome</li>
                <li>Instrucciones para Google Android</li>
                <li>Instrucciones para Internet Explorer 11</li>
                <li>Instrucciones para Mozilla Firefox</li>
                <li>Instrucciones para Opera</li>
                <li>Instrucciones para Safari</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Si desactivas las cookies, podrás seguir accediendo, pero tu
                experiencia puede no ser óptima y algunos servicios podrían no
                funcionar correctamente.
              </p>
            </CardContent>
          </Card>

          {/* 10 Modificaciones */}
          <Card id="s10" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle
                icon={Info}
                title="10. Modificaciones de esta Política de Cookies"
              />
              <p className="text-gray-700">
                Actualizaremos esta política cuando sea necesario para reflejar
                cambios en productos y servicios. Si hay cambios sustanciales,
                lo notificaremos con un aviso prominente en el banner de
                cookies. Revisa periódicamente esta política para conocer las
                cookies empleadas y su uso.
              </p>

              <p className="text-sm text-gray-500 mt-6">
                Todos los derechos reservados © 2024
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />

      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
