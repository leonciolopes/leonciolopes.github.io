// src/components/ui/FilterBar.jsx
import { Filter, Search } from "lucide-react";
import { categorias } from "../../data/constants";

export default function FilterBar({
  search,
  setSearch,
  category,
  setCategory,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-12">
      <div className="md:col-span-4">
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
          <Search className="h-4 w-4 text-slate-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por título ou texto..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="md:col-span-3">
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
          <Filter className="h-4 w-4 text-slate-500" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-transparent text-sm outline-none"
          >
            <option value="">Todas as categorias</option>
            {categorias.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="md:col-span-2">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
        />
      </div>
      <div className="md:col-span-2">
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
        />
      </div>
    </div>
  );
}
