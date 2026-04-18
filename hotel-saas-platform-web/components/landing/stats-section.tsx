"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { STATS_DATA } from "@/lib/mock-data-landing-page";

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const isDecimal = target % 1 !== 0;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            current = Math.min(increment * step, target);
            setCount(
              isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current),
            );

            if (step >= steps) {
              clearInterval(timer);
              setCount(target);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="text-5xl lg:text-6xl font-extrabold text-[#222222] tabular-nums"
    >
      {count}
      <span className="text-[#ff385c]">{suffix}</span>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-white py-20 lg:py-28 border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
          {STATS_DATA.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-[#6a6a6a] text-base mt-3 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
