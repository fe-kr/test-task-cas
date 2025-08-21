import { useCallback, useMemo, useState } from "react";
import { DataTableContext, type DataTableItem } from "./data-table.context";

export const DataTableProvider = ({ children }: React.PropsWithChildren) => {
  const [state, setState] = useState<Record<string, DataTableItem>>({});

  const createItem = useCallback((data: Omit<DataTableItem, "id">) => {
    const id = crypto.randomUUID();

    setState((prevState) => ({ ...prevState, [id]: { ...data, id } }));
  }, []);

  const updateItem = useCallback((data: DataTableItem) => {
    setState((prevState) => ({ ...prevState, [data.id]: data }));
  }, []);

  const deleteItem = useCallback((id: string) => {
    setState((prevState) => {
      const clonedState = { ...prevState };

      delete clonedState[id];

      return clonedState;
    });
  }, []);

  const dataSource = useMemo(() => Object.values(state), [state]);

  return (
    <DataTableContext
      value={{
        dataSource,
        actions: { createItem, updateItem, deleteItem },
      }}
    >
      {children}
    </DataTableContext>
  );
};
