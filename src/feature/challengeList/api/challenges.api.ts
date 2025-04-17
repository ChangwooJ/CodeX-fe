import { ChallengeResponseType } from "../types/challengeType";
import axios from "axios";

export const getChallenges = async (
  title?: string,
  difficulty?: number,
  tags?: string,
): Promise<ChallengeResponseType> => {
  const params = Object.fromEntries(
    Object.entries({
      title,
      difficulty,
      tags,
    })
  );
  //`http://localhost:8000/api/challenges`
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/problems`, { params });
console.log(data);
  return data;
};