export interface ChallengeType {
  problemId: number;
  title: string;
  difficulty: number;
  tag: string;
  total_submitted: number;
  total_accuracy: number;
}

export interface ChallengeResponseType {
  content: ChallengeType[];
}