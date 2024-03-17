"use client";

import { useEffect } from "react";

const useClickOutside = (
  isOpen: boolean,
  toggleFunction: () => void,
  ref: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        ref.current &&
        !(ref.current as HTMLElement).contains(event.target as Node)
      ) {
        toggleFunction();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleFunction, ref]);
};

export default useClickOutside;
