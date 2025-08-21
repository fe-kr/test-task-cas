import { Button, Flex } from "antd";
import { useDataTableContext } from "../../components/data-table";
import { SearchBar } from "../../components/search-bar";
import { useModalFormContext } from "../../components/modal-form";

export const AppHeader = () => {
  const { openModal } = useModalFormContext();

  const { actions } = useDataTableContext();

  const onCreateNewEntity = () =>
    openModal({
      title: "Добавление записи",
      clearOnDestroy: true,
      onSubmit: actions.createItem,
    });

  return (
    <Flex gap="middle" flex={1} align="center" justify="space-between">
      <SearchBar />

      <Button type="primary" onClick={onCreateNewEntity}>
        Добавить
      </Button>
    </Flex>
  );
};
