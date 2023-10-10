import { FC, ReactNode } from "react";

interface FooterProps {
  children: ReactNode;
}

export const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full py-6 border-t border-color">
      <div className="container flex items-center justify-between">
        {children}
      </div>
    </div>
  );
};
