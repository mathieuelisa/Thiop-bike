"use client";

import Link from "next/link";
import { MouseEventHandler, useMemo } from "react";
import { twJoin, twMerge } from "tailwind-merge";

type TButtonProps = {
  children?: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  color?: "primary" | "secondary" | "success" | "error" | "transparent";
  onClick?: MouseEventHandler;
  size?: "lg" | "md" | "sm";
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  type,
  color,
  onClick,
  size,
  className,
  disabled,
}: TButtonProps) {
  const options = useMemo(() => {
    let classes = "";

    if (color) {
      switch (color) {
        case "primary":
          classes += "bg-red-600 hover:bg-red-700 text-colors-offWhite ";
          break;
        case "secondary":
          classes += "bg-gray-200 hover:bg-gray-300 text-colors-offWhite ";
          break;
        case "success":
          classes += "bg-green-600 hover:bg-green-700 text-colors-offWhite ";
          break;
        case "error":
          classes += "bg-red-600 hover:bg-red-700 text-black ";
          break;
        case "transparent":
          classes +=
            "bg-transparent text-colors-offWhite border hover:bg-colors-offWhite hover:text-colors-lightBlack ";
          break;
        default:
          break;
      }
    }

    if (disabled) {
      classes += "bg-slate-500 text-colors-lightBlack hover:bg-slate-500";
    }

    if (size) {
      switch (size) {
        case "lg":
          classes += "h-12 w-auto px-4 py-2 text-base";
          break;
        case "md":
          classes += "h-10 w-auto px-4 py-2 text-base";
          break;
        case "sm":
          classes += "h-8 w-auto px-2 py-3 text-sm";
          break;
        default:
          break;
      }
    }

    return classes;
  }, [color, size, disabled]);

  return href ? (
    <Link
      className={twJoin(
        "cursor-pointer font-muli flex justify-center items-center rounded-md transition duration-500 ease-in-out",
        options,
        className
      )}
      href={href}
    >
      {children}
    </Link>
  ) : (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={twMerge(
        "cursor-pointer font-muli flex justify-center items-center px-4 py-2 rounded-md transition duration-500 ease-in-out",
        options,
        className
      )}
    >
      {children}
    </button>
  );
}
