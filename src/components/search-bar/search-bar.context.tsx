import { createContext, useContext } from "react";

interface SearchBarContext {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const SearchBarContext = createContext<SearchBarContext>(null!);

export const useSearchBarContext = () => useContext(SearchBarContext);
