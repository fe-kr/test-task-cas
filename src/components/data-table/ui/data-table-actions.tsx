import { useDataTableContext, type DataTableItem } from "../data-table.context";
import { Button, Space, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useModalFormContext } from "../../modal-form";

export const DataTableActions = ({ id, ...props }: DataTableItem) => {
  const { actions } = useDataTableContext();

  const { openModal } = useModalFormContext();

  return (
    <Space>
      <Tooltip title="Редактировать">
        <Button
          icon={<EditOutlined />}
          onClick={() =>
            openModal({
              title: "Редактирование записи",
              onSubmit: (data) => actions.updateItem({ ...data, id }),
              initialValues: props,
            })
          }
        />
      </Tooltip>

      <Tooltip title="Удалить">
        <Button
          icon={<DeleteOutlined />}
          onClick={() => actions.deleteItem(id)}
        />
      </Tooltip>
    </Space>
  );
};
