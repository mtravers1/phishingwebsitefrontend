// // import ReviewCard from "./review";

// // const reviews = [
// //   {
// //     name: "Jessica Williams",
// //     photo: "/reviews/jessica.jpg",
// //     rating: 5,
// //     review:
// //       "The freshest seafood I've ever had! The fried catfish was crispy and flavorful, highly recommend.",
// //   },
// //   {
// //     name: "Michael Johnson",
// //     photo: "/reviews/michael.jpg",
// //     rating: 4,
// //     review:
// //       "Great atmosphere and excellent service. The shrimp basket was to die for!",
// //   },
// //   {
// //     name: "Tina Rodriguez",
// //     photo: "/reviews/tina.jpg",
// //     rating: 5,
// //     review:
// //       "Absolutely love the soul food combo meals. Authentic taste and perfect portions.",
// //   },
// // ];

// // export default function ReviewsSection() {
// //   return (
// //     <section className="py-12 bg-amber-50">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <h2 className="text-3xl font-extrabold text-amber-900 mb-8 text-center">
// //           What Our Customers Say
// //         </h2>
// //         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
// //           {reviews.map((r, i) => (
// //             <ReviewCard
// //               key={i}
// //               name={r.name}
// //               photo={r.photo}
// //               rating={r.rating}
// //               review={r.review}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // components/ReviewSection.jsx
// import { useState } from "react";
// import fish from "../../../public/fish1.jpeg"
// import Image from "next/image";
// import './review.css'
// export default function ReviewSection() {
//   const [reviews] = useState([
//     {
//               image: fish,

//       name: "Sarah Fisher",
//       rating: 5,
//       comment:
//         "Best fish food ever! My koi have never been healthier and the water stays clear.",
//     },
//     {
//               image: fish,

//       name: "James Waters",
//       rating: 4,
//       comment:
//         "Great quality and my goldfish love it. Slightly pricey but worth it.",
//     },
//     {
//       image: fish,
//       name: "Linda Shore",
//       rating: 5,
//       comment:
//         "The pellets are fresh and packed with nutrients. Highly recommend!",
//     },
//   ]);

//   return (
//     <section id="reviewsection">
//       <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
//         See what others are saying
//       </h2>
//       <div id="reviews" className="space-y-5">
//         {reviews.map((review, index) => (
//           <div
//             key={index}
//             className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
//           >
//             <div className="flex items-center justify-between">
//               <h3 className="font-semibold text-lg text-gray-800">
//                 {review.name}
//               </h3>
//               <Image
//               src={review.image}/>
//               <div className="text-yellow-500">
//                 {"★".repeat(review.rating)}
//                 {"☆".repeat(5 - review.rating)}
//               </div>
//             </div>
//             <p className="text-gray-600 mt-2">{review.comment}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// components/ReviewSection.jsx
"use client";
import { motion } from "framer-motion";
import customer1 from '../../../public/cust1.jpeg'
import customer2 from '../../../public/cust2.jpeg'
import customer3 from '../../../public/cust3.jpeg'
import Image from "next/image";

export default function ReviewSection() {
  const reviews = [
    {
      name: "Sarah Fisher",
      image:customer1,
      rating: 5,
      comment:
        "Best fish food ever! My koi have never been healthier and the water stays crystal clear.",
    },
    {
      name: "James Waters",
      image:customer2,
      rating: 4,
      comment:
        "Great quality and my goldfish love it. Slightly pricey but worth every penny.",
    },
    {
      name: "Linda Shore",
      image:customer3,
      rating: 5,
      comment:
        "Fresh pellets full of nutrients! My aquarium fish are more active than ever.",
    },
      {
      name: "Linda Shore",
      image: customer1,
      rating: 5,
      comment:
        "Fresh pellets full of nutrients! My aquarium fish are more active than ever.",
    },  {
      name: "Linda Shore",
      image:customer2,
      rating: 5,
      comment:
        "Fresh pellets full of nutrients! My aquarium fish are more active than ever.",
    },
  ];

  return (
    <section className="bg-blue-50 py-12 px-6 rounded-xl shadow-lg  mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-blue-800 mb-10"
      >
        Customer Reviews 🐟
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <Image
              src={review.image}
              alt={review.name}
              className="w-75 h-50 object-cover rounded border-4 border-blue-300 mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800 mb-1">
              {review.name}
            </h3>
            <div className="text-yellow-500 text-lg">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
            <p className="text-gray-600 mt-3">{review.comment}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
