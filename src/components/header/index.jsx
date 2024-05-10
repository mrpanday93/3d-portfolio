  'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md p-6">
        <p className="blue-gradient_text">MRP</p>
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <Link
          href="/about"
          className={`${pathname === "/about" ? "text-blue-500" : "text-black"}`}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`${pathname === "/projects" ? "text-blue-500" : "text-black"}`}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`${pathname === "/contact" ? "text-blue-500" : "text-black"}`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
