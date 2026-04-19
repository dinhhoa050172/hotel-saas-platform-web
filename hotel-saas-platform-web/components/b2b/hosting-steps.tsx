"use client";

import { motion } from "framer-motion";
import { UserPlus, Home, Wallet, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Đăng ký tài khoản",
    description:
      "Tạo tài khoản miễn phí trong 30 giây. Không cần thẻ tín dụng.",
    points: ["Xác minh email tức thì", "Hỗ trợ onboarding 1-1"],
  },
  {
    icon: Home,
    number: "02",
    title: "Đăng phòng lên hệ thống",
    description:
      "Thêm phòng, ảnh, giá cả và chính sách. AI tự động tối ưu listing.",
    points: ["Import từ Booking/Agoda", "Gợi ý giá thông minh"],
  },
  {
    icon: Wallet,
    number: "03",
    title: "Nhận tiền tự động",
    description:
      "Hệ thống tự quản lý booking, check-in/out và thanh toán cho bạn.",
    points: ["Thanh toán T+1", "Báo cáo thuế tự động"],
  },
];

export function HostingSteps() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
            Bắt đầu dễ dàng
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight">
            Vận hành khách sạn
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
              chỉ trong 5 phút
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-200" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all group"
            >
              {/* Step number badge */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 relative z-10">
                <step.icon className="w-6 h-6 text-white" />
              </div>

              <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">
                Bước {step.number}
              </span>

              <h3 className="text-xl font-bold text-[#0f172a] mt-2 mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                {step.description}
              </p>

              {/* Feature points */}
              <ul className="space-y-2">
                {step.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/register">
            <Button className="bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-full px-10 h-14 text-base font-medium gap-2 shadow-xl shadow-slate-900/20">
              Đăng ký ngay — Miễn phí
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <p className="text-sm text-slate-400 mt-4">
            Không cần thẻ tín dụng • Hỗ trợ 24/7
          </p>
        </motion.div>
      </div>
    </section>
  );
}
