// // import React from 'react'

// // const Slider= ()=>{
// //     return(
// //         <div>
            
// //         </div>
// //     )
// // }
"use client";
// import './slider.css'
// import { useState, useEffect } from "react";
// import Image from "next/image";
import fish1 from '../../../public/fish1.jpeg'
import fish2 from '../../../public/fishfood2.jpg'
import greens from '../../../public/greens.jpg'
import wings from '../../../public/wings.jpeg'
// import yams from '../../../public/yams.jpeg'
import macncheese from '../../../public/macncheese.jpg'


// export default function Slider() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Calculate visible images (3 at once)
//   const visibleImages = [
//     images[(currentIndex - 1 + images.length) % images.length],
//     images[currentIndex],
//     images[(currentIndex + 1) % images.length],
//   ];

//   return (
//     <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
//      <div id="slider">

//             <h1>Our Partners & Sponsors</h1>
//             <div id="slider-container">
//                 <div className="slider"  >
//                 <div className="list">
//                     {/* <div class="item" style="--position: 1"><img src="images/logos/ai.jpg" alt=""></div>
//                     <div class="item" style="--position: 2"><img src="images/logos/dixion.png" alt=""></div>
//                     <div class="item" style="--position: 3"><img src="images/logos/fultonbank.jpeg" alt=""></div>
//                     <div class="item" style="--position: 4"><img src="images/logos/simms.png" alt=""></div> */}
//                     {/* <div className="item" style={{ "--position": 2 }}><Image src={fish1} alt=""/></div>
//                     <div className="item" style={{ "--position": 3 }}><Image src={fish1} alt=""/></div>
//                     <div className="item" style={{ "--position": 4 }}><Image src={fish1} alt=""/></div> */}
//                 </div>
//             </div>
//         </div>

//             </div>
//     </div>
//   );
// }


import Image from "next/image";
import yams from '../../../public/yams.jpeg'
import friedchicken from '../../../public/friedchicken.jpg'
import mashedpotatoes from '../../../public/mashedpotatoes.jpg'
import oxtail from '../../../public/oxtail.jpg'
import pie from '../../../public/pie.jpg'
import ribs from '../../../public/ribs.jpg'
import cornbread from '../../../public/cornbread.png'
import blackeyepeas from '../../../public/blackeyepeas.jpg'


const images = [
  yams,
  friedchicken,
  mashedpotatoes,
  oxtail,
  ribs,
  cornbread,
  blackeyepeas,
  fish1,
    fish2,
 greens,
 wings,
  macncheese,
  pie
];
export default function InfiniteCarousel() {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full max-w-5xl mx-auto p-24">
      <div
        className="flex animate-scroll"
        style={{ width: `${duplicatedImages.length * 200}px` }}
      >
        {duplicatedImages.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-48 h-32 relative mr-4">
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              sizes="(max-width: 640px) 100vw, 300px"
              priority={i < images.length} // prioritize first set
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
