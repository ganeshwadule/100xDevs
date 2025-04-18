import { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  onClick: () => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const variantStyles = {
  "primary": "blue-100 text-200",
  "secondary": "blue-200 text-100",
};

const defaultStyles = "rounded-md mx-1 my-1";

const sizeStyles = {
    'md':"px-4 py-2 text-md",
    'sm':"px-2 py-1 text-sm",
    'lg':"px-6 py-3 text-lg"
}
const Button = (props: ButtonProps) => {
  return (
    <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} `} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
