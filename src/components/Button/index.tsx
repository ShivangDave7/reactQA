import React from "react";

const shapes = {
  round: "rounded",
  square: "rounded-[0px]",
} as const;
const variants = {
  fill: {
    red_600_19: "bg-red-600_19 text-red-600",
    gray_100_02: "bg-gray-100_02",
    yellow_50: "bg-yellow-50",
    gray_100_03: "bg-gray-100_03",
    gray_50_02: "bg-gray-50_02",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
    deep_orange_300: "bg-deep_orange-300 text-white-A700",
    red_50_01: "bg-red-50_01 text-deep_orange-300",
    white_A700: "bg-white-A700 text-deep_orange-300",
    amber_300: "bg-amber-300 text-white-A700",
    deep_orange_50: "bg-deep_orange-50 text-deep_orange-300",
    indigo_400: "bg-indigo-400 text-white-A700",
    red_50_02: "bg-red-50_02",
    green_700_19: "bg-green-700_19 text-green-700",
    red_600: "bg-red-600 text-white-A700",
    green_700: "bg-green-700 text-white-A700",
    red_400_19: "bg-red-400_19 text-red-600",
    indigo_400_19: "bg-indigo-400_19 text-indigo-400",
    gray_100_04: "bg-gray-100_04 text-indigo-400",
    gray_50: "bg-gray-50 text-blue_gray-800",
  },
  outline: {
    blue_gray_900:
      "border border-blue_gray-900 border-solid text-blue_gray-900",
    indigo_50: "border border-indigo-50 border-solid text-blue_gray-800",
  },
} as const;
const sizes = {
  lg: "h-6 px-0.5",
  md: "h-6 px-2 text-[10px]",
  xl: "h-7 px-2",
  xs: "h-4 px-px",
  "9xl": "h-14 px-[18px]",
  "5xl": "h-[38px] pl-[17px] pr-4 text-sm",
  "6xl": "h-10 px-2.5",
  sm: "h-[22px] px-1 text-sm",
  "10xl": "h-14 pl-6 pr-[35px] text-sm",
  "2xl": "h-[30px] px-2 text-[10px]",
  "4xl": "h-8 px-[9px]",
  "7xl": "h-12 px-3.5",
  "11xl": "h-16 pl-6 pr-[25px] text-base",
  "3xl": "h-8 px-[11px] text-sm",
  "8xl": "h-12 px-[35px] text-sm",
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
  size = "8xl",
  color = "gray_50",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
