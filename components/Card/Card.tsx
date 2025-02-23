import { Card, Typography, List, Image } from "antd";
import { Article } from "@/types/article";
import styles from "./Card.module.css";
import { useAppDispatch } from "@/hooks/hooks";
import { setCurrentArticle } from "@/features/news/newsSlice";
import { toggleModalVisibility } from "@/features/modal/modalSlice";
import { useCallback } from "react";
const { Title, Paragraph } = Typography;

type Props = {
  article: Article;
  index: number;
};

const CardContainer = ({ article, index }: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    dispatch(setCurrentArticle(article));
    dispatch(toggleModalVisibility());
  }, [dispatch, article]);

  return (
    <List.Item
      onClick={handleClick}
      className={styles.card_wrapper}
      key={index}
    >
      <Card
        hoverable
        cover={
          <Image
            className={styles.card_image}
            height={225}
            alt="news-avatar"
            preview={false}
            src={article.urlToImage || "/news-placeholder.png"}
          ></Image>
        }
        className={styles.card}
      >
        <Title className={styles.card_title} level={5}>
          {article.title}
        </Title>
        {article.description && (
          <Paragraph className={styles.card_details_description}>
            {`${article.description?.slice(0, 110)}... read more`}
          </Paragraph>
        )}

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
