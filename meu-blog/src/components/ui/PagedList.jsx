// src/components/ui/PagedList.jsx
import { useState } from "react";

export default function PagedList({ items, renderItem }) {
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 6;
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const pageItems = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pageItems.map(renderItem)}
      </div>
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
        >
          Anterior
        </button>
        <div className="text-sm text-slate-600">
          Página {page} de {totalPages}
        </div>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
