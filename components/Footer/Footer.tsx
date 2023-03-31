import { Divider, Typography } from "antd";
import { Footer } from "antd/lib/layout/layout";
import styles from "./Footer.module.css";
import CurrentTime from "../CurrentTime/CurrentTime";
import { useAppSelector } from "@/hooks/hooks";
import { RootState } from "@/store/store";

const { Paragraph } = Typography;

const FooterContainer = () => {
  const { news } = useAppSelector((state: RootState) => ({
    news: state.news.news,
  }));

  return (
    <Footer className={styles.footer}>
      <Paragraph className={styles.footer_text}>
        <CurrentTime />
      </Paragraph>
      {news.length ? (
        <>
          <Divider type="vertical" className={styles.footer_divider}></Divider>
          <Paragraph className={styles.footer_text}>
            Articles: {news.length}
          </Paragraph>
        </>
      ) : null}
    </Footer>
  );
};

export default FooterContainer;
