import { useEffect, useState } from "react";
import ChallengeUnit from "./components/ChallengeUnit";
import { ChallengeType } from "./types/challengeType";

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
    <>
      {challenges.map((challenge) => (
        <ChallengeUnit 
          key={challenge.problem_id}
          challenge={challenge} 
          onClick={() => handleShowChallenge}
        />
      ))}
    </>
  )
}

export default ChallengeList;