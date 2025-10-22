// PoliticaCookies.tsx — con i18n (t)
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
  Cookie as CookieIcon,
  BarChart3,
  Settings,
  Share2,
  Megaphone,
  Info,
  Database,
} from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";

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
  const { t } = useTranslations(["cookies"]);

  const toc = [
    t("toc.1"),
    t("toc.2"),
    t("toc.3"),
    t("toc.4"),
    t("toc.5"),
    t("toc.6"),
    t("toc.7"),
    t("toc.8"),
    t("toc.9"),
    t("toc.10"),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <Navbar />

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 pt-12 pb-6">
          <div className="bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 p-6 md:p-10">
            <div className="flex mt-6 flex-col md:flex-row items-start md:items-center gap-5">
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
                {t("hero.title")}
              </h1>
              <div className="inline-flex mt-2 items-center gap-2">
                <Badge variant="secondary" className="rounded-full">
                  {t("hero.updated")}
                </Badge>
                <span className="text-sm text-gray-500">{t("hero.year")}</span>
              </div>
            </div>
            <p className="mt-4 text-gray-600 max-w-3xl">{t("hero.lead")}</p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 pb-16 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Índice lateral */}
        <aside className="lg:sticky lg:top-24 self-start order-last lg:order-first">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-4">
              <div className="text-sm text-gray-500 mb-2">{t("toc.title")}</div>
              <nav className="space-y-1 text-sm">
                {toc.map((label, i) => (
                  <a
                    key={i}
                    href={`#s${i + 1}`}
                    className="group flex items-center justify-between rounded-xl px-3 py-2 hover:bg-gray-100"
                  >
                    <span>
                      {i + 1}. {label}
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
              <SectionTitle icon={CookieIcon} title={t("s1.title")} />
              <p className="text-gray-700">{t("s1.p1")}</p>
              <p className="text-gray-700 mt-3">{t("s1.p2")}</p>
              <p className="text-gray-700 mt-3">{t("s1.p3")}</p>
            </CardContent>
          </Card>

          {/* 2 */}
          <Card id="s2" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle icon={Shield} title={t("s2.title")} />
              <p className="text-gray-700">{t("s2.p1")}</p>
              <Accordion type="single" collapsible className="mt-4">
                <AccordionItem value="a1">
                  <AccordionTrigger>{t("s2.a1.title")}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">{t("s2.a1.p")}</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
                      <li>{t("s2.a1.li1")}</li>
                      <li>{t("s2.a1.li2")}</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="a2">
                  <AccordionTrigger>{t("s2.a2.title")}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">{t("s2.a2.p")}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="a3">
                  <AccordionTrigger>{t("s2.a3.title")}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">{t("s2.a3.p")}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* 3 técnicas */}
          <Card id="s3" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle icon={Settings} title={t("s3.title")} />
              <p className="text-gray-700">{t("s3.p1")}</p>
              <SimpleTable>
                <thead>
                  <tr className="border-b bg-gray-50/60">
                    <th className="p-3">{t("table.cookie")}</th>
                    <th className="p-3">{t("table.vendor")}</th>
                    <th className="p-3">{t("table.purpose")}</th>
                    <th className="p-3">{t("table.duration")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">_gat</td>
                    <td className="p-3">Google</td>
                    <td className="p-3">{t("s3.row1.purpose")}</td>
                    <td className="p-3">{t("s3.row1.duration")}</td>
                  </tr>
                </tbody>
              </SimpleTable>
            </CardContent>
          </Card>

          {/* 4 preferencias */}
          <Card id="s4" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle icon={Info} title={t("s4.title")} />
              <p className="text-gray-700">{t("s4.p1")}</p>
              <SimpleTable>
                <thead>
                  <tr className="border-b bg-gray-50/60">
                    <th className="p-3">{t("table.cookie")}</th>
                    <th className="p-3">{t("table.vendor")}</th>
                    <th className="p-3">{t("table.purpose")}</th>
                    <th className="p-3">{t("table.duration")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan={4}
                      className="p-6 text-center text-sm text-gray-500"
                    >
                      {t("s4.empty")}
                    </td>
                  </tr>
                </tbody>
              </SimpleTable>
            </CardContent>
          </Card>

          {/* 5 estadísticas */}
          <Card id="s5" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle icon={BarChart3} title={t("s5.title")} />
              <p className="text-gray-700">{t("s5.p1")}</p>
              <SimpleTable>
                <thead>
                  <tr className="border-b bg-gray-50/60">
                    <th className="p-3">{t("table.cookie")}</th>
                    <th className="p-3">{t("table.vendor")}</th>
                    <th className="p-3">{t("table.purpose")}</th>
                    <th className="p-3">{t("table.duration")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">_ga</td>
                    <td className="p-3">Google</td>
                    <td className="p-3">{t("s5.row1.purpose")}</td>
                    <td className="p-3">{t("s5.row1.duration")}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">_gid</td>
                    <td className="p-3">Google</td>
                    <td className="p-3">{t("s5.row2.purpose")}</td>
                    <td className="p-3">{t("s5.row2.duration")}</td>
                  </tr>
                  <tr>
                    <td className="p-3">1P_JAR</td>
                    <td className="p-3">Google</td>
                    <td className="p-3">{t("s5.row3.purpose")}</td>
                    <td className="p-3">{t("s5.row3.duration")}</td>
                  </tr>
                </tbody>
              </SimpleTable>
            </CardContent>
          </Card>

          {/* 6 redes sociales */}
          <Card id="s6" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle icon={Share2} title={t("s6.title")} />
              <p className="text-gray-700">{t("s6.p1")}</p>
              <SimpleTable>
                <thead>
                  <tr className="border-b bg-gray-50/60">
                    <th className="p-3">{t("table.cookie")}</th>
                    <th className="p-3">{t("table.vendor")}</th>
                    <th className="p-3">{t("table.purpose")}</th>
                    <th className="p-3">{t("table.duration")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">{t("various")}</td>
                    <td className="p-3">Google</td>
                    <td className="p-3"></td>
                    <td className="p-3"></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">{t("various")}</td>
                    <td className="p-3">YouTube</td>
                    <td className="p-3"></td>
                    <td className="p-3"></td>
                  </tr>
                  <tr>
                    <td className="p-3">{t("various")}</td>
                    <td className="p-3">Microsoft</td>
                    <td className="p-3"></td>
                    <td className="p-3"></td>
                  </tr>
                </tbody>
              </SimpleTable>
            </CardContent>
          </Card>

          {/* 7 marketing */}
          <Card id="s7" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle icon={Megaphone} title={t("s7.title")} />
              <p className="text-gray-700">{t("s7.p1")}</p>
              <SimpleTable>
                <thead>
                  <tr className="border-b bg-gray-50/60">
                    <th className="p-3">{t("table.cookie")}</th>
                    <th className="p-3">{t("table.vendor")}</th>
                    <th className="p-3">{t("table.purpose")}</th>
                    <th className="p-3">{t("table.duration")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">NID</td>
                    <td className="p-3">Google</td>
                    <td className="p-3">{t("s7.row1.purpose")}</td>
                    <td className="p-3">{t("s7.row1.duration")}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">{t("various")}</td>
                    <td className="p-3">YouTube</td>
                    <td className="p-3"></td>
                    <td className="p-3"></td>
                  </tr>
                  <tr>
                    <td className="p-3">{t("various")}</td>
                    <td className="p-3">Microsoft</td>
                    <td className="p-3"></td>
                    <td className="p-3"></td>
                  </tr>
                </tbody>
              </SimpleTable>
            </CardContent>
          </Card>

          {/* 8 otros elementos */}
          <Card id="s8" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle icon={Database} title={t("s8.title")} />
              <p className="text-gray-700">{t("s8.p1")}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
                <li dangerouslySetInnerHTML={{ __html: t("s8.li1") }} />
                <li dangerouslySetInnerHTML={{ __html: t("s8.li2") }} />
                <li dangerouslySetInnerHTML={{ __html: t("s8.li3") }} />
              </ul>
              <p className="text-gray-700 mt-3">{t("s8.p2")}</p>
              <p className="text-gray-700 mt-2">{t("s8.p3")}</p>
            </CardContent>
          </Card>

          {/* 9 gestionar */}
          <Card id="s9" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle icon={Settings} title={t("s9.title")} />
              <p className="text-gray-700">{t("s9.p1")}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
                <li>{t("s9.li1")}</li>
                <li>{t("s9.li2")}</li>
                <li>{t("s9.li3")}</li>
                <li>{t("s9.li4")}</li>
                <li>{t("s9.li5")}</li>
                <li>{t("s9.li6")}</li>
                <li>{t("s9.li7")}</li>
              </ul>
              <p className="text-gray-700 mt-3">{t("s9.p2")}</p>
            </CardContent>
          </Card>

          {/* 10 modificaciones */}
          <Card id="s10" className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <SectionTitle icon={Info} title={t("s10.title")} />
              <p className="text-gray-700">{t("s10.p1")}</p>
              <p className="text-sm text-gray-500 mt-6">{t("footer.rights")}</p>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />

      <style>{`html { scroll-behavior: smooth; }`}</style>
    </div>
  );
}
