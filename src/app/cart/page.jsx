"use client";

import { useCart } from "../../app/context/CartContext";
import Image from "next/image";
import Form from '../components/form'
import Link from "next/link";
export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    console.log(cart.length)
  return (
    <div style={{ padding: "20px" }}>
<h1 className="text-center text-4xl font-bold text-brown-600 bg-blue-200 px-4 py-2 rounded-lg shadow-lg">
  Complete form below
</h1>

      {cart.length === 0 ? (
        <Link href="/menu">No Food selected Go back and make a selection Click here to make selection</Link>
      ) : (
        <>
                      {/* { id:1,name: "Fish", desc: "Ideal for freshwater fish", price: "$8.99", photo:fish, category: "Seafood"}, */}

          {cart.map(item => (
  <div
    key={item.id}
    className="flex flex-col md:flex-row items-center gap-4 p-4 mb-4 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
  >
    {/* Product Image */}
    <Image
      src={item.photo}
      alt={item.name}
      width={200}
      height={200}
      className="rounded-lg object-cover"
    />

    {/* Product Info */}
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
      <p className="text-gray-500">Quantity: {item.quantity}</p>
      <p className="text-gray-600">Category: {item.category}</p>
    </div>

    {/* Price & Remove Button */}
    <div className="flex flex-col items-end">
      <span className="text-xl font-bold text-green-600">
        {/* ${(item.price * item.quantity).toFixed(2)} */}
      </span>
      <button
        onClick={() => removeFromCart(item.id)}
        className="mt-2 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
      >
        Remove
      </button>
    </div>
  </div>
))}

          <Form/>
        </>
      )}
    </div>
  );
}
