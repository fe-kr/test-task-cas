import type { TableColumnType } from "antd";
import type { DataTableItem } from "./data-table.model";

export const dataTableColumnsConfig = [
  {
    title: "Имя",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Дата",
    dataIndex: "date",
    key: "date",
    sorter: (a, b) => +a.date - +b.date,
    render: (value) => value.toString(),
  },
  {
    title: "Количество",
    dataIndex: "count",
    key: "count",
    sorter: (a, b) => a.count - b.count,
  },
] satisfies TableColumnType<DataTableItem>[];

