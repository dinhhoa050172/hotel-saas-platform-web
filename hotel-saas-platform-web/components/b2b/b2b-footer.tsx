"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function B2BFooter() {
  return (
    <footer className="bg-[#0f172a] border-t border-white/5">
      {/* Final CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-3xl p-10 md:p-14 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Sẵn sàng tối ưu doanh thu?
          </h3>
          <p className="text-slate-400 max-w-md mx-auto mb-8">
            Tham gia cùng hơn 10,000 chủ nhà đang sử dụng HotelSaaS để quản lý
            và phát triển kinh doanh.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 py-3.5 font-medium transition-colors"
          >
            Bắt đầu miễn phí ngay
          </Link>
        </motion.div>
      </div>

      {/* Footer links */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Sản phẩm</h4>
            <ul className="space-y-3">
              {["Quản lý phòng", "Báo cáo doanh thu", "Đồng bộ OTA", "API"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Công ty</h4>
            <ul className="space-y-3">
              {["Về chúng tôi", "Blog", "Tuyển dụng", "Liên hệ"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Hỗ trợ</h4>
            <ul className="space-y-3">
              {["Trung tâm trợ giúp", "Cộng đồng", "Chính sách", "Bảo mật"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Đối tác OTA
            </h4>
            <ul className="space-y-3">
              {["Booking.com", "Agoda", "Airbnb", "Traveloka"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600">
            © 2026 HotelSaaS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-slate-600 hover:text-slate-400 transition-colors"
            >
              Điều khoản
            </Link>
            <Link
              href="#"
              className="text-sm text-slate-600 hover:text-slate-400 transition-colors"
            >
              Chính sách
            </Link>
            <Link
              href="#"
              className="text-sm text-slate-600 hover:text-slate-400 transition-colors"
            >
              Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
