import { useSuspenseQuery } from "@tanstack/react-query";
import { ChallengeResponseType } from "../types/challengeType";
import { getChallenges } from "../api/challenges.api";

export const useGetChallenges = (
  title: string | undefined,
  difficulty: number | undefined,
  tags: string | undefined,
) => {
  return useSuspenseQuery<ChallengeResponseType>({
    queryKey: [
      "problems",
      title || "",
      difficulty || "",
      tags || "",
    ],
    queryFn: () =>
      getChallenges(title, difficulty, tags),
  });
};
