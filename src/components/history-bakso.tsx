import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function HistoryBakso() {
  return (
    <div className="px-10 py-20 flex flex-col-reverse md:flex-row justify-center gap-10">
      <div className="w-full md:w-4/12 flex justify-end">
        <Image
          src="/aneka_bakso.jfif"
          alt="aneka bakso"
          width={1000}
          height={1000}
          className="w-80"
        />
      </div>
      <div className="md:w-6/12 md:p-10">
        <h3 className="text-4xl font-bold text-red-500 italic">
          Sejak 2018, Bakso Mang budi melayani dengan sepenuh hati!
        </h3>
        <p className="mt-3 text-xl md:text-lg md:w-10/12 text-gray-700">
          Bakso mang budi merupakan usaha rumahan yang berdiri sejak 2018,
          menyediakan berbagai jenis bakso daging sapi pilihan dan berbagai
          toping tambahan. cocok untuk acara rumahan untuk keluarga anda!
        </p>
        <Button variant="destructive" className="mt-10 text-lg">Beli Sekarang</Button>
      </div>
    </div>
  );
}
