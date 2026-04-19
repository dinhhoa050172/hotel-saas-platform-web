import Link from "next/link";
import { Button } from "@/components/ui/button";

export function B2BHeader() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 text-emerald-500 transition-transform group-hover:scale-110"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          <span className="font-bold text-lg text-white tracking-tight">
            HotelSaaS
          </span>
          <span className="text-[10px] font-medium bg-emerald-500/20 text-emerald-400 rounded-full px-2 py-0.5 border border-emerald-500/30">
            for Hosts
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#calculator"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Thu nhập
          </a>
          <a
            href="#dashboard"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Tính năng
          </a>
          <a
            href="#steps"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Bắt đầu
          </a>
          <Link
            href="/"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Đặt phòng
          </Link>
        </nav>

        {/* Auth */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button
              variant="ghost"
              className="text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full px-5"
            >
              Đăng nhập
            </Button>
          </Link>
          <Link href="/register">
            <Button className="text-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-5">
              Đăng ký Host
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
