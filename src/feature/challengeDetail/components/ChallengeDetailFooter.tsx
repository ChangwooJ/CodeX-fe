import axios from "axios";
import styled from "styled-components";
import { useAuthStore } from "../../user/store/useAuthStore";

const DetailFooter = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: right;
  align-items: center;
  gap: 10px;
  padding-right: 1%;
`;

const FooterButton = styled.button`
  width: fit-content;
  height: fit-content;
  font-size: 1.05rem;
  background-color: #48586f;
  border: none;
  border-radius: 5px;
  padding: 0.5% 0.7%;
  color: white;
  cursor: pointer;
`;

type ChallengeDetailFooterProps = {
  problemId: number;
  code: string;
};

const ChallengeDetailFooter = ({ problemId, code }: ChallengeDetailFooterProps) => {
  const { userId } = useAuthStore();

  const handleSummit = async () => {
    if (!userId) {
      alert("로그인이 필요합니다!");
      return;
    }
    if (!code?.trim()) {
      alert("코드를 입력해주세요!");
      return;
    }
    try {
      console.log(code);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/submissions`,
        { problemId, userId, code, language: "python" },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      alert("제출 완료!");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // 서버가 4xx/5xx 응답
          console.error("서버 응답 오류:", error.response.data);
        } else if (error.request) {
          // 요청 전송 성공, 응답 없음 (CORS/네트워크 문제)
          console.error("서버 응답 없음:", error.request);
        } else {
          // 요청 설정 오류
          console.error("요청 설정 오류:", error.message);
        }
      } else {
        console.error("알 수 없는 오류:", error);
      }
    }
    
  };

  return (
    <DetailFooter>
      <FooterButton>초기화</FooterButton>
      <FooterButton>코드 실행</FooterButton>
      <FooterButton onClick={handleSummit} style={{ backgroundColor: "#0078ff" }}>
        제출 후 채점하기
      </FooterButton>
    </DetailFooter>
  );
};

export default ChallengeDetailFooter;