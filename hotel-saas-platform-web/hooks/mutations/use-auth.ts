import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/use-auth-store";
import {
  CheckAccountBody,
  LoginBody,
  RegisterSendOtpBody,
  RegisterVerifyOtpBody,
} from "@/types/auth.type";

export const useCheckAccount = () => {
  return useMutation({
    mutationFn: (data: CheckAccountBody) => authService.checkAccount(data),
  });
};

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (data: LoginBody) => authService.login(data),
    onSuccess: (data) => {
      if (data) {
        setAuth({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        });
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
