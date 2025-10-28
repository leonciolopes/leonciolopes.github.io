// src/components/ui/PageTitle.jsx
export default function PageTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <div className="rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 p-3 text-white shadow-md">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        {subtitle && <p className="text-slate-600">{subtitle}</p>}
      </div>
    </div>
  );
}
