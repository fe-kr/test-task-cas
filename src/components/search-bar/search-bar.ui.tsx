import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { useSearchBarContext } from "./search-bar.model";

export const SearchBar = () => {
  const [value, setValue] = useSearchBarContext();

  return (
    <Input
      size="large"
      placeholder="Поиск..."
      prefix={<SearchOutlined />}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
