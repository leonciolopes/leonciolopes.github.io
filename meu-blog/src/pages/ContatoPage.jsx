import React from "react";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import PageTitle from "../components/ui/PageTitle";
import {
  Phone,
  PhoneCall,
  MapPin,
  Instagram,
  Mail,
  MessageCircle as WhatsappIcon,
} from "lucide-react";
import { OFFICE_ADDRESS, WHATSAPP_NUMBER, OFFICE_PLUS_CODE } from "../data/constants";

export default function ContatoPage() {
  return (
    <div className="py-10">
      <Container>
        <PageTitle icon={Phone} title="Contato" subtitle="Fale com a equipe" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-slate-900">Endereço</h3>
            <p className="mt-1 text-sm text-slate-700">{OFFICE_ADDRESS}</p>
            <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Mapa do escritório"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  OFFICE_PLUS_CODE
                )}&z=17&output=embed`}
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
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 text-blue-700 mt-1" />
                <span className="text-sm text-slate-700">{OFFICE_ADDRESS}</span>
              </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0 text-blue-700 mt-1" />
                  <a href="mailto:vereador.leonciolopes@camarasete.mg.gov.br" 
                     className="break-all hover:text-blue-600">
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
