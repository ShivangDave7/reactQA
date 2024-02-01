const baseStyle = {
  color: "gray.700",
  fontFamily: "Inter",
};
const sizes = {
  xs: {
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "17px",
  },
  lg: {
    fontSize: "18px",
    fontWeight: 500,
  },
  s: {
    fontSize: "14px",
    fontWeight: 500,
  },
  "2xl": {
    fontSize: "30px",
    fontWeight: 500,
  },
  xl: {
    fontSize: "20px",
    fontWeight: 500,
  },
  md: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "20px",
  },
};
const defaultProps = {
  size: "md",
};

const Text = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Text;
