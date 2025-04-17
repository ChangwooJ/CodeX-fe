import ChallengeList from "../feature/challengeList/ChallengeList";
import styled from "styled-components";
import SearchConsol from "../feature/searchConsol/searchConsol";

const HomePageWrapper = styled.div`
  padding: 2% 10% 4% 10%;
  width: 100%;
  height: fit-content;
  background-color: var(--primary-background-color);
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
