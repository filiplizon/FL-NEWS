import { Layout, Row } from "antd";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

const { Header } = Layout;

const HeaderContainer = () => {
  return (
    <Row className={styles.wrapper}>
      <Header className={styles.header}>
        <Logo />
        <Menu />
      </Header>
    </Row>
  );
};

export default HeaderContainer;
