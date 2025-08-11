// "use client";

// import React from "react";
// import { useState } from "react";
// const Form=()=>{
//     const [first, setFirst]=useState('')
//     const [last, setLast]=useState('')
//     const [address, setAddress]=useState('')
//     const [cardNumber, setCardNumber]=useState('')
//     const [zip, setZip]=useState('')
//     const [choice, setChoice]=useState('')
//     // console.log(first)
//     return(

//         <div id="f" className="w-2/3 align-middle pt-2 pb-2">
//             <p>{first}</p>
//             <p>{last}</p>
//             <p>{address}</p>
//             <p>{zip}</p>
//             <p>{choice}</p>

//             <form id="" className="flex-col">
//             <div className="flex justify-evenly">
//             <label>First Name</label>
//             <input 
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//             value={first}
//             onChange={(e)=>setFirst(e.target.value)}/>
//             </div>
//             <div className="flex justify-evenly">
//             <label>Last Name</label>
//             <input
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//             value={last}
//             onChange={(e)=>setLast(e.target.value)}
//             />
//             </div>
//             <div className="flex justify-evenly">
//             <label>Address</label>
//             <input
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//             value={address}
//             onChange={(e)=>setAddress(e.target.value)}
//             />
//             </div>
//             <div className="flex justify-between">
//             <label>Card Number</label>
//             <button onClick={()=>alert("you just been phished")}><input
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//             value={cardNumber}
//             onChange={(e)=>setCardNumber(e.target.value)}
//             /></button>
            
//             </div>
//             <div className="flex justify-between">
//             <label>Zip</label>
//             <input
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//             value={zip}
//             onChange={(e)=>setZip(e.target.value)}
//             />
//             </div>
//              <div className="flex justify-between">
//             <label>Choice</label>
//             <input
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//             value={choice}
//             onChange={(e)=>setChoice(e.target.value)}
//             />
//             </div>
//             </form>
//         </div>
//     )
// }

// export default Form


// components/CreditCardForm.jsx
"use client";
import { useState } from "react";
// import { useRouter } from "next/navigation";
import Link from "next/link";
export default function CreditCardForm() {
//   const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e:any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

//   const handleChange=()=>{
   
//   }

  const handleSubmit=()=>{

  }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would normally do validation and send data to your backend/payment processor

//     // For now, just redirect to a thank you page
//     router.push("/phished");
//   };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto bg-blue-50 p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-6 text-blue-800 text-center">
        Payment Information
      </h2>
      <label className="block mb-4">
        <span className="block mb-1 font-medium text-gray-700">Address</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        //   required
          placeholder="John Doe"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </label>
      
      <label className="block mb-4">
        <span className="block mb-1 font-medium text-gray-700">Social Security</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        //   required
          placeholder="John Doe"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </label>
      <label className="block mb-4">
        <span className="block mb-1 font-medium text-gray-700">Zip</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        //   required
          placeholder="John Doe"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </label>
      <label className="block mb-4">
        <span className="block mb-1 font-medium text-gray-700">First Name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        //   required
          placeholder="John Doe"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </label>

      <label className="block mb-4">
        <span className="block mb-1 font-medium text-gray-700">LastName</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        //   required
          placeholder="John Doe"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </label>

      <label className="block mb-4">
        <span className="block mb-1 font-medium text-gray-700">Card Number</span>
        <input
          type="password"
          name="cardNumber"
          value={form.cardNumber}
          onChange={handleChange}
          maxLength={16}
          pattern="\d{16}"
          placeholder="1234 5678 9012 3456"
        //   required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </label>

      <div className="flex space-x-4 mb-6">
        <label className="flex-1">
          <span className="block mb-1 font-medium text-gray-700">Expiry Date</span>
          <input
            type="text"
            name="expiry"
            value={form.expiry}
            onChange={handleChange}
            pattern="(0[1-9]|1[0-2])\/?([0-9]{2})"
            placeholder="MM/YY"
            // required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </label>

        <label className="flex-1">
          <span className="block mb-1 font-medium text-gray-700">CVV</span>
          <input
            type="password"
            name="cvv"
            value={form.cvv}
            onChange={handleChange}
            maxLength={4}
            pattern="\d{3,4}"
            placeholder="123"
            // required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition">
        <Link href="phished">Submit Payment</Link>
      </button>
    </form>
  );
}


