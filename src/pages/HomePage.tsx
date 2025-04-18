import ChallengeList from "../feature/challengeList/ChallengeList";
import styled from "styled-components";
import SearchConsol from "../feature/searchConsol/searchConsol";
import UserBanner from "../feature/userBanner/UserBanner";

const HomePageWrapper = styled.div`
  padding: 2% 10% 4% 10%;
  width: 100%;
  height: fit-content;
  background-color: var(--primary-background-color);
  display: flex;
`;

const ChallengeListContainer = styled.div`
  width: 70%;
`;

const UserContainer = styled.div`
  margin-left: 2%;
  width: 28%;
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <ChallengeListContainer>
        <SearchConsol></SearchConsol>
        <ChallengeList />
      </ChallengeListContainer>
      <UserContainer>
        <UserBanner />
      </UserContainer>
    </HomePageWrapper>
  );
};

export default HomePage;
