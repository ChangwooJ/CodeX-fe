import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  border: 1px solid #939496;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #f6f6f6;
  cursor: pointer;
`;

const LoginSection = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;

const Header = () => {
  const navigate = useNavigate();

  function handleHomeClick() {
    navigate("/");
  }

  return (
    <HeaderContainer>
      <HeaderContain>
        <LogoSection>
          <Link to="/">
            <div 
              onClick={handleHomeClick} 
              style={{ cursor: "pointer", border: "1px solid black", padding: "10px 20px", borderRadius: "5px", fontSize: "1.2rem", textDecoration: "none", color: "inherit" }}
            >
              CodeX
            </div>
          </Link>
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
