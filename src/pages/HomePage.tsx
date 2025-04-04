import ChallengeList from "../feature/challengeList/ChallengeList";
import styled from "styled-components";

const HomePageWrapper = styled.div`
  margin-left: 10%;
  width: 80%;
  height: 100vh;
  padding-top: 2%;
`;

const ChallengeListContainer = styled.div`
  width: 70%;
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <ChallengeListContainer>
        <ChallengeList />
      </ChallengeListContainer>
    </HomePageWrapper>
  );
};

export default HomePage;
