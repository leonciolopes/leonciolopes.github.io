import React from "react";
import { Layers, FileText, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import formatDateLocal from "../utils/formatDate.js";
import { pautasData } from "../data/pautasData.js";
import { projetosLeiData } from "../data/projetosLeiData.js";
import { fiscalizacoesData } from "../data/fiscalizacoesData.js";

export default function MandatoPage() {
  return (
    <div className="py-10">
      <Container>
        <PageTitle
          icon={Layers}
          title="Mandato"
          subtitle="Pautas e Projetos de Lei em destaque"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-2">
                <Badge>Páginas</Badge>
                <span className="text-lg font-bold text-slate-900">Pautas</span>
              </div>
              <p className="mt-2 text-sm text-slate-700">
                Principais publicações sobre demandas, ações e temas do dia a
                dia do mandato.
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

          <Card>
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-2">
                <Badge>Páginas</Badge>
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
          
          <Card>
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-2">
                <Badge>Fiscalizações</Badge>
                <span className="text-lg font-bold text-slate-900">Fiscalizações recentes</span>
              </div>
              <p className="mt-2 text-sm text-slate-700">
                Últimas ações de fiscalização realizadas pelo mandato.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3">
                {fiscalizacoesData.slice(0, 3).map((f) => (
                  <div key={f.id} className="rounded-xl bg-slate-50 p-3">
                    <div className="text-sm font-semibold text-slate-900">{f.title}</div>
                    <div className="text-xs text-slate-600">{formatDateLocal(f.date)} — {f.local}</div>
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
      </Container>
    </div>
  );
}
