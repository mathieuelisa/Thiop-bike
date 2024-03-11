"use client";

import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

type TAlertBannerProps = {
  children: React.ReactNode;
  type?: "success" | "info" | "warning";
};
export default function AlertBanner({ children, type }: TAlertBannerProps) {
  const options = useMemo(() => {
    let classes = "";

    if (type) {
      switch (type) {
        case "success":
          classes += "bg-green-200 text-green-600";
          break;
        case "info":
          classes += "bg-amber-200 text-amber-600";
          break;
        case "warning":
          classes += "bg-red-200 text-red-600";
          break;
        default:
          break;
      }
    }

    return classes;
  }, [type]);

  return (
    <div className={twMerge("px-5 my-4 py-3 rounded-lg font-muli", options)}>
      {children}
    </div>
  );
}
