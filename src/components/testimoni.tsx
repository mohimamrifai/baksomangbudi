import React from "react";
import { Card } from "./ui/card";
import { Star } from "lucide-react";

const testimonis = [
  {
    id: 1,
    text: "Baksonya enak banget! Dagingnya terasa segar dan bumbunya pas. Porsinya juga bikin puas.",
    name: "Adi Nugroho",
  },
  {
    id: 2,
    text: "Bakso Mang Budi ini benar-benar bikin nagih! Kuahnya gurih dan kaya akan rempah, cocok di lidah.",
    name: "Siti Lestari",
  },
  {
    id: 3,
    text: "Rasa baksonya juara! Tekstur dagingnya empuk dan kenyal, serta pelayanannya ramah.",
    name: "Budi Santoso",
  },
];

export default function Testimoni() {
  return (
    <div className="p-10">
      <p data-aos="fade-up" className="text-xl font-bold md:text-center md:text-2xl md:mb-3">Apa yang pelanggan kami katakan ?</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:px-20">
        {testimonis.map((item) => (
          <Card data-aos="fade-up" key={item.id} className="p-4">
            <div className="mb-2 flex gap-1">
              <Star className="w-5 h-5 text-yellow-500" />
              <Star className="w-5 h-5 text-yellow-500" />
              <Star className="w-5 h-5 text-yellow-500" />
              <Star className="w-5 h-5 text-yellow-500" />
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
            <p className="italic">{item.text}</p>
            <h4 className="mt-2 font-semibold">- {item.name}</h4>
          </Card>
        ))}
      </div>
    </div>
  );
}
