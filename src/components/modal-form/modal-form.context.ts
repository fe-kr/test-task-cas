import { createContext, useContext } from "react";
import type { ModalFormProps } from "./modal-form.ui";

export interface ModalFormContext {
  openModal: (props: ModalFormProps) => void;
  closeModal: () => void;
}

export const ModalFormContext = createContext<ModalFormContext>(null!);

export const useModalFormContext = () => useContext(ModalFormContext);
