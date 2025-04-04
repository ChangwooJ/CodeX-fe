import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type FilterStore = {
  difficulty?: number;
  setDifficulty: (difficult: number) => void;
  tags?: string;
  setTags: (tag: string) => void;
  title?: string;
  setSearchTitle: (searchKey: string) => void;
};

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      difficulty: undefined,
      tags: undefined,
      title: undefined,

      setSearchTitle: (searchKey) => 
        set(() => ({ title: searchKey })),

      setDifficulty: (difficult) => 
        set(() => ({ difficulty: difficult })),

      setTags: (tag) => 
        set(() => ({ tags: tag })),
      
      resetFilters: () =>
        set(() => ({
          difficulty: undefined,
          tags: undefined,
          title: undefined,
        })),
    }),
    {
      name: "filter-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);