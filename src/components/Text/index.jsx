import React from "react";

const variantClasses = {
  h1: "font-medium sm:text-[48px] md:text-[48px] text-[65px]",
  h2: "font-medium sm:text-[36px] md:text-[38px] text-[40px]",
  h3: "font-medium sm:text-[24px] md:text-[26px] text-[28px]",
  h4: "font-medium sm:text-[20px] md:text-[22px] text-[24px]",
  h5: "font-medium sm:text-[18px] md:text-[20px] text-[22px]",
  h6: "text-[18px]",
  body1: "text-[16px]",
  body2: "text-[14px]",
  body3: "font-semibold text-[100px] sm:text-[48px] md:text-[48px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
