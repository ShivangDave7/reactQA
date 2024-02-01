import React from "react";

const sizes = {
  xs: "font-medium text-[8px] text-xs",
  lg: "font-normal leading-[17px] text-sm",
  s: "font-medium text-[10px] text-sm",
  "2xl": "font-medium leading-[27px] text-lg",
  "3xl": "font-medium text-3xl text-xl",
  xl: "font-medium text-base text-xl",
  md: "font-normal leading-[15px] text-xs",
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
  size = "xl",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`font-inter text-blue_gray-400 ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
