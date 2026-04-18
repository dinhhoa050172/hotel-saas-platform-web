"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, CalendarDays, Users } from "lucide-react";

export function HeroSearchBar() {
  const [activeField, setActiveField] = useState<string | null>(null);

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto lg:mx-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="bg-white rounded-full shadow-[rgba(0,0,0,0.08)_0px_4px_12px,rgba(0,0,0,0.04)_0px_1px_3px] flex items-center p-1.5 border border-gray-200/60">
        {/* Địa điểm */}
        <button
          className={`flex-1 flex items-center gap-2.5 px-5 py-3 rounded-full transition-colors text-left ${
            activeField === "location" ? "bg-gray-100" : "hover:bg-gray-50"
          }`}
          onClick={() => setActiveField("location")}
        >
          <MapPin size={18} className="text-[#ff385c] flex-shrink-0" />
          <div>
            <p className="text-xs font-semibold text-[#222222]">Địa điểm</p>
            <p className="text-sm text-[#6a6a6a]">Tìm kiếm điểm đến</p>
          </div>
        </button>

        {/* Divider */}
        <div className="w-px h-8 bg-gray-200 hidden sm:block" />

        {/* Ngày */}
        <button
          className={`flex-1 items-center gap-2.5 px-5 py-3 rounded-full transition-colors text-left hidden sm:flex ${
            activeField === "date" ? "bg-gray-100" : "hover:bg-gray-50"
          }`}
          onClick={() => setActiveField("date")}
        >
          <CalendarDays size={18} className="text-[#ff385c] flex-shrink-0" />
          <div>
            <p className="text-xs font-semibold text-[#222222]">Nhận phòng</p>
            <p className="text-sm text-[#6a6a6a]">Thêm ngày</p>
          </div>
        </button>

        {/* Divider */}
        <div className="w-px h-8 bg-gray-200 hidden sm:block" />

        {/* Khách */}
        <button
          className={`flex-1 items-center gap-2.5 px-5 py-3 rounded-full transition-colors text-left hidden sm:flex ${
            activeField === "guests" ? "bg-gray-100" : "hover:bg-gray-50"
          }`}
          onClick={() => setActiveField("guests")}
        >
          <Users size={18} className="text-[#ff385c] flex-shrink-0" />
          <div>
            <p className="text-xs font-semibold text-[#222222]">Khách</p>
            <p className="text-sm text-[#6a6a6a]">Thêm khách</p>
          </div>
        </button>

        {/* Search Button */}
        <motion.button
          className="bg-[#ff385c] hover:bg-[#e00b41] text-white p-3 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Tìm kiếm"
        >
          <Search size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
}
