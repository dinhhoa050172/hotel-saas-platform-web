import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/user.service";

export const USER_QUERY_KEYS = {
  all: ["users"] as const,
  lists: () => [...USER_QUERY_KEYS.all, "list"] as const,
  list: (params: Record<string, unknown>) =>
    [...USER_QUERY_KEYS.lists(), params] as const,
  profile: () => ["user-profile"] as const,
};

export const useUsers = (params?: {
  page?: number;
  limit?: number;
  search?: string;
}) => {
  return useQuery({
    queryKey: USER_QUERY_KEYS.list(params || {}),
    queryFn: () => userService.getUsers(params),
  });
};

export const useUserProfile = () => {
  return useQuery({
    queryKey: USER_QUERY_KEYS.profile(),
    queryFn: () => userService.getProfile(),
  });
};
