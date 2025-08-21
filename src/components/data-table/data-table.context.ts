import { createContext, useContext } from "react";

export interface DataTableItem {
  id: string;
  name: string;
  date: Date;
  count: number;
}

interface DataTableActions {
  createItem: (data: Omit<DataTableItem, "id">) => void;
  updateItem: (data: DataTableItem) => void;
  deleteItem: (id: string) => void;
}

interface DataTableContext {
  dataSource: DataTableItem[];
  actions: DataTableActions;
}

export const DataTableContext = createContext<DataTableContext>(null!);

export const useDataTableContext = () => useContext(DataTableContext);
