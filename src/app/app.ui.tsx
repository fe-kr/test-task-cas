import { Layout } from "antd";
import styles from "./app.module.css";

export const App = () => {
  return (
    <Layout className={styles.container}>
      <Layout.Header>
        Header
      </Layout.Header>
      <Layout.Content>
        Content
      </Layout.Content>
      <Layout.Footer>
        Footer
      </Layout.Footer>
    </Layout>
  );
};
