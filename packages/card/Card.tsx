"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
}
export function Card({ children, className, href }: CardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => href && router.push(href)}
      className={clsx("flex ", { "cursor-pointer": href }, className)}
    >
      {children}
    </div>
  );
}

function Body({ children, className }: CardProps) {
  return <div className={clsx("p-4", className)}>{children}</div>;
}

Card.Body = Body;
