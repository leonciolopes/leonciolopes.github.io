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

import PieChartSummary from "../components/charts/PieChartSummary.jsx";
import { indicadoresGabinete } from "../data/indicadoresGabinete.js";

export default function MandatoPage() {
  const chartItems = [
    {
      label: "Projetos de Lei",
      value: indicadoresGabinete.projetosDeLei,
      color: "#2563eb",
    },
    {
      label: "Pedidos de Providência",
      value: indicadoresGabinete.pedidosProvidencia,
      color: "#10b981",
    },
    {
      label: "Ofícios",
      value: indicadoresGabinete.oficios,
      color: "#0f172a",
    },
  ];

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

        {/* Layout geral: gráfico à esquerda + cards à direita */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Coluna esquerda: gráfico */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <PieChartSummary
                title="Resumo do Gabinete"
                subtitle="Atualizado semanalmente"
                items={chartItems}
              />

              {/* Opcional: mostrar totais abaixo do gráfico */}
              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-semibold text-slate-900">
                    {indicadoresGabinete.projetosDeLei +
                      indicadoresGabinete.pedidosProvidencia +
                      indicadoresGabinete.oficios}
                  </span>
                </div>

                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span>Projetos de Lei</span>
                    <span className="font-semibold">
                      {indicadoresGabinete.projetosDeLei}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Pedidos de Providência</span>
                    <span className="font-semibold">
                      {indicadoresGabinete.pedidosProvidencia}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Ofícios</span>
                    <span className="font-semibold">
                      {indicadoresGabinete.oficios}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna direita: cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Pautas */}
              <Card>
                <div className="flex h-full flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-900">
                      Pautas
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-700">
                    Principais publicações sobre demandas, ações e temas do dia
                    a dia do mandato.
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
                        <div className="mt-1 text-sm text-slate-700">
                          {p.excerpt}
                        </div>
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
                    Acompanhe os projetos protocolados, em tramitação e
                    aprovados.
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
                        <div className="mt-1 text-sm text-slate-700">
                          {pl.excerpt}
                        </div>
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
                        <div className="mt-1 text-sm text-slate-700">
                          {f.summary}
                        </div>
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
        </div>
      </Container>
    </div>
  );
}
