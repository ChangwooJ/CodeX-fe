import { useSuspenseQuery } from "@tanstack/react-query";
import { ChallengeType } from "../types/challengeType";
import { getChallenges } from "../api/challenges.api";

export const useGetChallenges = (
  problemId: number,
  difficulty: number,
  tags: string,
  title: string,
) => {
  return useSuspenseQuery<ChallengeType>({
    queryKey: [
      "problems",
      problemId,
      difficulty,
      tags,
      title,
    ],
    queryFn: () =>
      getChallenges(problemId, difficulty, tags, title),
  });
};
