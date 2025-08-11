// "use client";

// import React from "react";
// import {useState} from "react"
// import './nav.css'
// import logo from '../../../public/fishlogo.jpg'
// import Image from "next/image";
// import Link from "next/link";
// const Nav = ()=>{
//     const [toggle, setToggle]=useState(false)
//     const menu=()=>{
//         setToggle(!toggle)
//     }
//     return(
//         <div id="menu">
         

//             <div className="flex justify-around  py-[10px] bg-amber-400 items-center">
//                 <div>
//                     <Image width={200} height={200} alt='fishlogo' src={logo}/>
//                 </div>

//                   <a href="">Home</a>
                 
//                 <div>
//                      <button onClick={menu}>Menu</button>
                    
//                     {toggle&&(
//                         <div className="flex">
//                             {/* <a href="">Fish</a> */}
//                                   <Link href="/menu">Fish</Link>

//                         </div>
//                     )}

//                 </div>
//                    <a href="">Nutrition and Ingredients</a>
            
//                     <a href="">About Us</a>

                

//             </div>
//         </div>
//     )
// }

// export default Nav
"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import Image from "next/image";
import logo from '../../../public/fishlogo.jpg'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle]=useState(false)
const tog = ()=>{
        setToggle(!toggle)
    }

  return (
    <nav className="bg-amber-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-wider">🐟 Soul Bites</span>
            
          </Link> */}
          <div>
            <Image
            src={logo}
            alt=""
            width={100}
            height={100}
            // objectFit="cover"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
            {/* <div>
                        <button onClick={tog}><Link href="/menu">Menu</Link></button>
            {toggle && (
                <div id='resu' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', position:'fixed'}}>

                        <Link href="./menu"><b>Main</b></Link>
                        <a href="/itresume"><b>Side </b></a>
                        
                    </div>
                )}

            </div>
     */}
            {/* <Link href="/menu" className="hover:text-yellow-300 transition">Menu</Link> */}
            <Link href="/menu" className="hover:text-yellow-300 transition">Menu</Link>
            <Link href="/about" className="hover:text-yellow-300 transition">About Us</Link>
            <Link href="/contactus" className="hover:text-yellow-300 transition">Contact</Link>
            <Link href="/login" className="block hover:text-yellow-300">Login</Link>
            <Link href="/cart" className="block hover:text-yellow-300">Cart</Link>
          
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-amber-800">
          <div className="px-4 py-3 space-y-2 text-lg">
            <Link href="/" className="block hover:text-yellow-300">Home</Link>
            <Link href="/menu" className="block hover:text-yellow-300">Menu</Link>
            <Link href="/about" className="block hover:text-yellow-300">About Us</Link>
            <Link href="/contactus" className="block hover:text-yellow-300">Contact</Link>
            <Link href="/login" className="block hover:text-yellow-300">Login</Link>
            <Link href="/cart" className="block hover:text-yellow-300">Cart</Link>
          
            </div>
        </div>
      )}
    </nav>
  );
}
