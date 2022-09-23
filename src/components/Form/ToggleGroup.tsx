import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import clsx from "clsx";
import { Icon as IconProps } from "phosphor-react";
import { Controller, FieldError } from "react-hook-form";

type ToggleGroupProps = ToggleGroupPrimitive.ToggleGroupSingleProps & {
  control: any;
  name: string;
  options: {
    label: string;
    value: string;
    icon?: IconProps;
  }[];
  error?: FieldError;
};

export function ToggleGroup({
  options,
  type,
  control,
  name,
  error,
  ...props
}: ToggleGroupProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
          <ToggleGroupPrimitive.Root
            type={type}
            value={value}
            onValueChange={onChange}
            {...props}
          >
            {options.map(({ label, value: iValue, icon: Icon }) => (
              <ToggleGroupPrimitive.Item
                className={clsx(
                  "flex items-center gap-3 p-4 rounded-md bg-white-400 border border-white-400 text-xs text-black-200 justify-center flex-1 hover:bg-white-300 transition-all",
                  {
                    "bg-purple-50 border-purple-500": value === iValue,
                  }
                )}
                type="button"
                title={label}
                value={iValue}
                key={label}
              >
                {Icon && <Icon className="text-purple-500" size={16} />}
                {label}
              </ToggleGroupPrimitive.Item>
            ))}
          </ToggleGroupPrimitive.Root>
          {!!error && (
            <div className="text-base text-red-500">{error.message}</div>
          )}
        </>
      )}
    />
  );
}
