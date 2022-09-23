import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

export function Divider({
  className,
  ...props
}: HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      aria-label="content separator"
      className={clsx(className, "border-white-400")}
      {...props}
    />
  );
}
