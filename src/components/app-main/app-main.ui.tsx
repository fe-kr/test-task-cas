import { useMemo } from "react";
import { DataTable, useDataTableContext } from "../data-table";

export const AppMain = () => {
  const [tableData] = useDataTableContext();

  const dataSource = useMemo(() => Object.values(tableData!), [tableData]);

  return <DataTable dataSource={dataSource} />;
};
