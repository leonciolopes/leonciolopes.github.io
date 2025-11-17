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
import ImageWithCaption from "../components/ui/ImageWithCaption";

import fotoLeoncio from "../assets/img/logos/foto-leoncio.png";

// Importa automaticamente apenas as imagens da pasta galeria
// Coloque suas imagens em: src/assets/img/galeria
const galleryImports = import.meta.glob(
  "../assets/img/galeria/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

// Array de imagens da galeria com legendas personalizadas
const galleryImages = [
  {
    src: galleryImports["../assets/img/galeria/galeria-1.png"],
    caption: "Encontro com o deputado federal Nikolas Ferreira"
  },
  {
    src: galleryImports["../assets/img/galeria/galeria-2.jpeg"],
    caption: "Ação social no Campo do Bariri em Sete Lagoas"
  },
  {
    src: galleryImports["../assets/img/galeria/galeria-3.jpeg"],
    caption: "Participação da sessão legislativa na reunião do Plenário"
  },
  {
    src: galleryImports["../assets/img/galeria/galeria-4.jpeg"],
    caption: "Discurso na Tribuna da Câmara Municipal de Sete Lagoas"
  }
];

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
              <ImageWithCaption
                src={fotoLeoncio}
                alt="Foto do vereador Leôncio Lopes"
                caption="Vereador Leôncio Lopes"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <Card>
              <h3 className="text-lg font-semibold text-slate-900">Mini biografia</h3>
              <p
                className="mt-2 text-sm leading-relaxed text-slate-700 text-justify"
                style={{ textAlign: "justify" }}
              >
                Com trajetória marcada pelo empreendedorismo, pela responsabilidade social e pela
                dedicação ao trabalho, <strong>Leôncio Lopes</strong> construiu sua carreira em
                <strong> Sete Lagoas</strong> no setor da construção civil. Atuando como corretor
                de imóveis e perito avaliador, acumulou sólida experiência no mercado local,
                participando ativamente de projetos que contribuíram para o crescimento urbano e o
                desenvolvimento econômico da cidade. Seu olhar atento às necessidades da
                população o motivou a buscar soluções práticas e sustentáveis para os desafios da
                gestão pública e do desenvolvimento social.
                <br />
                <br />
                Desde muito jovem, teve contato direto com o trabalho no campo e com a realidade
                das famílias trabalhadoras, o que despertou um profundo senso de empatia e
                compromisso com o bem-estar coletivo. Essa vivência, somada ao espírito
                empreendedor, moldou uma visão de liderança pautada em resultados e
                responsabilidade.
                <br />
                <br />
                No <strong>Legislativo Municipal</strong>, Leôncio atua com foco na valorização do
                trabalho, no incentivo ao empreendedorismo, na defesa da transparência e na
                promoção de políticas públicas que fortaleçam a qualidade de vida e o
                desenvolvimento sustentável. Seu mandato tem como pilares a proximidade com a
                população, a escuta ativa e o compromisso de representar com ética e respeito os
                interesses de Sete Lagoas.
              </p>
            </Card>
          </div>
        </div>

  {/* Linha do tempo (oculta temporariamente) */}
  <div className="mt-8 hidden">
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
              {galleryImages.map((g, idx) => (
                <ImageWithCaption
                  key={g.src + idx}
                  src={g.src}
                  alt={g.caption || `Foto ${idx + 1}`}
                  caption={g.caption}
                  className="transition-transform hover:scale-105"
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
