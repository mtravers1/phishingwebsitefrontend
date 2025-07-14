"use client";

import React from "react";
import {useState} from "react"
import './nav.css'
import logo from '../../../public/fishlogo.jpg'
import Image from "next/image";
const Nav = ()=>{
    const [toggle, setToggle]=useState(false)
    const menu=()=>{
        setToggle(!toggle)
    }
    return(
        <div id="menu">
         

            <div className="flex justify-around  p-7 bg-amber-400 items-center">
                <div>
                    <Image width={200} height={200} alt='fishlogo' src={logo}/>
                </div>

                  <a href="">Home</a>
                 
                <div>
                     <button onClick={menu}>Menu</button>
                    
                    {toggle&&(
                        <div className="flex">
                            <a href="">Fish</a>
                        </div>
                    )}

                </div>
                   <a href="">Nutrition and Ingredients</a>
            
                    <a href="">About Us</a>

                

            </div>
        </div>
    )
}

export default Nav