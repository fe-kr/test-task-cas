import { useDeferredValue, useMemo } from "react";
import { DataTable, useDataTableContext } from "../data-table";
import { useSearchBarContext } from "../search-bar";

export const AppMain = () => {
  const [tableData] = useDataTableContext();
  const [searchValue] = useSearchBarContext();

  const deferredSearchValue = useDeferredValue(searchValue);

  const dataSource = useMemo(
    () =>
      Object.values(tableData),
    [tableData, deferredSearchValue]
  );

  return <DataTable dataSource={dataSource} />;
};
