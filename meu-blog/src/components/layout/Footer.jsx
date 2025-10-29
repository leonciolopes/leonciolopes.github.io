import React from "react";
import Container from "../ui/Container";
import {
  LOGO_SRC_BLACK,
  LOGO_TEXT,
  WHATSAPP_NUMBER,
} from "../../data/constants";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50 py-8 relative">
  {/* Logo positioned similarly to header (absolute relative to footer) */}
  <div className="absolute left-10 top-4 z-50 flex items-center gap-2">
        <img
          src={LOGO_SRC_BLACK}
          alt="Logomarca Leoncio Lopes"
          className="h-11 md:h-12 w-auto object-contain"
        />
        <div className="sr-only text-sm font-bold text-slate-900">{LOGO_TEXT}</div>
      </div>

      <Container>
        {/* Centered copyright text */}
        <div className="flex items-center justify-center">
          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} - Todos os direitos reservados.
          </div>
        </div>
      </Container>
    </footer>
  );
}
