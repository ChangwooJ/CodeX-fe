import axios from "axios";
import { UserLoginType } from "../type/userType";
import { useAuthStore } from "../store/useAuthStore";
import { getTokenExpiration } from "../utils/getTokenExpiration";
import { queryClient } from "../store/TanstackQueryStore";

interface AuthResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export const saveAuthTokens = async (
  credentials: UserLoginType
): Promise<void> => {
  try {
    const response:AuthResponse = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, credentials);

    const { accessToken, refreshToken } = response.data;

    const expiredTime = getTokenExpiration(accessToken);
    useAuthStore
      .getState()
      .setToken(accessToken, refreshToken, expiredTime || 59);
    queryClient.invalidateQueries({ queryKey: ["problems"] });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert("로그인 실패!");
      throw new Error("로그인 실패");
    }

    alert("unknown Error!");
    throw new Error("알 수 없는 오류 발생");
  }
};

const LogOutAction = () => {
  useAuthStore.getState().clearToken();
  queryClient.invalidateQueries({ queryKey: ["problems"] });
};

export const expireAuthTokens = async (): Promise<void> => {
  const accessToken = useAuthStore.getState().accessToken;
  if (!accessToken) {
    throw new Error("토큰 미존재!");
  }
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    LogOutAction();
  } catch (error) {
    console.error("로그아웃 실패:", error);
    throw new Error("로그아웃 에러");
  }
};