import React from "react";
import { MessageCircle as WhatsappIcon } from "lucide-react";
import { WHATSAPP_NUMBER } from "../../data/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={"https://wa.me/" + WHATSAPP_NUMBER}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition hover:bg-emerald-500"
      aria-label="Entre em contato com nosso gabinete"
      title="Entre em contato com nosso gabinete"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}
