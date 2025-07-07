
import React from 'react';
import { Languages } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTranslation } from '@/hooks/useTranslation';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useTranslation();

  const languageNames = {
    es: 'Español',
    ca: 'Català',
    en: 'English',
    fr: 'Français'
  };

  return (
    <Select value={currentLanguage} onValueChange={changeLanguage}>
      <SelectTrigger className="w-[140px] border-gray-300 bg-white">
        <div className="flex items-center space-x-2">
          <Languages className="w-4 h-4 text-gray-600" />
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-white border border-gray-200 shadow-lg">
        {availableLanguages.map((lang) => (
          <SelectItem key={lang} value={lang} className="hover:bg-gray-50">
            {languageNames[lang]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
