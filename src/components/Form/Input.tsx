import clsx from "clsx";
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { FieldError } from "react-hook-form";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: FieldError;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, id, error, className, required, ...props },
  ref
) => {
  return (
    <div className={clsx(className, "flex flex-col gap-2")}>
      {label && (
        <label
          htmlFor={id}
          className="font-semibold text-base -tracking-[0.18px]"
        >
          {label}
        </label>
      )}

      <div className={clsx(className, "w-full relative")}>
        <input
          className={clsx(
            className,
            "form-input bg-white-500 border-white-400 rounded p-3 text-sm  placeholder:text-black-200 w-full",
            {
              "pr-16": !required,
            }
          )}
          id={id}
          ref={ref}
          {...props}
        />
        {!required && (
          <span className="absolute top-1/2 right-3 text-xs italic text-black-200 -translate-y-1/2 pointer-events-none">
            Opcional
          </span>
        )}
      </div>
      {!!error && <div className="text-base text-red-500">{error.message}</div>}
    </div>
  );
};

export const Input = forwardRef(InputBase);
