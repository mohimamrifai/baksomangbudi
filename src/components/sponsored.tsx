import Image from "next/image";
import React from "react";

export default function Sponsored() {
  return (
    <div data-aos="fade-up" className="p-10">
      <p className="text-xl font-bold text-center mb-2">Sudah tersedia di</p>
      <div className="flex justify-center items-center gap-10">
        <div className="w-44">
          <Image
            src="/tokopedia.webp"
            alt="tokopedia"
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-28">
          <Image
            src="/tiktok.webp"
            alt="tokopedia"
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-40">
          <Image src="/shopee.webp" alt="tokopedia" width={1000} height={1000} />
        </div>
      </div>
    </div>
  );
}
