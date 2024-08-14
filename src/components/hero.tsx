import Image from "next/image";
import React from "react";
import { Lilita_One } from "next/font/google";
import { Button } from "./ui/button";

const lilita_one = Lilita_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  return (
    <div className="h-[550px] flex justify-center items-center relative">
      <div className="absolute left-0 top-0 w-full h-full -z-20">
        <Image
          src="/banner.webp"
          alt="banner"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30 -z-10"></div>

      <div className="flex flex-col">
        <h2
          className={`${lilita_one.className} text-5xl px-5 text-white text-center`}
        >
          Bakso Mang budi, Bakso Daging Sapi Asli
        </h2>
        <Button variant="destructive" className="w-max mx-auto text-xl mt-10">Beli Sekarang</Button>
      </div>
    </div>
  );
}
