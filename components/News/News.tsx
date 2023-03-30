import { useAppSelector } from "@/hooks/hooks";
import { RootState } from "@/store/store";
import { Article } from "@/types/article";
import { Col, List, Typography } from "antd";
import Card from "../Card/Card";
import ListItem from "../ListItem/ListItem";
import styles from "./News.module.css";
const { Title } = Typography;

const News = () => {
  const { isListView, news } = useAppSelector((state: RootState) => ({
    isListView: state.news.isListView,
    news: state.news.news,
  }));

  return (
    <Col className={styles.wrapper}>
      <Col>
        <Title level={3}>Latest news</Title>
        <List
          className={styles.news}
          dataSource={news}
          renderItem={(article: Article, index: number) =>
            isListView ? (
              <ListItem article={article} index={index} />
            ) : (
              <Card article={article} index={index} />
            )
          }
        />
      </Col>
    </Col>
  );
};

export default News;
