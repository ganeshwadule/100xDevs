import { useState } from "react";
import useFetch from "./hooks/useFetch";
import UseFetchCompo from "./components/UseFetchCompo";
import UsePrevCompo from "./components/UsePrevCompo";
import ContextAPICompo from "./components/ContextAPICompo";
import RecoilComponent from "./components/RecoilComponent";
import LanguageContextProvider from "./contexts/LanguageContext";
import { RecoilRoot } from "recoil";
import { translations } from "./contexts/LanguageContext";
import Notifications from "./components/Notifications";

function App() {
  return (
    <>
      {/* <UseFetchCompo/> */}
      {/* <UsePrevCompo></UsePrevCompo> */}

      {/* <ContextAPICompo></ContextAPICompo> */}
      {/* <LanguageContextProvider>
    <ChangeLanguage/>
    </LanguageContextProvider> */}
        {/* <RecoilComponent /> */}
        <RecoilRoot>
        <Notifications/>
        </RecoilRoot>
        
    </>
  );
}

export default App;

