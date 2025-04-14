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
  
  const { data } = await axios.get(`http://localhost:8000/api/challenges`, { params });

  return data;
};