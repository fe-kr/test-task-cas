import { DatePicker, Form, Input, InputNumber, Modal } from "antd";
import { type DataTableItem } from "../data-table";
import { useEffect } from "react";

type FormData = Omit<DataTableItem, "id">;

interface ModalFormProps {
  title: string;
  isOpen?: boolean;
  onSubmit: (value: FormData) => void;
  onCancel: () => void;
  initialValues?: FormData;
}

export const ModalForm = ({
  title,
  isOpen,
  onSubmit,
  initialValues,
  onCancel,
}: ModalFormProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (isOpen) form.setFieldsValue(initialValues);
  }, [form, isOpen, initialValues]);

  return (
    <Modal
      open={isOpen}
      title={title}
      okText="Ок"
      cancelText="Отмена"
      okButtonProps={{ htmlType: "submit" }}
      onCancel={onCancel}
      destroyOnHidden
      modalRender={(dom) => (
        <Form
          layout="vertical"
          autoComplete="off"
          name="modal-form"
          form={form}
          initialValues={initialValues}
          onFinish={onSubmit}
        >
          {dom}
        </Form>
      )}
    >
      <Form.Item<FormData> label="Имя" name="name" rules={rules.name}>
        <Input />
      </Form.Item>

      <Form.Item<FormData>
        label="Дата"
        name="date"
        rules={rules.date}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item<FormData> name="count" label="Количество" rules={rules.count}>
        <InputNumber />
      </Form.Item>
    </Modal>
  );
};

const rules = {
  name: [{ required: true, message: "Имя не заполнено" }],
  date: [{ required: true, message: "Дата не заполнена" }],
  count: [{ required: true, message: "Количество не заполнено" }],
};
