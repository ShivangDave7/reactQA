import { Text, Heading, Input, Button, Checkbox, Tabs } from "./components";
import { colors, shadow, fonts } from "./foundations";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors,
  shadow,
  fonts,
  components: { Text, Heading, Input, Button, Checkbox, Tabs },
});
export default theme;
