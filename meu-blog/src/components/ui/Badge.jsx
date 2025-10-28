// src/components/ui/Badge.jsx
export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
      {children}
    </span>
  );
}
