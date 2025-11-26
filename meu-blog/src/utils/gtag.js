// Minimal helper for Google Analytics 4 (gtag)
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// Load gtag script dynamically (only in browser and when measurement id exists)
export function loadGtag() {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === "undefined") return;
  if (window.gtag) return; // already loaded

  const script1 = document.createElement("script");
  script1.setAttribute("async", "");
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });`;
  document.head.appendChild(script2);
}

export function pageview(path) {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag('event', 'page_view', { page_path: path });
}
