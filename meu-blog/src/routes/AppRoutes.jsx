import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import SobrePage from "../pages/SobrePage.jsx";
import MandatoPage from "../pages/MandatoPage.jsx";
import PautasPage from "../pages/PautasPage.jsx";
import ProjetosLeiPage from "../pages/ProjetosLeiPage.jsx";
import EventosPage from "../pages/EventosPage.jsx";
import EventoDetalhe from "../pages/EventoDetalhe.jsx";
import ContatoPage from "../pages/ContatoPage.jsx";

import PlaceholderPost from "../components/PlaceholderPost.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<SobrePage />} />

      {/* Mandato */}
      <Route path="/mandato" element={<MandatoPage />} />
      <Route path="/mandato/pautas" element={<PautasPage />} />
      <Route path="/mandato/projetos-de-lei" element={<ProjetosLeiPage />} />

      {/* Detalhes (placeholders) */}
      <Route
        path="/mandato/pautas/:id"
        element={<PlaceholderPost type="pauta" />}
      />
      <Route
        path="/mandato/projetos-de-lei/:id"
        element={<PlaceholderPost type="pl" />}
      />

      {/* Eventos e Contato */}
      <Route path="/eventos" element={<EventosPage />} />
      <Route path="/eventos/:id" element={<EventoDetalhe />} />
      <Route path="/contato" element={<ContatoPage />} />

      {/* Fallback básico */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
