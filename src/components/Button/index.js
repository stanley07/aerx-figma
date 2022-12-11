import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder10: "rounded-radius10",
  RoundedBorder5: "rounded-radius5",
  CircleBorder16: "rounded-radius16",
  icbCircleBorder18: "rounded-radius18",
  icbRoundedBorder8: "rounded-radius8",
  icbCircleBorder24: "rounded-radius24",
  icbCircleBorder21: "rounded-radius21",
  icbCircleBorder12: "rounded-radius12",
};
const variants = {
  Outline_2: "bg-white_A700_26 text-white_A700",
  FillDeeppurple200: "bg-deep_purple_200 text-white_A700",
  Outline: "bg-black_900_4c text-white_A700",
  FillWhiteA7000c: "bg-white_A700_0c",
  Outline_1: "bg-white_A700_33 text-white_A700",
  FillIndigoA200: "bg-indigo_A200 text-white_A700",
  FillGray903: "bg-gray_903 text-white_A700",
  icbOutline_1: "bg-white_A700_33",
  icbOutline: "bg-white_A700_19",
  icbFillWhiteA7000c: "bg-white_A700_0c",
  icbFillIndigoA200: "bg-indigo_A200",
  icbOutlineWhiteA70026:
    "bg-white_A700_19 border border-solid border-white_A700_26",
  icbOutline_2: "bg-white_A700_0c",
};
const sizes = {
  sm: "sm:p-[3px] md:p-[4px] p-[6px]",
  md: "sm:p-[4px] md:p-[6px] p-[9px]",
  lg: "p-[13px] sm:p-[6px] md:p-[8px]",
  smIcn: "sm:p-[3px] md:p-[4px] p-[6px]",
  mdIcn: "sm:p-[4px] md:p-[6px] p-[9px]",
  lgIcn: "p-[12px] sm:p-[6px] md:p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "CircleBorder10",
    "RoundedBorder5",
    "CircleBorder16",
    "icbCircleBorder18",
    "icbRoundedBorder8",
    "icbCircleBorder24",
    "icbCircleBorder21",
    "icbCircleBorder12",
  ]),
  variant: PropTypes.oneOf([
    "Outline_2",
    "FillDeeppurple200",
    "Outline",
    "FillWhiteA7000c",
    "Outline_1",
    "FillIndigoA200",
    "FillGray903",
    "icbOutline_1",
    "icbOutline",
    "icbFillWhiteA7000c",
    "icbFillIndigoA200",
    "icbOutlineWhiteA70026",
    "icbOutline_2",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn", "lgIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "CircleBorder10",
  variant: "Outline_2",
  size: "sm",
};

export { Button };
