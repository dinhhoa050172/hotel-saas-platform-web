export interface CustomerProfileResponse {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  avatarUrl: string | null;
  identityCard: string | null;
  idType: "CCCD" | "CMND" | "PASSPORT" | "DRIVERS_LICENSE" | "OTHER" | null;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  createdAt: string;
  updatedAt: string;
}
