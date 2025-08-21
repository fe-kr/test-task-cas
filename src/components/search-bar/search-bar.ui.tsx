import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useSearchBarContext } from "./search-bar.context";

export const SearchBar = () => {
  const { searchValue, setSearchValue } = useSearchBarContext();

  return (
    <Input
      placeholder="Поиск..."
      prefix={<SearchOutlined />}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};
