import { LoginForm } from "@/components/auth/login-form";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Đăng nhập | HotelSaaS",
  description: "Đăng nhập vào hệ thống quản lý và đặt phòng khách sạn",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white flex">
      {/* Left: Branding Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-slate-900 to-slate-800 items-center justify-center p-16">
        <div className="absolute inset-0 bg-[url('/images/landing_page.webp')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-white text-center max-w-md">
          <Link
            href="/"
            className="flex items-center gap-2 justify-center mb-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-[#ff385c]"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
            <span className="font-bold text-2xl">HotelSaaS</span>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight leading-tight">
            Chào mừng
            <br />
            trở lại.
          </h2>
          <p className="mt-4 text-white/70 text-base leading-relaxed">
            Trải nghiệm hàng ngàn không gian lưu trú tuyệt vời chỉ với một lần
            đăng nhập.
          </p>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 sm:px-12 py-12">
        {/* Mobile Logo */}
        <div className="lg:hidden mb-10">
          <Link href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-[#ff385c]"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
            <span className="font-bold text-xl text-[#222222]">HotelSaaS</span>
          </Link>
        </div>

        <div className="w-full max-w-[400px]">
          <h1 className="text-2xl font-bold text-[#222222] mb-2">Đăng nhập</h1>
          <p className="text-[#6a6a6a] mb-8">Nhập thông tin để tiếp tục</p>

          <LoginForm />
        </div>
      </div>
    </main>
  );
}
