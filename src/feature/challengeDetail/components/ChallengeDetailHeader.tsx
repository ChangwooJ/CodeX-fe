import styled from "styled-components";
import { ChallengeDetailType } from "../type/challengeDetailType";

const HeaderTitles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
`;
const HeaderItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100%;
  margin: 0 10px;
  color: ${({ isActive }) => (isActive ? "white" : "#4F6B81")};
  border-bottom: 2px solid ${({ isActive }) => (isActive ? "white" : "none")};
  cursor: pointer;
`;

type TabType = "title" | "submitted";

interface Props {
  challenge: ChallengeDetailType;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const ChallengeDetailHeader = ({ challenge, activeTab, setActiveTab }: Props) => {

  return (
    <>
      <HeaderTitles>
        <HeaderItem
          isActive={activeTab === "title"}
          onClick={() => setActiveTab("title")}
        >
          {challenge.title}
        </HeaderItem>
        <HeaderItem
          isActive={activeTab === "submitted"}
          onClick={() => setActiveTab("submitted")}
        >
          제출 내역
        </HeaderItem>
      </HeaderTitles>
    </>
  );
}

export default ChallengeDetailHeader;