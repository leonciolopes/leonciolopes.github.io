import React from "react";
import { Link } from "react-router-dom";
import { Gavel, ExternalLink } from "lucide-react";
import Container from "../components/ui/Container";
import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import FilterBar from "../components/ui/FilterBar";
import PagedList from "../components/ui/PagedList";
import { fiscalizacoesData } from "../data/fiscalizacoesData.js";
import useFilteredPosts from "../hooks/useFilteredPosts";

export default function FiscalizacoesPage() {
  const f = useFilteredPosts(fiscalizacoesData);

  return (
    <div className="py-10">
      <Container>
        <PageTitle
          icon={Gavel}
          title="Fiscalizações"
          subtitle="Acompanhe as ações de fiscalização"
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
                  <div className="flex items-center gap-2">
                    <Badge>{item.category}</Badge>
                    <Badge
                      className={
                        item.status === "Concluída"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }
                    >
                      {item.status}
                    </Badge>
                  </div>
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  Local: {item.local}
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  Data: {new Date(item.date).toLocaleDateString()}
                </div>
                <p className="mt-2 text-sm text-slate-700">{item.summary}</p>
                <div className="mt-auto pt-3">
                  <Link
                    to={`/mandato/fiscalizacoes/${item.id}`}
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