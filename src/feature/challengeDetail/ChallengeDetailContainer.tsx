import styled from "styled-components";
import ChallengeDetailHeader from "./components/ChallengeDetailHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useGetChallengeDetail } from "./query/challengeDetail.query";
import { useState } from "react";
import ChallengeInfo from "./components/ChallengeInfo";
import ChallengeSolution from "./components/ChallengeSolution";
import ChallengeDetailFooter from "./components/ChallengeDetailFooter";
import ChallengeSolutionResult from "./components/ChallengeSolutionResult";
import ChallengeSubmitted from "./components/ChallengeSubmitted";

const ChallengeDetailLogo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6%;
  font-weight: bold;
  padding-left: 1%;
  background-color: #0C151C;
  color: white;
`;

const LogoSection = styled.div`
  width: fit-content;
  height: fit-content;
  cursor: pointer;
`;

const ChallengeDetailHeaderContainer = styled.div`
  width: 100%;
  height: 7%;
  border-bottom: 1px solid var(--primary-section-color);
`;

const ChallengeDetailBody = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
`;

const ChallengeDetailInfoContainer = styled.div`
  width: 40%;
  height: 100%;
  border-right: 1px solid var(--primary-section-color);
  overflow-y: auto;
`;

const SolutionContainerWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ChallengeSolutionContainer = styled.div`
  width: 100%;
  height: 60%;
`;

const ChallengeSolutionResultContainer = styled.div`
  width: 100%;
  height: 40%;
`;

const ChallengeDetailFooterContainer = styled.div`
  width: 100%;
  height: 7%;
  border-top: 1px solid var(--primary-section-color);
`;

const ChallengeDetailContainer = () => {
  const { problemId } = useParams();
  const id = Number(problemId);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"title" | "submitted">("title");
  const [solutionCode, setSolutionCode] = useState<string>(
    `def solution(num1, num2):\n    answer = 0\n    return answer`
  );

  const { data } = useGetChallengeDetail(id);

  return (
    <>
      <ChallengeDetailLogo>
        <LogoSection onClick={() => navigate("/")}>CodeX</LogoSection>
      </ChallengeDetailLogo>
      <ChallengeDetailHeaderContainer>
        <ChallengeDetailHeader
          challenge={data}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ChallengeDetailHeaderContainer>
      <ChallengeDetailBody>
        {activeTab === "title" && (
          <ChallengeDetailInfoContainer>
            <ChallengeInfo challenge={data} />
          </ChallengeDetailInfoContainer>
        )}
        {activeTab === "submitted" && (
          <ChallengeDetailInfoContainer>
            <ChallengeSubmitted />
          </ChallengeDetailInfoContainer>
        )}
        <SolutionContainerWrapper>
          <ChallengeSolutionContainer>
            <ChallengeSolution code={solutionCode} setCode={setSolutionCode} />
          </ChallengeSolutionContainer>
          <ChallengeSolutionResultContainer>
            <ChallengeSolutionResult />
          </ChallengeSolutionResultContainer>
        </SolutionContainerWrapper>
      </ChallengeDetailBody>
      <ChallengeDetailFooterContainer>
        <ChallengeDetailFooter problemId={id} code={solutionCode} />
      </ChallengeDetailFooterContainer>
    </>
  );
}

export default ChallengeDetailContainer;