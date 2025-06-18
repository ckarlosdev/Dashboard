import { ReactNode } from "react";

type variant = "primary" | "secondary" | "warning";
type buttonType = "button" | "submit";
type Props = {
  variant?: variant;
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: buttonType;
};

function Button({
  variant = "primary",
  children,
  onClick,
  type = "button",
}: Props) {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variant}  w-100`}>
      {children}
    </button>
  );
}

export default Button;
