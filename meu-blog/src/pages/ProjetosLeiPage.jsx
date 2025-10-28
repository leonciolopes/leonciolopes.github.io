import React from "react";
import { Link } from "react-router-dom";
import { Layers, ExternalLink } from "lucide-react";

import Container from "../components/ui/Container.jsx";
import Card from "../components/ui/Card.jsx";
import Badge from "../components/ui/Badge.jsx";
import PageTitle from "../components/ui/PageTitle.jsx";
import FilterBar from "../components/ui/FilterBar.jsx";
import PagedList from "../components/ui/PagedList.jsx";

import useFilteredPosts from "../hooks/useFilteredPosts.js";
import projetosLeiData from "../data/projetosLeiData.js";

export default function ProjetosLeiPage() {
  const f = useFilteredPosts(projetosLeiData);

  return (
    <div className="py-10">
      <Container>
        <PageTitle
          icon={Layers}
          title="Projetos de Lei"
          subtitle="Lista completa"
        />

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
                  Publicado em {new Date(item.publishDate).toLocaleDateString()}
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
