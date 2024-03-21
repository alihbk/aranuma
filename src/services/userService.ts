import axiosInstance from "../utils/axios";

export interface UserResponse {
  name: string;
  lastName: string;
  date: Date;
  nationalCode: string;
  personelCode: string;
  role: string;
  mobileNum: string;
  watchId: string;
}

class UserService {
  async profile(): Promise<UserResponse> {
    const response = await axiosInstance.get<UserResponse>(
      "api/Home/PersonelInfo"
    );
    return response.data;
  }
}

const userService = new UserService();
export default userService;
