import { Layout } from "antd";
import styles from "./app.module.css";
import { DataTable, DataTableProvider } from "../components/data-table";

export const App = () => {
  return (
    <DataTableProvider>
      <Layout className={styles.container}>
        <Layout.Header>Header</Layout.Header>
        <Layout.Content>
          <DataTable />
        </Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </DataTableProvider>
  );
};
