"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { useCheckAccount, useLogin } from "@/hooks/mutations/use-auth";
import { useRouter } from "next/navigation";
import type { LoginType } from "@/types/auth.type";

const loginSchema = z.object({
  keyLogin: z
    .string()
    .min(1, "Vui lòng nhập Email, Số điện thoại hoặc Tên đăng nhập"),
  password: z.string().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

/**
 * Auto-detect login type based on input:
 * - Contains "@" → customer (email)
 * - Otherwise → user (username for B2B/admin)
 */
function detectLoginType(keyLogin: string): LoginType {
  if (keyLogin.includes("@")) {
    return "customer";
  }
  return "user";
}

export function LoginForm() {
  const router = useRouter();
  const [step, setStep] = useState<"check" | "password">("check");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [detectedType, setDetectedType] = useState<LoginType>("customer");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      keyLogin: "",
      password: "",
    },
  });

  const keyLogin = watch("keyLogin");

  const checkAccountMutation = useCheckAccount();
  const loginMutation = useLogin();

  const onSubmit = async (data: LoginFormValues) => {
    setErrorMsg(null);

    // Auto-detect login type from input
    const loginType = detectLoginType(data.keyLogin);
    setDetectedType(loginType);

    if (step === "check") {
      try {
        const res = await checkAccountMutation.mutateAsync({
          login_type: loginType,
          keyLogin: data.keyLogin,
        });
        if (res?.exists) {
          setStep("password");
        } else {
          if (loginType === "customer") {
            // Customer doesn't exist → redirect to register
            router.push("/register");
          } else {
            // User (B2B) doesn't exist → contact admin
            setErrorMsg("Tài khoản không tồn tại. Vui lòng liên hệ Admin.");
          }
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setErrorMsg(err.message || "Có lỗi xảy ra khi kiểm tra tài khoản");
        } else {
          setErrorMsg("Có lỗi xảy ra khi kiểm tra tài khoản");
        }
      }
      return;
    }

    if (step === "password") {
      if (!data.password) {
        setErrorMsg("Vui lòng nhập mật khẩu");
        return;
      }
      try {
        // useLogin hook handles: save tokens → fetch profile → route by role
        await loginMutation.mutateAsync({
          login_type: detectedType,
          keyLogin: data.keyLogin,
          password: data.password,
        });
      } catch (err: unknown) {
        if (err instanceof Error) {
          setErrorMsg(err.message || "Mật khẩu không chính xác");
        } else {
          setErrorMsg("Mật khẩu không chính xác");
        }
      }
    }
  };

  const isLoading = checkAccountMutation.isPending || loginMutation.isPending;

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Unified login input */}
        <div className="space-y-2">
          <Label
            htmlFor="keyLogin"
            className="text-sm font-medium text-[#222222]"
          >
            Email hoặc Tên đăng nhập
          </Label>
          <Input
            id="keyLogin"
            type="text"
            placeholder="name@email.com hoặc username"
            {...register("keyLogin")}
            disabled={step !== "check"}
            className="h-12 rounded-xl border-gray-300 focus:border-[#222222] focus:ring-[#222222] text-base"
          />
          {errors.keyLogin && (
            <p className="text-[#c13515] text-sm">{errors.keyLogin.message}</p>
          )}
          {/* Hint text */}
          <p className="text-xs text-[#6a6a6a]">
            Nhập email để đăng nhập khách hàng, hoặc username để đăng nhập hệ
            thống
          </p>
        </div>

        {/* Password (animated entrance) */}
        {step === "password" && (
          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-[#222222]"
              >
                Mật khẩu
              </Label>
              <Link
                href="#"
                className="text-sm text-[#222222] hover:underline font-medium"
              >
                Quên mật khẩu?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Nhập mật khẩu"
              {...register("password")}
              className="h-12 rounded-xl border-gray-300 focus:border-[#222222] focus:ring-[#222222] text-base"
            />
          </div>
        )}

        {/* Error Message */}
        {errorMsg && (
          <div className="p-3 rounded-xl bg-red-50 text-[#c13515] text-sm border border-red-100">
            {errorMsg}
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full h-12 bg-[#ff385c] hover:bg-[#e00b41] text-white rounded-xl text-base font-medium"
          disabled={isLoading}
        >
          {isLoading
            ? "Đang xử lý..."
            : step === "check"
              ? "Tiếp tục"
              : "Đăng nhập"}
        </Button>

        {/* Back button */}
        {step === "password" && (
          <button
            type="button"
            onClick={() => setStep("check")}
            className="w-full text-center text-sm text-[#6a6a6a] hover:text-[#222222] mt-2"
          >
            ← Thay đổi tài khoản ({keyLogin})
          </button>
        )}
      </form>

      {/* Divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-4 text-[#6a6a6a]">hoặc</span>
        </div>
      </div>

      {/* Google Login */}
      <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-medium text-[#222222] hover:bg-gray-50 transition-colors">
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
            <path
              fill="#4285F4"
              d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
            />
            <path
              fill="#34A853"
              d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
            />
            <path
              fill="#FBBC05"
              d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
            />
            <path
              fill="#EA4335"
              d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
            />
          </g>
        </svg>
        Tiếp tục bằng Google
      </button>

      {/* Register Link */}
      <p className="text-center text-sm text-[#6a6a6a] mt-8">
        Chưa có tài khoản?{" "}
        <Link
          href="/register"
          className="text-[#222222] font-semibold hover:underline"
        >
          Đăng ký
        </Link>
      </p>
    </div>
  );
}
