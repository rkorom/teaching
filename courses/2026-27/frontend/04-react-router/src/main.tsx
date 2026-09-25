import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Penzvalto from "./pages/Penzvalto.tsx";
import Szamologep from "./pages/Szamologep.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/szamologep" element={<Szamologep />} />
        <Route path="/penzvalto" element={<Penzvalto />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
