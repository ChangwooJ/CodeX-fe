import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type FilterStore = {
  difficulty?: number | undefined;
  setDifficulty: (difficult: number) => void;
  setResetDifficulty: () => void;
  tags?: string;
  setTags: (tag: string) => void;
  title?: string;
  setSearchTitle: (searchKey: string) => void;
  setResetSearchTitle: () => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  resetFilters: () => void;
};

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      difficulty: undefined,
      tags: undefined,
      title: undefined,
      currentPage: 0,

      setSearchTitle: (searchKey) => 
        set(() => ({ title: searchKey })),

      setResetSearchTitle: () =>
        set(() => ({ title: undefined })),

      setDifficulty: (difficult) => 
        set(() => ({ difficulty: difficult })),

      setResetDifficulty: () =>
        set(() => ({ difficulty: undefined })),

      setTags: (tag) => 
        set(() => ({ tags: tag })),

      setCurrentPage: (page) =>
        set(() => ({ currentPage: page })),
      
      resetFilters: () =>
        set(() => ({
          difficulty: undefined,
          tags: undefined,
          title: undefined,
          currentPage: 0,
        })),
    }),
    {
      name: "filter-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);