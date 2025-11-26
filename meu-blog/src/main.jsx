import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";
import { loadGtag, pageview, GA_MEASUREMENT_ID } from "./utils/gtag";
import { BrowserRouter, useLocation } from "react-router-dom";

function AppWithAnalytics() {
  const location = useLocation();
  useEffect(() => {
    // Send pageview on route change
    pageview(location.pathname + location.search);
  }, [location]);
  return <App />;
}

const container = document.getElementById("root");
const root = createRoot(container);

// Load gtag only in production and when id is provided
if (process.env.NODE_ENV === "production" && GA_MEASUREMENT_ID) {
  loadGtag();
}

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <AppWithAnalytics />
    </BrowserRouter>
  </HelmetProvider>
);
