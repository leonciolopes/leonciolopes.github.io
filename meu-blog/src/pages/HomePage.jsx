import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  User,
  Layers,
  Calendar,
  Phone,
  Newspaper,
  ExternalLink,
} from "lucide-react";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import { JORNALZINHO_URL, LOGO_TEXT } from "../data/constants";

export default function HomePage() {
  const blocks = [
    {
      title: "Sobre mim",
      icon: User,
      to: "/sobre",
      text: "Conheça a trajetória, princípios e valores que orientam o meu trabalho.",
    },
    {
      title: "Mandato",
      icon: Layers,
      to: "/mandato",
      text: "Acompanhe as ações e prioridades do mandato do vereador Leôncio Lopes, com foco em resultados para a população.",
    },
    {
      title: "Eventos Sociais",
      icon: Calendar,
      to: "/eventos",
      text: "Veja os eventos sociais realizados e como participar das próximas ações.",
    },
    {
      title: "Contato",
      icon: Phone,
      to: "/contato",
      text: "Canais oficiais: endereço, telefone, WhatsApp e Instagram.",
    },
  ];

  return (
    <div className="py-10">
      <Helmet>
        <title>Vereador Leôncio Lopes | Mandato em Sete Lagoas - MG</title>
        <meta name="description" content="Acompanhe o trabalho do Vereador Leôncio Lopes em Sete Lagoas: pautas, projetos de lei, fiscalizações, eventos sociais e realizações do mandato. Transparência e compromisso com a população." />
      </Helmet>
      <Container>
        <div className="mb-10 rounded-3xl bg-gradient-to-br from-blue-700 to-blue-500 p-8 text-white shadow-lg">
          <h1 className="text-3xl font-bold">Bem-vindo(a) ao Mandato do Vereador Leôncio Lopes</h1>
          <p className="mt-2 max-w-2xl text-white/90">
            Transparência, proximidade e serviço ao cidadão. Explore as páginas
            abaixo para saber mais sobre o mandato e as ações em andamento.
          </p>
          <div className="mt-4">
            <a
              href={JORNALZINHO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-500"
            >
              <Newspaper className="h-4 w-4" /> Acessar o Jornalzinho
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {blocks.map((b) => (
            <Card key={b.title}>
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-slate-100 p-3 text-blue-700">
                  <b.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{b.text}</p>
                  <Link
                    to={b.to}
                    className="mt-3 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
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
