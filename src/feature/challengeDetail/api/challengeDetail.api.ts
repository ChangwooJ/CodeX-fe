import { ChallengeDetailType } from "../type/challengeDetailType";
import axios from "axios";

export const getChallengeDetail = async (
  problemId: number,
): Promise<ChallengeDetailType> => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/problems/${problemId}`);
  return data;
};

export const postChallengeSubmmit = async (
  problemId: number,
  userId: number,
  code: string,
  language: string,
): Promise<any> => {
  const payload = {
    userId,
    code,
    language,
  };

  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/submissions`,
    payload
  );
  return data;
};