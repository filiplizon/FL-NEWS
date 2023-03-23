import { Divider, Row, Typography } from "antd";
import { Footer } from "antd/es/layout/layout";
import styles from "./Footer.module.css";

const { Text } = Typography;

const FooterContainer = () => {
  return (
    <Footer className={styles.footer}>
      <Text className={styles.footer_text}>16:11</Text>
      <Divider type="vertical" className={styles.footer_divider}></Divider>
      <Text className={styles.footer_text}>Articles: 65</Text>
    </Footer>
  );
};

export default FooterContainer;
