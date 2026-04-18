"use client";

import { motion } from "framer-motion";
import { Shield, Star, MapPin } from "lucide-react";

const badges = [
  { icon: MapPin, text: "50+ tỉnh thành", delay: 0.6 },
  { icon: Shield, text: "2,000+ chỗ ở xác minh", delay: 0.75 },
  { icon: Star, text: "4.8 ★ đánh giá", delay: 0.9 },
];

export function HeroTrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-2">
      {badges.map((badge) => (
        <motion.div
          key={badge.text}
          className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-full px-4 py-2 shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: badge.delay }}
        >
          <badge.icon size={14} className="text-[#ff385c]" />
          <span className="text-xs font-medium text-[#222222]">
            {badge.text}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
