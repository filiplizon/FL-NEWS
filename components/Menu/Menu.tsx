import { Menu } from "antd";
import styles from "./Menu.module.css";
import {
  UnorderedListOutlined,
  IdcardOutlined,
  InfoCircleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

const MenuContainer = () => {
  return (
    <Menu mode="horizontal" className={styles.menu}>
      <Menu.Item key="1" className={styles.menu_item}>
        {/* <IdcardOutlined className={styles.menu_icon}/> */}
        <UnorderedListOutlined style={{ fontSize: "18px" }} />
      </Menu.Item>
      <Menu.Item key="2" className={styles.menu_item}>
        <InfoCircleOutlined style={{ fontSize: "18px" }} />
      </Menu.Item>
      <Menu.Item key="3" className={styles.menu_item_mobile}>
        <ArrowLeftOutlined style={{ fontSize: "18px" }} />
      </Menu.Item>
    </Menu>
  );
};

export default MenuContainer;
