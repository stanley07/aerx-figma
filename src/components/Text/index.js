import React from "react";
const variantClasses = {
  h1: "font-bold text-[20px]",
  h2: "font-bold text-[18px]",
  h3: "font-bold text-[16px]",
  h4: "text-[14px]",
  h5: "text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
