import React, { createElement } from "react";
import { twMerge } from "tailwind-merge";

export type TTypographyType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "claim"
  | "caption";

type TTypographyProps = {
  type?: TTypographyType;
  element?: TTypographyType | "p";
  color?: "white" | "gray";
  className?: string;
  children?: React.ReactNode;
};

export default function Typography({
  type = "body",
  color = "white",
  className,
  children,
  element,
}: TTypographyProps) {
  const colorClassNames = color === "white" ? "color-normal " : "text-white";

  const baseClassName = twMerge(colorClassNames, className);

  let classNameReturn;
  let elementReturn;
  switch (type) {
    case "claim":
    case "h1":
      classNameReturn = twMerge(
        baseClassName,
        type === "claim" ? "claim" : "text-6xl"
      );
      elementReturn = "h1";
      break;
    case "h2":
      classNameReturn = twMerge(baseClassName, "text-3xl");
      elementReturn = "h2";
      break;
    case "h3":
      classNameReturn = twMerge(baseClassName, "text-2xl");
      elementReturn = "h3";
      break;
    case "h4":
      classNameReturn = twMerge(baseClassName, "text-xl");
      elementReturn = "h4";
      break;
    case "h5":
      classNameReturn = twMerge(baseClassName, "text-lg");
      elementReturn = "h5";
      break;
    case "caption":
      classNameReturn = twMerge(baseClassName, "text-base");
      elementReturn = "p";
      break;
    default:
      classNameReturn = baseClassName;
      elementReturn = "p";
      break;
  }
  return createElement(
    element ? element : elementReturn,
    { className: classNameReturn },
    children
  );
}
