import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Email from "./email";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Email />
  </StrictMode>,
);
