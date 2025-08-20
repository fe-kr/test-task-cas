import { createProvider } from "../../utils/create-provider";
import { DataTableContext } from "./data-table.model";

export { useDataTableContext, type DataTableItem } from "./data-table.model";
export { dataTableColumnsConfig } from "./data-table.config";
export { DataTable } from "./data-table.ui";

export const DataTableProvider = createProvider(DataTableContext, {});
