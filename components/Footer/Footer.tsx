import { Divider, Row, Typography } from "antd";
import { Footer } from "antd/es/layout/layout";
import styles from "./Footer.module.css";
import CurrentTime from "../CurrentTime/CurrentTime";

const { Paragraph } = Typography;

const FooterContainer = () => {
  return (
    <Footer className={styles.footer}>
      <Paragraph className={styles.footer_text}>
        <CurrentTime />
      </Paragraph>
      <Divider type="vertical" className={styles.footer_divider}></Divider>
      <Paragraph className={styles.footer_text}>Articles: 65</Paragraph>
    </Footer>
  );
};

export default FooterContainer;
