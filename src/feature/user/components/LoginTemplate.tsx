import { useState } from "react";
import styled from "styled-components";
import { saveAuthTokens } from "../api/user.api";
import { UserLoginType } from "../type/userType";
import { useNavigate } from "react-router-dom";

const LoginTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7%;
`;

const LoginTitle = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 5% 0;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
`;

const ErrorMsg = styled.div`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-bottom: 8px;
`;

type LoginTemplateProps = {
  onMenuChange: (menu: string) => void;
};

const LoginTemplate = ({ onMenuChange }: LoginTemplateProps) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<UserLoginType>({
    email: "",
    password: "",
  });
  
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!loginData.email || !loginData.password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      await saveAuthTokens({ ...loginData });
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("로그인에 실패했습니다.");
    }
  };

  return (
    <LoginTemplateContainer>
      <LoginTitle>CodeX 로그인</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="이메일을 입력해 주세요"
          value={loginData.email}
          onChange={handleChange}
          autoComplete="username"
        />
        <Input
          type="password"
          name="password"
          placeholder="비밀번호를 입력해 주세요"
          value={loginData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        {error && <ErrorMsg>{error}</ErrorMsg>}
        <Button type="submit" style={{ background: "black", color: "white" }}>
          로그인하기
        </Button>
        <Button 
          type="button" 
          style={{ background: "white", color: "black", border: "1px solid var(--primary-border-color)" }}
          onClick={() => onMenuChange("signup")}
        >
          이메일 회원가입
        </Button>
      </LoginForm>
    </LoginTemplateContainer>
  );
};

export default LoginTemplate;