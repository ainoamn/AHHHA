"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Language } from "../site-content";

type LanguageContextValue = {
  language: Language;
  isArabic: boolean;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("ahha-language");
    if (savedLanguage === "ar" || savedLanguage === "en") setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("ahha-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      isArabic: language === "ar",
      toggleLanguage: () => setLanguage((current) => (current === "ar" ? "en" : "ar")),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
