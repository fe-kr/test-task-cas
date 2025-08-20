import { createContext, useContext } from "react";
import { type DefaultContextValue } from "../../utils/create-provider";

export interface DataTableItem {
  id: string;
  name: string;
  date: Date;
  count: number;
}

type DataTableContext = DefaultContextValue<Record<string, DataTableItem>>;

export const DataTableContext = createContext<DataTableContext>(null!);

export const useDataTableContext = () => useContext(DataTableContext);
