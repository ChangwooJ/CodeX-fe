import ChallengeUnit from "./components/ChallengeUnit";
import styled from "styled-components";
import { useGetChallenges } from "./query/challenges.query";
import { useFilterStore } from "../../store/useFilterStore";
import { useNavigate, useSearchParams } from "react-router-dom";

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

const ChallengeList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") ?? undefined;
  const difficultyParam = searchParams.get("difficulty") ?? undefined;
  const difficulty = difficultyParam !== undefined ? Number(difficultyParam) : undefined;
  const { tags } = useFilterStore();

  const { data } = useGetChallenges(
    title,
    difficulty,
    tags,
  );

  const challenges = data.content;

  const handleShowChallenge = (problemId: number) => {
    navigate(`/challenge/${problemId}`);
  }

  return (
    <>
      <ChallengeListHeader>
        <ChallengeCount>{challenges.length} 문제</ChallengeCount>
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
    </>
  );
}

export default ChallengeList;