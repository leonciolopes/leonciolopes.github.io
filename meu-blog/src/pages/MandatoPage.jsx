// src/pages/MandatoPage.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Layers, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../components/ui/Container";
import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";

import formatDateLocal from "../utils/formatDate.js";
import { pautasData } from "../data/pautasData.js";
import { projetosLeiData } from "../data/projetosLeiData.js";
import { fiscalizacoesData } from "../data/fiscalizacoesData.js";

// >>> Gráfico (Resumo do Gabinete)
import PieChartSummary from "../components/charts/PieChartSummary.jsx";
import { indicadoresGabinete } from "../data/indicadoresGabinete.js";

const chartItems = [
  {
    label: "Projetos de Lei",
    value: indicadoresGabinete.projetosDeLei,
    color: "#2563eb", // azul institucional
  },
  {
    label: "Pedidos de Providência",
    value: indicadoresGabinete.pedidosProvidencia,
    color: "#16a34a", // verde institucional
  },
  {
    label: "Ofícios",
    value: indicadoresGabinete.oficios,
    color: "#05dbfc", // slate escuro (mais elegante que preto)
  },
];

export default function MandatoPage() {
  return (
    <div className="py-10">
      <Helmet>
        <title>Mandato - Vereador Leôncio Lopes</title>
        <meta
          name="description"
          content="Acompanhe as ações do mandato: pautas defendidas, projetos de lei propostos e fiscalizações realizadas pelo Vereador Leôncio Lopes em Sete Lagoas."
        />
      </Helmet>

      <Container>
        <PageTitle
          icon={Layers}
          title="Mandato"
          subtitle="Pautas, Projetos de Lei e Fiscalizações em destaque"
        />

        {/* Layout: 4 colunas no desktop (1 para gráfico + 3 para cards) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Coluna esquerda: gráfico / resumo */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <PieChartSummary
                title="Resumo do Gabinete"
                subtitle="Atualizado semanalmente"
                items={chartItems}
              />
            </div>
          </div>

          {/* Cards (ocupam 3 colunas) */}
          <div className="grid grid-cols-1 gap-6 lg:col-span-3 lg:grid-cols-3">
            {/* Pautas */}
            <Card>
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-slate-900">Pautas</span>
                </div>

                <p className="mt-2 text-sm text-slate-700">
                  Principais publicações sobre demandas, ações e temas do dia a dia do
                  mandato.
                </p>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  {pautasData.slice(0, 3).map((p) => (
                    <div key={p.id} className="rounded-xl bg-slate-50 p-3">
                      <div className="text-sm font-semibold text-slate-900">
                        {p.title}
                      </div>
                      <div className="text-xs text-slate-600">
                        {formatDateLocal(p.publishDate)}
                      </div>
                      <div className="mt-1 text-sm text-slate-700">{p.excerpt}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <Link
                    to="/mandato/pautas"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
                  >
                    Saiba mais <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>

            {/* Projetos de Lei */}
            <Card>
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-slate-900">
                    Projetos de Lei
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-700">
                  Acompanhe os projetos protocolados, em tramitação e aprovados.
                </p>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  {projetosLeiData.slice(0, 3).map((pl) => (
                    <div key={pl.id} className="rounded-xl bg-slate-50 p-3">
                      <div className="text-sm font-semibold text-slate-900">
                        {pl.title}
                      </div>
                      <div className="text-xs text-slate-600">
                        {formatDateLocal(pl.publishDate)}
                      </div>
                      <div className="mt-1 text-sm text-slate-700">{pl.excerpt}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <Link
                    to="/mandato/projetos-de-lei"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
                  >
                    Saiba mais <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>

            {/* Fiscalizações */}
            <Card>
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-slate-900">
                    Fiscalizações
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-700">
                  Últimas ações de fiscalização realizadas pelo mandato.
                </p>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  {fiscalizacoesData.slice(0, 3).map((f) => (
                    <div key={f.id} className="rounded-xl bg-slate-50 p-3">
                      <div className="text-sm font-semibold text-slate-900">
                        {f.title}
                      </div>
                      <div className="text-xs text-slate-600">
                        {formatDateLocal(f.date)} — {f.local}
                      </div>
                      <div className="mt-1 text-sm text-slate-700">{f.summary}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <Link
                    to="/mandato/fiscalizacoes"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
                  >
                    Saiba mais <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
