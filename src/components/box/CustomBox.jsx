import { twMerge } from "tailwind-merge";

function CustomBox({ className = "", children, tooltip = "", ...props }) {
  const defaultVariant = "box-default";
  return (
    <div
      className={twMerge(defaultVariant, className)}
      title={`${tooltip}%`}
      {...props}
    >
      {children}
    </div>
  );
}

export default CustomBox;
