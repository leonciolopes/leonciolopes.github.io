// src/components/layout/Header.jsx
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  Layers,
  Newspaper,
  ChevronDown,
  ExternalLink,
  Briefcase,
} from "lucide-react";
import {
  LOGO_SRC_WHITE,
  LOGO_TEXT,
  JORNALZINHO_URL,
  VAGAS_EMPREGO_URL,
} from "../../data/constants";
import Container from "../ui/Container";

export default function Header() {
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
        `rounded-xl px-3 py-2 text-base font-medium transition hover:bg-white/20 ${
          isActive ? "bg-white/20 text-white" : "text-white"
        }`
      }
    >
      {children}
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-45 w-full bg-gradient-to-r from-blue-800 to-blue-600 shadow relative">
      {/* Logo positioned at the top-left corner */}
        <Link
          to="/"
          className="absolute left-10 top-4 z-50 flex items-center gap-2"
          aria-label="Home"
        >
        <img
          src={LOGO_SRC_WHITE}
          alt="Logomarca Leoncio Lopes"
          className="h-11 md:h-12 w-auto object-contain"
        />
        <span className="sr-only">{LOGO_TEXT}</span>
      </Link>

      <Container>
          <div className="flex items-center justify-between py-5 md:py-5">
          {/* Spacer where logo used to be to keep layout balanced */}
          <div className="w-32 md:w-40" />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 md:flex">
            <NavLinkStyled to="/sobre">Sobre mim</NavLinkStyled>

            <div className="relative">
              <button
                onClick={() => setOpenMandato((o) => !o)}
                className="flex items-center gap-1 rounded-xl px-3 py-2 text-base font-medium text-white hover:bg-white/20"
              >
                <Layers className="h-4 w-4" /> Mandato
                <ChevronDown className="h-4 w-4" />
              </button>
              {openMandato && (
                <div
                  className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-slate-50 p-2 shadow-lg"
                  style={{ backgroundColor: "#f8fafc" }}
                >
                  <Link
                        className="block rounded-lg px-3 py-2 text-base text-slate-700 hover:bg-slate-100"
                        to="/mandato"
                      >
                      Visão geral
                    </Link>
                      <Link
                        className="block rounded-lg px-3 py-2 text-base text-slate-700 hover:bg-slate-100"
                        to="/mandato/pautas"
                      >
                      Pautas
                    </Link>
                      <Link
                        className="block rounded-lg px-3 py-2 text-base text-slate-700 hover:bg-slate-100"
                        to="/mandato/projetos-de-lei"
                      >
                      Projetos de Lei
                    </Link>
                      <Link
                        className="block rounded-lg px-3 py-2 text-base text-slate-700 hover:bg-slate-100"
                        to="/mandato/fiscalizacoes"
                      >
                      Fiscalizações
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
              className="ml-2 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-base font-semibold text-white shadow hover:bg-emerald-500"
            >
              <Newspaper className="h-4 w-4" /> Jornalzinho
              <ExternalLink className="h-4 w-4" />
            </a>
            
            <a
              href={VAGAS_EMPREGO_URL}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-base font-semibold text-white shadow hover:bg-emerald-500"
            >
              <Briefcase className="h-4 w-4" /> Vagas de Emprego
              <ExternalLink className="h-4 w-4" />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-xl p-2 text-white hover:bg-white/20 md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="fixed inset-x-0 top-[85px] z-50 rounded-b-xl bg-white p-4 shadow-lg md:hidden">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/sobre"
                className="rounded-xl px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                Sobre mim
              </Link>

              <div>
                <button
                  onClick={() => setOpenMandato((o) => !o)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100"
                >
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4" /> Mandato
                  </div>
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${openMandato ? 'rotate-180' : ''}`} />
                </button>
                {openMandato && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      to="/mandato"
                      className="block rounded-lg px-3 py-2 text-base text-slate-700 hover:bg-slate-100"
                      onClick={() => setOpen(false)}
                    >
                      Visão geral
                    </Link>
                    <Link
                      to="/mandato/pautas"
                      className="block rounded-lg px-3 py-2 text-base text-slate-700 hover:bg-slate-100"
                      onClick={() => setOpen(false)}
                    >
                      Pautas
                    </Link>
                    <Link
                      to="/mandato/projetos-de-lei"
                      className="block rounded-lg px-3 py-2 text-base text-slate-700 hover:bg-slate-100"
                      onClick={() => setOpen(false)}
                    >
                      Projetos de Lei
                    </Link>
                    <Link
                      to="/mandato/fiscalizacoes"
                      className="block rounded-lg px-3 py-2 text-base text-slate-700 hover:bg-slate-100"
                      onClick={() => setOpen(false)}
                    >
                      Fiscalizações
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/eventos"
                className="rounded-xl px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                Eventos Sociais
              </Link>
              
              <Link
                to="/contato"
                className="rounded-xl px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                Contato
              </Link>

              <a
                href={JORNALZINHO_URL}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-500"
                onClick={() => setOpen(false)}
              >
                <Newspaper className="h-4 w-4" /> Jornalzinho
                <ExternalLink className="h-4 w-4" />
              </a>
              
              <a
                href={VAGAS_EMPREGO_URL}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-500"
                onClick={() => setOpen(false)}
              >
                <Briefcase className="h-4 w-4" /> Vagas de Emprego
                <ExternalLink className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
