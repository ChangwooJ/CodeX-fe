import { useSuspenseQuery } from "@tanstack/react-query";
import { ChallengeDetailType } from "../type/challengeDetailType";
import { getChallengeDetail } from "../api/challengeDetail.api";

export const useGetChallengeDetail = (
  problemId: number,
) => {
  return useSuspenseQuery<ChallengeDetailType>({
    queryKey: [
      "problemDetail",
      problemId,
    ],
    queryFn: () =>
      getChallengeDetail(problemId),
  });
};
