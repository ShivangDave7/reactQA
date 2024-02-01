import React from "react";
import { Select } from "chakra-react-select";
import PropTypes from "prop-types";

const shapes = {
  square: {
    borderRadius: "0px",
  },
  round: {
    borderRadius: "10px",
  },
};
const variants = {
  fill: {
    white_A700: {
      bg: "white.A700",
      color: "gray.700_99",
    },
  },
};
const sizes = {
  md: {
    h: "66px",
    fontSize: "16px",
    px: "15px",
  },
  sm: {
    h: "60px",
    fontSize: "16px",
    px: "15px",
  },
  xs: {
    h: "24px",
    fontSize: "16px",
  },
};

const SelectBox = React.forwardRef(
  (
    {
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      style,
      shape = "round",
      size = "md",
      variant = "fill",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    return (
      <>
        <Select
          ref={ref}
          options={options}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          chakraStyles={{
            container: (provided) => ({
              ...provided,
              ...sizes[size],
              ...shapes[shape],
              ...variants[variant][color],
              ...style,
              zIndex: 0,
              display: "flex",
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              width: "100%",
              color: "inherit !important",
              "&:hover": {
                border: "0 !important",
              },
              "&>div": {
                padding: "0 !important",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected && "#ffffff !important",
              color: state.isSelected && "#1c1c1b !important",
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#1c1c1b",
              },
            }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
      </>
    );
  },
);

SelectBox.propTypes = {
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700"]),
};

export { SelectBox };
