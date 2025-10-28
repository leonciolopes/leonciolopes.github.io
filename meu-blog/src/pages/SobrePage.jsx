import React from "react";
import {
  User,
  HeartHandshake,
  Users,
  Shield,
  Lightbulb,
  Megaphone,
  Leaf,
} from "lucide-react";

import Container from "../components/ui/Container.jsx";
import Card from "../components/ui/Card.jsx";
import PageTitle from "../components/ui/PageTitle.jsx";

import fotoLeoncio from "../assets/img/foto-leoncio.png";

// Importa automaticamente todas as imagens da pasta galeria
// Coloque suas imagens em: src/assets/img/galeria
const galleryImports = import.meta.glob(
  "../assets/img/**/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

// Converte o objeto de imports para um array de URLs (e ordena pelo nome do arquivo)
const galleryImages = Object.entries(galleryImports)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url);

export default function SobrePage() {
  const valores = [
    {
      title: "Transparência",
      icon: HeartHandshake,
      desc: "Prestação de contas constante e comunicação clara com a população.",
    },
    { title: "Empatia", icon: Users, desc: "Olhar humano e escuta ativa." },
    {
      title: "Responsabilidade",
      icon: Shield,
      desc: "Compromisso com o bem público e uso responsável dos recursos.",
    },
    {
      title: "Inovação",
      icon: Lightbulb,
      desc: "Soluções criativas e eficientes para problemas urbanos.",
    },
    {
      title: "Diálogo",
      icon: Megaphone,
      desc: "Construção coletiva com conselhos, lideranças e moradores.",
    },
    {
      title: "Sustentabilidade",
      icon: Leaf,
      desc: "Atenção ao meio ambiente e à qualidade de vida.",
    },
  ];

  return (
    <div className="py-10">
      <Container>
        <PageTitle
          icon={User}
          title="Sobre mim"
          subtitle="Trajetória, princípios e valores"
        />

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow">
              <img
                src={fotoLeoncio}
                alt="Foto do vereador Leôncio Lopes"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <Card>
              <h3 className="text-lg font-semibold text-slate-900">
                Mini biografia
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Com trajetória marcada pelo empreendedorismo e dedicação,
                Leôncio Lopes construiu sua carreira em Sete Lagoas no setor da
                construção civil. Atuando como corretor de imóveis e perito
                avaliador, acumulou experiência no mercado local e desenvolveu
                iniciativas voltadas ao desenvolvimento urbano da cidade.
                <br />
                <br />
                Sua vivência no campo desde a juventude e o envolvimento com
                atividades comerciais moldaram uma visão prática e comprometida
                com o progresso. No Legislativo, trabalha com foco na
                valorização do trabalho, no incentivo ao empreendedorismo e no
                fortalecimento de políticas públicas que promovam qualidade de
                vida e desenvolvimento sustentável.
              </p>
            </Card>
          </div>
        </div>

        {/* Linha do tempo */}
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold text-slate-900">
            Linha do tempo
          </h3>
          <div className="relative ml-4 space-y-6 border-l-2 border-emerald-500 pl-6">
            {[
              "Início da vida como empresário",
              "Início do trabalho comunitário",
              "2024 - Eleito para o mandato atual",
            ].map((t, i) => (
              <div key={i} className="group">
                <div className="absolute -left-3 mt-2 h-5 w-5 rounded-full border-4 border-white bg-emerald-500 shadow" />
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-sm text-slate-700">{t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Princípios e valores */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {valores.map((p) => (
            <Card key={p.title}>
              <div className="flex items-center gap-2">
                <p.icon className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-semibold text-slate-900">
                  {p.title}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-700">{p.desc}</p>
            </Card>
          ))}
        </div>

        {/* Galeria de fotos */}
        {galleryImages.length > 0 && (
          <div className="mt-10">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Galeria
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {galleryImages.map((src, idx) => (
                <div
                  key={src + idx}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow"
                >
                  <img
                    src={src}
                    alt={`Foto ${idx + 1}`}
                    className="h-full w-full object-cover transition hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
