"use client";

import Image from "next/image";
import fish from '../../public/friedfish.png'
import Nav from '../app/components/nav'
import Banner from "./components/banner";
import Form from "./components/form";
import fish1 from '../../public/fishfood1.png'
import fish2 from '../../public/fishfood2.jpg'
import logo from '../../public/fishlogo.jpg'
import {useState, useEffect} from 'react'
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
           <Nav/>
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
          <h2>Place Your Order</h2>
          <div>
            <form>
              <label>Name</label>
            </form>
          </div>
          <Form/>
            <button onClick={()=>{
                  // console.log(JSON.stringify(info)+'this is the api')
                }}>button</button>
        </section>

        {/* Products Section */}
        
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Products</h2>
          <div className="grid md:grid-cols-4 gap-10 flex-col justify-center align-middle">
            {[
              { name: "Tropical Flakes", desc: "Ideal for freshwater fish", price: "$8.99", photo:fish},
              { name: "Sinking Pellets", desc: "Perfect for bottom feeders", price: "$12.49", photo:fish1 },
              { name: "Color Boost Formula", desc: "Enhances fish colors naturally", price: "$10.99", photo:fish2 },
              { name: "Color Boost Formula", desc: "Enhances fish colors naturally", price: "$10.99", photo:fish2 },

            ].map((product, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col justify-center items-center">
 <Image
               className="dark:invert align-middle"
              src={product.photo}
               alt="Vercel logomark"
               width={200}
              height={200}
            />                <h3 className="text-xl font-bold text-blue-700">{product.name}</h3>
                <p className="text-gray-600 my-2">{product.desc}</p>
                <p className="text-blue-500 font-semibold">{product.price}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
         
          
          {/* <div>
            {
              info.map((item, index)=>(
                <div key={index}>
                  <h2>{item.name}</h2>
                  <h2>$ {item.price}</h2>
                </div>  
              ))
            }
          </div> */}
        </section>

        {/* Contact Footer */}
        <footer className="bg-blue-800 text-white py-8 text-center">
          <p className="mb-2">Contact us at <a href="mailto:support@oceanbite.com" className="underline">support@oceanbite.com</a></p>
          <p>&copy; {new Date().getFullYear()} OceanBite. All rights reserved.</p>
        </footer>
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
