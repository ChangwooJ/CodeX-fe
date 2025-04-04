import { useEffect, useState } from "react";
import ChallengeUnit from "./components/ChallengeUnit";
import { ChallengeType } from "./types/challengeType";
import styled from "styled-components";

const ChallengeListWrapper = styled.div`
  border: 1px solid var(--primary-border-color);
  border-radius: 5px;
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
  const [challenges, SetChallenges] = useState<ChallengeType[]>([]);

  useEffect(() => {
    const fetchChanllenges = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/challenges');
        const data = await response.json();
        SetChallenges(data);
      } catch (err) {
        console.log(err);
      }
    };
    
    fetchChanllenges();
  },[]);

  const handleShowChallenge = () => {

  }

  return(
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
          key={challenge.problem_id}
          challenge={challenge} 
          onClick={() => handleShowChallenge}
        />
      ))}
    </ChallengeListWrapper>
  )
}

export default ChallengeList;