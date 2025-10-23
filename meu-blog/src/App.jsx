import React, { useMemo, useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
  useParams,
} from "react-router-dom";
import {
  Menu,
  Newspaper,
  FileText,
  Layers,
  Calendar,
  Phone,
  MapPin,
  Instagram,
  PhoneCall,
  MessageCircle as WhatsappIcon,
  Filter,
  Search,
  ChevronDown,
  ExternalLink,
  Home as HomeIcon,
  User,
  HeartHandshake,
  Users,
  Shield,
  Leaf,
  Lightbulb,
  Megaphone,
  Mail,
} from "lucide-react";

import logoWhite from "./assets/img/logo-leoncio-white.png";
import logoBlack from "./assets/img/logo-leoncio-black.png";

// ==========================
// CONFIG & CONSTANTS
// ==========================
const LOGO_TEXT = "Mandato Cidadao"; // texto alternativo
// Image paths (put real files in /public/img)
const LOGO_SRC_WHITE = logoWhite;
const LOGO_SRC_BLACK = logoBlack;

// WhatsApp numbers (digits only with country and area code)
const WHATSAPP_NUMBER = "5531995874822"; // floating button and main contact
const JORNALZINHO_WHATSAPP_NUMBER = "5531999999990"; // TODO: replace with the real number for the newspaper button

// Links
const JORNALZINHO_URL = `https://wa.me/${JORNALZINHO_WHATSAPP_NUMBER}`;

// Address
const OFFICE_ADDRESS =
  "R. Domingos Louverturi, 335 - Sao Geraldo, Sete Lagoas - MG, 35700-177 | Gabinete 218";

// Categories and sample data
const categorias = [
  "Infraestrutura",
  "Saude",
  "Educacao",
  "Mobilidade",
  "Meio Ambiente",
  "Seguranca",
];

const pautasData = [
  {
    id: 1,
    title: "Revitalizacao da Praca do Bairro Canada",
    category: "Infraestrutura",
    publishDate: "2025-09-12",
    excerpt:
      "Proposta de revitalizacao com novo paisagismo, iluminacao eficiente e playground inclusivo.",
  },
  {
    id: 2,
    title: "Mutirao de Oftalmologia Gratuita",
    category: "Saude",
    publishDate: "2025-10-01",
    excerpt:
      "Organizacao de consultas oftalmologicas gratuitas e encaminhamentos.",
  },
  {
    id: 3,
    title: "Faixa elevada proxima a Escola Municipal",
    category: "Mobilidade",
    publishDate: "2025-08-20",
    excerpt: "Seguranca viaria para estudantes e pedestres da regiao.",
  },
];

const projetosLeiData = [
  {
    id: 101,
    title: "PL 021/2025 - Programa de Arborizacao Urbana",
    category: "Meio Ambiente",
    publishDate: "2025-07-15",
    excerpt:
      "Estabelece metas de plantio e manutencao de arvores nativas em vias publicas.",
  },
  {
    id: 102,
    title: "PL 033/2025 - Sinalizacao Acessivel",
    category: "Infraestrutura",
    publishDate: "2025-09-02",
    excerpt:
      "Adota padroes de sinalizacao tatil e visual em predios publicos municipais.",
  },
  {
    id: 103,
    title: "PL 040/2025 - Transparencia em Obras",
    category: "Seguranca",
    publishDate: "2025-10-10",
    excerpt: "Cria paineis publicos com cronograma e orcamento de obras.",
  },
];

const eventosData = [
  {
    id: "e1",
    title: "Consultas Oftalmologicas Gratuitas",
    date: "2025-10-11",
    local: "Praca Central",
    summary: "Atendimento gratuito a populacao com distribuicao de senhas.",
    details: "Evento com equipe de profissionais e apoio de parceiros locais.",
  },
  {
    id: "e2",
    title: "Seja Luz - Acao Social no Bairro Santa Luzia",
    date: "2025-09-28",
    local: "Quadra do Bairro",
    summary: "Doacoes, oficinas e recreacao para criancas e familias.",
    details:
      "Atividades recreativas, suporte basico e articulacao com servicos publicos.",
  },
];

