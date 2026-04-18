import { Mail, Globe, MapPin } from "lucide-react";

const FOOTER_LINKS = {
  "Về chúng tôi": [
    "Giới thiệu",
    "Cách hoạt động",
    "Phòng tin tức",
    "Tuyển dụng",
    "Nhà đầu tư",
  ],
  "Hỗ trợ": [
    "Trung tâm trợ giúp",
    "Chính sách hoàn tiền",
    "Báo cáo sự cố",
    "Liên hệ chúng tôi",
  ],
  "Chủ nhà": [
    "Đăng ký Chủ nhà",
    "Tài nguyên Chủ nhà",
    "Diễn đàn cộng đồng",
    "Chủ nhà có trách nhiệm",
  ],
  "Pháp lý": [
    "Điều khoản dịch vụ",
    "Chính sách bảo mật",
    "Chính sách Cookie",
    "Sitemap",
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4 text-white/90">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Website"
            >
              <Globe size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Locations"
            >
              <MapPin size={16} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Hotel SaaS Platform. All rights
            reserved.
          </p>

          {/* Language selector */}
          <div className="flex items-center gap-3 text-white/60 text-sm">
            <span>🇻🇳 Tiếng Việt</span>
            <span className="text-white/20">|</span>
            <span>VND (₫)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
