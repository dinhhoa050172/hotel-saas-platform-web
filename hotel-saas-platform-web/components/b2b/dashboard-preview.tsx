"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  CalendarSync,
  BarChart3,
  FileText,
  Bell,
  Users,
  BedDouble,
} from "lucide-react";

const revenueData = [
  { month: "T1", revenue: 45, bookings: 32 },
  { month: "T2", revenue: 52, bookings: 38 },
  { month: "T3", revenue: 48, bookings: 35 },
  { month: "T4", revenue: 61, bookings: 44 },
  { month: "T5", revenue: 55, bookings: 40 },
  { month: "T6", revenue: 72, bookings: 52 },
  { month: "T7", revenue: 85, bookings: 61 },
  { month: "T8", revenue: 78, bookings: 55 },
  { month: "T9", revenue: 90, bookings: 64 },
  { month: "T10", revenue: 88, bookings: 62 },
  { month: "T11", revenue: 95, bookings: 68 },
  { month: "T12", revenue: 102, bookings: 73 },
];

const occupancyData = [
  { day: "T2", rate: 85 },
  { day: "T3", rate: 72 },
  { day: "T4", rate: 90 },
  { day: "T5", rate: 78 },
  { day: "T6", rate: 95 },
  { day: "T7", rate: 98 },
  { day: "CN", rate: 88 },
];

const features = [
  {
    icon: CalendarSync,
    title: "Đồng bộ lịch tự động",
    desc: "Kết nối Booking, Agoda, Airbnb realtime",
  },
  {
    icon: BarChart3,
    title: "Phân tích doanh thu",
    desc: "Báo cáo trực quan theo ngày, tuần, tháng",
  },
  {
    icon: FileText,
    title: "Báo cáo thuế tự động",
    desc: "Xuất báo cáo thuế VAT, GTGT chuẩn BTC",
  },
  {
    icon: Bell,
    title: "Thông báo thông minh",
    desc: "Check-in/out, thanh toán, bảo trì tự động",
  },
];

export function DashboardPreview() {
  return (
    <section className="py-24 bg-slate-50">
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
            Bảng điều khiển
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight">
            Vận hành nhàn nhã
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
              mọi thứ trong tầm tay
            </span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Theo dõi doanh thu, quản lý booking và tối ưu hiệu suất phòng — tất
            cả từ một giao diện duy nhất.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-4 text-sm text-slate-400 font-mono">
                dashboard.hotelsaas.vn
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <Users className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 md:p-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                {
                  label: "Doanh thu tháng",
                  value: "256 triệu",
                  change: "+12%",
                  icon: BarChart3,
                },
                {
                  label: "Booking mới",
                  value: "64",
                  change: "+8",
                  icon: CalendarSync,
                },
                {
                  label: "Tỷ lệ lấp đầy",
                  value: "87%",
                  change: "+5%",
                  icon: BedDouble,
                },
                {
                  label: "Đánh giá TB",
                  value: "4.8",
                  change: "+0.2",
                  icon: Users,
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-4 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="w-5 h-5 text-slate-400" />
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-[#0f172a]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Charts Grid */}
            <div className="grid md:grid-cols-5 gap-6">
              {/* Revenue Chart - takes 3 cols */}
              <div className="md:col-span-3 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <h4 className="text-sm font-semibold text-[#0f172a] mb-4">
                  Doanh thu theo tháng (triệu ₫)
                </h4>
                <ResponsiveContainer width="100%" height={220}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient
                        id="revenueGrad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#22c55e"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="100%"
                          stopColor="#22c55e"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#e5e7eb"
                    />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#94a3b8" }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#94a3b8" }}
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 4px 12px rgba(0,0,0,.08)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#22c55e"
                      strokeWidth={2.5}
                      fill="url(#revenueGrad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Occupancy Chart - 2 cols */}
              <div className="md:col-span-2 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <h4 className="text-sm font-semibold text-[#0f172a] mb-4">
                  Lấp đầy theo tuần (%)
                </h4>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={occupancyData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#e5e7eb"
                    />
                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#94a3b8" }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#94a3b8" }}
                      domain={[0, 100]}
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid #e5e7eb",
                      }}
                    />
                    <Bar
                      dataKey="rate"
                      fill="#06b6d4"
                      radius={[8, 8, 0, 0]}
                      barSize={28}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                <feat.icon className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-[#0f172a] mb-1">
                {feat.title}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
