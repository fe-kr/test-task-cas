import { Layout } from "antd";
import styles from "./app.module.css";
import { DataTableProvider } from "../components/data-table";
import { AppHeader } from "../components/app-header";
import { AppMain } from "../components/app-main";

export const App = () => {
  return (
    <DataTableProvider>
      <Layout className={styles.container}>
        <Layout.Header className={styles.header}>
          <AppHeader />
        </Layout.Header>
        <Layout.Content>
          <AppMain />
        </Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </DataTableProvider>
  );
};
