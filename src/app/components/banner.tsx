"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import fish from "../../../public/friedfish.png"
// import fish1 from "../../../public/fishfood1.png"
import fish2 from "../../../public/fishfood2.jpg"
// import greens from '../../../public/greens.jpg'
// import yams from '../../../public/yams.jpeg'
import macncheese from '../../../public/macncheese.jpg'
// import friedchicken from '../../../public/friedchicken.jpg'
// import mashedpotatoes from '../../../public/mashedpotatoes.jpg'
import oxtail from '../../../public/oxtail.jpg'
import pie from '../../../public/pie.jpg'
import ribs from '../../../public/ribs.jpg'
// import wings from '../../../public/wings.jpeg'
import cornbread from '../../../public/cornbread.png'
import blackeyepeas from '../../../public/blackeyepeas.jpg'
const slides = [
  { src: fish, text: "Premium Fish Food" },
  { src: fish2, text: "Ocean Nutrition Delivered" },
  { src: fish, text: "Best Fish in the world"},
  { src: macncheese, text:"The cheesiest macncheese in the nation"},
    { src: cornbread, text:"Made with 100% real corn"},
      { src: blackeyepeas, text:"Aint no other like these"},
        { src: ribs, text:"Came straight from adam himself"},
          { src: pie, text:"Bursting with flavor"},
            { src: oxtail, text:"The real tail from a ox"}

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
