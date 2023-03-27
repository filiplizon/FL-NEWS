import { fetchNews } from "@/features/news/newsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { RootState } from "@/store/store";
import { Article } from "@/types/article";
import { Col, List, Typography } from "antd";
import { useEffect } from "react";
import Card from "../Card/Card";
import ListItem from "../ListItem/ListItem";
import styles from "./News.module.css";
const { Title } = Typography;

const News = () => {
  const dispatch = useAppDispatch();
  const { isListView, news, currentCountryCode } = useAppSelector(
    (state: RootState) => ({
      isListView: state.newsStructure.isListView,
      news: state.news.news,
      currentCountryCode: state.countries.currentCountryCode,
    })
  );

  useEffect(() => {
    dispatch(fetchNews());
  }, [currentCountryCode, dispatch]);

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
