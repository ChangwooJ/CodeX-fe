export interface ChallengeType {
  problemId: number;
  title: string;
  difficulty: number;
  tags: string;
  totalSubmitted: number;
  totalAccuracy: number;
}

export interface PageableType {
  offset: number,
  pageNumber: number,
  pageSize: number,
  paged: boolean,
}

export interface ChallengeResponseType {
  content: ChallengeType[],
  first: boolean,
  last: boolean,
  pageable: PageableType,
  totalPages: number,
  totalElements: number,
}

export interface PageType {
  first: boolean,
  last: boolean,
  totalPage: number,
  currentPage: number,
}