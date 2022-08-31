import { getSelectedText } from "@raycast/api";
import { useState, useEffect } from "react";

export const useSearch = (initial?: string) => {
  const [query, setQuery] = useState(initial || "");

  useEffect(() => {
    getSelectedText().then((text) => {
      if (text.split(" ").length > 1) return;
      if (text.length > 100) return;

      setQuery(text.trim());
    });
  }, []);

  return {
    query,
    onQuery: setQuery,
  };
};
