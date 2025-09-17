import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

const rootEl = document.getElementById("root")!;
createRoot(rootEl).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
