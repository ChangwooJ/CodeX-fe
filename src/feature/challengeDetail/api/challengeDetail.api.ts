import { ChallengeDetailType } from "../type/challengeDetailType";
import axios from "axios";

export const getChallengeDetail = async (
  problemId: number,
): Promise<ChallengeDetailType> => {
  const { data } = await axios.get(`http://localhost:8000/api/challenges/${problemId}`);
  return data;
};
