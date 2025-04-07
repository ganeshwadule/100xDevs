import { useState } from "react";
import useFetch from "./hooks/useFetch";
import UseFetchCompo from "./components/UseFetchCompo";
import UsePrevCompo from "./components/UsePrevCompo";
import ContextAPICompo from "./components/ContextAPICompo";
import RecoilComponent from "./components/RecoilComponent";
import LanguageContextProvider from "./contexts/LanguageContext";
import { RecoilRoot } from "recoil";
import { translations } from "./contexts/LanguageContext";

function App() {
  return (
    <>
      {/* <UseFetchCompo/> */}
      {/* <UsePrevCompo></UsePrevCompo> */}

      {/* <ContextAPICompo></ContextAPICompo> */}
      {/* <LanguageContextProvider>
    <ChangeLanguage/>
    </LanguageContextProvider> */}
        <RecoilComponent />
    </>
  );
}

export default App;

function ChangeLanguage() {
  return (
    <div>
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: "black",
          color: "white",
        }}
      >
        {translations["hi"].greeting}
      </div>
      <br />
      <br />
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: "black",
          color: "white",
        }}
      >
        {translations["en"].greeting}
      </div>
    </div>
  );
}
