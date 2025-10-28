import React from "react";
import { Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { eventosData } from "../data/eventosData.js";

export default function EventosPage() {
  return (
    <div className="py-10">
      <Container>
        <PageTitle
          icon={Calendar}
          title="Eventos Sociais"
          subtitle="Acompanhe as ações e iniciativas"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {eventosData.map((e) => (
            <Card key={e.id}>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold text-slate-900">
                    {e.title}
                  </h4>
                  <Badge>{new Date(e.date).toLocaleDateString()}</Badge>
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  Local: {e.local}
                </div>
                <p className="mt-2 text-sm text-slate-700">{e.summary}</p>
                <div className="mt-auto pt-3">
                  <Link
                    to={`/eventos/${e.id}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-3 py-2 text-xs font-medium text-white hover:bg-blue-500"
                  >
                    Saiba mais <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
