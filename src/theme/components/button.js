import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ cursor: "pointer", borderRadius: "5px" });

const sizes = {
  "6xl": defineStyle({
    h: "60px",
    px: "22px",
  }),
  "2xl": defineStyle({
    h: "50px",
    px: "10px",
  }),
  xl: defineStyle({
    h: "46px",
    fontSize: "20px",
    px: "20px",
  }),
  sm: defineStyle({
    h: "40px",
    fontSize: "18px",
    px: "15px",
  }),
  "4xl": defineStyle({
    h: "54px",
    fontSize: "18px",
    px: "35px",
  }),
  "5xl": defineStyle({
    h: "59px",
    fontSize: "16px",
    px: "30px",
  }),
  xs: defineStyle({
    h: "36px",
    px: "9px",
  }),
  lg: defineStyle({
    h: "44px",
    px: "16px",
  }),
  md: defineStyle({
    h: "43px",
    fontSize: "16px",
    px: "30px",
  }),
  "3xl": defineStyle({
    h: "50px",
    fontSize: "16px",
    px: "35px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      black_900: {
        bg: "black.900",
        color: "white.A700",
      },
      white_A700: {
        bg: "white.A700",
        color: "gray.900",
      },
      red_50: {
        bg: "red.50",
      },
      gray_200: {
        bg: "gray.200",
        color: "gray.900",
      },
      orange_200: {
        bg: "orange.200",
        color: "white.A700",
      },
      deep_orange_400: {
        bg: "deep_orange.400",
      },
      red_300: {
        bg: "red.300",
        color: "white.A700",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["red_300"];
  }),
  outline: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      red_300: {
        borderColor: "red.300",
        borderWidth: "1px",
        borderStyle: "solid",
        color: "red.300",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["red_300"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "outline",
    size: "3xl",
  },
});
export default Button;
