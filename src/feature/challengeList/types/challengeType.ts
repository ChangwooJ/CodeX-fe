export interface ChallengeType {
  problemId: number;
  title: string;
  difficulty: number;
  tags: string;
  totalSubmitted: number;
  totalAccuracy: number;
}

export interface ChallengeResponseType {
  content: ChallengeType[];
}