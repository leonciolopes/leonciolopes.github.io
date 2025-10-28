import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import WhatsAppFloat from "./components/layout/WhatsAppFloat.jsx";

import AppRoutes from "./routes/AppRoutes.jsx";

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
