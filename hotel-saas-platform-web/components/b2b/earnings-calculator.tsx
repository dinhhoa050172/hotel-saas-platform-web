"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, BedDouble, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AreaData {
  name: string;
  avgPricePerRoom: number; // VND per night
  occupancyRate: number; // 0-1
}

const AREAS: Record<string, AreaData> = {
  "ho-chi-minh": {
    name: "TP. Hồ Chí Minh",
    avgPricePerRoom: 850000,
    occupancyRate: 0.78,
  },
  "ha-noi": { name: "Hà Nội", avgPricePerRoom: 750000, occupancyRate: 0.72 },
  "da-lat": { name: "Đà Lạt", avgPricePerRoom: 650000, occupancyRate: 0.82 },
  "da-nang": { name: "Đà Nẵng", avgPricePerRoom: 700000, occupancyRate: 0.75 },
  "nha-trang": {
    name: "Nha Trang",
    avgPricePerRoom: 680000,
    occupancyRate: 0.7,
  },
  "phu-quoc": {
    name: "Phú Quốc",
    avgPricePerRoom: 1200000,
    occupancyRate: 0.85,
  },
};

function formatCurrency(value: number): string {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1)} tỷ`;
  }
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(0)} triệu`;
  }
  return new Intl.NumberFormat("vi-VN").format(value);
}

export function EarningsCalculator() {
  const [rooms, setRooms] = useState(10);
  const [selectedArea, setSelectedArea] = useState("ho-chi-minh");

  const area = AREAS[selectedArea];

  const earnings = useMemo(() => {
    const monthlyRevenue =
      area.avgPricePerRoom * rooms * area.occupancyRate * 30;
    const yearlyRevenue = monthlyRevenue * 12;
    return { monthly: monthlyRevenue, yearly: yearlyRevenue };
  }, [rooms, area]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 py-24 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Dành cho Chủ nhà & Khách sạn
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Biến bất động sản
              <br />
              thành{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                nguồn thu nhập
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-lg">
              Quản lý phòng thông minh, tối ưu doanh thu với hệ thống SaaS được
              thiết kế dành riêng cho ngành khách sạn Việt Nam.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <Link href="/register">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 h-12 text-base font-medium gap-2">
                  Bắt đầu miễn phí
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="rounded-full px-8 h-12 text-base font-medium border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  Đăng nhập
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-white text-xl font-semibold mb-6">
                Tính toán thu nhập dự kiến
              </h3>

              {/* Room Slider */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm text-slate-400 flex items-center gap-2">
                    <BedDouble className="w-4 h-4" />
                    Số lượng phòng
                  </label>
                  <span className="text-2xl font-bold text-white">{rooms}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={100}
                  value={rooms}
                  onChange={(e) => setRooms(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer accent-emerald-500
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1 phòng</span>
                  <span>100 phòng</span>
                </div>
              </div>

              {/* Area Selector */}
              <div className="mb-8">
                <label className="text-sm text-slate-400 flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4" />
                  Khu vực
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(AREAS).map(([key, a]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedArea(key)}
                      className={`text-xs font-medium px-3 py-2.5 rounded-xl border transition-all ${
                        selectedArea === key
                          ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                          : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20"
                      }`}
                    >
                      {a.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-6">
                <p className="text-sm text-slate-400 mb-1">
                  Thu nhập dự kiến hàng tháng
                </p>
                <motion.p
                  key={`${rooms}-${selectedArea}`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
                >
                  {formatCurrency(earnings.monthly)} ₫
                </motion.p>
                <p className="text-sm text-slate-500 mt-2">
                  ~{formatCurrency(earnings.yearly)} ₫ / năm • Tỷ lệ lấp đầy{" "}
                  {Math.round(area.occupancyRate * 100)}%
                </p>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500/20 rounded-2xl blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500/20 rounded-2xl blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
