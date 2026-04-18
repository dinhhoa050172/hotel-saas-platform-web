export interface ApiEnvelope<T = unknown> {
  code: number;
  status: boolean;
  message?: string;
  data: T | null;
}

export interface UserProfileResponse {
  id: number;
  username: string;
  email: string | null;
  phone: string | null;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  avatarUrl: string | null;
  fullName: string;
  role: string;
  companyId: number | null;
  branchId: number | null;
  createdAt: string;
  updatedAt: string;
  company?: {
    id: number;
    name: string;
  };
  branch?: {
    id: number;
    name: string;
  };
  status: string;
}

export interface UserListItem {
  id: number;
  username: string;
  email: string | null;
  phone: string | null;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  avatarUrl: string | null;
  fullName: string;
  role: string;
  companyId: number | null;
  branchId: number | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  company?: {
    id: number;
    name: string;
  } | null;
  branch?: {
    id: number;
    name: string;
  } | null;
}

export interface UserListResponse {
  items: UserListItem[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
