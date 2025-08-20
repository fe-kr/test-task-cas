import { createContext, useContext } from "react";
import { type DefaultContextValue } from "../../utils/create-provider";

type SearchBarContext = DefaultContextValue<string>;

export const SearchBarContext = createContext<SearchBarContext>(null!);

export const useSearchBarContext = () => useContext(SearchBarContext);
