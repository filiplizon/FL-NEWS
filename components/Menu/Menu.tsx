import { Menu } from "antd";
import styles from "./Menu.module.css";
import {
  UnorderedListOutlined,
  IdcardOutlined,
  InfoCircleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { useAppDispatch } from "@/hooks/hooks";
import { toggleVisibility } from "@/features/sidebarSlice/sidebarSlice";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const MenuContainer = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  const handleToggleVisibility = () => {
    dispatch(toggleVisibility());
  };

  return (
    <Menu mode="horizontal" className={styles.menu}>
      <Menu.Item key="1" className={styles.menu_item}>
        {/* <IdcardOutlined className={styles.menu_icon}/> */}
        <UnorderedListOutlined style={{ fontSize: "18px" }} />
      </Menu.Item>
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
