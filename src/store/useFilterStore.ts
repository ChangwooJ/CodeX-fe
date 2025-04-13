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
};

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      difficulty: undefined,
      tags: undefined,
      title: undefined,

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