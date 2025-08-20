import { Table, type TableProps } from "antd";
import { dataTableColumnsConfig } from "./data-table.config";
import { type DataTableItem } from "./data-table.model";

export const DataTable = (
  props: Omit<TableProps<DataTableItem>, "columns">
) => {
  return <Table {...props} columns={dataTableColumnsConfig} />;
};
