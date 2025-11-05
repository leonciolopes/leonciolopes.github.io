import React from "react";
import Container from "../ui/Container";
import {
  LOGO_SRC_BLACK,
  LOGO_TEXT,
  WHATSAPP_NUMBER,
} from "../../data/constants";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <div className="flex items-center gap-4">
            <img
              src={LOGO_SRC_BLACK}
              alt="Logomarca Leoncio Lopes"
              className="h-10 w-auto object-contain md:h-12"
            />
          </div>
          
          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} - Todos os direitos reservados.
          </div>
        </div>
      </Container>
    </footer>
  );
}
