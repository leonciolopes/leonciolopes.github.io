import React from "react";
import { FileText, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Container from "../components/ui/Container";
import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import FilterBar from "../components/ui/FilterBar";
import PagedList from "../components/ui/PagedList";
import { pautasData } from "../data/pautasData.js";
import useFilteredPosts from "../hooks/useFilteredPosts";
import formatDateLocal from "../utils/formatDate.js";

export default function PautasPage() {
  const f = useFilteredPosts(pautasData);

  return (
    <div className="py-10">
      <Helmet>
        <title>Pautas - Vereador Leôncio Lopes</title>
        <meta name="description" content="Principais pautas e pedidos de providência do Vereador Leôncio Lopes: infraestrutura, mobilidade, saúde, educação, zona rural e regularização fundiária em Sete Lagoas." />
      </Helmet>
      <Container>
        <PageTitle
          icon={FileText}
          title="Pautas"
          subtitle="Principais demandas e pedidos de providência para Sete Lagoas"
        />
        
        {/* Destaque das categorias principais */}
        <div className="mb-6 rounded-2xl bg-gradient-to-br from-blue-50 to-slate-50 p-6 border border-blue-100">
          <h3 className="text-lg font-bold text-slate-900 mb-3">📋 Principais Áreas de Atuação</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
            <div className="text-center">
              <div className="font-semibold text-blue-700">Infraestrutura</div>
              <div className="text-xs text-slate-600">Asfalto, drenagem, saneamento</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-blue-700">Mobilidade</div>
              <div className="text-xs text-slate-600">Segurança viária, semáforos</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-blue-700">Urbanização</div>
              <div className="text-xs text-slate-600">Praças, iluminação, lazer</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-blue-700">Zona Rural</div>
              <div className="text-xs text-slate-600">Estradas vicinais</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-blue-700">Regularização</div>
              <div className="text-xs text-slate-600">REURB, fiscalização</div>
            </div>
          </div>
        </div>

        <FilterBar {...f} />
        <PagedList
          items={f.filtered}
          renderItem={(item) => (
            <Card key={item.id}>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h4>
                  <Badge>{item.category}</Badge>
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  Publicado em {formatDateLocal(item.publishDate)}
                </div>
                <p className="mt-2 text-sm text-slate-700">{item.excerpt}</p>
                <div className="mt-auto pt-3">
                  <Link
                    to={`/mandato/pautas/${item.id}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-3 py-2 text-xs font-medium text-white hover:bg-blue-500"
                  >
                    Saiba mais <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          )}
        />
      </Container>
    </div>
  );
}
