"use client";

import { useState, useEffect } from "react";

const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isTablet;
};

export default useIsTablet;
