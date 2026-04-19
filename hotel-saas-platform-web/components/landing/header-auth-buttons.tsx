"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/use-auth-store";
import { User, LogOut, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export function HeaderAuthButtons() {
  const user = useAuthStore((state) => state.user);
  const loginType = useAuthStore((state) => state.loginType);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayName =
    user?.fullName || user?.name || user?.username || "Người dùng";

  const handleLogout = () => {
    clearAuth();
    setOpen(false);
    router.push("/");
  };

  // Not logged in → show login/register buttons
  if (!user) {
    return (
      <div className="flex items-center gap-3">
        <Link href="/login">
          <Button
            variant="ghost"
            className="text-sm font-medium text-[#222222] hover:bg-gray-100 rounded-full px-5"
          >
            Đăng nhập
          </Button>
        </Link>
        <Link href="/register">
          <Button className="text-sm font-medium bg-[#ff385c] hover:bg-[#e00b41] text-white rounded-full px-5">
            Đăng ký
          </Button>
        </Link>
      </div>
    );
  }

  // Logged in → show user avatar/name with dropdown
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 hover:shadow-md transition-shadow bg-white"
      >
        {/* Avatar or fallback icon */}
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={displayName}
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-[#ff385c] flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        )}
        <span className="text-sm font-medium text-[#222222] max-w-[120px] truncate hidden sm:block">
          {displayName}
        </span>
        <ChevronDown className="w-4 h-4 text-[#6a6a6a]" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-semibold text-[#222222] truncate">
              {displayName}
            </p>
            <p className="text-xs text-[#6a6a6a] truncate">
              {user.email || user.username || ""}
            </p>
          </div>

          {loginType === "customer" ? (
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#222222] hover:bg-gray-50 transition-colors"
            >
              <User className="w-4 h-4" />
              Trang cá nhân
            </Link>
          ) : (
            <Link
              href="/admin"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#222222] hover:bg-gray-50 transition-colors"
            >
              <User className="w-4 h-4" />
              Bảng điều khiển
            </Link>
          )}

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#c13515] hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
}
