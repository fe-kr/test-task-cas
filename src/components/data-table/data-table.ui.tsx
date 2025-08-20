import { Table, type TableColumnType, type TableProps } from "antd";
import { type DataTableItem } from "./data-table.model";
import { dataTableColumnsConfig } from "./data-table.config";

interface DataTableProps extends TableProps<DataTableItem> {
  actionColumn: TableColumnType<DataTableItem>;
}

export const DataTable = ({ actionColumn, ...props }: DataTableProps) => {
  return (
    <Table
      {...props}
      rowKey="id"
      pagination={false}
      columns={[...dataTableColumnsConfig, actionColumn]}
    />
  );
};
