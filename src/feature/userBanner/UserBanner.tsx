import styled from "styled-components";
import { useAuthStore } from "../user/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { expireAuthTokens } from "../user/api/user.api";

const UserBannerContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 5%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 6px var(--primary-border-color);
  position: sticky;
  top: 10%;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
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

const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 3%;
  width: 100%;
  height: fit-content;
`;

const LoginTitle = styled.div`
  margin: 5% 0;
  font-weight: bold;
`;

const LoginButton = styled.button`
  width: 35%;
  background-color: #0078ff;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  border-radius: 5px;
  background-color: #f5f5f5;
  font-size: 0.7rem;
  padding: 0 1%;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background: #cbcbcb;
    color: white;
    transition: 0.5s;
  }
`;

const UserBanner = () => {
  const { accessToken } = useAuthStore();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    expireAuthTokens();
    alert("로그아웃 성공!");
  }

  return (
    <UserBannerContainer>
      {!accessToken && (
        <LoginSection>
          <LoginTitle>로그인하고 코딩테스트 연습을 시작하세요!</LoginTitle>
          <LoginButton onClick={() => navigate("/login")}>로그인</LoginButton>
        </LoginSection>
      )}
      {accessToken && (
        <>
          <UserInfo>
            ChangwooJ님!
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          </UserInfo>
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
        </>
      )}
    </UserBannerContainer>
  );
};

export default UserBanner;