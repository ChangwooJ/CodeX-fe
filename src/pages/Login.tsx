import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useFilterStore } from "../store/useFilterStore";
import UserTemplate from "../feature/user/UserTemplate";

const LoginContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #065ffb;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 10%;
  position: fixed;
`;

const LogoSection = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

const DescriptionSection = styled.div`
  width: 20%;
  height: fit-content;
  font-size: 1.4rem;
  color: white;
  font-weight: bold;
  margin: 0 15%;
  padding-top: 13%;
`;

const LoginSection = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 30%;
  height: fit-content;
  margin: 12% 5%;
`;

const Login = () => {
  const navigate = useNavigate();
  const { resetFilters } = useFilterStore();

  function handleHomeClick() {
    resetFilters();
    navigate("/");
  }

  return (
    <LoginContainer>
      <HeaderContainer>
        <LogoSection>
          <StyledLink to="/">
            <div
              onClick={handleHomeClick}
              style={{
                cursor: "pointer",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              CodeX
            </div>
          </StyledLink>
        </LogoSection>
      </HeaderContainer>
      <BodyContainer>
        <DescriptionSection>
          반가워요, 개발자의 성장을 돕는 <br/>CodeX입니다.
        </DescriptionSection>
        <LoginSection>
          <UserTemplate />
        </LoginSection>
      </BodyContainer>
    </LoginContainer>
  );
};

export default Login;