import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useFilterStore } from "../../store/useFilterStore";

const HeaderContainer = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
`;

const LogoSection = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContain = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavigationSection = styled.div`
  width: 60%;
`;

const LoginButton = styled.button`
  border: 1px solid var(--primary-border-color);
  border-radius: 5px;
  padding: 7px 15px;
  background-color: transparent;
  font-weight: bold;
  cursor: pointer;
`;

const LoginSection = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Header = () => {
  const navigate = useNavigate();
  const { resetFilters } = useFilterStore();

  function handleHomeClick() {
    resetFilters();
    navigate("/");
  }

  return (
    <HeaderContainer>
      <HeaderContain>
        <LogoSection>
          <StyledLink to="/">
            <div
              onClick={handleHomeClick}
              style={{ cursor: "pointer", fontSize: "2rem", fontWeight: "bold" }}
            >
              CodeX
            </div>
          </StyledLink>
        </LogoSection>
        <NavigationSection></NavigationSection>
        <LoginSection>
          <LoginButton>로그인</LoginButton>
        </LoginSection>
      </HeaderContain>
    </HeaderContainer>
  );
};

export default Header;
