import React, { Suspense } from "react";
import { withTranslation } from "react-i18next";

import constants from "./constants";

import "./App.css";

function App({ t, i18n }) {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <h1>{t("welcome.title", { framework: "React" })}</h1>
        <button onClick={() => i18n.changeLanguage(constants.language.en)}>
          {t("en-US")}
        </button>
        <button onClick={() => i18n.changeLanguage(constants.language.zh)}>
          {t("zh-CN")}
        </button>
      </div>
    </Suspense>
  );
}

export default withTranslation("translation")(App);
