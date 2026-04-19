import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'pt', name: 'Português' }
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-black/5 transition-colors">
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium uppercase">{i18n.language.split('-')[0]}</span>
      </button>
      <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={cn(
              "w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors",
              i18n.language.startsWith(lang.code) ? "font-semibold text-emerald-600 bg-emerald-50/50" : "text-gray-600"
            )}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
}
