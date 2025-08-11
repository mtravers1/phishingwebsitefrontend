"use client";
import { useState } from "react";
import { products } from '../data/data';
import Image from "next/image";
export default function ProductFilter() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  // Filter products based on category & search
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        {/* Category Select */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All</option>
          <option value="Seafood">Seafood</option>
          <option value="Sides">Sides</option>
          <option value="Meat">Meat</option>
        </select>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search menu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded flex-1"
        />
      </div>
    
      {/* Product List */}
      
      {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-4 gap-10 flex-col justify-center align-middle">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col justify-center items-center ">
                        <Image
                          id="photo"
                           className="dark:invert align-middle"
                           src={product.photo}
                           alt="Vercel logomark"
                           width={200}
                          height={200}
                          // objectFit=''



































/>                <h3 className="text-xl font-bold text-blue-700">{product.name}</h3>
                            <p className="text-gray-600 my-2">{product.desc}</p>
                            <p className="text-blue-500 font-semibold">{product.price}</p>
                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                              Buy Now
                            </button>
                          </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
  );
}
