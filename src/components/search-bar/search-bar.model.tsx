import { createContext, useContext } from "react";
import {
  createProvider,
  type DefaultContextValue,
} from "../../utils/create-provider";

type SearchBarContext = DefaultContextValue<string>;

const SearchBarContext = createContext<SearchBarContext>(null!);

// eslint-disable-next-line react-refresh/only-export-components
export const useSearchBarContext = () => useContext(SearchBarContext);

export const SearchBarProvider = createProvider(SearchBarContext, "");
