import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Gavel, Users, ClipboardCheck, AlertTriangle } from "lucide-react";
import Container from "../components/ui/Container";
import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import ImageLightbox from "../components/ui/ImageLightbox";
import { fiscalizacoesData } from "../data/fiscalizacoesData.js";
import formatDateLocal from "../utils/formatDate.js";

export default function FiscalizacaoDetalhe() {
  const { id } = useParams();
  const fiscalizacao = fiscalizacoesData.find((f) => String(f.id) === String(id));
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="py-10">
      <Container>
        <PageTitle
          icon={Gavel}
          title="Detalhes da Fiscalização"
          subtitle="Informações completas da ação"
        />
        <Card>
          {fiscalizacao ? (
            <div className="space-y-6">
              {/* Cabeçalho */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {fiscalizacao.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Badge>{fiscalizacao.category}</Badge>
                    <Badge
                      className={
                        fiscalizacao.status === "Concluída"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }
                    >
                      {fiscalizacao.status}
                    </Badge>
                  </div>
                </div>
                <div className="text-sm text-slate-600">
                  Local: {fiscalizacao.local}
                </div>
                <div className="text-sm text-slate-600">
                  Data: {formatDateLocal(fiscalizacao.date)}
                </div>
              </div>

              {/* Descrição */}
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900">Descrição</h4>
                <p className="whitespace-pre-wrap text-sm text-slate-700">
                  {fiscalizacao.details}
                </p>
              </div>

              {/* Fotos */}
              {fiscalizacao.photos && fiscalizacao.photos.length > 0 && (
                <div>
                  <h4 className="mb-3 font-semibold text-slate-900">
                    Registro Fotográfico
                  </h4>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                    {fiscalizacao.photos.map((src, idx) => (
                      <div
                        key={idx}
                        className="group relative cursor-pointer overflow-hidden rounded-lg bg-slate-50"
                        onClick={() => {
                          setSelectedImageIndex(idx);
                          setLightboxOpen(true);
                        }}
                      >
                        <img
                          src={src}
                          alt={`Foto ${idx + 1} da fiscalização`}
                          className="h-40 w-full object-cover transition-transform duration-200 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Constatações */}
              {fiscalizacao.findings && (
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-semibold text-slate-900">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    Constatações
                  </h4>
                  <ul className="list-inside list-disc space-y-1 text-sm text-slate-700">
                    {fiscalizacao.findings.map((finding, idx) => (
                      <li key={idx}>{finding}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Recomendações */}
              {fiscalizacao.recommendations && (
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-semibold text-slate-900">
                    <ClipboardCheck className="h-5 w-5 text-emerald-500" />
                    Recomendações
                  </h4>
                  <ul className="list-inside list-disc space-y-1 text-sm text-slate-700">
                    {fiscalizacao.recommendations.map((rec, idx) => (
                      <li key={idx}>{rec}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Participantes */}
              {fiscalizacao.participants && (
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-semibold text-slate-900">
                    <Users className="h-5 w-5 text-blue-500" />
                    Participantes
                  </h4>
                  <ul className="list-inside list-disc space-y-1 text-sm text-slate-700">
                    {fiscalizacao.participants.map((participant, idx) => (
                      <li key={idx}>{participant}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm text-slate-700">Fiscalização não encontrada.</p>
          )}
        </Card>

        {/* Lightbox para as fotos */}
        {lightboxOpen && fiscalizacao?.photos && (
          <ImageLightbox
            images={fiscalizacao.photos}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </Container>
    </div>
  );
}