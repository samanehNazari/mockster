import { ThemeSwitcher } from "@/packages/components/theme-switcher";
import Link from "next/link";
import { FC } from "react";
import { clsx } from "clsx";

interface NavListType {
  href?: string;
  text?: string;
}
interface NavBarProps {
  title: string;
  enableThemeSwitcher?: boolean;
  className?: string;
  isSticky?: boolean;
  isBlur?: boolean;
  navList?: NavListType[] | [];
}

export const NavBar: FC<NavBarProps> = ({
  title,
  enableThemeSwitcher = true,
  className,
  isSticky = true,
  isBlur = true,
  navList = [],
}) => {
  return (
    <header
      className={clsx(
        "top-0 z-40 w-full border-b bg-color border-color",
        { sticky: isSticky },
        { "backdrop-blur bg-white/75": isBlur },
        className
      )}
    >
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <h1 className="inline-block font-bold text-lg">
          <Link href="/">{title}</Link>
        </h1>

        <nav className="flex justify-between items-center">
          <ul className="flex gap-6 md:gap-10">
            {navList.length
              ? navList.map((item) => (
                  <li key={item.text}>
                    <Link href={item.href ? item.href : ""}>{item.text}</Link>
                  </li>
                ))
              : null}

            {enableThemeSwitcher && (
              <li className="flex items-center">
                <ThemeSwitcher />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
