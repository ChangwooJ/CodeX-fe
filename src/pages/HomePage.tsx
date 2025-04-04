import ChallengeList from "../feature/challengeList/ChallengeList";
import styled from "styled-components";
import SearchConsol from "../feature/searchConsol/searchConsol";

const HomePageWrapper = styled.div`
  margin-left: 10%;
  width: 80%;
  height: 100vh;
  padding-top: 2%;
`;

const ChallengeListContainer = styled.div`
  width: 70%;
`;

const SearchConsolContainer = styled.div`

`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <SearchConsolContainer>
      </SearchConsolContainer>
      <ChallengeListContainer>
        <SearchConsol></SearchConsol>
        <ChallengeList />
      </ChallengeListContainer>
    </HomePageWrapper>
  );
};

export default HomePage;
