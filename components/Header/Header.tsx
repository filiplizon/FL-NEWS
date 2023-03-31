import { Layout, Row } from "antd";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

const { Header } = Layout;

const HeaderContainer = () => {
  return (
    <Header className={styles.header}>
      <Row className={styles.wrapper}>
        <Logo />
        <Menu />
      </Row>
    </Header>
  );
};

export default HeaderContainer;
