import { apiClient } from "@/lib/api-client";
import { ApiEnvelope, UserProfileResponse } from "@/types/user.type";
import type { CustomerProfileResponse } from "@/types/customer.type";
import {
  CheckAccountBody,
  CheckAccountResponse,
  LoginBody,
  TokenPair,
  RenewTokenBody,
  RegisterSendOtpBody,
  RegisterVerifyOtpBody,
} from "@/types/auth.type";

export const authService = {
  checkAccount: async (
    body: CheckAccountBody,
  ): Promise<CheckAccountResponse | null> => {
    const response = await apiClient<ApiEnvelope<CheckAccountResponse>>(
      "/auth/check-account",
      {
        method: "POST",
        body: JSON.stringify(body),
        requiresAuth: false,
      },
    );
    return response.data;
  },

  login: async (body: LoginBody): Promise<TokenPair | null> => {
    const response = await apiClient<ApiEnvelope<TokenPair>>("/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
      requiresAuth: false,
    });
    return response.data;
  },

  renewToken: async (body: RenewTokenBody): Promise<TokenPair | null> => {
    const response = await apiClient<ApiEnvelope<TokenPair>>(
      "/auth/renew-token",
      {
        method: "POST",
        body: JSON.stringify(body),
        requiresAuth: false,
      },
    );
    return response.data;
  },

  /** Fetch user (B2B) profile */
  getUserProfile: async (
    token: string,
  ): Promise<UserProfileResponse | null> => {
    const response = await apiClient<ApiEnvelope<UserProfileResponse>>(
      "/users/profile",
      {
        method: "GET",
        requiresAuth: true,
        token,
      },
    );
    return response.data;
  },

  /** Fetch customer (B2C) profile */
  getCustomerProfile: async (
    token: string,
  ): Promise<CustomerProfileResponse | null> => {
    const response = await apiClient<ApiEnvelope<CustomerProfileResponse>>(
      "/customers/profile",
      {
        method: "GET",
        requiresAuth: true,
        token,
      },
    );
    return response.data;
  },

  registerSendOtp: async (body: RegisterSendOtpBody): Promise<null> => {
    await apiClient<ApiEnvelope<null>>("/auth/customer/register-send-otp", {
      method: "POST",
      body: JSON.stringify(body),
      requiresAuth: false,
    });
    return null;
  },

  registerVerifyOtp: async (body: RegisterVerifyOtpBody): Promise<null> => {
    await apiClient<ApiEnvelope<null>>("/auth/customer/register-verify-otp", {
      method: "POST",
      body: JSON.stringify(body),
      requiresAuth: false,
    });
    return null;
  },
};
