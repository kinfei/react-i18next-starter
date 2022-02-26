import React, { Suspense } from "react";
import { withTranslation } from "react-i18next";

import { Button } from "antd";

import constants from "./constants";

import "./App.css";

function App({ t, i18n }) {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <h1>{t("welcome.title", { framework: "React" })}</h1>

        <Button
          type="link"
          disabled={i18n.language === constants.language.en}
          onClick={() => i18n.changeLanguage(constants.language.en)}
        >
          {t("en-US")}
        </Button>

        <Button
          type="link"
          disabled={i18n.language === constants.language.zh}
          onClick={() => i18n.changeLanguage(constants.language.zh)}
        >
          {t("zh-CN")}
        </Button>
      </div>
    </Suspense>
  );
}

export default withTranslation("translation")(App);
