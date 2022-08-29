export interface LoginRequestDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  email: string
  id:string
  isVerified: true
  jwToken: string
  refreshToken: string
  refreshTokenExpiration: string
  roles: string[]
  tokenExpires: string
  userId: string
  userName: string
}



export interface UserDetailsResponseDTO {
  departmentName: string;
  email: string;
  emailSignatureUrl: string;
  firstName: string;
  intUserId: number;
  intUserStatusId: number;
  isHeadOfDepartment: boolean;
  lastName: string;
  middleName: null;
  ministryName: string;
  passwordChanged: boolean;
  permissionLevel: number;
  personalEmailAddress: string;
  phoneNumber1: string;
  phoneNumber2: string;
  position: string;
  positionId: number;
  roles: string[];
  userColour: string;
}

export interface RegisterRequestDTO {
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  alternatePhoneNumber: string;
  email: string;
  alternateEmail: string;
  organizationName: string;
  password: string;
}

export interface ForgotPassswordDTO {
  email: string;
  token: string;
}

export interface ResetPasswordDTO {
  newPassword: string;
  confirmNewPassword: string;
  token: string;
}

export interface ResendLink {
  email: string;
}

export interface confirmEmail {
  email: string;
  token: string;
}
