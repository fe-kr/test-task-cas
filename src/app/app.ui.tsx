import { Layout } from "antd";
import styles from "./app.module.css";
import { DataTableProvider } from "../components/data-table";
import { AppHeader } from "../components/app-header";
import { AppMain } from "../components/app-main";
import { SearchBarProvider } from "../components/search-bar";

export const App = () => {
  return (
    <DataTableProvider>
      <SearchBarProvider>
        <Layout className={styles.container}>
          <Layout.Header className={styles.header}>
            <AppHeader />
          </Layout.Header>
          <Layout.Content>
            <AppMain />
          </Layout.Content>
          <Layout.Footer>Footer</Layout.Footer>
        </Layout>
      </SearchBarProvider>
    </DataTableProvider>
  );
};
