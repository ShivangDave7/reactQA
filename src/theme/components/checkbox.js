import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ gap: "5px" });

const sizes = {
  xs: defineStyle({
    control: {
      boxSize: "24px",
    },
    label: {
      ml: "5px",
      pl: "10px",
      fontSize: "16px",
    },
    icon: {
      fontSize: "16px",
    },
  }),
};

const Checkbox = defineStyleConfig({
  baseStyle,

  sizes,
  defaultProps: {
    size: "xs",
  },
});
export default Checkbox;
