import { Grid } from "antd";
import { useDeferredValue, useMemo } from "react";
import { useDataTableContext, DataTable } from "../../components/data-table";
import { useSearchBarContext } from "../../components/search-bar";
import { searchByRegex } from "../../utils/search";
import { formatDate } from "../../utils/format";

export const AppMain = () => {
  const { dataSource } = useDataTableContext();
  const { searchValue } = useSearchBarContext();
  const screens = Grid.useBreakpoint();

  const deferredSearchValue = useDeferredValue(searchValue);

  const filteredDataSource = useMemo(() => {
    return searchByRegex({
      data: dataSource!,
      keys: ["name", "date", "count"],
      formatters: {
        date: (data) => formatDate(data as Date),
      },
      regex: new RegExp(deferredSearchValue, "i"),
    });
  }, [dataSource, deferredSearchValue]);

  return (
    <DataTable
      dataSource={filteredDataSource}
      size={screens.xs ? "small" : undefined}
    />
  );
};
