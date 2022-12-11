import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcFillWhiteA7000c: "bg-white_A700_0c",
  srcFillBlack901: "bg-black_901",
  FillWhiteA7000c: "bg-white_A700_0c",
};
const shapes = {
  srcRoundedBorder8: "rounded-radius8",
  CustomBorderTL15:
    "rounded-bl-[15px] rounded-br-[2px] rounded-tl-[15px] rounded-tr-[15px]",
};
const sizes = {
  smSrc: "sm:p-[4px] md:p-[6px] p-[9px]",
  sm: "pb-[10px] sm:pb-[5px] md:pb-[6px] sm:pt-[18px] md:pt-[24px] pt-[35px] px-[10px] sm:px-[5px] md:px-[6px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["srcRoundedBorder8", "CustomBorderTL15"]),
  variant: PropTypes.oneOf([
    "srcFillWhiteA7000c",
    "srcFillBlack901",
    "FillWhiteA7000c",
  ]),
  size: PropTypes.oneOf(["smSrc", "sm"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "srcRoundedBorder8",
  variant: "srcFillWhiteA7000c",
  size: "smSrc",
};

export { Input };
