import styled from "styled-components";
import ChallengeDetailContainer from "../feature/challengeDetail/ChallengeDetailContainer";

const ChallengeDetailWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-color: #263747;
`;

const ChallengeDetail = () => {
 return (
  <ChallengeDetailWrapper>
    <ChallengeDetailContainer />
  </ChallengeDetailWrapper>
 );
};

export default ChallengeDetail;