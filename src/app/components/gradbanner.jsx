"use client";

import Image from "next/image";
import Link from "next/link";
import gradfood from '../../../public/gradfood.jpg'
export default function GraduationBanner() {
  return (
    <div className="relative bg-black  w-full rounded-2xl overflow-hidden shadow-lg p-6 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeIn mb-32">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-black">
        {/* <Image
          src={gradfood} // Replace with your background image path
          alt="Graduation Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        /> */}
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          🎓 Graduation Special! 🐟
        </h2>
        <p className="text-white/90 mb-4 text-lg sm:text-xl">
          Exclusive for the graduating class of Summer 2025 at DCIA we are now serving free food as a celebration
        </p>
        <Link
          href="/menu"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Make a selection
        </Link>
      </div>

      {/* Fish Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <Image
          src={gradfood}
          alt="Graduation Fish"
          width={200}
          height={200}
          className="rounded-full shadow-xl"
        />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}

