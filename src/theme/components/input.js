import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({});

const sizes = {
  xs: defineStyle({
    field: {
      height: "50px",
    },
  }),
  lg: defineStyle({
    field: {
      fontSize: "16px",
      height: "66px",
      px: "20px",
    },
  }),
  sm: defineStyle({
    field: {
      fontSize: "16px",
      height: "50px",
      px: "18px",
    },
  }),
  md: defineStyle({
    field: {
      fontSize: "16px",
      height: "59px",
    },
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      white_A700_33: {
        field: {
          bg: "white.A700_33",
          color: "white.A700",
        },
      },
      white_A700: {
        field: {
          bg: "white.A700",
          color: "gray.700",
        },
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["white_A700_33"];
  }),
};

const Input = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "md",
  },
});
export default Input;
