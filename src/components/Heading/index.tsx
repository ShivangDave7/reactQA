import React from "react";

const sizes = {
  "3xl": "font-bold leading-[34px] text-[28px]",
  "2xl": "font-bold text-2xl text-3xl",
  xl: "font-bold leading-[22px] text-lg",
  s: "font-bold leading-[15px] text-xs",
  md: "font-semibold leading-[17px] text-sm",
  xs: "font-semibold text-[10px] text-sm",
  lg: "font-bold text-base text-xl",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`font-inter text-blue_gray-800 ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
