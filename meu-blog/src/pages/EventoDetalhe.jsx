import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar, Users, Package } from "lucide-react";
import ImageLightbox from "../components/ui/ImageLightbox";
import formatDateLocal from "../utils/formatDate.js";
import Container from "../components/ui/Container";
import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { eventosData } from "../data/eventosData.js";

export default function EventoDetalhe() {
  const { id } = useParams();
  const evento = eventosData.find((ev) => String(ev.id) === String(id));
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
                <div>Data: {formatDateLocal(evento.date)}</div>
                <div>Local: {evento.local}</div>
                <p className="pt-2">{evento.details || evento.summary}</p>
              </div>

              {/* Fotos do evento (se houver) */}
              {evento.photos && evento.photos.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-base font-semibold text-slate-900">
                    Fotos
                  </h3>
                  <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
                    {evento.photos.map((src, idx) => (
                      <div 
                        key={idx} 
                        className="group relative overflow-hidden rounded-lg bg-slate-50 cursor-pointer"
                        onClick={() => {
                          setSelectedImageIndex(idx);
                          setLightboxOpen(true);
                        }}
                      >
                        {src ? (
                          <>
                            <img
                              src={src}
                              alt={`${evento.title} foto ${idx + 1}`}
                              className="h-40 w-full object-cover transition-transform duration-200 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                          </>
                        ) : (
                          <div className="flex h-40 items-center justify-center text-sm text-slate-400">
                            Sem imagem
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Lightbox */}
                  {lightboxOpen && evento.photos && (
                    <ImageLightbox
                      images={evento.photos}
                      onClose={() => setLightboxOpen(false)}
                    />
                  )}
                </div>
              )}

              {/* Cronograma */}
              {evento.schedule && evento.schedule.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-base font-semibold text-slate-900">Cronograma</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {evento.schedule.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-20 text-sm font-medium text-slate-800">{item.time}</div>
                        <div className="flex-1">{item.activity}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Participantes */}
              {evento.participants && evento.participants.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-base font-semibold text-slate-900">Participantes</h3>
                  <ul className="mt-3 list-inside list-disc text-sm text-slate-700">
                    {evento.participants.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              )}

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
                            {formatDateLocal(session.date)}
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
