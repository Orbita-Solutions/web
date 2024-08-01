import { useCallback, useEffect } from "react";

export const useEscape = (escCallback: () => void) => {
  const escape = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      escCallback();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escape, false);

    return () => {
      document.removeEventListener("keydown", escape, false);
    };
  }, [escape]);
};
