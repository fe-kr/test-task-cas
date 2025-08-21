import { memo } from "react";
import { Table, FloatButton, type TableProps } from "antd";
import { type DataTableItem } from "./data-table.context";
import { dataTableColumns, dataTableLocale } from "./data-table.config";

export const DataTable = memo((props: TableProps<DataTableItem>) => {
  return (
    <>
      <Table
        {...props}
        sticky
        rowKey="id"
        pagination={false}
        columns={dataTableColumns}
        locale={dataTableLocale}
      />

      <FloatButton.BackTop />
    </>
  );
});
