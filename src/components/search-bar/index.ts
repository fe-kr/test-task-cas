import { createProvider } from "../../utils/create-provider";
import { SearchBarContext } from "./search-bar.model";

export { SearchBar } from "./search-bar.ui";
export { SearchBarContext, useSearchBarContext } from "./search-bar.model";

export const SearchBarProvider = createProvider(SearchBarContext, "");
