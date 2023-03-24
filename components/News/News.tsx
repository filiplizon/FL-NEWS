import { Carousel, Col, Typography } from "antd";
import Card from "../Card/Card";
import styles from "./News.module.css";
const { Title } = Typography;

const News = () => {
  return (
    <div className={styles.wrapper}>
      <Col>
        <Title level={2}>Hot topics</Title>
        <Carousel className={styles.carousel}>
          <Card isBig /> <Card isBig /> <Card isBig />
        </Carousel>
        <Title level={3}>Latest news</Title>
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
        </Col>
      </Col>
    </div>
  );
};

export default News;
