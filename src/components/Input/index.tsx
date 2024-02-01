import React from "react";

const shapes = {
  square: "rounded-[0px]",
} as const;
const variants = {
  fill: {
    gray_50_01: "bg-gray-50_01 text-black-900_3f",
    white_A700: "bg-white-A700 text-black-900_3f",
  },
  outline: {
    blue_gray_100: "border border-blue_gray-100 border-solid text-gray-500",
  },
} as const;
const sizes = {
  xs: "h-[45px] pl-[17px] pr-[35px] text-sm",
  xl: "h-[69px] pl-5 pr-[35px] text-lg",
  sm: "h-[49px] pl-4 pr-[35px] text-sm",
  md: "h-[55px] pl-[22px] pr-[35px] text-sm",
  lg: "h-[59px] pl-[18px] pr-[35px] text-sm",
} as const;

type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    type: string;
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "square",
      variant = "outline",
      size = "lg",
      color = "blue_gray_100",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center tracking-[-0.50px] ${shapes[shape] || ""} ${variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

export { Input };