// ==========================
// UI PRIMITIVES
// ==========================
function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
      {children}
    </span>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      {children}
    </div>
  );
}

function PageTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <div className="rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 p-3 text-white shadow-md">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        {subtitle && <p className="text-slate-600">{subtitle}</p>}
      </div>
    </div>
  );
}

function FilterBar({
  search,
  setSearch,
  category,
  setCategory,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-12">
      <div className="md:col-span-4">
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
          <Search className="h-4 w-4 text-slate-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por titulo ou texto..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>
      </div>
      <div className="md:col-span-3">
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
          <Filter className="h-4 w-4 text-slate-500" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-transparent text-sm outline-none"
          >
            <option value="">Todas as categorias</option>
            {categorias.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="md:col-span-2">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
          placeholder="Data inicial"
        />
      </div>
      <div className="md:col-span-2">
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
          placeholder="Data final"
        />
      </div>
    </div>
  );
}

function PagedList({ items, renderItem }) {
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 6;
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const pageItems = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pageItems.map(renderItem)}
      </div>
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
        >
          Anterior
        </button>
        <div className="text-sm text-slate-600">
          Pagina {page} de {totalPages}
        </div>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
        >
          Proxima
        </button>
      </div>
    </div>
  );
}

// ==========================
// LAYOUT: HEADER / FOOTER / WHATSAPP FLOAT
// ==========================
function Header() {
  const [open, setOpen] = useState(false);
  const [openMandato, setOpenMandato] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setOpenMandato(false);
  }, [location.pathname]);

  const NavLinkStyled = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-white/20 ${
          isActive ? "bg-white/20 text-white" : "text-white"
        }`
      }
    >
      {children}
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-gradient-to-r from-blue-800 to-blue-600 shadow">
      <Container>
        <div className="flex items-center justify-between py-3">
          <Link
            to="/"
            className="flex items-center gap-2"
            aria-label="Voltar para a Home"
          >
            <img
              src={LOGO_SRC_WHITE}
              alt="Logomarca Leoncio Lopes"
              className="h-10 w-auto object-contain"
            />
            <span className="sr-only">{LOGO_TEXT}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 md:flex">
            {/* Home removed - logo acts as home */}
            <NavLinkStyled to="/sobre">Sobre mim</NavLinkStyled>

            <div className="relative">
              <button
                onClick={() => setOpenMandato((o) => !o)}
                className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium text-white hover:bg-white/20"
              >
                <Layers className="h-4 w-4" /> Mandato{" "}
                <ChevronDown className="h-4 w-4" />
              </button>
              {openMandato && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                  <Link
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                    to="/mandato"
                  >
                    Visao geral
                  </Link>
                  <Link
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                    to="/mandato/pautas"
                  >
                    Pautas
                  </Link>
                  <Link
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                    to="/mandato/projetos-de-lei"
                  >
                    Projetos de Lei
                  </Link>
                </div>
              )}
            </div>

            <NavLinkStyled to="/eventos">Eventos Sociais</NavLinkStyled>
            <NavLinkStyled to="/contato">Contato</NavLinkStyled>

            <a
              href={JORNALZINHO_URL}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-500"
            >
              <Newspaper className="h-4 w-4" /> Jornalzinho{" "}
              <ExternalLink className="h-4 w-4" />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-xl p-2 text-white hover:bg-white/20 md:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="space-y-1 pb-3 md:hidden">
            <Link
              className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/10"
              to="/sobre"
            >
              Sobre mim
            </Link>
            <div className="rounded-lg bg-white/5 p-2">
              <div className="flex items-center gap-2 px-2 py-1 text-sm text-white/90">
                <Layers className="h-4 w-4" /> Mandato
              </div>
              <Link
                className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/10"
                to="/mandato"
              >
                Visao geral
              </Link>
              <Link
                className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/10"
                to="/mandato/pautas"
              >
                Pautas
              </Link>
              <Link
                className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/10"
                to="/mandato/projetos-de-lei"
              >
                Projetos de Lei
              </Link>
            </div>
            <Link
              className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/10"
              to="/eventos"
            >
              Eventos Sociais
            </Link>
            <Link
              className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/10"
              to="/contato"
            >
              Contato
            </Link>
            <a
              href={JORNALZINHO_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-500"
            >
              <Newspaper className="h-4 w-4" /> Jornalzinho
            </a>
          </div>
        )}
      </Container>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_SRC_BLACK}
              alt="Logomarca Leoncio Lopes"
              className="h-10 w-auto object-contain"
            />
            <div>
              <div className="text-sm font-bold text-slate-900 sr-only">
                {LOGO_TEXT}
              </div>
              <div className="text-xs text-slate-600">
                © {new Date().getFullYear()} - Todos os direitos reservados.
              </div>
            </div>
          </div>
          <div className="text-sm text-slate-600">
            Contato rapido:{" "}
            <a
              className="font-medium text-blue-700"
              href={"https://wa.me/" + WHATSAPP_NUMBER}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={"https://wa.me/" + WHATSAPP_NUMBER}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition hover:bg-emerald-500"
      aria-label="Abrir WhatsApp"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}

// ==========================
// PAGES
// ==========================
function HomePage() {
  const blocks = [
    {
      title: "Sobre mim",
      icon: User,
      to: "/sobre",
      text: "Conheca a trajetoria, principios e valores que orientam o meu trabalho.",
    },
    {
      title: "Mandato",
      icon: Layers,
      to: "/mandato",
      text: "Acompanhe as acoes e prioridades do mandato do vereador Leoncio Lopes, com foco em resultados para a populacao.",
    },
    {
      title: "Eventos Sociais",
      icon: Calendar,
      to: "/eventos",
      text: "Veja os eventos sociais realizados e como participar das proximas acoes.",
    },
    {
      title: "Contato",
      icon: Phone,
      to: "/contato",
      text: "Canais oficiais: endereco, telefone, WhatsApp e Instagram.",
    },
  ];

  return (
    <div className="py-10">
      <Container>
        <div className="mb-10 rounded-3xl bg-gradient-to-br from-blue-700 to-blue-500 p-8 text-white shadow-lg">
          <h1 className="text-3xl font-bold">Bem-vindo(a) ao {LOGO_TEXT}</h1>
          <p className="mt-2 max-w-2xl text-white/90">
            Transparencia, proximidade e servico ao cidadao. Explore as paginas
            abaixo para saber mais sobre o mandato e as acoes em andamento.
          </p>
          <div className="mt-4">
            <a
              href={JORNALZINHO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-500"
            >
              <Newspaper className="h-4 w-4" /> Acessar o Jornalzinho
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

function SobrePage() {
  const valores = [
    {
      title: "Transparencia",
      icon: HeartHandshake,
      desc: "Prestacao de contas constante e comunicacao clara com a populacao.",
    },
    {
      title: "Empatia",
      icon: Users,
      desc: "Olhar humano, ouvindo as necessidades reais de cada bairro.",
    },
    {
      title: "Responsabilidade",
      icon: Shield,
      desc: "Compromisso com o bem publico e uso responsavel dos recursos.",
    },
    {
      title: "Inovacao",
      icon: Lightbulb,
      desc: "Buscar solucoes criativas e eficientes para problemas urbanos.",
    },
    {
      title: "Dialogo",
      icon: Megaphone,
      desc: "Construcao coletiva com conselhos, liderancas e moradores.",
    },
    {
      title: "Sustentabilidade",
      icon: Leaf,
      desc: "Atencao ao meio ambiente e a qualidade de vida da cidade.",
    },
  ];

  return (
    <div className="py-10">
      <Container>
        <PageTitle
          icon={User}
          title="Sobre mim"
          subtitle="Trajetoria, principios e valores"
        />

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow">
              <img
                src="/img/foto-leoncio.jpg"
                alt="Foto do vereador Leoncio Lopes"
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
                Com trajetoria marcada pelo empreendedorismo e dedicacao ao
                trabalho, Leoncio Lopes estabeleceu-se em Sete Lagoas ainda
                jovem, onde construiu sua carreira no setor da construcao civil.
                Atuando como corretor de imoveis e perito avaliador, acumulou
                experiencia no mercado local e desenvolveu iniciativas voltadas
                ao desenvolvimento urbano da cidade.
                <br />
                <br />
                Sua vivencia no campo, desde a juventude, e o envolvimento
                precoce com atividades comerciais moldaram uma visao pratica e
                comprometida com o progresso. Em Sete Lagoas, fortaleceu
                vinculos com a comunidade e passou a atuar de forma mais direta
                nas questoes que impactam o cotidiano da populacao.
                <br />
                <br />
                No Legislativo, Leoncio Lopes trabalha com foco na valorizacao
                do trabalho, no incentivo ao empreendedorismo e no
                fortalecimento das politicas publicas que promovam qualidade de
                vida e desenvolvimento sustentavel. Seu mandato busca promover
                acoes que atendam as necessidades reais dos cidadaos, com
                responsabilidade e proximidade com a populacao.
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
              "Inicio da vida como empresario",
              "Inicio do trabalho comunitario",
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

        {/* Principios e valores */}
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
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold text-slate-900">Galeria</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow"
              >
                <img
                  src={`/img/galeria-${i}.jpg`}
                  alt={`Foto ${i}`}
                  className="h-full w-full object-cover transition hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

function MandatoPage() {
  return (
    <div className="py-10">
      <Container>
        <PageTitle
          icon={Layers}
          title="Mandato"
          subtitle="Pautas e Projetos de Lei em destaque"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-2">
                <Badge>Paginas</Badge>
                <span className="text-lg font-bold text-slate-900">Pautas</span>
              </div>
              <p className="mt-2 text-sm text-slate-700">
                Principais publicacoes sobre demandas, acoes e temas do dia a
                dia do mandato.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3">
                {pautasData.slice(0, 3).map((p) => (
                  <div key={p.id} className="rounded-xl bg-slate-50 p-3">
                    <div className="text-sm font-semibold text-slate-900">
                      {p.title}
                    </div>
                    <div className="text-xs text-slate-600">
                      {new Date(p.publishDate).toLocaleDateString()}
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      {p.excerpt}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  to="/mandato/pautas"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
                >
                  Saiba mais <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-2">
                <Badge>Paginas</Badge>
                <span className="text-lg font-bold text-slate-900">
                  Projetos de Lei
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-700">
                Acompanhe os projetos protocolados, em tramitacao e aprovados.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3">
                {projetosLeiData.slice(0, 3).map((pl) => (
                  <div key={pl.id} className="rounded-xl bg-slate-50 p-3">
                    <div className="text-sm font-semibold text-slate-900">
                      {pl.title}
                    </div>
                    <div className="text-xs text-slate-600">
                      {new Date(pl.publishDate).toLocaleDateString()}
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      {pl.excerpt}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  to="/mandato/projetos-de-lei"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
                >
                  Saiba mais <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}

function useFilteredPosts(data) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filtered = useMemo(() => {
    return data
      .filter((d) =>
        (d.title + " " + (d.excerpt || ""))
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .filter((d) => (category ? d.category === category : true))
      .filter((d) =>
        startDate ? new Date(d.publishDate) >= new Date(startDate) : true
      )
      .filter((d) =>
        endDate ? new Date(d.publishDate) <= new Date(endDate) : true
      )
      .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
  }, [data, search, category, startDate, endDate]);

  return {
    search,
    setSearch,
    category,
    setCategory,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    filtered,
  };
}

function PautasPage() {
  const f = useFilteredPosts(pautasData);
  return (
    <div className="py-10">
      <Container>
        <PageTitle
          icon={FileText}
          title="Pautas"
          subtitle="Todas as publicacoes"
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
                  <Badge>{item.category}</Badge>
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  Publicado em {new Date(item.publishDate).toLocaleDateString()}
                </div>
                <p className="mt-2 text-sm text-slate-700">{item.excerpt}</p>
                <div className="mt-auto pt-3">
                  <Link
                    to={"/mandato/pautas/" + item.id}
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

function ProjetosLeiPage() {
  const f = useFilteredPosts(projetosLeiData);
  return (
    <div className="py-10">
      <Container>
        <PageTitle
          icon={Layers}
          title="Projetos de Lei"
          subtitle="Lista completa"
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
                  <Badge>{item.category}</Badge>
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  Publicado em {new Date(item.publishDate).toLocaleDateString()}
                </div>
                <p className="mt-2 text-sm text-slate-700">{item.excerpt}</p>
                <div className="mt-auto pt-3">
                  <Link
                    to={"/mandato/projetos-de-lei/" + item.id}
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

function EventosPage() {
  return (
    <div className="py-10">
      <Container>
        <PageTitle
          icon={Calendar}
          title="Eventos Sociais"
          subtitle="Acompanhe as acoes"
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

function EventoDetalhe() {
  const { id } = useParams();
  const evento = eventosData.find((ev) => String(ev.id) === String(id));
  return (
    <div className="py-10">
      <Container>
        <PageTitle
          icon={Calendar}
          title="Detalhe - Evento Social"
          subtitle="Informacoes completas do evento"
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
            <p className="text-sm text-slate-700">Evento nao encontrado.</p>
          )}
        </Card>
      </Container>
    </div>
  );
}

function ContatoPage() {
  return (
    <div className="py-10">
      <Container>
        <PageTitle icon={Phone} title="Contato" subtitle="Fale com a equipe" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-slate-900">Endereco</h3>
            <p className="mt-1 text-sm text-slate-700">{OFFICE_ADDRESS}</p>
            <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Mapa do escritorio"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  OFFICE_ADDRESS
                )}&output=embed`}
                width="100%"
                height="260"
                loading="lazy"
              />
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-slate-900">Canais</h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-blue-700" />{" "}
                <a href="tel:+553137796376">(31) 3779-6376</a>
              </li>
              <li className="flex items-center gap-2">
                <WhatsappIcon className="h-4 w-4 text-emerald-600" />{" "}
                <a
                  className="text-emerald-700"
                  href={"https://wa.me/" + WHATSAPP_NUMBER}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-pink-600" />{" "}
                <a
                  href="https://instagram.com/leonciolopes7l"
                  target="_blank"
                  rel="noreferrer"
                >
                  @leonciolopes7l
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-700" /> {OFFICE_ADDRESS}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-700" />{" "}
                <a href="mailto:vereador.leonciolopes@camarasete.mg.gov.br">
                  vereador.leonciolopes@camarasete.mg.gov.br
                </a>
              </li>
            </ul>
          </Card>
        </div>
      </Container>
    </div>
  );
}

