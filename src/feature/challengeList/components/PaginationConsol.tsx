import styled from "styled-components";
import { VisiblePageNumber } from "../utils/VisiblePageNumber";
import { PageType } from "../types/challengeType";
import { useFilterStore } from "../../../store/useFilterStore";

const PaginationConsolContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PaginationConsolWrapper = styled.div`
  display: flex;
  gap: 3px;
`;
const PageNumber = styled.div<{ $isDisabled?: boolean; $isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  color: ${(props) => props.$isActive ? "gray" : "black"};
  background-color: ${(props) => props.$isActive ? "#e2e2e2" : "white"};
  border-radius: 5px;
  aspect-ratio: 1 / 1;
  border: 1px solid var(--primary-border-color);
  cursor: ${(props) => (props.$isDisabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$isDisabled ? 0.3 : 1)};
`;

const PaginationConsol = ({ page }: { page: PageType }) => {
  const { currentPage, setCurrentPage } = useFilterStore();
  const visiblePageNumber = VisiblePageNumber(page);

  const handlePagenavigate = (number: number) => {
    if (number < 0 || number > page.totalPage) return;
    setCurrentPage(number);
  }

  return (
    <PaginationConsolContainer>
      <PaginationConsolWrapper>
        <PageNumber
          onClick={() => handlePagenavigate(currentPage - 1)}
          $isDisabled={page.first}
        >
          {"<"}
        </PageNumber>
        {visiblePageNumber.map((number) => (
          <PageNumber
            key={number}
            onClick={() => handlePagenavigate(number - 1)}
            $isActive={currentPage === number - 1}
          >
            {number}
          </PageNumber>
        ))}
        <PageNumber
          onClick={() => handlePagenavigate(currentPage + 1)}
          $isDisabled={page.last}
          style={{
            cursor: page.last ? "not-allowed" : "pointer",
            opacity: page.last ? 0.5 : 1,
          }}
        >
          {">"}
        </PageNumber>
      </PaginationConsolWrapper>
    </PaginationConsolContainer>
  );
};

export default PaginationConsol;