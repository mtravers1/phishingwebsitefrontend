"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import fish from "../../../public/friedfish.png"
import fish1 from "../../../public/fishfood1.png"
import fish2 from "../../../public/fishfood2.jpg"

const slides = [
  { src: fish, text: "Premium Fish Food" },
  { src: fish2, text: "Ocean Nutrition Delivered" },
  { src: fish, text: "Best Fish in the world"}
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={`Slide ${index}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
              {slide.text}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
