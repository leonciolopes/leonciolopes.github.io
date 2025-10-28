import React from "react";
import Container from "../ui/Container";
import {
  LOGO_SRC_BLACK,
  LOGO_TEXT,
  WHATSAPP_NUMBER,
} from "../../data/constants";

export default function Footer() {
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
            Contato rápido:{" "}
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
