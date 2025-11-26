import React from "react";
import { Link } from "react-router-dom";
import { Layers, ExternalLink, CheckCircle2, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

import Container from "../components/ui/Container.jsx";
import Card from "../components/ui/Card.jsx";
import Badge from "../components/ui/Badge.jsx";
import PageTitle from "../components/ui/PageTitle.jsx";
import FilterBar from "../components/ui/FilterBar.jsx";
import PagedList from "../components/ui/PagedList.jsx";

import useFilteredPosts from "../hooks/useFilteredPosts.js";
import { projetosLeiData } from "../data/projetosLeiData.js";
import formatDateLocal from "../utils/formatDate.js";

export default function ProjetosLeiPage() {
  const f = useFilteredPosts(projetosLeiData);
  
  // Contar projetos aprovados e em tramitação
  const aprovados = projetosLeiData.filter(p => p.status === "Aprovada").length;
  const emTramitacao = projetosLeiData.filter(p => p.status === "Em tramitação").length;

  return (
    <div className="py-10">
      <Helmet>
        <title>Projetos de Lei - Vereador Leôncio Lopes</title>
        <meta name="description" content="Projetos de Lei e programas do mandato: inclusão social, moradia, saúde, meio ambiente, educação profissional. 3 leis aprovadas transformando Sete Lagoas." />
      </Helmet>
      <Container>
        <PageTitle
          icon={Layers}
          title="Projetos de Lei e Programas"
          subtitle="Leis aprovadas e iniciativas em tramitação"
        />

        {/* Destaque das conquistas */}
        <div className="mb-6 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 p-6 border border-green-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Leis Aprovadas */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
                <div>
                  <div className="text-2xl font-bold text-green-700">{aprovados} Leis</div>
                  <div className="text-sm text-slate-600">Aprovadas e Sancionadas</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✅ <strong>Lei do Endereço Social</strong> (10.192/2025)</li>
                <li>✅ <strong>Reforma do ITBI</strong> (LC 298/2025)</li>
                <li>✅ <strong>Associação Aproximar</strong> (10.199/2025)</li>
              </ul>
            </div>

            {/* Em Tramitação */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold text-blue-700">{emTramitacao} Programas</div>
                  <div className="text-sm text-slate-600">Em Tramitação</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>⏳ Doação de Órgãos</li>
                <li>⏳ Combate a Cigarros Eletrônicos</li>
                <li>⏳ Galpões de Reciclagem</li>
                <li>⏳ Hortas Comunitárias</li>
                <li>⏳ Bolsas de Educação Técnica</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Áreas de atuação */}
        <div className="mb-6 rounded-2xl bg-slate-50 p-5 border border-slate-200">
          <h3 className="text-base font-bold text-slate-900 mb-3">🎯 Áreas de Atuação Legislativa</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm">
            <div className="text-center p-2 bg-white rounded-lg">
              <div className="font-semibold text-green-700">Inclusão Social</div>
            </div>
            <div className="text-center p-2 bg-white rounded-lg">
              <div className="font-semibold text-blue-700">Moradia</div>
            </div>
            <div className="text-center p-2 bg-white rounded-lg">
              <div className="font-semibold text-red-700">Saúde</div>
            </div>
            <div className="text-center p-2 bg-white rounded-lg">
              <div className="font-semibold text-green-700">Meio Ambiente</div>
            </div>
            <div className="text-center p-2 bg-white rounded-lg">
              <div className="font-semibold text-purple-700">Educação</div>
            </div>
            <div className="text-center p-2 bg-white rounded-lg">
              <div className="font-semibold text-orange-700">Sociedade Civil</div>
            </div>
          </div>
        </div>

        <FilterBar {...f} />

        <PagedList
          items={f.filtered}
          renderItem={(item) => (
            <Card key={item.id}>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    {item.status && (
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        item.status === "Aprovada" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {item.status === "Aprovada" ? "✅ Aprovada" : "⏳ Em tramitação"}
                      </span>
                    )}
                    <Badge>{item.category}</Badge>
                  </div>
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  Publicado em {formatDateLocal(item.publishDate)}
                </div>
                <p className="mt-2 text-sm text-slate-700">{item.excerpt}</p>
                <div className="mt-auto pt-3">
                  <Link
                    to={"/mandato/projetos-de-lei/" + item.id}
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
