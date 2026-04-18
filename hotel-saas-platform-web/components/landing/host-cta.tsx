"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Shield, TrendingUp } from "lucide-react";

export function HostCTA() {
  return (
    <section className="bg-gradient-to-br from-[#fff8f6] via-white to-[#fef0ec] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Image */}
          <motion.div
            className="flex-1 w-full max-w-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-[rgba(0,0,0,0.02)_0px_0px_0px_1px,rgba(0,0,0,0.04)_0px_2px_6px,rgba(0,0,0,0.1)_0px_4px_8px]">
              <Image
                src="/images/landing_3.jpg"
                alt="Trở thành chủ nhà"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-[#ff385c] mb-3">
              Đối tác Chủ nhà
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] tracking-tight leading-tight">
              Biến không gian của bạn thành nguồn thu nhập
            </h2>
            <p className="text-[#6a6a6a] mt-4 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              Tham gia cộng đồng hàng nghìn Chủ nhà trên khắp Việt Nam. Quản lý
              dễ dàng, thu nhập ổn định, hỗ trợ 24/7.
            </p>

            {/* Benefits */}
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-3 text-left">
                <div className="flex-shrink-0 w-10 h-10 bg-[#ff385c]/10 rounded-full flex items-center justify-center">
                  <Home className="text-[#ff385c]" size={18} />
                </div>
                <div>
                  <p className="text-[#222222] font-medium text-sm">
                    Đăng phòng miễn phí
                  </p>
                  <p className="text-[#6a6a6a] text-xs">
                    Không phí khởi tạo, không cam kết
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-left">
                <div className="flex-shrink-0 w-10 h-10 bg-[#ff385c]/10 rounded-full flex items-center justify-center">
                  <Shield className="text-[#ff385c]" size={18} />
                </div>
                <div>
                  <p className="text-[#222222] font-medium text-sm">
                    Bảo hiểm chủ nhà
                  </p>
                  <p className="text-[#6a6a6a] text-xs">
                    Bảo vệ tài sản lên tới 1 tỷ VNĐ
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-left">
                <div className="flex-shrink-0 w-10 h-10 bg-[#ff385c]/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-[#ff385c]" size={18} />
                </div>
                <div>
                  <p className="text-[#222222] font-medium text-sm">
                    Thu nhập ổn định
                  </p>
                  <p className="text-[#6a6a6a] text-xs">
                    Trung bình 15-25 triệu/tháng
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="mt-10 bg-[#ff385c] hover:bg-[#e00b41] text-white rounded-lg px-8 text-base font-medium"
            >
              Đăng ký làm Chủ nhà
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
