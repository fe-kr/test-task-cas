import type { TableColumnType, TableProps } from "antd";
import type { DataTableItem } from "./data-table.context";
import { formatDate } from "../../utils/format";
import { createElement } from "react";
import { DataTableActions } from "./ui/data-table-actions";

export const dataTableColumns: TableColumnType<DataTableItem>[] = [
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
    render: formatDate,
  },
  {
    title: "Количество",
    dataIndex: "count",
    key: "count",
    ellipsis: true,
    sorter: (a, b) => a.count - b.count,
  },
  {
    title: "Действия",
    key: "actions",
    ellipsis: true,
    render: (_, props) => createElement(DataTableActions, props),
  },
];

export const dataTableLocale: TableProps["locale"] = {
  emptyText: "Нет записей",
};
