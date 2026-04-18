import { apiClient } from "@/lib/api-client";
import {
  ApiEnvelope,
  UserProfileResponse,
  UserListResponse,
} from "@/types/user.type";

export const userService = {
  getProfile: async (): Promise<UserProfileResponse | null> => {
    // Calling the endpoint mapping to our Swagger definitions for Customer Profile
    // In a real scenario we could have `customerService` for /customers and `adminUserService` for /auth/internal
    // Setting requiresAuth: true as default
    const response =
      await apiClient<ApiEnvelope<UserProfileResponse>>("/customers/profile");
    return response.data;
  },

  getUsers: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
  }): Promise<UserListResponse | null> => {
    // Example endpoint for getting user list based on typical Rest setups
    // Actual endpoint would map to the implemented backend route.
    const response = await apiClient<ApiEnvelope<UserListResponse>>("/users", {
      params,
    });
    return response.data;
  },
};
