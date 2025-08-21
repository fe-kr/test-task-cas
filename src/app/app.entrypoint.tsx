import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.ui.tsx";
import { DataTableProvider } from "../components/data-table";
import { ModalFormProvider } from "../components/modal-form";
import { SearchBarProvider } from "../components/search-bar";

import "@ant-design/v5-patch-for-react-19";
import "antd/dist/reset.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataTableProvider>
      <SearchBarProvider>
        <ModalFormProvider>
          <App />
        </ModalFormProvider>
      </SearchBarProvider>
    </DataTableProvider>
  </StrictMode>
);
