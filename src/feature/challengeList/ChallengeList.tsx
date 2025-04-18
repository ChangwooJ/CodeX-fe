import ChallengeUnit from "./components/ChallengeUnit";
import styled from "styled-components";
import { useGetChallenges } from "./query/challenges.query";
import { useFilterStore } from "../../store/useFilterStore";
import { useNavigate, useSearchParams } from "react-router-dom";
import PaginationConsol from "./components/PaginationConsol";

const ChallengeListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3%;
  margin-bottom: 2%;
`;

const ChallengeCount = styled.div`
  font-weight: bold;
`;

const ChallengeSort = styled.select`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ChallengeListWrapper = styled.div`
  box-sizing: border-box;
  height: 640px;
  border: 1px solid var(--primary-border-color);
  border-radius: 5px;
  background-color: white;
`;

const CommonTitleStyle = styled.div`
  font-size: 12px;
  font-weight: 550;
  color: rgb(128, 128, 128);
  text-align: center;
`;

const ListTitle = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  border-bottom: 1px solid var(--primary-border-color);
`;

const ChallengeStatus = styled(CommonTitleStyle)`width: 5%;`;
const ChallengeTitle = styled(CommonTitleStyle)`width: 50%;`;
const ChallengeDifficulty = styled(CommonTitleStyle)`width: 5%;`;
const ChallengeSubmitted = styled(CommonTitleStyle)`
  width: 10%;
  text-align: right;
`;
const ChallengeAccuracy = styled(CommonTitleStyle)`
  width: 5%;
  text-align: right;
`;

const PaginationConsolContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  height: fit-content;
`;

const ChallengeList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") ?? undefined;
  const difficultyParam = searchParams.get("difficulty") ?? undefined;
  const difficulty = difficultyParam !== undefined ? Number(difficultyParam) : undefined;
  const currentPage = useFilterStore(state => state.currentPage);
  const tags = useFilterStore(state => state.tags);

  const { data } = useGetChallenges(
    title,
    difficulty,
    tags,
    currentPage,
  );

  const challenges = data.content;
  const page = {
    first: data.first,
    last: data.last,
    totalPage: data.totalPages,
    currentPage: data.pageable.pageNumber + 1,
    totalElements: data.totalElements,
  };

  const handleShowChallenge = (problemId: number) => {
    navigate(`/challenge/${problemId}`);
  }

  return (
    <>
      <ChallengeListHeader>
        <ChallengeCount>{page.totalElements} 문제</ChallengeCount>
        <ChallengeSort>
          <option>최신순</option>
        </ChallengeSort>
      </ChallengeListHeader>
      <ChallengeListWrapper>
        <ListTitle>
          <ChallengeStatus>상태</ChallengeStatus>
          <ChallengeTitle>제목</ChallengeTitle>
          <ChallengeDifficulty>난이도</ChallengeDifficulty>
          <ChallengeSubmitted>완료한 사람</ChallengeSubmitted>
          <ChallengeAccuracy>정답률</ChallengeAccuracy>
        </ListTitle>
        {challenges.map((challenge) => (
          <ChallengeUnit
            key={challenge.problemId}
            challenge={challenge}
            onClick={() => handleShowChallenge(challenge.problemId)}
          />
        ))}
      </ChallengeListWrapper>
      <PaginationConsolContainer>
        <PaginationConsol page={page} />
      </PaginationConsolContainer>
    </>
  );
}

export default ChallengeList;