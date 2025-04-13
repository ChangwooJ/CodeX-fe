import styled from "styled-components";
import SearchImg from "../../assets/searchImg.svg?react";
import SearchReset from "../../assets/closeImg.svg?react";
import { useFilterStore } from "../../store/useFilterStore";
import { useNavigate } from "react-router-dom";

const SearchConsolWrapper = styled.div``;
const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  width: 100%;
  border: 1px solid var(--primary-border-color);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 1.5%;
  background-color: white;
`;
const SearchInput = styled.input`
  width: 90%;
  border: none;
  font-size: 1.1rem;
  text-indent: 10px;
  &::placeholder {
    color: var(--primary-border-color);
  }
`;
const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--primary-border-color);
  border-radius: 5px;
  height: 40px;
  width: 20%;
  margin-bottom: 3%;
  padding: 0 10px;
  background-color: white;
`;
const DifficultySelect = styled.select`
  border: none;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-weight: 550;
`;

const SearchConsol = () => {
  const { title, difficulty, setResetSearchTitle, setResetDifficulty, setSearchTitle, setDifficulty } = useFilterStore();
  const navigate = useNavigate();

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if(e.target.value === "난이도") {
      setResetDifficulty();
    } else {
      setDifficulty(Number(e.target.value));
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  
  const handleResetSearch = () => {
    setResetSearchTitle();
    console.log(title);
  }

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (title) params.set("title", title);
    if (difficulty !== undefined) params.set("difficulty", String(difficulty));
    navigate(`/?${params.toString()}`);
  };

  return (
    <SearchConsolWrapper>
      <SearchWrapper>
        <SearchInput 
          placeholder="풀고 싶은 문제 제목, 기출문제 검색" 
          value={title}
          onChange={(e) => setSearchTitle(e.target.value)}
          onKeyDown={handleKeyDown}  
        />
        {title && <SearchReset width={20} height={20} cursor={"pointer"} onClick={handleResetSearch} />}
        <SearchImg width={20} height={20} cursor={"pointer"} onClick={handleSearch} />
      </SearchWrapper>
      <FilterWrapper>
        <DifficultySelect value={difficulty} onChange={handleDifficultyChange}>
          <option value="난이도">난이도</option>
          <option value="0">Lv. 0</option>
          <option value="1">Lv. 1</option>
          <option value="2">Lv. 2</option>
          <option value="3">Lv. 3</option>
          <option value="4">Lv. 4</option>
          <option value="5">Lv. 5</option>
        </DifficultySelect>
      </FilterWrapper>
    </SearchConsolWrapper>
  )
}

export default SearchConsol;