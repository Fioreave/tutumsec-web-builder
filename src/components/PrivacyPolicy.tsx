import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* CONTENIDO */}
      <main className="flex-grow flex items-center justify-center px-6 py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl mt-20 font-extrabold text-gray-900 mb-6">
            POLÍTICA DE PRIVACIDAD
          </h2>
          <div>
            <p className="text-gray-700 mb-8">
              Haz click aquí para visualizar nuestra:
            </p>
            <a
              href="https://bdrinf-my.sharepoint.com/personal/favegliano_bdrinformatica_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffavegliano%5Fbdrinformatica%5Fcom%2FDocuments%2FEscritorio%2Fweb%5Fbdr%2FPoli%CC%81tica%20de%20privacidad%2Epdf&parent=%2Fpersonal%2Ffavegliano%5Fbdrinformatica%5Fcom%2FDocuments%2FEscritorio%2Fweb%5Fbdr&ga=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl bg-primary  text-white font-semibold shadow-md hover:bg-primary/70 transition"
            >
              Política de privacidad
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
