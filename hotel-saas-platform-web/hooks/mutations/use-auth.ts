import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/use-auth-store";
import {
  CheckAccountBody,
  LoginBody,
  RegisterSendOtpBody,
  RegisterVerifyOtpBody,
} from "@/types/auth.type";
import { useRouter } from "next/navigation";

export const useCheckAccount = () => {
  return useMutation({
    mutationFn: (data: CheckAccountBody) => authService.checkAccount(data),
  });
};

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const setUser = useAuthStore((state) => state.setUser);
  const setLoginType = useAuthStore((state) => state.setLoginType);
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginBody) => authService.login(data),
    onSuccess: async (data, variables) => {
      if (!data) return;

      // 1. Save tokens to store + cookies
      setAuth({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });

      // 2. Save login type (customer / user) for future profile fetches
      const loginType = variables.login_type;
      setLoginType(loginType);

      // 3. Fetch profile using the appropriate API based on login type
      try {
        if (loginType === "customer") {
          const profile = await authService.getCustomerProfile(
            data.accessToken,
          );
          if (profile) {
            setUser({
              id: profile.id,
              name: profile.name,
              email: profile.email,
              phone: profile.phone,
              avatarUrl: profile.avatarUrl,
              role: "customer",
            });
          }
          // Customer → homepage
          router.push("/");
        } else {
          // user (admin, owner, manager, staff)
          const profile = await authService.getUserProfile(data.accessToken);
          if (profile) {
            setUser({
              id: profile.id,
              username: profile.username,
              fullName: profile.fullName,
              email: profile.email,
              phone: profile.phone,
              role: profile.role,
              avatarUrl: profile.avatarUrl,
            });
          }
          // B2B user → hosting landing page
          router.push("/hosting");
        }
      } catch {
        // Profile fetch error — still logged in, route based on type
        if (loginType === "customer") {
          router.push("/");
        } else {
          router.push("/hosting");
        }
      }
    },
  });
};

export const useRegisterSendOtp = () => {
  return useMutation({
    mutationFn: (data: RegisterSendOtpBody) =>
      authService.registerSendOtp(data),
  });
};

export const useRegisterVerifyOtp = () => {
  return useMutation({
    mutationFn: (data: RegisterVerifyOtpBody) =>
      authService.registerVerifyOtp(data),
  });
};
