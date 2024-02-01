import React from "react";

const sizes = {
  xs: "font-normal text-xs",
  lg: "font-normal text-lg",
  s: "font-normal text-sm",
  "2xl": "font-normal text-2xl",
  "3xl": "font-normal text-6xl text-[40px]",
  xl: "font-normal text-xl",
  md: "font-normal leading-[35px] text-base",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "lg",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`font-rubik text-black-900 ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
