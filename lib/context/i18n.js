import { useRouter } from "next/router";
import { createContext, useContext } from "react";
import en from "../../translations/en.json";

const i18nContext = createContext();

export function I18nProvider({ children }) {
  const t = (key) => {
    return en[key];
  };

  return <i18nContext.Provider value={{ t }}>{children}</i18nContext.Provider>;
}

export function Usei18N() {
  const context = useContext(i18nContext);
  if (context === undefined) {
    throw new Error("usei18N must be used within a usei18N provider");
  }
  return context;
}
