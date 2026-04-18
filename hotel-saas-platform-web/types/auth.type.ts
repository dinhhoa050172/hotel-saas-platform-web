export type LoginType = "customer" | "user";

export interface CheckAccountBody {
  login_type: LoginType;
  keyLogin: string;
}

export interface CheckAccountResponse {
  exists: boolean;
  requirePasswordSetup?: boolean;
}

export interface LoginBody {
  login_type: LoginType;
  keyLogin: string;
  password?: string;
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

export interface GoogleLoginBody {
  idToken: string;
}

export interface GoogleLoginResponse extends TokenPair {
  isNewUser: boolean;
}

export interface RegisterSendOtpBody {
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
}

export interface RegisterVerifyOtpBody {
  email: string;
  otp: string;
}

export interface RenewTokenBody {
  refreshToken: string;
}
