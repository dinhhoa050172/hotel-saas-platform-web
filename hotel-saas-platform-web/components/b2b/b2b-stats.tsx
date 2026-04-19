"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Banknote, Star, Users } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: Building2,
    value: 10000,
    suffix: "+",
    label: "Chủ nhà đã tham gia",
  },
  {
    icon: Banknote,
    value: 500,
    suffix: " tỷ ₫",
    label: "Doanh thu đã tạo ra",
  },
  {
    icon: Users,
    value: 2000000,
    suffix: "+",
    label: "Lượt khách được phục vụ",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    label: "Đánh giá trung bình",
  },
];

function formatStatValue(value: number): string {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(0)}M`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(0)}K`;
  }
  if (value % 1 !== 0) {
    return value.toFixed(1);
  }
  return value.toString();
}

function CountUpNumber({ target, suffix }: { target: number; suffix: string }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      if (step >= steps) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(increment * step);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {formatStatValue(current)}
      {suffix}
    </span>
  );
}

const partners = [
  "Booking.com",
  "Agoda",
  "Airbnb",
  "Traveloka",
  "Trip.com",
  "Expedia",
];

export function B2BStats() {
  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                <CountUpNumber target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center text-sm text-slate-500 uppercase tracking-widest mb-8">
            Đồng bộ với các nền tảng hàng đầu
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((name) => (
              <div
                key={name}
                className="text-slate-500 text-lg font-semibold opacity-40 hover:opacity-80 transition-opacity"
              >
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
