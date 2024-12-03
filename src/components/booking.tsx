import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Lilita_One } from "next/font/google";

const lilita_one = Lilita_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Booking() {
  return (
    <div className="h-[550px] flex justify-center items-center relative">
      <div className="absolute left-0 top-0 w-full h-full -z-20">
        <Image
          src="/keluarga.webp"
          alt="keluarga"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30 -z-10"></div>

      <div data-aos="fade-up" className="flex flex-col">
        <h2 className={`${lilita_one.className} md:text-5xl text-4xl px-5 text-white text-center`}>
          Siap Meramaikan Acara Keluarga Anda!
        </h2>
        <p className="text-white mt-3 text-lg md:text-xl text-center md:px-36 px-5">Kami keluarga besar bakso mang budi siap datang dan meramaikan acara keluarga anda, dengan diskon dan keuntungan eksklusif untuk anda!!!</p>
        <Button variant="destructive" className="w-max mx-auto text-xl mt-10">
          Hubungi Kami
        </Button>
      </div>
    </div>
  );
}
