import { ChallengeType } from "../types/challengeType";
import axios from "axios";

export const getChallenges = async (
  problemId: number,
  difficulty: number,
  tags: string,
  title: string,
): Promise<ChallengeType> => {
  const params = Object.fromEntries(
    Object.entries({
      problemId,
      difficulty,
      tags,
      title,
    })
  );
  const { data } = await axios.get(`http://localhost:8000/api/challenges`, { params });

  return data;
};