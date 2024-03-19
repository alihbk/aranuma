import axiosInstance from "../utils/axios";

interface LoginResponse {
  accessToken: string;
  accessTokenExpireDate: Date;
  refreshTokenId: string;
}

class AuthService {
  async login(username: string, password: string): Promise<LoginResponse> {
    const response = await axiosInstance.post<LoginResponse>("api/auth/login", {
      username,
      password,
    });
     return response.data;
  }
}

const authService = new AuthService();
export default authService;
