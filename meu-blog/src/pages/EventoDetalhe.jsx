import React from "react";
import { useParams } from "react-router-dom";
import { Calendar, Users, Package } from "lucide-react";
import Container from "../components/ui/Container";
import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { eventosData } from "../data/eventosData.js";

export default function EventoDetalhe() {
  const { id } = useParams();
  const evento = eventosData.find((ev) => String(ev.id) === String(id));

  return (
    <div className="py-10">
      <Container>
        <PageTitle
          icon={Calendar}
          title="Detalhe - Evento Social"
          subtitle="Informações completas do evento"
        />
        <Card>
          {evento ? (
            <div>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="text-base font-semibold text-slate-900">
                  {evento.title}
                </div>
                <div>Data: {new Date(evento.date).toLocaleDateString()}</div>
                <div>Local: {evento.local}</div>
                <p className="pt-2">{evento.details || evento.summary}</p>
              </div>

              {evento.sessions && evento.sessions.length > 0 && (
                <div className="mt-6 space-y-4">
                  <h3 className="text-base font-semibold text-slate-900">
                    Edições anteriores ({evento.sessions.length})
                  </h3>
                  <div className="space-y-3">
                    {evento.sessions.map((session) => (
                      <div
                        key={session.id}
                        className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <Badge>
                            {new Date(session.date).toLocaleDateString()}
                          </Badge>
                          {session.partner && (
                            <span className="text-sm text-slate-600">
                              Parceria: {session.partner}
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-slate-700">
                          {session.local}
                        </div>
                        <div className="mt-3 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <Users className="h-5 w-5 text-blue-600" />
                            {session.attendeesText}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <Package className="h-5 w-5 text-emerald-600" />
                            {session.foodCollectedKg}kg de alimentos
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm text-slate-700">Evento não encontrado.</p>
          )}
        </Card>
      </Container>
    </div>
  );
}
