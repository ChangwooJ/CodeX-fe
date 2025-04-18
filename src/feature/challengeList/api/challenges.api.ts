import { ChallengeResponseType } from "../types/challengeType";
import axios from "axios";

export const getChallenges = async (
  title?: string,
  difficulty?: number,
  tags?: string,
  page?: number,
): Promise<ChallengeResponseType> => {
  const params = Object.fromEntries(
    Object.entries({
      title,
      difficulty,
      tags,
      page,
    })
  );
  
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/problems`, { params });
console.log(data);
  return data;
};