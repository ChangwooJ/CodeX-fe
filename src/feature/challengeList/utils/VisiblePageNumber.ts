import { PageType } from "../types/challengeType";

export const VisiblePageNumber = (page: PageType) => {
  const currentPage = page.currentPage;
  const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
  const totalPage = page.totalPage;
  const visibleNumber = [];

  if(startPage + 5 > totalPage) {
    for(let i = startPage; i <= totalPage; i++) {
      visibleNumber.push(i);
    }
  } else {
    for(let i = startPage; i <= startPage + 4; i++) {
      visibleNumber.push(i);
    }
  }

  return visibleNumber;
}