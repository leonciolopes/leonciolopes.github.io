import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import SobrePage from "../pages/SobrePage.jsx";
import MandatoPage from "../pages/MandatoPage.jsx";
import PautasPage from "../pages/PautasPage.jsx";
import ProjetosLeiPage from "../pages/ProjetosLeiPage.jsx";
import EventosPage from "../pages/EventosPage.jsx";
import EventoDetalhe from "../pages/EventoDetalhe.jsx";
import FiscalizacoesPage from "../pages/FiscalizacoesPage.jsx";
import FiscalizacaoDetalhe from "../pages/FiscalizacaoDetalhe.jsx";
import RegularizacaoPage from "../pages/RegularizacaoPage.jsx";
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

      {/* Eventos e Fiscalizações */}
  <Route path="/eventos" element={<EventosPage />} />
  <Route path="/eventos/:id" element={<EventoDetalhe />} />
  
  {/* Regularização Imobiliária */}
  <Route path="/regularizacao" element={<RegularizacaoPage />} />
  {/* Compat: redireciona rota antiga */}
  <Route path="/regularizacao-imobiliaria" element={<Navigate to="/regularizacao" replace />} />
  
  {/* Fiscalizações como subpágina de Mandato */}
  <Route path="/mandato/fiscalizacoes" element={<FiscalizacoesPage />} />
  <Route path="/mandato/fiscalizacoes/:id" element={<FiscalizacaoDetalhe />} />
      <Route path="/contato" element={<ContatoPage />} />

      {/* Fallback básico */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
