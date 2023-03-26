import { RootState } from "@/store/store";
import { Menu } from "antd";
import styles from "./Menu.module.css";
import {
  UnorderedListOutlined,
  IdcardOutlined,
  InfoCircleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { toggleVisibility } from "@/features/sidebarSlice/sidebarSlice";
import { toggleNewsStructure } from "@/features/newsStructureSlice/newsStructureSlice";

const MenuContainer = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(
    (state: RootState) => state.sidebar.isOpen
  );
  const isListView = useAppSelector(
    (state: RootState) => state.newsStructure.isListView
  );

  const handleToggleVisibility = () => {
    dispatch(toggleVisibility());
  };

  const handletoggleNewsStructure = () => {
    dispatch(toggleNewsStructure());
  };

  return (
    <Menu mode="horizontal" className={styles.menu}>
      {isListView ? (
        <Menu.Item
          onClick={handletoggleNewsStructure}
          key="1"
          className={styles.menu_item}
        >
          <IdcardOutlined style={{ fontSize: "18px" }} />
        </Menu.Item>
      ) : (
        <Menu.Item
          onClick={handletoggleNewsStructure}
          key="2"
          className={styles.menu_item}
        >
          <UnorderedListOutlined style={{ fontSize: "18px" }} />
        </Menu.Item>
      )}
      <Menu.Item key="2" className={styles.menu_item}>
        <InfoCircleOutlined style={{ fontSize: "18px" }} />
      </Menu.Item>
      <Menu.Item
        onClick={handleToggleVisibility}
        key="4"
        className={styles.menu_item_mobile}
        style={{
          transform: isSidebarOpen ? "rotate(180deg)" : "rotate(0)",
        }}
      >
        <ArrowLeftOutlined style={{ fontSize: "18px" }} />
      </Menu.Item>
    </Menu>
  );
};

export default MenuContainer;
