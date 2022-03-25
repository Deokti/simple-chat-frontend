import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContextProvider } from "./context/app.context";
import { SocketClientContectProvider } from "./context/socket.client.context";
import "./css/base.css";
import "@fontsource/roboto";

ReactDOM.render(
  <React.StrictMode>
    <SocketClientContectProvider io={null}>
      <AppContextProvider messages={[]} user={null} users={[]}>
        <App />
      </AppContextProvider>
    </SocketClientContectProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
