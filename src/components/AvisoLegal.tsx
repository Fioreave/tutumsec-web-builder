// AvisoLegal.tsx — con i18n (t)
import React from "react";
import { useTranslations } from "@/i18n/useTranslations";

export default function AvisoLegal() {
  const { t } = useTranslations(["legal"]);

  const P = ({ k }: { k: string }) => (
    <p dangerouslySetInnerHTML={{ __html: t(k) }} />
  );

  const Li = ({ k }: { k: string }) => (
    <li dangerouslySetInnerHTML={{ __html: t(k) }} />
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 lg:p-12">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <header className="p-6 border-b">
          <h1 className="text-2xl lg:text-3xl font-extrabold">
            {t("header.title")}
          </h1>
          <p className="mt-2 text-sm text-gray-600">{t("header.sub")}</p>
        </header>

        <div className="lg:flex">
          {/* Sidebar / TOC */}
          <nav className="hidden lg:block w-72 border-r p-6 sticky top-6 h-[calc(100vh-96px)] overflow-auto">
            <h2 className="font-semibold mb-4">{t("toc.title")}</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="hover:underline" href="#aviso-legal">
                  {t("toc.aviso")}
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#usuario">
                  {t("toc.usuario")}
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#links">
                  {t("toc.links")}
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#modificaciones">
                  {t("toc.modificaciones")}
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#exencion">
                  {t("toc.exencion")}
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#propiedad">
                  {t("toc.propiedad")}
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#privacidad">
                  {t("toc.privacidad")}
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#cookies">
                  {t("toc.cookies")}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <button
                onClick={() => window.print()}
                className="w-full text-sm py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
              >
                {t("actions.print")}
              </button>
            </div>
          </nav>

          {/* Main */}
          <main className="flex-1 p-6 lg:p-10">
            <section id="aviso-legal" className="prose prose-lg">
              <h2>{t("aviso.title")}</h2>
              <P k="aviso.p1" />
              <P k="aviso.p2" />
              <P k="aviso.p3" />

              <h3 id="usuario">{t("usuario.title")}</h3>
              <P k="usuario.p1" />
              <P k="usuario.p2" />

              <h3 id="links">{t("links.title")}</h3>
              <P k="links.p1" />

              <h3 id="modificaciones">{t("modificaciones.title")}</h3>
              <P k="modificaciones.p1" />

              <h3 id="exencion">{t("exencion.title")}</h3>
              <P k="exencion.p1" />
              <P k="exencion.p2" />

              <h3 id="propiedad">{t("propiedad.title")}</h3>
              <P k="propiedad.p1" />
              <P k="propiedad.p2" />
              <P k="propiedad.p3" />
              <P k="propiedad.p4" />
              <P k="propiedad.p5" />
              <P k="propiedad.p6" />
            </section>

            <section id="privacidad" className="prose prose-lg mt-10">
              <h2>{t("privacidad.title")}</h2>
              <P k="privacidad.p1" />
              <P k="privacidad.p2" />
              <P k="privacidad.p3" />
              <P k="privacidad.p4" />
              <P k="privacidad.p5" />
              <P k="privacidad.p6" />
              <P k="privacidad.p7" />
              <P k="privacidad.p8" />
              <P k="privacidad.p9" />
              <P k="privacidad.p10" />

              <h4 className="mt-6">{t("otros.title")}</h4>
              <P k="otros.p1" />

              <h4 className="mt-6">{t("cambio.title")}</h4>
              <P k="cambio.p1" />

              <P k="dudas.p1" />
            </section>

            <section id="cookies" className="prose prose-lg mt-10">
              <h2>{t("cookiesSec.title")}</h2>

              <P k="cookiesSec.intro" />
              <ul>
                <Li k="cookiesSec.li1" />
                <Li k="cookiesSec.li2" />
                <Li k="cookiesSec.li3" />
                <Li k="cookiesSec.li4" />
                <Li k="cookiesSec.li5" />
              </ul>

              <h4>{t("cookiesSec.typologyTitle")}</h4>
              <P k="cookiesSec.typologyP1" />
              <P k="cookiesSec.typologyP2" />
              <P k="cookiesSec.typologyP3" />
              <ul>
                <Li k="cookiesSec.t1" />
                <Li k="cookiesSec.t2" />
                <Li k="cookiesSec.t3" />
                <Li k="cookiesSec.t4" />
              </ul>

              <h4>{t("cookiesSec.usedTitle")}</h4>
              <P k="cookiesSec.usedIntro" />
              <ul>
                <Li k="cookiesSec.level1" />
                <Li k="cookiesSec.level2" />
                <Li k="cookiesSec.level3" />
              </ul>

              <P k="cookiesSec.noPersonal" />

              <div className="mt-8">
                <a
                  href="mailto:hola@tutumsec.io"
                  className="inline-block px-4 py-2 border rounded-md text-sm hover:bg-gray-100"
                >
                  {t("cookiesSec.contactCta")}
                </a>
              </div>
            </section>

            <footer className="mt-12 border-t pt-6 text-sm text-gray-600">
              <p>{t("footer.rights", { year: new Date().getFullYear() })}</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
