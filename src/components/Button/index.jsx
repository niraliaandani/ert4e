import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillDeeporangeA700: "bg-deep_orange_A700 text-white_A700",
  OutlineDeeporangeA700:
    "bg-deep_orange_A700 border-[2px] border-deep_orange_A700 border-solid text-white_A700",
  OutlineDeeporangeA700_1:
    "border-[2px] border-deep_orange_A700 border-solid text-white_A700",
};
const sizes = { sm: "p-[5px]", md: "p-[14px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,

  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]) || ""
      }`}
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

  variant: PropTypes.oneOf([
    "FillDeeporangeA700",
    "OutlineDeeporangeA700",
    "OutlineDeeporangeA700_1",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};

Button.defaultProps = { className: "", variant: "", size: "" };
export { Button };
