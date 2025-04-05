import { createContext, useState } from "react";

export const translations = {
  en: {
    greeting: "Hello",
    welcome: "Welcome to the app",
  },
  hi: {
    greeting: "नमस्ते",
    welcome: "ऐप में आपका स्वागत है",
  },
  fr: {
    greeting: "Bonjour",
    welcome: "Bienvenue dans l'application",
  },
};
const LanguageContext = createContext();

const LanguageContextProvider = ({children}) => {
  const [language, setLanguage] = useState("hi");

  return <div>
    <LanguageContext.Provider value={{language:language,setLanguage}}>
      {children}
    </LanguageContext.Provider>
  </div>
};

export default LanguageContextProvider;