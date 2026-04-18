"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  useRegisterSendOtp,
  useRegisterVerifyOtp,
} from "@/hooks/mutations/use-auth";

const registerSchema = z.object({
  name: z.string().min(2, "Họ tên tối thiểu 2 ký tự"),
  phone: z.string().min(9, "Số điện thoại không hợp lệ"),
  email: z.string().email("Email không hợp lệ"),
  password: z
    .string()
    .min(6, "Mật khẩu tối thiểu 6 ký tự")
    .regex(/[A-Z]/, "Cần ít nhất 1 chữ hoa")
    .regex(/[0-9]/, "Cần ít nhất 1 chữ số")
    .regex(/[^A-Za-z0-9]/, "Cần ít nhất 1 ký tự đặc biệt"),
});

const otpSchema = z.object({
  otp: z.string().length(6, "Mã OTP phải có 6 số"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;
type OtpFormValues = z.infer<typeof otpSchema>;

export function RegisterForm() {
  const [step, setStep] = useState<"info" | "otp" | "success">("info");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState("");

  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", phone: "", email: "", password: "" },
  });

  const otpForm = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });

  const sendOtpMutation = useRegisterSendOtp();
  const verifyOtpMutation = useRegisterVerifyOtp();

  const onRegisterSubmit = async (data: RegisterFormValues) => {
    setErrorMsg(null);
    try {
      await sendOtpMutation.mutateAsync(data);
      setUserEmail(data.email);
      setStep("otp");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message || "Có lỗi xảy ra");
      } else {
        setErrorMsg("Có lỗi xảy ra khi đăng ký");
      }
    }
  };

  const onOtpSubmit = async (data: OtpFormValues) => {
    setErrorMsg(null);
    try {
      await verifyOtpMutation.mutateAsync({
        email: userEmail,
        otp: data.otp,
      });
      setStep("success");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message || "Mã OTP không đúng");
      } else {
        setErrorMsg("Mã OTP không đúng");
      }
    }
  };

  // ====== SUCCESS SCREEN ======
  if (step === "success") {
    return (
      <div className="w-full text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#222222] mb-2">
          Đăng ký thành công!
        </h3>
        <p className="text-[#6a6a6a] mb-8">
          Tài khoản của bạn đã được tạo. Hãy đăng nhập để bắt đầu.
        </p>
        <Link href="/login">
          <Button className="bg-[#ff385c] hover:bg-[#e00b41] text-white rounded-xl px-8 h-12">
            Đăng nhập ngay
          </Button>
        </Link>
      </div>
    );
  }

  // ====== OTP SCREEN ======
  if (step === "otp") {
    return (
      <div className="w-full">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-[#ff385c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-7 h-7 text-[#ff385c]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[#222222]">Xác minh email</h3>
          <p className="text-sm text-[#6a6a6a] mt-1">
            Chúng tôi đã gửi mã OTP tới <strong>{userEmail}</strong>
          </p>
        </div>

        <form
          onSubmit={otpForm.handleSubmit(onOtpSubmit)}
          className="space-y-5"
        >
          <div className="space-y-2">
            <Label htmlFor="otp" className="text-sm font-medium text-[#222222]">
              Mã xác minh
            </Label>
            <Input
              id="otp"
              type="text"
              placeholder="123456"
              maxLength={6}
              {...otpForm.register("otp")}
              className="h-14 rounded-xl border-gray-300 text-center text-2xl tracking-[0.5em] font-mono"
            />
            {otpForm.formState.errors.otp && (
              <p className="text-[#c13515] text-sm">
                {otpForm.formState.errors.otp.message}
              </p>
            )}
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-50 text-[#c13515] text-sm border border-red-100">
              {errorMsg}
            </div>
          )}

          <Button
            type="submit"
            className="w-full h-12 bg-[#ff385c] hover:bg-[#e00b41] text-white rounded-xl text-base font-medium"
            disabled={verifyOtpMutation.isPending}
          >
            {verifyOtpMutation.isPending ? "Đang xác minh..." : "Xác nhận"}
          </Button>

          <button
            type="button"
            onClick={() => setStep("info")}
            className="w-full text-center text-sm text-[#6a6a6a] hover:text-[#222222]"
          >
            ← Quay lại
          </button>
        </form>
      </div>
    );
  }

  // ====== REGISTER INFO SCREEN ======
  return (
    <div className="w-full">
      <form
        onSubmit={registerForm.handleSubmit(onRegisterSubmit)}
        className="space-y-4"
      >
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-[#222222]">
            Họ và tên
          </Label>
          <Input
            id="name"
            placeholder="Nguyễn Văn A"
            {...registerForm.register("name")}
            className="h-12 rounded-xl border-gray-300 focus:border-[#222222] focus:ring-[#222222] text-base"
          />
          {registerForm.formState.errors.name && (
            <p className="text-[#c13515] text-sm">
              {registerForm.formState.errors.name.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="text-sm font-medium text-[#222222]"
            >
              Số điện thoại
            </Label>
            <Input
              id="phone"
              placeholder="0912 345 678"
              {...registerForm.register("phone")}
              className="h-12 rounded-xl border-gray-300 focus:border-[#222222] focus:ring-[#222222] text-base"
            />
            {registerForm.formState.errors.phone && (
              <p className="text-[#c13515] text-sm">
                {registerForm.formState.errors.phone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-[#222222]"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@email.com"
              {...registerForm.register("email")}
              className="h-12 rounded-xl border-gray-300 focus:border-[#222222] focus:ring-[#222222] text-base"
            />
            {registerForm.formState.errors.email && (
              <p className="text-[#c13515] text-sm">
                {registerForm.formState.errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="password"
            className="text-sm font-medium text-[#222222]"
          >
            Mật khẩu
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Tối thiểu 6 ký tự, chữ hoa, số, ký tự đặc biệt"
            {...registerForm.register("password")}
            className="h-12 rounded-xl border-gray-300 focus:border-[#222222] focus:ring-[#222222] text-base"
          />
          {registerForm.formState.errors.password && (
            <p className="text-[#c13515] text-sm">
              {registerForm.formState.errors.password.message}
            </p>
          )}
        </div>

        {errorMsg && (
          <div className="p-3 rounded-xl bg-red-50 text-[#c13515] text-sm border border-red-100">
            {errorMsg}
          </div>
        )}

        <Button
          type="submit"
          className="w-full h-12 bg-[#ff385c] hover:bg-[#e00b41] text-white rounded-xl text-base font-medium"
          disabled={sendOtpMutation.isPending}
        >
          {sendOtpMutation.isPending ? "Đang gửi OTP..." : "Đăng ký"}
        </Button>

        {/* Terms */}
        <p className="text-xs text-[#6a6a6a] text-center leading-relaxed">
          Bằng cách đăng ký, bạn đồng ý với{" "}
          <Link href="#" className="text-[#222222] underline">
            Điều khoản dịch vụ
          </Link>{" "}
          và{" "}
          <Link href="#" className="text-[#222222] underline">
            Chính sách bảo mật
          </Link>
          .
        </p>
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

      {/* Google Register */}
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
        Đăng ký bằng Google
      </button>

      {/* Login Link */}
      <p className="text-center text-sm text-[#6a6a6a] mt-8">
        Đã có tài khoản?{" "}
        <Link
          href="/login"
          className="text-[#222222] font-semibold hover:underline"
        >
          Đăng nhập
        </Link>
      </p>
    </div>
  );
}
