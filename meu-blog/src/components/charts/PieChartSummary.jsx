import React, { useMemo } from "react";

export default function PieChartSummary({
  title = "Resumo",
  subtitle,
  items = [],
  size = 220,
}) {
  // evita divisão por zero
  const total = useMemo(
    () => items.reduce((acc, it) => acc + (Number(it.value) || 0), 0),
    [items]
  );

  const radius = 90;
  const stroke = 22;
  const center = size / 2;

  // circunferência
  const C = 2 * Math.PI * radius;

  // normaliza as fatias
  const normalized = useMemo(() => {
    if (!total) return items.map((it) => ({ ...it, pct: 0 }));
    return items.map((it) => ({
      ...it,
      pct: (Number(it.value) || 0) / total,
    }));
  }, [items, total]);

  // calcula offsets para "empilhar" as fatias
  let accPct = 0;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        {subtitle ? (
          <p className="text-sm text-slate-600">{subtitle}</p>
        ) : null}
      </div>

      <div className="flex flex-col items-center">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* anel base */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth={stroke}
          />

          {/* fatias */}
          {normalized.map((it, idx) => {
            const pct = it.pct || 0;
            const dash = pct * C;
            const gap = C - dash;
            const dasharray = `${dash} ${gap}`;
            const dashoffset = -accPct * C;
            accPct += pct;

            return (
              <circle
                key={idx}
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={it.color || "#2563eb"}
                strokeWidth={stroke}
                strokeLinecap="butt"
                strokeDasharray={dasharray}
                strokeDashoffset={dashoffset}
                transform={`rotate(-90 ${center} ${center})`}
              />
            );
          })}

          {/* texto no centro */}
          <text
            x={center}
            y={center - 6}
            textAnchor="middle"
            className="fill-slate-900"
            style={{ fontSize: 18, fontWeight: 800 }}
          >
            {total}
          </text>
          <text
            x={center}
            y={center + 16}
            textAnchor="middle"
            className="fill-slate-600"
            style={{ fontSize: 12, fontWeight: 600 }}
          >
            total
          </text>
        </svg>

        {/* legenda */}
        <div className="mt-4 w-full space-y-2">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: it.color || "#2563eb" }}
                />
                <span className="text-sm font-medium text-slate-800">
                  {it.label}
                </span>
              </div>
              <span className="text-sm font-bold text-slate-900">
                {Number(it.value) || 0}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
