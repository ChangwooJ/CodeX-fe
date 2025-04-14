import styled from "styled-components";

const ResultWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid var(--primary-section-color);
`;

const ResultTitle = styled.div`
  width: 100%;
  height: fit-content;
  color: #5F7F90;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 2%;
  border-bottom: 1px solid var(--primary-section-color);
`;

const ResultBody = styled.div`
  width: 100%;
  height: auto;
  padding: 2%;
  color: #7890A0;
`;

const ChallengeSolutionResult = () => {
  return (
    <ResultWrapper>
      <ResultTitle>실행 결과</ResultTitle>
      <ResultBody>
        실행 결과가 여기에 표시됩니다.
      </ResultBody>
    </ResultWrapper>
  );
};

export default ChallengeSolutionResult;