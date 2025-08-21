import { Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";

export const AppFooter = () => {
  return (
    <Button
      type="link"
      icon={<GithubOutlined />}
      href="https://github.com/fe-kr/test-task-cas"
    />
  );
};
