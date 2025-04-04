import { create } from "zustand";
import { persist } from "zustand/middleware";

type FilterStore = {
  difficulty: number;
  tages: string;
  title: string;
  setSearchTitle: (text: string) => void;
};

export const useFilterStore = create<FilterStore>()(
  persist (
    (set) => ({
      difficulty: undefined,
      tages: undefined,
      title: undefined,

      setSearchTitle: (searchKey) => 
        set(() => ({ title: searchKey }))

    })
  )
);