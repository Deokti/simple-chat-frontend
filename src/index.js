import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContextProvider } from "./context/app.context";
import "./css/base.css";
import "@fontsource/roboto";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider messages={[]} user={null} users={[]}>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
