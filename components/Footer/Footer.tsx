import { Divider, Select, Typography } from "antd";
import { Footer } from "antd/lib/layout/layout";
import styles from "./Footer.module.css";
import CurrentTime from "../CurrentTime/CurrentTime";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { RootState } from "@/store/store";
import { setNumberOfArticles } from "@/features/news/newsSlice";

const { Paragraph } = Typography;
const { Option } = Select;

const FooterContainer = () => {
  const dispatch = useAppDispatch();

  const { news, numberOfArticles } = useAppSelector((state: RootState) => ({
    news: state.news.news,
    numberOfArticles: state.news.numberOfArticles,
  }));

  const handleSelectChange = (value: number) => {
    dispatch(setNumberOfArticles(value));
  };

  return (
    <Footer className={styles.footer}>
      <Paragraph className={styles.footer_text}>
        <CurrentTime />
      </Paragraph>
      {news.length && (
        <>
          <Divider type="vertical" className={styles.footer_divider}></Divider>
          <Paragraph className={styles.footer_text}>Articles:</Paragraph>
          <Select
            size="small"
            defaultValue={numberOfArticles}
            onChange={handleSelectChange}
          >
            <Option value={10}>10</Option>
            <Option value={20}>20</Option>
            <Option value={50}>50</Option>
          </Select>
        </>
      )}
    </Footer>
  );
};

export default FooterContainer;
