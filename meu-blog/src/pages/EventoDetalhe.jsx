import React from "react";
import { useParams } from "react-router-dom";
import { Calendar } from "lucide-react";
import Container from "../components/ui/Container";
import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";
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
            <div className="space-y-2 text-sm text-slate-700">
              <div className="text-base font-semibold text-slate-900">
                {evento.title}
              </div>
              <div>Data: {new Date(evento.date).toLocaleDateString()}</div>
              <div>Local: {evento.local}</div>
              <p className="pt-2">{evento.details || evento.summary}</p>
            </div>
          ) : (
            <p className="text-sm text-slate-700">Evento não encontrado.</p>
          )}
        </Card>
      </Container>
    </div>
  );
}
