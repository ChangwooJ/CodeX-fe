import styled from "styled-components";

const UserBannerContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 5%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 6px var(--primary-border-color);
  position: sticky;
  top: 10%;
`;

const UserInfo = styled.div`
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  color: #0078ff;
`;

const UserSubmmitted = styled.div`
  margin-top: 2%;
  display: flex;
`;

const SubmmittedInfo = styled.div`
  width: 30%;
  font-size: 0.9rem;
  color: #98A8B9;
`;

const InfoData = styled.div`
  margin-top: 5px;
  color: black;
  font-weight: bold;
`;

const UserBanner = () => {
  return (
    <UserBannerContainer>
      <UserInfo>ChangwooJ님!</UserInfo>
      <UserSubmmitted>
        <SubmmittedInfo>
          순위
          <InfoData>20,456위</InfoData>
        </SubmmittedInfo>
        <SubmmittedInfo>
          점수<InfoData>1,036점</InfoData>
        </SubmmittedInfo>
        <SubmmittedInfo>
          해결한 문제<InfoData>10개</InfoData>
        </SubmmittedInfo>
      </UserSubmmitted>
    </UserBannerContainer>
  );
};

export default UserBanner;