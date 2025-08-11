"use client";
import './page.css'
import Slider from './components/slider'
import Image from "next/image";
import fish from '../../public/friedfish.png'
import Banner from "./components/banner";
import Form from "./components/form";
// import fish1 from '../../public/fishfood1.png'
// import fish2 from '../../public/fishfood2.jpg'
// import greens from '../../public/greens.jpg'
// import wings from '../../public/wings.jpeg'
// import yams from '../../public/yams.jpeg'
// import macncheese from '../../public/macncheese.jpg'
// import ProductFilter from './components/productfilter';
import ReviewSection from './components/review';
// import ReviewsSection from './components/review';
// import logo from '../../public/fishlogo.jpg'
// import {useState, useEffect} from 'react'
export default function Home() {

// const [info, setInfo]=useState([])

// const url="http://localhost:5000/menu"
// useEffect(()=>{
//  fetch(url)
//  .then(res=>res.json())
//  .then(data=>setInfo(data))
//  .catch((err)=>console.error("API fetch error:", err))
// //  .then(data=>setInfo(data))
// }, [])
//   console.log(info)

  return (
 <>
        <title>OceanBite - Premium Fish Food</title>

      <main className="min-h-screen bg-blue-50 font-sans">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white text-center py-20 px-4">
             
          <Banner/>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">OceanBite</h1>
          <p className="text-xl md:text-2xl">Nourishing your fish with the best from the ocean</p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition">
           Shop Now
          </button>
        </section>
        <section className="flex justify-center flex-col pt-10 items-center">
          
          {/* <Form/> */}




        <section>
        </section>





        <section>
          <ReviewSection/>
        </section>

        
        </section>
        <section id="container1">
          <div>
            <Image width={500} src={fish} alt={""}/>

          </div>
          <div>
                Best fish in the nation. Cooked and seasoned perfectly for the most flavorful delicious fish you have ever tried.

          </div>
        </section>
        {/* <Slider/> */}

        {/* Products Section */}
        <Form/>

       
        <section>
          <h1>Take a look at our fan favorites</h1>
          <Slider/>
        </section>

        {/* Contact Footer */}
        
      </main>
    </>
  //   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  //     <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
  //       <Image
  //         className="dark:invert"
  //         src="/next.svg"
  //         alt="Next.js logo"
  //         width={180}
  //         height={38}
  //         priority
  //       />
  //       <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
  //         <li className="mb-2 tracking-[-.01em]">
  //           Get started by editing{" "}
  //           <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
  //             src/app/page.tsx
  //           </code>
  //           .
  //         </li>
  //         <li className="tracking-[-.01em]">
  //           Save and see your changes instantly.
  //         </li>
  //       </ol>

  //       <div className="flex gap-4 items-center flex-col sm:flex-row">
  //         <a
  //           className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
  //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <Image
  //             className="dark:invert"
  //             src="/vercel.svg"
  //             alt="Vercel logomark"
  //             width={20}
  //             height={20}
  //           />
  //           Deploy now
  //         </a>
  //         <a
  //           className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
  //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Read our docs
  //         </a>
  //       </div>
  //     </main>
  //     <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/file.svg"
  //           alt="File icon"
  //           width={16}
  //           height={16}
  //         />
  //         Learn
  //       </a>
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/window.svg"
  //           alt="Window icon"
  //           width={16}
  //           height={16}
  //         />
  //         Examples
  //       </a>
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/globe.svg"
  //           alt="Globe icon"
  //           width={16}
  //           height={16}
  //         />
  //         Go to nextjs.org →
  //       </a>
  //     </footer>
  //   </div>
   );
}
