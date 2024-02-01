import React from "react";

const sizes = {
  "3xl": "font-bold text-4xl",
  "2xl": "font-bold leading-[38px] text-[32px]",
  xl: "font-bold text-2xl",
  "5xl": "font-bold text-5xl text-6xl",
  "4xl": "font-bold text-[40px]",
  s: "font-bold leading-[19px] text-base",
  md: "font-semibold text-lg",
  xs: "font-semibold text-sm",
  lg: "font-semibold text-2xl text-xl",
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
  size = "lg",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`font-raleway text-black-900 ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
