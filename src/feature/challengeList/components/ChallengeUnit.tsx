import { ChallengeType } from "../types/challengeType";
import styled from "styled-components";
import { DifficultyCulculator } from "../utils/DifficultyCulculator";

const ListTitle = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--primary-border-color);
  gap: 5%;
  cursor: pointer;

  &:hover {
    background-color: rgb(250, 250, 250);
  }
`;

const ChallengeStatus = styled.div`
  width: 5%;
`;

const ChallengeTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ChallengeTitleMain = styled.div`
  font-size: 15px;
  width: 100%;
`;
const ChallengeTitleSub = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: 550;
  color: rgb(175, 175, 175);
`;
const ChallengeDifficulty = styled.div<{ color: string }>`
  font-size: 15px;
  text-align: center;
  width: 5%;
  color: ${(props) => props.color};
  font-weight: bold;
`;

const ChallengeSubmitted = styled.div`
  font-size: 15px;
  text-align: right;
  width: 10%;
`;

const ChallengeAccuracy = styled.div`
  font-size: 15px;
  text-align: right;
  width: 5%;
`;

interface ChallengeUnitProp {
  challenge: ChallengeType;
  onClick: () => void;
}

const ChallengeUnit = ({ challenge, onClick }: ChallengeUnitProp) => {
  const difficultyColor = DifficultyCulculator(challenge.difficulty);

  return (
    <ListTitle onClick={onClick}>
      <ChallengeStatus></ChallengeStatus>
      <ChallengeTitle>
        <ChallengeTitleMain>{challenge.title}</ChallengeTitleMain>
        <ChallengeTitleSub>{challenge.tag}</ChallengeTitleSub>
      </ChallengeTitle>
      <ChallengeDifficulty color={difficultyColor}>Lv. {challenge.difficulty}</ChallengeDifficulty>
      <ChallengeSubmitted>{challenge.total_submitted}명</ChallengeSubmitted>
      <ChallengeAccuracy>{challenge.total_accuracy}%</ChallengeAccuracy>
    </ListTitle>
  )
}

export default ChallengeUnit;