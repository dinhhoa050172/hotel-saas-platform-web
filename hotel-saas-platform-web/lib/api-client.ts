import { useAuthStore } from "@/store/use-auth-store";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

export interface FetchOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>;
  requiresAuth?: boolean;
  token?: string; // Explicit token for server-components usage where window.localStorage is not accessible
}

export class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(status: number, message: string, data?: unknown) {
    super(message);
    this.status = status;
    this.data = data;
    this.name = "ApiError";
  }
}

export async function apiClient<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const {
    params,
    requiresAuth = true,
    token: explicitToken,
    ...customConfig
  } = options;
  const headers = new Headers(customConfig.headers);

  // Set default Content-Type for JSON payloads if not provided and not FormData
  if (
    !headers.has("Content-Type") &&
    !(customConfig.body instanceof FormData)
  ) {
    headers.set("Content-Type", "application/json");
  }

  // Inject Bearer token
  if (requiresAuth) {
    // If not running in a browser, use the explicitToken (passed from `cookies()`), fallback to Zustand on client
    const token =
      explicitToken ||
      (typeof window !== "undefined"
        ? useAuthStore.getState().accessToken
        : null);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  }

  // Handle Query Params
  let url = `${BASE_URL}${endpoint}`;
  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });
    const queryString = searchParams.toString();
    if (queryString) {
      url += `?${queryString}`;
    }
  }

  const config: RequestInit = {
    ...customConfig,
    headers,
  };

  try {
    const response = await fetch(url, config);

    // Common error handling wrapper (intercepting 401s for client interactions)
    if (response.status === 401 && typeof window !== "undefined") {
      useAuthStore.getState().clearAuth();
      window.location.href = "/login";
    }

    const contentType = response.headers.get("content-type");
    const isJson = contentType && contentType.includes("application/json");
    const data = isJson ? await response.json() : await response.text();

    if (!response.ok) {
      throw new ApiError(
        response.status,
        data?.message || response.statusText || "An error occurred",
        data,
      );
    }

    return data as T;
  } catch (error) {
    // General network failures
    if (error instanceof TypeError) {
      console.error("[API Error]: Network connection failed", error);
      throw new Error(
        "Network failure. Please check your connection to the server.",
      );
    }
    throw error;
  }
}
