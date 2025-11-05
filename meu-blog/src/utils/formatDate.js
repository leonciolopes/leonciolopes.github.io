// Helper to format a date string (YYYY-MM-DD or ISO) as a local date
export default function formatDateLocal(dateInput) {
  if (!dateInput) return "";

  // If already a Date object
  if (dateInput instanceof Date) {
    return dateInput.toLocaleDateString();
  }

  const s = String(dateInput);

  // Handle simple YYYY-MM-DD (avoid timezone shift by constructing as local date)
  const parts = s.split("-");
  if (parts.length === 3 && parts[0].length === 4) {
    const [year, month, day] = parts;
    const d = new Date(Number(year), Number(month) - 1, Number(day));
    return d.toLocaleDateString();
  }

  // Fallback to Date parser
  const parsed = new Date(s);
  if (!isNaN(parsed)) return parsed.toLocaleDateString();

  // If cannot parse, return original string
  return s;
}
