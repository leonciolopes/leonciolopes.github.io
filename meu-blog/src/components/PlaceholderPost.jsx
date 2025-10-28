import React from "react";
import Container from "./ui/Container";
import Card from "./ui/Card";
import PageTitle from "./ui/PageTitle";
import { FileText, Layers } from "lucide-react";

export default function PlaceholderPost({ type }) {
  const icon = type === "pauta" ? FileText : Layers;
  const title = type === "pauta" ? "Pauta" : "Projeto de Lei";

  return (
    <div className="py-10">
      <Container>
        <PageTitle
          icon={icon}
          title={`Detalhe - ${title}`}
          subtitle="Substitua por conteúdo real"
        />
        <Card>
          <p className="text-sm text-slate-700">
            Aqui você pode renderizar o conteúdo completo do post (texto, fotos,
            anexos PDF, links para ofícios etc.).
          </p>
        </Card>
      </Container>
    </div>
  );
}
