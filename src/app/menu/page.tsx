"use client"
import React from "react"
import Link from "next/link"
import ProductFilter from "../components/productfilter"
import { useCart } from "../context/CartContext"
export default function Menu(){
    const {cart}=useCart()
    return(
        <div>
            <h1>Fish Menu</h1>
            <ProductFilter/>
<button className="fixed right-0 bottom-0 m-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 z-50">
  <Link href="/cart">Submit<br/>Total Items Selected:{cart.length}</Link>
</button>

        </div>
    )
}