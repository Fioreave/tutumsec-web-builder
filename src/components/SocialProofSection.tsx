import React, { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const SocialProofSection = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState("partners");
  const [currentStory, setCurrentStory] = useState(0);

  const tabContent = {
    partners: [
      { name: "BlackMDR", logo: "/uploads/blackmdr.png" },
      { name: "Fortinet", logo: "/uploads/fortinet.png" },
      { name: "CrowdStrike", logo: "/uploads/crowdstrike.png" },
      { name: "Bitdefender", logo: "/uploads/bitdefender.png" },
      { name: "Palo Alto Networks", logo: "/uploads/paloalto.png" },
    ],
    certificados: [
      { name: "ISO27001", logo: "/uploads/certificados/ISO27001.png" },
      { name: "Fortinet", logo: "/uploads/certificados/ENS.png" },
      { name: "CrowdStrike", logo: "/uploads/certificados/nis2" },
    ],
    organizaciones: [
      {
        name: "ISO27001",
        logo: "/uploads/c26c5fdf-d2ac-4e75-8261-fc16741b6fe6.png",
      },
      {
        name: "Fortinet",
        logo: "/uploads/dfae3c84-6b3b-463a-8f75-277584e0c595.png",
      },
      {
        name: "CrowdStrike",
        logo: "/uploads/a12d96d0-9d49-42bf-b1ca-274b15c1217a.png",
      },
    ],
  };

  return (
    <section className="py-20 px-6 bg-white ">
      <div className="max-w-6xl mx-auto">
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-blue-600 flex justify-center pb-6">
            Confía en un equipo certificado y respaldado por los líderes del
            sector
          </h2>
        </div>
        {/* Tabs Section */}
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-8 ">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
                  selectedTab === tab
                    ? "bg-gray-400/30 text-blue-600 hover:bg-blue-600 hover:text-white"
                    : "bg-white bg-opacity-20 text-gray-400 hover:bg-white hover:text-blue-600"
                }`}
              >
                {t(tab)}
              </button>
            ))}
          </div>

          <div className="flex justify-center items-center gap-8">
            {selectedTab === "partners"
              ? tabContent.partners.map((partner, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-10 rounded-lg p-4 hover:bg-opacity-20 transition-all duration-300"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-8 w-auto filter brightness-0 invert opacity-80 hover:opacity-100"
                    />
                  </div>
                ))
              : tabContent[selectedTab as keyof typeof tabContent].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="text-white text-lg font-medium opacity-80 hover:opacity-100 transition-opacity"
                    ></div>
                  )
                )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
