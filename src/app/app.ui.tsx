import { Layout } from "antd";
import { AppHeader } from "./ui/app-header";
import { AppMain } from "./ui/app-main";
import { AppFooter } from "./ui/app-footer";

import styles from "./app.module.css";

export const App = () => {
  return (
    <Layout className={styles.container}>
      <Layout.Header className={styles.header}>
        <AppHeader />
      </Layout.Header>
      <Layout.Content className={styles.main}>
        <AppMain />
      </Layout.Content>
      <Layout.Footer className={styles.footer}>
        <AppFooter />
      </Layout.Footer>
    </Layout>
  );
};
