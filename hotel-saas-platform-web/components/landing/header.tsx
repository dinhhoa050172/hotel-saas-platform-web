import Link from "next/link";
import { HeaderAuthButtons } from "./header-auth-buttons";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 text-[#ff385c] transition-transform group-hover:scale-110"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          <span className="font-bold text-lg text-[#222222] tracking-tight">
            HotelSaaS
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-[#6a6a6a] hover:text-[#222222] transition-colors"
          >
            Trang chủ
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-[#6a6a6a] hover:text-[#222222] transition-colors"
          >
            Khám phá
          </Link>
          <Link
            href="/hosting"
            className="text-sm font-medium text-[#6a6a6a] hover:text-[#222222] transition-colors"
          >
            Chủ nhà
          </Link>
        </nav>

        {/* Auth Buttons (client component) */}
        <HeaderAuthButtons />
      </div>
    </header>
  );
}
