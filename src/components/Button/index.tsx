import React from "react";

const shapes = {
  round: "rounded-[17px]",
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
} as const;
const variants = {
  fill: {
    yellow_100: "bg-yellow-100 text-blue_gray-900_01",
    gray_100: "bg-gray-100 text-black-900",
    black_900: "bg-black-900 shadow-xs",
    blue_gray_100: "bg-blue_gray-100 text-white-A700",
    blue_gray_900_01: "bg-blue_gray-900_01 text-white-A700",
    gray_50_01: "bg-gray-50_01",
  },
  outline: {
    gray_50: "border-2 border-gray-50 border-solid text-gray-50",
    gray_500: "border border-gray-500 border-solid text-gray-500",
    blue_gray_100: "border border-blue_gray-100 border-solid text-gray-500",
    blue_gray_900_01:
      "border-2 border-blue_gray-900_01 border-solid text-blue_gray-900_01",
    black_900: "border border-black-900 border-solid text-black-900",
  },
} as const;
const sizes = {
  "4xl": "h-[46px] px-[30px] text-sm",
  lg: "h-[38px] px-5 text-base",
  "5xl": "h-[49px] px-[30px] text-sm",
  sm: "h-[35px] px-[7px]",
  "2xl": "h-[43px] px-3",
  "9xl": "h-[70px] px-[30px] text-lg",
  xs: "h-[31px] px-3 text-base",
  "8xl": "h-[60px] px-[35px] text-xl",
  "6xl": "h-[50px] px-[15px]",
  "7xl": "h-[51px] px-[35px] text-lg",
  xl: "h-10 px-2.5",
  "3xl": "h-[45px] px-[25px] text-lg",
  md: "h-[35px] px-[15px] text-sm",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  variant = "fill",
  size = "md",
  color = "blue_gray_900_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} cursor-pointer flex items-center justify-center text-center ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
