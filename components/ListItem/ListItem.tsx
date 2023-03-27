import { Article } from "@/types/article";
import { List } from "antd";
import styles from "./ListItem.module.css";

type IProps = {
  article: Article;
  index: number;
};

const ListItem = ({ article, index }: IProps) => {
  return (
    <List.Item className={styles.list_item} key={index}>
      <List.Item.Meta
        className={styles.list_item_meta}
        title={article.title}
        description={article.author}
      />
      <span>{new Date(article.publishedAt).toLocaleDateString("pl-PL")}</span>
    </List.Item>
  );
};

export default ListItem;
