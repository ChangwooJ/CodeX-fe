import styled from "styled-components";
import { ChallengeDetailType } from "../type/challengeDetailType";

const ChallengeInfoWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 3%;
  color: #98A8B9;
`;
const ChallengeDescription = styled.div`
  width: 100%;
  height: fit-content;
  padding-bottom: 5%;
  border-bottom: 1px solid var(--primary-section-color);
`;
const DescriptionTitle = styled.div`
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;
const InOutputExample = styled.div`
  font-weight: bold;
  color: white;
  margin-top: 5%;
`;
const ExampleTable = styled.table`
  margin-top: 3%;
  width: auto;
  border-collapse: collapse; /* 경계선 정렬을 위한 추가 */
  table-layout: auto; /* 자동 너비 조정 */
  background-color: #202B3D;

  thead {
    color: white;
  }

  th, td {
    border: 1px solid var(--primary-section-color);
    padding: 8px 14px;
    text-align: center;
  }
`;

interface Props {
  challenge: ChallengeDetailType;
}

const ChallengeInfo = ({ challenge }: Props) => {
  const inputExamples = JSON.parse(challenge.exampleInput);
  const outputExamples = JSON.parse(challenge.exampleOutput);
  const inputHeader = inputExamples.map((_: null, idx: number) => `입력 ${idx + 1}`);
  
  return (
    <ChallengeInfoWrapper>
      <ChallengeDescription>
        <DescriptionTitle>문제 설명</DescriptionTitle>
        {challenge.description}
      </ChallengeDescription>
      <InOutputExample>입출력 예</InOutputExample>
      <ExampleTable>
        <thead>
          <tr>
            {inputHeader.map((header: string, index: number) => (
              <th key={index}>{header}</th>
            ))}
            <th>출력</th>
          </tr>
        </thead>
        <tbody>
          {inputExamples.map((input: string, index: number) => (
            <td key={index}>{input}</td>
          ))}
          <td>{outputExamples}</td>
        </tbody>
      </ExampleTable>
    </ChallengeInfoWrapper>
  );
};

export default ChallengeInfo;