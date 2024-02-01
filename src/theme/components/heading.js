const baseStyle = {
  color: "gray.900",
  fontFamily: "Inter",
};
const sizes = {
  "3xl": {
    fontSize: "45px",
    fontWeight: 700,
    lineHeight: "55px",
  },
  "2xl": {
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: "55px",
  },
  xl: {
    fontSize: "30px",
    fontWeight: 600,
  },
  "4xl": {
    fontSize: "65px",
    fontWeight: 700,
  },
  s: {
    fontSize: "20px",
    fontWeight: 600,
  },
  md: {
    fontSize: "22px",
    fontWeight: 600,
  },
  xs: {
    fontSize: "18px",
    fontWeight: 600,
  },
  lg: {
    fontSize: "25px",
    fontWeight: 600,
  },
};
const defaultProps = {
  size: "xs",
};

const Heading = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Heading;
