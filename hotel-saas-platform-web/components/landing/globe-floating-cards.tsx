"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin } from "lucide-react";

interface FloatingProperty {
  title: string;
  location: string;
  rating: number;
  price: string;
}

const FLOATING_PROPERTIES: FloatingProperty[] = [
  {
    title: "Sofitel Metropole",
    location: "Hà Nội",
    rating: 5.0,
    price: "7.5tr",
  },
  { title: "Sun Peninsula", location: "Đà Nẵng", rating: 4.97, price: "12tr" },
  {
    title: "Six Senses",
    location: "Ninh Vân Bay",
    rating: 4.95,
    price: "18tr",
  },
  { title: "The Reverie", location: "TP.HCM", rating: 4.93, price: "8.5tr" },
  {
    title: "Regent Resort",
    location: "Phú Quốc",
    rating: 4.98,
    price: "12.5tr",
  },
];

export function GlobeFloatingCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FLOATING_PROPERTIES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const property = FLOATING_PROPERTIES[currentIndex];

  return (
    <>
      {/* Card phía trên bên phải */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`top-${currentIndex}`}
          className="absolute top-4 right-0 lg:top-8 lg:-right-4 z-20"
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-white rounded-2xl shadow-[rgba(0,0,0,0.08)_0px_4px_16px] border border-gray-100 p-3.5 flex items-center gap-3 min-w-[200px]">
            <div className="w-10 h-10 bg-[#ff385c]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-[#ff385c]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#222222] leading-tight">
                {property.title}
              </p>
              <p className="text-xs text-[#6a6a6a]">{property.location}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Card phía dưới bên trái */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bottom-${currentIndex}`}
          className="absolute bottom-8 left-0 lg:bottom-12 lg:-left-4 z-20"
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <div className="bg-white rounded-2xl shadow-[rgba(0,0,0,0.08)_0px_4px_16px] border border-gray-100 p-3.5 flex items-center gap-3 min-w-[180px]">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <Star size={13} className="text-[#ff385c] fill-[#ff385c]" />
                <span className="text-sm font-bold text-[#222222]">
                  {property.rating}
                </span>
              </div>
              <p className="text-xs text-[#6a6a6a] mt-0.5">
                từ{" "}
                <span className="font-semibold text-[#222222]">
                  ₫{property.price}
                </span>
                /đêm
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
