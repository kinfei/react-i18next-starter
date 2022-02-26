import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import locales from "./locales";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

console.log({ locales });

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={locales.i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
