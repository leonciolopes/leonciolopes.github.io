import { useMemo, useState } from "react";

export default function useFilteredPosts(data) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filtered = useMemo(() => {
    return data
      .filter((d) =>
        (d.title + " " + (d.excerpt || ""))
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .filter((d) => (category ? d.category === category : true))
      .filter((d) =>
        startDate ? new Date(d.publishDate) >= new Date(startDate) : true
      )
      .filter((d) =>
        endDate ? new Date(d.publishDate) <= new Date(endDate) : true
      )
      .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
  }, [data, search, category, startDate, endDate]);

  return {
    search,
    setSearch,
    category,
    setCategory,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    filtered,
  };
}
