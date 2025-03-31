import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
`;

const HeaderContain = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoginButton = styled.button`
  border: 1px solid #939496;
  border-radius: 10px;
  padding: 3px 6px;
  background-color: #f6f6f6;
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();

  function handleHomeClick() {
    navigate("/");
  }

  return (
    <HeaderContainer>
      <HeaderContain>
        <Link to="/">
          <div onClick={handleHomeClick} style={{ cursor: "pointer" }}>
            CodeX
          </div>
        </Link>
        <LoginButton>로그인</LoginButton>
      </HeaderContain>
    </HeaderContainer>
  );
};

export default Header;
