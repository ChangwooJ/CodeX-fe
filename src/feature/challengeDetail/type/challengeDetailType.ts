export interface ChallengeDetailType {
  problemId : number;
  title: string;
  description: string;
  difficulty: number;
  tags: string;
  exampleInput: string;
  exampleOutput: string;
  totalSubmitted: number;
  totalAccuracy: string;
}