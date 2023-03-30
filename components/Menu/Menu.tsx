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
import { toggleSidebarVisibility } from "@/features/sidebar/sidebarSlice";
import { toggleModalVisibility } from "@/features/modal/modalSlice";
import {
  setCurrentArticle,
  toggleNewsStructure,
} from "@/features/news/newsSlice";

const MenuContainer = () => {
  const dispatch = useAppDispatch();

  const { isSidebarOpen, isListView } = useAppSelector((state: RootState) => ({
    isSidebarOpen: state.sidebar.isOpen,
    isListView: state.news.isListView,
  }));

  const handleToggleSidebarVisibility = () => {
    dispatch(toggleSidebarVisibility());
  };

  const handleToggleModalVisibility = () => {
    dispatch(setCurrentArticle(null));
    dispatch(toggleModalVisibility());
  };

  const handleToggleNewsStructure = () => {
    dispatch(toggleNewsStructure());
  };

  return (
    <Menu mode="horizontal" className={styles.menu}>
      {isListView ? (
        <Menu.Item
          onClick={handleToggleNewsStructure}
          key="1"
          className={styles.menu_item}
        >
          <IdcardOutlined style={{ fontSize: "18px" }} />
        </Menu.Item>
      ) : (
        <Menu.Item
          onClick={handleToggleNewsStructure}
          key="2"
          className={styles.menu_item}
        >
          <UnorderedListOutlined style={{ fontSize: "18px" }} />
        </Menu.Item>
      )}
      <Menu.Item
        onClick={handleToggleModalVisibility}
        key="3"
        className={styles.menu_item}
      >
        <InfoCircleOutlined style={{ fontSize: "18px" }} />
      </Menu.Item>
      <Menu.Item
        onClick={handleToggleSidebarVisibility}
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
