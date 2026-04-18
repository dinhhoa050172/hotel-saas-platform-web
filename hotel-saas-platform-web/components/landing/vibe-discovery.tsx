"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { VIBE_CATEGORIES } from "@/lib/mock-data-landing-page";

export function VibeDiscovery() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#ff385c] mb-3">
            Khám phá theo cảm hứng
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] tracking-tight">
            Bạn muốn một chuyến đi như thế nào?
          </h2>
          <p className="text-[#6a6a6a] mt-4 max-w-lg mx-auto text-base leading-relaxed">
            Không cần biết đi đâu. Chỉ cần chọn vibe — chúng tôi lo phần còn
            lại.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {VIBE_CATEGORIES.map((vibe, index) => (
            <motion.div
              key={vibe.id}
              className="break-inside-avoid group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="relative overflow-hidden rounded-[20px] shadow-[rgba(0,0,0,0.02)_0px_0px_0px_1px,rgba(0,0,0,0.04)_0px_2px_6px,rgba(0,0,0,0.1)_0px_4px_8px]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  // Alternating heights for Masonry effect
                  height: index % 3 === 0 ? 420 : index % 3 === 1 ? 340 : 380,
                }}
              >
                {/* Background Image */}
                <Image
                  src={vibe.image}
                  alt={vibe.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-3xl mb-2 block">{vibe.emoji}</span>
                  <h3 className="text-xl font-bold mb-1">{vibe.name}</h3>
                  <p className="text-white/80 text-sm mb-3">
                    {vibe.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {vibe.propertyCount} chỗ ở
                  </span>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#ff385c]/10 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
