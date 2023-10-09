import { ReactNode, FC } from "react";
import clsx from "clsx";

export interface CardProps {
  children: ReactNode;
  className?: string;
}
export function Card({ children, className }: CardProps) {
  return (
    <div className={clsx("border-b border-color", className)}>{children}</div>
  );
}

function Body({ children, className }: CardProps) {
  return <div className={clsx("p-3", className)}>{children}</div>;
}

Card.Body = Body;
