"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";
import { FEATURED_PROPERTIES } from "@/lib/mock-data-landing-page";

function formatPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN").format(price);
}

export function FeaturedProperties() {
  return (
    <section className="bg-[#fafafa] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] tracking-tight">
              Chỗ ở nổi bật
            </h2>
            <p className="text-[#6a6a6a] mt-2 text-base">
              Được yêu thích nhất bởi du khách Việt Nam
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          {FEATURED_PROPERTIES.map((property, index) => (
            <motion.div
              key={property.id}
              className="flex-none w-[300px] sm:w-[320px] snap-start cursor-pointer group"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="bg-white rounded-[20px] overflow-hidden shadow-[rgba(0,0,0,0.02)_0px_0px_0px_1px,rgba(0,0,0,0.04)_0px_2px_6px,rgba(0,0,0,0.1)_0px_4px_8px] hover:shadow-[rgba(0,0,0,0.08)_0px_4px_12px] transition-shadow duration-300">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="320px"
                  />

                  {/* Wishlist Button */}
                  <button
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                    aria-label="Thêm vào yêu thích"
                  >
                    <Heart className="text-[#222222]" size={18} />
                  </button>

                  {/* Badge */}
                  {property.badge && (
                    <span className="absolute top-3 left-3 bg-white text-[#222222] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                      {property.badge}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[#222222] font-semibold text-base leading-tight line-clamp-1">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <Star
                        className="text-[#222222] fill-[#222222]"
                        size={13}
                      />
                      <span className="text-sm font-medium text-[#222222]">
                        {property.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#6a6a6a] text-sm mt-1">
                    {property.location}
                  </p>
                  <p className="text-sm text-[#6a6a6a] mt-0.5">
                    {property.reviewCount} đánh giá
                  </p>

                  <p className="mt-3 text-[#222222]">
                    <span className="font-semibold">
                      ₫{formatPrice(property.pricePerNight)}
                    </span>
                    <span className="text-[#6a6a6a] text-sm"> / đêm</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
