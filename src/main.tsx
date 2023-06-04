import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StyledGlobal } from "./styles/global.ts";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledGlobal />
      <Toaster />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
