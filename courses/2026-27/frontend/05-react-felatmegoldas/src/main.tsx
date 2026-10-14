import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Szamologep from "./pages/Szamologep";
import Penzvalto from "./pages/Penzvalto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kezdolap from "./pages/Kezdolap";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kezdolap />} />
        <Route path="/szamologep" element={<Szamologep />} />
        <Route path="/penzvalto" element={<Penzvalto />} />
        <Route path="*" element={<h1>404 - nem található</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