// ==========================
// ROUTES
// ==========================
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<SobrePage />} />

      {/* Mandato */}
      <Route path="/mandato" element={<MandatoPage />} />
      <Route path="/mandato/pautas" element={<PautasPage />} />
      <Route path="/mandato/projetos-de-lei" element={<ProjetosLeiPage />} />

      {/* Detalhes */}
      <Route
        path="/mandato/pautas/:id"
        element={<PlaceholderPost type="pauta" />}
      />
      <Route
        path="/mandato/projetos-de-lei/:id"
        element={<PlaceholderPost type="pl" />}
      />

      {/* Eventos e Contato */}
      <Route path="/eventos" element={<EventosPage />} />
      <Route path="/eventos/:id" element={<EventoDetalhe />} />
      <Route path="/contato" element={<ContatoPage />} />

      {/* Fallback basico */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

// Placeholder for post details (pautas / projetos)
function PlaceholderPost({ type }) {
  const icon = type === "pauta" ? FileText : Layers;
  const title = type === "pauta" ? "Pauta" : "Projeto de Lei";
  return (
    <div className="py-10">
      <Container>
        <PageTitle
          icon={icon}
          title={`Detalhe - ${title}`}
          subtitle="Substitua por conteudo real"
        />
        <Card>
          <p className="text-sm text-slate-700">
            Aqui voce pode renderizar o conteudo completo do post (texto, fotos,
            anexos PDF, links para oficios etc.).
          </p>
        </Card>
      </Container>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <BrowserRouter>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
        <WhatsAppFloat />
      </BrowserRouter>
    </div>
  );
}
