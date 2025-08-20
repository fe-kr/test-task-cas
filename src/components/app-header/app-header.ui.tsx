import { Button, Flex } from "antd";
import { useState } from "react";
import { ModalForm } from "../modal-form";
import { useDataTableContext, type DataTableItem } from "../data-table";
import { SearchBar } from "../search-bar";

export const AppHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [, setTableData] = useDataTableContext();

  const onCreateNewEntity = (data: Omit<DataTableItem, "id">) => {
    const id = crypto.randomUUID();

    setTableData((prevState) => ({ ...prevState, [id]: { ...data, id } }));

    setIsModalOpen(false);
  };

  return (
    <Flex gap="middle" flex={1} justify="space-between">
      <SearchBar />

      <Button type="primary" size="large" onClick={() => setIsModalOpen(true)}>
        Добавить
      </Button>

      <ModalForm
        isOpen={isModalOpen}
        title="Добавить запись"
        onSubmit={onCreateNewEntity}
        onCancel={() => setIsModalOpen(false)}
      />
    </Flex>
  );
};
