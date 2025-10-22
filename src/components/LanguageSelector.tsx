import React from "react";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { useLanguage, Language } from "@/i18n/LanguageContext";
import { useTranslations } from "@/i18n/useTranslations";

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslations("common");

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: "es", name: t("lang.es") || "Español", flag: "🇪🇸" },
    { code: "ca", name: t("lang.ca") || "Català", flag: "🇦🇩" },
    { code: "en", name: t("lang.en") || "English", flag: "🇺🇸" },
    { code: "fr", name: t("lang.fr") || "Français", flag: "🇫🇷" },
  ];

  const current = languages.find((l) => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          title={current?.name}
          className="h-8 px-2 text-gray-700 hover:text-blue-600"
        >
          <Globe className="h-4 w-4 mr-1" />
          <span>{current?.flag}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-40 bg-white border shadow-lg"
      >
        {languages.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => changeLanguage(l.code)}
            className="cursor-pointer hover:bg-gray-50 px-3 py-2"
          >
            <span className="mr-2">{l.flag}</span>
            {l.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
