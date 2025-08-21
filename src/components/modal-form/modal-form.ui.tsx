import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  type ModalProps,
} from "antd";
import type { DataTableItem } from "../data-table";

type FormData = Omit<DataTableItem, "id">;

export interface ModalFormProps extends ModalProps {
  onSubmit: (values: FormData) => void;
  initialValues?: FormData;
  clearOnDestroy?: boolean;
}

export const ModalForm = ({
  onSubmit,
  initialValues,
  clearOnDestroy,
  ...props
}: ModalFormProps) => {
  const [form] = Form.useForm();

  return (
    <Modal
      {...props}
      okText="Ок"
      cancelText="Отмена"
      okButtonProps={{ htmlType: "submit" }}
      destroyOnHidden
      modalRender={(dom) => (
        <Form
          layout="vertical"
          autoComplete="off"
          name="modal-form"
          form={form}
          initialValues={initialValues}
          clearOnDestroy={clearOnDestroy}
          onFinish={onSubmit}
        >
          {dom}
        </Form>
      )}
    >
      <Form.Item<FormData> label="Имя" name="name" rules={[requiredField]}>
        <Input />
      </Form.Item>

      <Form.Item<FormData> label="Дата" name="date" rules={[requiredField]}>
        <DatePicker />
      </Form.Item>

      <Form.Item<FormData>
        name="count"
        label="Количество"
        rules={[requiredField]}
      >
        <InputNumber min={0} max={1000} />
      </Form.Item>
    </Modal>
  );
};

const requiredField = { required: true, message: "Обязательное поле" };
