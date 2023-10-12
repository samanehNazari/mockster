import clsx from "clsx";
import { FC, ReactElement } from "react";

export interface ButtonProps {
  children: ReactElement;
  onClick?: () => void;
  ariaLabel: string;
  className?: string;
}
export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  ariaLabel,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex justify-center items-center rounded-full  text-slate-500 dark:text-white  dark:hover:text-slate-100 hover:text-sky-400",
        className
      )}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
