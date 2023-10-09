import { ThemeSwitcher } from "@/packages/theme-switcher";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-color border-color">
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <nav className="flex items-center justify-between flex-1">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center">
              <span className="inline-block font-bold text-lg">Mockster</span>
            </Link>
            <p className="text-sm flex items-center">
              Mock it till you rock it!
            </p>
          </div>
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
