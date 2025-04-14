import styled from "styled-components";
import ChallengeDetailHeader from "./components/ChallengeDetailHeader";
import { useParams } from "react-router-dom";
import { useGetChallengeDetail } from "./query/challengeDetail.query";
import { useState } from "react";
import ChallengeInfo from "./components/ChallengeInfo";

const ChallengeDetailHeaderContainer = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid var(--primary-section-color);
`;

const ChallengeDetailInfoContainer = styled.div`
  width: 40%;
  height: 80%;
  border-right: 1px solid var(--primary-section-color);
  overflow-y: auto;
`;

const ChallengeDetailContainer = () => {
  const { problemId } = useParams();
  const id = Number(problemId);
  const [activeTab, setActiveTab] = useState<"title" | "submitted">("title");

  const { data } = useGetChallengeDetail(id);

  return (
    <>
      <ChallengeDetailHeaderContainer>
        <ChallengeDetailHeader
          challenge={data}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ChallengeDetailHeaderContainer>
      {activeTab === "title" && (
        <ChallengeDetailInfoContainer>
          <ChallengeInfo challenge={data} />
        </ChallengeDetailInfoContainer>
      )}
    </>
  );
}

export default ChallengeDetailContainer;