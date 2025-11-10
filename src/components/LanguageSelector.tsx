import React from "react";
// import { Globe } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";

// import { useLanguage, Language } from "@/i18n/LanguageContext";
// import { useTranslations } from "@/i18n/useTranslations";

const LanguageSelector = () => {
  // Temporalmente deshabilitado - solo español activo mientras se mejoran traducciones
  // const { language, changeLanguage } = useLanguage();
  // const { t } = useTranslations("common");

  // const languages: { code: Language; name: string }[] = [
  //   { code: "es", name: t("lang.es") || "Español" },
  //   { code: "ca", name: t("lang.ca") || "Català" },
  //   { code: "en", name: t("lang.en") || "English" },
  //   { code: "fr", name: t("lang.fr") || "Français" },
  // ];

  // const current = languages.find((l) => l.code === language);

  return (
    <div className="h-8 px-2 text-gray-700">
      <span className="text-sm font-medium">Español</span>
    </div>
  );

  // return (
  //   <DropdownMenu>
  //     <DropdownMenuTrigger asChild>
  //       <Button
  //         variant="ghost"
  //         size="sm"
  //         title={current?.name}
  //         className="h-8 px-2 text-gray-700 hover:text-blue-600"
  //       >
  //         <Globe className="h-4 w-4 mr-1" />
  //         <span>{current?.name}</span>
  //       </Button>
  //     </DropdownMenuTrigger>

  //     <DropdownMenuContent
  //       align="end"
  //       className="w-40 bg-white border shadow-lg"
  //     >
  //       {languages.map((l) => (
  //         <DropdownMenuItem
  //           key={l.code}
  //           onClick={() => changeLanguage(l.code)}
  //           className="cursor-pointer hover:bg-gray-50 px-3 py-2"
  //         >
  //           {l.name}
  //         </DropdownMenuItem>
  //       ))}
  //     </DropdownMenuContent>
  //   </DropdownMenu>
  // );
};

export default LanguageSelector;
