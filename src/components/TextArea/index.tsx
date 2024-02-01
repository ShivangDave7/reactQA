import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded",
} as const;
const variants = {
  tarOutlineIndigo50: "bg-white-A700 border border-indigo-50 border-solid",
} as const;
const sizes = {
  sm: "h-[166px] p-5 text-base",
  xs: "h-[115px] p-5 text-base",
} as const;

type TextAreaProps = Omit<
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      shape = "round",
      size = "xs",
      variant = "tarOutlineIndigo50",
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${shapes[shape] || ""} ${sizes[size] || ""} ${variants[variant] || ""}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  },
);

export { TextArea };
