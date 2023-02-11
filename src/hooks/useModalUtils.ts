import { useCallback, useEffect, useState } from "react";

export interface ModalUtils {
  open: () => void;
  close: () => void;
  isVisible: boolean;
}

export const useModalUtils = (): ModalUtils => {
  const [isVisible, setIsVisible] = useState(false);

  const open = useCallback((): void => setIsVisible(true), []);

  const close = useCallback((): void => setIsVisible(false), []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [close]);

  return {
    isVisible,
    open,
    close
  };
};
