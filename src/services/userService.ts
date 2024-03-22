import axiosInstance from "../utils/axios";
import { UserResponse } from "../utils/interface";

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
