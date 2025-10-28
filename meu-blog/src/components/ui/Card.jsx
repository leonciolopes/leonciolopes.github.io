// src/components/ui/Card.jsx
export default function Card({ children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      {children}
    </div>
  );
}
