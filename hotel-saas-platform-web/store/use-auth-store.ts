import { create } from "zustand";
import { persist } from "zustand/middleware";
import { setAuthCookies, clearAuthCookies } from "@/lib/cookie";
import type { LoginType } from "@/types/auth.type";

interface AuthUser {
  id?: number;
  username?: string;
  name?: string;
  role?: string;
  fullName?: string;
  avatarUrl?: string | null;
  email?: string | null;
  phone?: string | null;
}

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  loginType: LoginType | null;
  user: AuthUser | null;
  setAuth: (tokens: { accessToken: string; refreshToken: string }) => void;
  setLoginType: (type: LoginType) => void;
  setUser: (user: AuthUser | null) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      loginType: null,
      user: null,

      setAuth: (tokens) => {
        // Sync to cookies for server-side (proxy.ts) access
        setAuthCookies(tokens.accessToken, tokens.refreshToken);
        set({
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken,
        });
      },

      setLoginType: (type) => set({ loginType: type }),

      setUser: (user) => set({ user }),

      clearAuth: () => {
        // Clear cookies
        clearAuthCookies();
        set({
          accessToken: null,
          refreshToken: null,
          loginType: null,
          user: null,
        });
      },
    }),
    {
      name: "auth-storage", // localStorage key
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        loginType: state.loginType,
        user: state.user,
      }),
    },
  ),
);
