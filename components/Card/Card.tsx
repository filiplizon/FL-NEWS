import { Card, Typography, Image, List } from "antd";
import { Article } from "@/types/article";
import styles from "./Card.module.css";
const { Title, Paragraph } = Typography;

type IProps = {
  isSlider?: boolean;
  article: Article;
  index: number;
};

const CardContainer = ({ isSlider, article, index }: IProps) => {
  return (
    <List.Item className={styles.card_wrapper} key={index}>
      <Card
        hoverable={!isSlider}
        cover={
          isSlider ? null : (
            <Image
              height={250}
              alt="news-avatar"
              src={article.urlToImage || "/news-placeholder.png"}
            />
          )
        }
        className={isSlider ? styles.card_big : styles.card}
      >
        <Title className={styles.card_title} level={5}>
          {article.title}
        </Title>
        <Paragraph className={styles.card_details}>
          {article.author || "Unknown author"}
        </Paragraph>
        <Paragraph className={styles.card_details}>
          {new Date(article.publishedAt).toLocaleDateString("pl-PL")}
        </Paragraph>
      </Card>
    </List.Item>
  );
};

export default CardContainer;
