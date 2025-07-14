"use client";

import React from "react";
import { useState } from "react";
const Form=()=>{
    const [first, setFirst]=useState('')
    const [last, setLast]=useState('')
    const [address, setAddress]=useState('')
    const [cardNumber, setCardNumber]=useState('')
    const [zip, setZip]=useState('')
    const [choice, setChoice]=useState('')
    // console.log(first)
    return(

        <div className="w-1/3 align-middle pt-2 pb-2">
            <form className="flex-col">
            <div className="flex justify-between">
            <label>First Name</label>
            <input
            className="border-1" 
            value={first}
            onChange={(e)=>setFirst(e.target.value)}/>
            </div>
            <div className="flex justify-between">
            <label>Last Name</label>
            <input
            className="border-1" 
            value={last}
            onChange={(e)=>setLast(e.target.value)}
            />
            </div>
            <div className="flex justify-between">
            <label>Address</label>
            <input
            className="border-1" 
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            />
            </div>
            <div className="flex justify-between">
            <label>Card Number</label>
            <input
            className="border-1" 
            value={cardNumber}
            onChange={(e)=>setCardNumber(e.target.value)}
            />
            </div>
            <div className="flex justify-between">
            <label>Zip</label>
            <input
            className="border-1" 
            value={zip}
            onChange={(e)=>setZip(e.target.value)}
            />
            </div>
             <div className="flex justify-between">
            <label>Choice</label>
            <input
            className="border-1" 
            value={choice}
            onChange={(e)=>setChoice(e.target.value)}
            />
            </div>
            </form>
        </div>
    )
}

export default Form