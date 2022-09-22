import clsx from "clsx";
import { createElement, HTMLAttributes, ReactNode } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Heading({
  children,
  type = "h2",
  className = "",
  ...props
}: HeadingProps) {
  return createElement(type, {
    children,
    className: clsx(
      "text-3xl text-black-900 font-extrabold font-cursive",
      className
    ),
    ...props,
  });
}
