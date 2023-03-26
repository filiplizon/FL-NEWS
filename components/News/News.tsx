import { useAppSelector } from "@/hooks/hooks";
import { RootState } from "@/store/store";
import { Avatar, Carousel, Col, List, Typography } from "antd";

import Card from "../Card/Card";
import styles from "./News.module.css";
const { Title } = Typography;

const News = () => {
  const isListView = useAppSelector(
    (state: RootState) => state.newsStructure.isListView
  );

  return (
    <div className={styles.wrapper}>
      <Col>
        <Title level={2}>Hot topics</Title>
        <Carousel className={styles.carousel}>
          <Card isSlider /> <Card isSlider /> <Card isSlider />
        </Carousel>
        <Title level={3}>Latest news</Title>
        {isListView ? (
          <List>
            <List.Item
              className={styles.news_list_item}
              key="1"
              extra={<span>11.03.1998</span>}
            >
              <img
                width={100}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
              <List.Item.Meta title="Tytuł kafelka" description="Źródło" />
            </List.Item>
            <List.Item
              className={styles.news_list_item}
              key="1"
              extra={<span>11.03.1998</span>}
            >
              <img
                width={100}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
              <List.Item.Meta title="Tytuł kafelka" description="Źródło" />
            </List.Item>
            <List.Item
              className={styles.news_list_item}
              key="1"
              extra={<span>11.03.1998</span>}
            >
              <img
                width={100}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
              <List.Item.Meta title="Tytuł kafelka" description="Źródło" />
            </List.Item>
            <List.Item
              className={styles.news_list_item}
              key="1"
              extra={<span>11.03.1998</span>}
            >
              <img
                width={100}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
              <List.Item.Meta title="Tytuł kafelka" description="Źródło" />
            </List.Item>
            <List.Item
              className={styles.news_list_item}
              key="1"
              extra={<span>11.03.1998</span>}
            >
              <img
                width={100}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
              <List.Item.Meta title="Tytuł kafelka" description="Źródło" />
            </List.Item>
            <List.Item
              className={styles.news_list_item}
              key="1"
              extra={<span>11.03.1998</span>}
            >
              <img
                width={100}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
              <List.Item.Meta title="Tytuł kafelka" description="Źródło" />
            </List.Item>
            <List.Item
              className={styles.news_list_item}
              key="1"
              extra={<span>11.03.1998</span>}
            >
              <img
                width={100}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
              <List.Item.Meta title="Tytuł kafelka" description="Źródło" />
            </List.Item>
          </List>
        ) : (
          <Col className={styles.news}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Col>
        )}
      </Col>
    </div>
  );
};

export default News;
