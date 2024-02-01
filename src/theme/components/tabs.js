import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { tabsAnatomy as parts } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  tab: {
    fontWeight: "semibold", // change the font weight
  },
});

const variants = {
  custombackground: definePartsStyle({
    tab: {
      color: "gray.900",
      _selected: {
        color: "white.A700",
        bg: "orange.200",
        borderRadius: "10px",
      },
    },
  }),
};

const Tab = defineMultiStyleConfig({
  baseStyle,

  variants,
  defaultProps: { size: "", variant: "custombackground" },
});
export default Tab;
