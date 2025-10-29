// src/components/layout/Header.jsx
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  Layers,
  Newspaper,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import {
  LOGO_SRC_WHITE,
  LOGO_TEXT,
  JORNALZINHO_URL,
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
          <Link to="/" className="flex items-center gap-2" aria-label="Home">
            <img
              src={LOGO_SRC_WHITE}
              alt="Logomarca Leoncio Lopes"
              className="h-20 w-auto object-contain"
            />
            <span className="sr-only">{LOGO_TEXT}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 md:flex">
            <NavLinkStyled to="/sobre">Sobre mim</NavLinkStyled>

            <div className="relative">
              <button
                onClick={() => setOpenMandato((o) => !o)}
                className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium text-white hover:bg-white/20"
              >
                <Layers className="h-4 w-4" /> Mandato
                <ChevronDown className="h-4 w-4" />
              </button>
              {openMandato && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                  <Link
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                    to="/mandato"
                  >
                    Visão geral
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
              <Newspaper className="h-4 w-4" /> Jornalzinho
              <ExternalLink className="h-4 w-4" />
            </a>
          </nav>

          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-xl p-2 text-white hover:bg-white/20 md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </Container>
    </header>
  );
}
