import React from "react";

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 lg:p-12">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <header className="p-6 border-b">
          <h1 className="text-2xl lg:text-3xl font-extrabold">
            TÉRMINOS Y PRIVACIDAD
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            I Aviso Legal · II Política de Privacidad · III Política de Cookies
          </p>
        </header>

        <div className="lg:flex">
          {/* Sidebar / TOC */}
          <nav className="hidden lg:block w-72 border-r p-6 sticky top-6 h-[calc(100vh-96px)] overflow-auto">
            <h2 className="font-semibold mb-4">Índice</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="hover:underline" href="#aviso-legal">
                  I. Aviso Legal
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#usuario">
                  Usuario
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#links">
                  Información sobre vínculos “links”
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#modificaciones">
                  Modificaciones del portal
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#exencion">
                  Exención de responsabilidad
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#propiedad">
                  Propiedad intelectual
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#privacidad">
                  II. Política de Privacidad
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#cookies">
                  III. Política de Cookies
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <button
                onClick={() => window.print()}
                className="w-full text-sm py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
              >
                Imprimir / Guardar como PDF
              </button>
            </div>
          </nav>

          {/* Main content */}
          <main className="flex-1 p-6 lg:p-10">
            <section id="aviso-legal" className="prose prose-lg">
              <h2>I. Aviso Legal</h2>

              <p>
                La información que se muestra a continuación recoge la normativa
                de tratamiento de los datos personales y la protección de la
                intimidad en el sector de las comunicaciones electrónicas, que
                se pone en su conocimiento:
              </p>

              <p>
                <strong>
                  BDR Informática y Comunicaciones S.L.U &amp; BDR INFORMATICA Y
                  COMUNICACIONES, SL
                </strong>{" "}
                [en adelante <strong>BDR</strong>], gestora y encargada del
                funcionamiento de los contenidos del presente portal Web,
                domiciliada en: c/ Baixada del Moli, 20 1-1 – AD500 ANDORRA LA
                VELLA (ANDORRA), NRT L-707599-R, con el Registro de Comercio
                numero 920400X &amp; Paseig Zona Franca 169-171, 8º 1ª 08038
                Barcelona (España) con el Registro de Comercio numero B61678207.
                Contacto: la dirección mencionada o el correo electrónico{" "}
                <a href="mailto:info@bdrinformatica.com">
                  info@bdrinformatica.com
                </a>
                .
              </p>

              <p>
                El contenido del portal Web{" "}
                <a
                  href="https://www.bdrinformatica.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.bdrinformatica.com
                </a>{" "}
                constituye un sistema de información de los diversos servicios
                de consultoría que ofrece, a fin de mantener contacto con usted
                y enviarle información más detallada, según lo previsto en el
                presente aviso legal y el resto de textos legales del presente
                Sitio Web.
              </p>

              <h3 id="usuario">USUARIO</h3>
              <p>
                La utilización del presente Sitio Web y sus contenidos le
                atribuye la condición de Usuario, e implica que ha leído y
                acepta, sin reserva alguna, todas y cada una de las
                disposiciones incluidas en este Aviso Legal, en la versión
                publicada por BDR, que en cada momento se encuentren vigentes en
                la Web.
              </p>

              <p>
                BDR se reserva el derecho de modificar, añadir o eliminar parte
                o partes del presente Aviso Legal, en cualquier momento y sin
                previa notificación. En consecuencia, se recomienda que el
                Usuario lea atentamente el presente Aviso Legal en cada una de
                las ocasiones en las que se proponga utilizar la Web.
              </p>

              <h3 id="links">INFORMACIÓN SOBRE LOS VÍNCULOS “LINKS”</h3>
              <p>
                BDR no será responsable de las webs no propias o de terceros, a
                las que se pueda acceder mediante vínculos “links”, así como de
                ningún otro contenido puesto a disposición por terceros.
                Cualquier uso de un vínculo o acceso a una Web no propia se
                considera efectuado por voluntad y riesgo exclusivo del usuario
                y BDR no recomienda ni garantiza información obtenida a través
                de un vínculo ajeno a la Web de bdrinformatica.com, ni se
                responsabiliza de ningún perjuicio derivado del uso de un
                vínculo, o de la información obtenida a través de él, incluyendo
                otros vínculos o webs, ni de la interrupción en el servicio o en
                el acceso de estos terceros vínculos.
              </p>

              <h3 id="modificaciones">MODIFICACIONES DEL PORTAL WEB</h3>
              <p>
                La información y servicios contenidos en el portal Web pueden
                presentar incorrecciones o errores tipográficos. BDR puede
                introducir en cualquier momento mejoras y/o cambios en el
                referido contenido.
              </p>

              <h3 id="exencion">
                EXENCIÓN DE RESPONSABILIDAD DERIVADA DE UN FALLO TÉCNICO Y DE
                CONTENIDO
              </h3>
              <p>
                BDR declina toda responsabilidad en caso de que se produzcan
                interrupciones o mal funcionamiento de los servicios o
                contenidos ofrecidos en Internet, cualquiera que sea su causa.
                Asimismo, BDR no será responsable por caídas de la red o
                suspensiones temporales del fluido eléctrico o de cualquier otro
                tipo, así como de las posibles pérdidas de negocio fruto de
                estas incidencias.
              </p>

              <p>
                BDR no garantiza que los servicios o contenidos no sean
                interrumpidos o estén libres de errores, que los defectos sean
                corregidos, o que el servicio o servidor que lo pone a
                disposición estén libres de virus u otros componentes nocivos,
                sin perjuicio de que BDR realiza sus mejores esfuerzos para
                evitar todo percance. Se recomienda la comprobación de la
                información recibida con otras fuentes.
              </p>

              <h3 id="propiedad">
                POLÍTICA DE PROPIEDAD INTELECTUAL E INDUSTRIAL
              </h3>
              <p>
                El código fuente, los diseños gráficos, las imágenes, las
                fotografías, el software, los textos, así como la información y
                el resto de contenidos recogidos en
                <a href="https://www.bdrinformatica.com" rel="noreferrer">
                  www.bdrinformatica.com
                </a>{" "}
                están protegidos por la legislación andorrana en materia de
                derechos de propiedad intelectual e industrial, y no se permite
                la reproducción total o parcial de esta Web, ni su tratamiento
                informático, comunicación pública, distribución, difusión,
                modificación, transformación o descompilación, sin el permiso
                previo y por escrito de su titular, de conformidad con lo
                dispuesto en la Ley de Propiedad Intelectual.
              </p>

              <p>
                El usuario, única y exclusivamente podrá utilizar el material
                que aparece en esta Web para su uso personal y privado, quedando
                prohibida su utilización con fines comerciales o lucrativos.
              </p>

              <p>
                Salvo autorización expresa de BDR, no está permitido el enlace a
                “páginas finales”, el “frame” ni cualquier otra manipulación
                similar. Los enlaces deben estar siempre en la página principal
                o “home page” bdrinformatica.com.
              </p>

              <p>
                Todos los derechos derivados de la Propiedad Intelectual están
                expresamente reservados por BDR. “BDR” velará por el
                cumplimiento de las anteriores estipulaciones y por la debida
                utilización de los contenidos presentes en su portal, ejerciendo
                todas las acciones civiles y penales que le asistan en el caso
                de infracción o incumplimiento de estos derechos por parte del
                usuario.
              </p>

              <p>
                Cualquier incidencia, sugerencia o reclamación respecto a
                derechos de propiedad intelectual debe remitirse a través del
                correo electrónico
                <a href="mailto:info@bdrinformatica.com">
                  info@bdrinformatica.com
                </a>
                .
              </p>

              <p>
                Los signos distintivos (marcas, nombres comerciales) de BDR,
                están igualmente protegidos por derechos de propiedad
                industrial, quedando prohibida la utilización o manipulación de
                cualesquiera de éstos, salvo autorización expresa y por escrito.
              </p>
            </section>

            <section id="privacidad" className="prose prose-lg mt-10">
              <h2>
                II. POLÍTICA DE PRIVACIDAD (PROTECCIÓN DE DATOS DE CARÁCTER
                PERSONAL)
              </h2>

              <p>
                El acceso a la página Web o su uso no implica una recogida de
                datos personales del usuario por parte de BDR. No obstante, se
                comunica que, en caso de que “BDR” solicite datos personales, se
                informará debidamente al usuario conforme a la legislación
                vigente en materia de Protección de Datos y demás normativa que
                resulte de aplicación.
              </p>

              <p>
                Los Datos Personales que recoge “BDR” en los diferentes tipos de
                formulario serán tratados con la finalidad de dar respuesta a la
                solicitud realizada por el interesado, así como para el
                mantenimiento de la relación que en su caso se establezca y la
                gestión, administración, información, prestación y mejora de los
                servicios que decida contratar.
              </p>

              <p>
                De conformidad con el Reglamento 2016/679, del Parlamento
                Europeo y del Consejo, de 27 de abril de 2016, relativo a la
                protección de las personas físicas en lo que se refiere al
                tratamiento de datos personales y a la libre circulación de
                estos datos y la Ley calificada 15/2003 de Protección de Datos
                Personales (LQPD) y del Reglamento de la Agencia Andorrana de
                Protección de Datos (RAAPD) que desarrolla la LQPD, se informa
                que por medio de los datos personales facilitados a través de
                los formularios de contacto , así como su dirección de correo
                electrónico, el interesado presta su consentimiento para que los
                datos de carácter personal suministrados sean incorporados a un
                tratamiento titularidad de BDR, con domicilio social en C/
                Baixada del Molí, 20, 1-1, AD500 ANDORRA LA VIEJA (ANDORRA), NRT
                L-707599-R, con el Registro de Comercio numero 920400X &amp; BDR
                INFORMATICA Y COMUNICACIONES, SL Paseig Zona Franca 169-171, 8º
                1ª 08038 Barcelona (España) con el Registro de Comercio numero
                B61678207, siendo encargada de la gestión y funcionamiento del
                sitio Web mencionado.
              </p>

              <p>
                BDR ha tomado las medidas de índole técnica y organizativa
                necesarias para garantizar la seguridad de los datos y evitar su
                alteración, pérdida, tratamiento o acceso no autorizado,
                teniendo en cuenta el estado de la tecnología, la naturaleza de
                los datos almacenados y los riesgos a los que se encuentran
                expuestas, ya provengan de la acción humana o del medio físico o
                natural.
              </p>

              <p>
                Se informa que los datos pueden ser utilizados por el envío de
                comunicaciones profesionales, por cualquier medio, relativos a
                otros servicios de nuestra empresa que puedan ser de su interés.
                Si bien podrá en cualquier momento oponerse a este tipo de
                envíos, enviando un correo electrónico a la dirección
                <a href="mailto:info@bdrinformatica.com">
                  info@bdrinformatica.com
                </a>
                , indicando en el asunto "BAJA DE LA LISTA DE DISTRIBUCIÓN".
              </p>

              <p>
                Asimismo, podrá ejercer sus derechos de acceso, rectificación,
                cancelación, oposición y en su caso, portabilidad y limitación,
                enviando un escrito a la siguiente dirección: C/ Baixada del
                Molí, 20, 1-1, AD500 ANDORRA LA VELLA (ANDORRA) o bien un correo
                electrónico a{" "}
                <a href="mailto:info@bdrinformatica.com">
                  info@bdrinformatica.com
                </a>
                , a ambos acompañado de una fotocopia de su DNI o documento
                acreditativo equivalente e indicando en el asunto "PROTECCIÓN DE
                DATOS".
              </p>

              <p>
                Estos derechos tienen carácter "personalísimo", por lo que
                únicamente podrán ser ejercitados por el propio interesado, o su
                representante legal, previa acreditación de su identidad, o en
                su caso, de la suficiencia de la representación.
              </p>

              <p>
                El derecho de acceso se podrá ejercitar con periodicidad anual,
                salvo interés legítimo acreditado.
              </p>

              <p>
                BDR procederá a notificar su decisión en el plazo de un mes. Si
                fuese en sentido afirmativo, el interesado podrá acceder a la
                referida información en el plazo de los 10 días siguientes a su
                notificación.
              </p>

              <p>
                El derecho de rectificación y cancelación podrán ser ejercitados
                siempre que el interesado considere que los datos recogidos en
                nuestros tratamientos son inexactos, incumplidos, inadecuados o
                excesivos. BDR procederá a la rectificación o cancelación dentro
                de los 10 días siguientes al de la recepción de la solicitud.
              </p>

              <p>
                El derecho de portabilidad podrá ser ejercitado siempre que el
                interesado considere que los datos recogidos en el presente
                tratamiento deben ser devueltos a su titular, o bien a otro
                tercero encargado de dicho tratamiento.
              </p>

              <p>
                El derecho de limitación podrá ser ejercitado, previamente al
                derecho de oposición al tratamiento de sus datos, y mientras no
                se resuelva ese derecho de oposición, limitándose el tratamiento
                de los datos.
              </p>

              <h4 className="mt-6">Otros encargados del Tratamiento</h4>
              <p>
                En caso de que hubiera necesidad de que terceros accedan a este
                tratamiento de datos, se suscribirá el correspondiente contrato
                conforme a lo estipulado en el artículo 28 RGPDUE. Se firmará
                este contrato en los términos que marca el citado artículo,
                regulándose contractualmente el uso y confidencialidad de los
                datos personales por el nuevo encargado del tratamiento.
              </p>

              <h4 className="mt-6">Cambio de Normativa</h4>
              <p>
                BDR se reserva el derecho de modificar la presente política con
                el objeto de adaptarla a las novedades legislativas o
                jurisprudenciales, así como las directrices que pudieran
                derivarse de “códigos tipos” existentes en la materia. Tales
                cambios serán comunicados con la antelación que sea necesaria en
                nuestra página Web, sin perjuicio de reclamar el consentimiento
                necesario de los afectados cuando éste no se considerase
                otorgado conforme a los términos de la presente política.
              </p>

              <p>
                Cualquier duda, pregunta o comentarios que pudiera albergar en
                referencia a la presente normativa, no dude en consultarlas
                dirigiendo su comunicación al respecto en:
                <a href="mailto:info@bdrinformatica.com">
                  info@bdrinformatica.com
                </a>
                .
              </p>
            </section>

            <section id="cookies" className="prose prose-lg mt-10">
              <h2>III. Política de Cookies</h2>

              <p>Se utilizan por las siguientes razones:</p>
              <ul>
                <li>
                  Asegurar que las páginas web puedan funcionar correctamente.
                </li>
                <li>
                  Almacenar las preferencias, como el idioma o el tamaño de la
                  letra.
                </li>
                <li>Conocer la experiencia de navegación del usuario.</li>
                <li>
                  Recopilar información estadística anónima, como qué páginas ha
                  visitado el usuario o cuánto tiempo ha estado en el sitio web.
                </li>
                <li>
                  El uso de Cookies permite optimizar la navegación, adaptando
                  la información y los servicios ofrecidos a los intereses de
                  los usuarios, para proporcionarle una mejor experiencia
                  siempre que visite el sitio web.
                </li>
              </ul>

              <h4>Tipología, finalidad y funcionamiento</h4>
              <p>
                Las cookies en función de su permanencia, pueden dividirse en
                cookies de sesión o permanentes. Las primeras expiran cuando el
                usuario cierra el navegador. Las segundas expiran cuando se
                cumple el objetivo para lo que sirven o cuando se borran
                manualmente.
              </p>

              <p>
                En función de su objetivo, las Cookies también son clasificadas
                de la siguiente forma:
              </p>

              <ul>
                <li>
                  <strong>Técnicas:</strong> Imprescindibles para el correcto
                  funcionamiento de la página.
                </li>
                <li>
                  <strong>De rendimiento:</strong> Se utilizan para mejorar la
                  navegación y optimizar el funcionamiento del sitio web.
                </li>
                <li>
                  <strong>De publicidad:</strong> Recogen información sobre los
                  anuncios mostrados (anónimas o personalizadas).
                </li>
                <li>
                  <strong>De geo-localización:</strong> Para ofrecer contenidos
                  o servicios adecuados a la localización del usuario.
                </li>
              </ul>

              <h4>III. Cookies utilizadas</h4>
              <p>
                Las cookies utilizadas en este sitio web son las siguientes, de
                conformidad con un criterio de “nivel de intrusividad” de una
                escala del 1 al 3:
              </p>

              <ul>
                <li>
                  <strong>Nivel 1:</strong> Cookies estrictamente necesarias
                  para la prestación del mismo servicio solicitado por el
                  usuario.
                </li>
                <li>
                  <strong>Nivel 2:</strong> Cookies de rendimiento (anónimas)
                  necesarias para el mantenimiento de contenidos y navegación,
                  de las que sólo es necesario informar sobre su existencia.
                </li>
                <li>
                  <strong>Nivel 3:</strong> Cookies gestionadas por terceros que
                  permiten el seguimiento del usuario a través de otras webs que
                  no son del titular de esta web. Normalmente son cookies de
                  publicidad o analíticas.
                </li>
              </ul>

              <p>
                BDR en su dominio Web no utiliza ningún tipo de “cookies” para
                el tratamiento de datos personales, que permitan la
                identificación de personas físicas concretas.
              </p>

              <div className="mt-8">
                <a
                  href="mailto:info@bdrinformatica.com"
                  className="inline-block px-4 py-2 border rounded-md text-sm hover:bg-gray-100"
                >
                  Contactar: info@bdrinformatica.com
                </a>
              </div>
            </section>

            <footer className="mt-12 border-t pt-6 text-sm text-gray-600">
              <p>
                © {new Date().getFullYear()} BDR Informática y Comunicaciones.
                Todos los derechos reservados.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
