export interface ICurrentUser {
  email: string;
  id: string;
  isVerified: true;
  jwToken: string;
  refreshToken: string;
  refreshTokenExpiration: string;
  roles: string[];
  tokenExpires: string;
  userId: string;
  userName: string;
  currentSubscription: currentPlan;
}

export interface currentPlan {
  accessCode: string;
  amount: number;
  apiCallCountUsed: number;
  durationInMonth: number;
  endDate: string;
  isActive: boolean;
  paymentStatusId: number;
  plan: string;
  planId: string;
  referenceNo: string;
  startDate: string;
}
