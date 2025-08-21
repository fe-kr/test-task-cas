import { useState } from "react";
import { SearchBarContext } from "./search-bar.context";

export const SearchBarProvider = ({ children }: React.PropsWithChildren) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchBarContext value={{ searchValue, setSearchValue }}>
      {children}
    </SearchBarContext>
  );
};
