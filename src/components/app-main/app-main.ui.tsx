import { useCallback, useDeferredValue, useMemo, useState } from "react";
import {
  useDataTableContext,
  type DataTableItem,
  DataTable,
} from "../data-table";
import { useSearchBarContext } from "../search-bar";
import { Button, Space } from "antd";
import { ModalForm } from "../modal-form";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const AppMain = () => {
  const [editId, setEditId] = useState<string | null>(null);
  const [tableData, setTableData] = useDataTableContext();
  const [searchValue] = useSearchBarContext();

  const deferredSearchValue = useDeferredValue(searchValue);

  const onStartEditing = useCallback((id: string) => setEditId(id), []);

  const onSubmitEditing = useCallback(
    (item: Omit<DataTableItem, "id">) => {
      setTableData((prevState) => ({
        ...prevState,
        [editId!]: { ...prevState[editId!], ...item },
      }));

      setEditId(null);
    },
    [editId, setTableData]
  );

  const onDeleteEntity = useCallback(
    (id: string) => {
      setTableData((prevState) => {
        const clonedState = { ...prevState };

        delete clonedState[id];

        return clonedState;
      });
    },
    [setTableData]
  );

  const actionColumn = useMemo(
    () => ({
      title: "Действия",
      key: "actions",
      ellipsis: true,
      render: (_: unknown, data: DataTableItem) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            onClick={() => onStartEditing(data.id)}
          ></Button>

          <Button
            icon={<DeleteOutlined />}
            onClick={() => onDeleteEntity(data.id)}
          ></Button>
        </Space>
      ),
    }),
    [onDeleteEntity, onStartEditing]
  );

  const dataSource = useMemo(
    () => Object.values(tableData),
    [tableData, deferredSearchValue]
  );

  return (
    <>
      <DataTable dataSource={dataSource} actionColumn={actionColumn} />

      <ModalForm
        isOpen={!!editId}
        title="Редактировать запись"
        onSubmit={onSubmitEditing}
        initialValues={tableData[editId!]}
        onCancel={() => setEditId(null)}
      />
    </>
  );
};
