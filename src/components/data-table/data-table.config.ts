import { type TableColumnType } from "antd";
import type { DataTableItem } from "./data-table.model";

export const dataTableColumnsConfig = [
  {
    title: "Имя",
    dataIndex: "name",
    key: "name",
    ellipsis: true,
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Дата",
    dataIndex: "date",
    key: "date",
    ellipsis: true,
    sorter: (a, b) => +a.date - +b.date,
    render: (value) =>
      value.toLocaleString("ru-RU", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
  },
  {
    title: "Количество",
    dataIndex: "count",
    key: "count",
    ellipsis: true,
    sorter: (a, b) => a.count - b.count,
  },
] satisfies TableColumnType<DataTableItem>[];
