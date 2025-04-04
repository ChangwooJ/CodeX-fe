import styled from "styled-components";

const SearchConsolWrapper = styled.div``;
const SearchWrapper = styled.div``;
const FilterWrapper = styled.div``;
const SearchInput = styled.input``;

const SearchConsol = () => {
  return (
    <SearchConsolWrapper>
      <SearchWrapper>
        <SearchInput placeholder="풀고 싶은 문제 제목, 기출문제 검색" />
      </SearchWrapper>
      <FilterWrapper></FilterWrapper>
    </SearchConsolWrapper>
  )
}

export default SearchConsol;