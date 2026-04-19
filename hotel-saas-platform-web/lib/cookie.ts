// Cookie helper utilities for auth tokens (client-side)

const COOKIE_OPTIONS = "path=/; SameSite=Lax; max-age=604800"; // 7 days

export function setCookie(name: string, value: string): void {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)}; ${COOKIE_OPTIONS}`;
}

export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

export function deleteCookie(name: string): void {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; path=/; max-age=0`;
}

// Auth-specific helpers
export function setAuthCookies(
  accessToken: string,
  refreshToken: string,
): void {
  setCookie("accessToken", accessToken);
  setCookie("refreshToken", refreshToken);
}

export function clearAuthCookies(): void {
  deleteCookie("accessToken");
  deleteCookie("refreshToken");
}
