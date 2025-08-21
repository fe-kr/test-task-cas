import { useMemo, useState } from "react";
import { ModalFormContext } from "./modal-form.context";
import { ModalForm, type ModalFormProps } from "./modal-form.ui";

export const ModalFormProvider = ({ children }: React.PropsWithChildren) => {
  const [state, setState] = useState<ModalFormProps | null>(null);

  const actions = useMemo(
    () => ({ openModal: setState, closeModal: () => setState(null) }),
    []
  );

  return (
    <ModalFormContext value={actions}>
      {children}

      <ModalForm
        {...state}
        open={!!state}
        onSubmit={(data) => {
          state?.onSubmit(data);
          actions.closeModal();
        }}
        onCancel={state?.onCancel ?? actions.closeModal}
      />
    </ModalFormContext>
  );
};
