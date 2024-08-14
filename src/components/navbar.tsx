import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";

const LINKS = [
  {
    id: 1,
    name: "Produk",
    href: "/produk",
  },
  {
    id: 2,
    name: "Tentang Kami",
    href: "tentang-kami",
  },
  {
    id: 3,
    name: "Kontak",
    href: "/kontak",
  },
];

export default function Navbar() {
  return (
    <div className="p-3 flex justify-between items-center md:px-10">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="logo"
          className="w-14 h-14"
          width={100}
          height={100}
        />
        <h1 className="text-xl font-bold md:text-2xl">Bakso Mang Budi</h1>
      </div>

      <div className="md:flex gap-10 hidden">
        {LINKS.map((item) => (
          <Link key={item.id} href={item.href} className="text-base font-normal hover:font-medium transition-all duration-200">
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
            <Link key={item.id} href={item.href}>
              {item.name}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
}
