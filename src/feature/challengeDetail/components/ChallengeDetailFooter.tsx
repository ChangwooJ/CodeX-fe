import styled from "styled-components";

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

const ChallengeDetailFooter = () => {
  return (
    <DetailFooter>
      <FooterButton>초기화</FooterButton>
      <FooterButton>코드 실행</FooterButton>
      <FooterButton style={{ backgroundColor: "#0078ff" }}>
        제출 후 채점하기
      </FooterButton>
    </DetailFooter>
  );
};

export default ChallengeDetailFooter;