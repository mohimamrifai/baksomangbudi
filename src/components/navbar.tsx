import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";

const LINKS = [
  {
    id: 1,
    name: "Produk",
    href: "#produk",
  },
  {
    id: 2,
    name: "Tentang Kami",
    href: "#tentang-kami",
  },
  {
    id: 3,
    name: "Kontak",
    href: "#kontak",
  },
];

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.offsetTop! - 100,
      behavior: "smooth"
    });
  };

  return (
    <div className="p-3 flex justify-between items-center md:px-10 sticky top-0 z-50 bg-white">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.webp"
          alt="logo"
          className="w-14 h-14"
          width={100}
          height={100}
        />
        <h1 className="text-xl font-bold md:text-2xl">Bakso Mang Budi</h1>
      </div>

      <div className="md:flex gap-10 hidden">
        {LINKS.map((item) => (
          <Link 
            key={item.id} 
            href={item.href} 
            onClick={handleScroll}
            className="text-base font-normal hover:font-medium transition-all duration-200"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="w-8 h-8" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-3">
          {LINKS.map((item) => (
            <Link 
              key={item.id} 
              href={item.href}
              onClick={handleScroll}
            >
              {item.name}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
}
