import { ChallengeType } from "../types/challengeType";

interface ChallengeUnitProp {
  challenge: ChallengeType;
  onClick: () => void;
}

const ChallengeUnit = ({ challenge, onClick }: ChallengeUnitProp) => {
  return (
    <>
    <div onClick={onClick}>
      <h3>{challenge.title}</h3>
      <p>{challenge.difficulty}</p>
    </div>
    </>
  )
}

export default ChallengeUnit;