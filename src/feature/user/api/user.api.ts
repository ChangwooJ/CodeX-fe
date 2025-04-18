import axios from "axios";
import { UserLoginType } from "../type/userType";
import { useAuthStore } from "../store/useAuthStore";
import { getTokenExpiration } from "../utils/getTokenExpiration";
import { queryClient } from "../store/TanstackQueryStore";

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export const saveAuthTokens = async (
  credentials: UserLoginType
): Promise<void> => {
  try {
    const response:AuthResponse = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, credentials);
    console.log(response);
    const { accessToken, refreshToken } = response;

    const expiredTime = getTokenExpiration(accessToken);
    useAuthStore
      .getState()
      .setToken(accessToken, refreshToken, expiredTime || 59);
    queryClient.invalidateQueries({ queryKey: ["clubs"] });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert("로그인 실패!");
      throw new Error("로그인 실패");
    }

    alert("unknown Error!");
    throw new Error("알 수 없는 오류 발생");
  }
};
